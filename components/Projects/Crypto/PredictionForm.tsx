"use client";

import { Dispatch, SetStateAction, useState } from "react";
import * as tf from "@tensorflow/tfjs";
import {
  removeXHours,
  getPast24HoursCoinbaseCandles,
  runFeatureEngineeringPipeline,
} from "./MLE/preprocessing";

type PredictionFormProps = {
  btcCnnModel: tf.GraphModel<string | tf.io.IOHandler> | null;
  ethCnnModel: tf.GraphModel<string | tf.io.IOHandler> | null;
  setPrediction: Dispatch<SetStateAction<Prediction | null>>;
};

export type Prediction = {
  model: string;
  coin: string;
  current_price: string;
  prediction: string;
  time: Date;
  request_timestamp: string;
  difference: string;
  prices_24_hours: number[];
};

export function PredictionForm({
  btcCnnModel,
  ethCnnModel,
  setPrediction,
}: PredictionFormProps) {
  const [coin, setCoin] = useState<string>("BTC-USD");
  const [time, setTime] = useState<string>("now");
  const [model, setModel] = useState<string>("cnn");

  const coinToModelMapping = (coin: string) => {
    return coin === "BTC-USD" ? btcCnnModel : ethCnnModel;
  };

  async function predict(coin: string, time: string, modelName: string) {
    const currentTime = new Date();

    const predictionTimeStamp =
      time === "now" ? currentTime : removeXHours(currentTime, parseInt(time));

    const model = coinToModelMapping(coin);

    if (model === null) {
      return;
    }

    const rawData = await getPast24HoursCoinbaseCandles(
      coin,
      predictionTimeStamp,
    );

    const preprocessedData = runFeatureEngineeringPipeline(rawData.data, coin);

    const t = tf.tensor(preprocessedData.data).reshape([-1, 68, 1]);

    const prediction = model.predict(t) as tf.Tensor<tf.Rank>;

    const predictedPrice = prediction.dataSync()[0];

    const difference = predictedPrice - preprocessedData.currentPrice;

    const sign = difference > 0 ? "+" : "";

    setPrediction({
      model: modelName,
      coin: coin,
      current_price: preprocessedData.currentPrice.toString(),
      prediction: predictedPrice.toString(),
      time: predictionTimeStamp,
      request_timestamp: predictionTimeStamp.toISOString(),
      difference: sign + difference.toString(),
      prices_24_hours: preprocessedData.closingPricesForLast24Hours,
    });
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      // Fire off fetch to predict endpoint
      predict(coin, time, model);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form
      className="mt-8 flex w-full flex-col gap-1 md:flex-row md:gap-4"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col">
        <label
          htmlFor="coin"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >
          Coin
        </label>
        <select
          className="form-input mb-2 mr-10 w-full py-2 md:mr-4"
          id="coin"
          aria-label="Select Coin"
          onChange={(event) => setCoin(event.target.value)}
        >
          <option value="BTC-USD">BTC-USD</option>
          <option value="ETH-USD">ETH-USD</option>
        </select>
      </div>

      <div className="flex grow flex-col">
        <label
          htmlFor="time"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >
          Time From
        </label>
        <select
          className="form-input mb-2 mr-4 w-full py-2"
          id="time"
          aria-label="Coin"
          onChange={(event) => setTime(event.target.value)}
        >
          <option value="now">Current Time</option>
          <option value="1">Current Time - 1 Hour</option>
          <option value="2">Current Time - 2 Hour</option>
          <option value="3">Current Time - 3 Hour</option>
          <option value="4">Current Time - 4 Hour</option>
          <option value="5">Current Time - 5 Hour</option>
          <option value="6">Current Time - 6 Hour</option>
          <option value="7">Current Time - 7 Hour</option>
          <option value="8">Current Time - 8 Hour</option>
          <option value="9">Current Time - 9 Hour</option>
        </select>
      </div>

      <div className="flex grow flex-col">
        <label
          htmlFor="model"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >
          Model
        </label>
        <select
          className="form-input mb-2 mr-4 w-full py-2"
          id="model"
          aria-label="Select Model"
          onChange={(event) => setModel(event.target.value)}
        >
          <option value="cnn">CNN</option>
        </select>
      </div>

      <button
        type="submit"
        className="btn mb-2 mt-auto h-10 bg-blue-500 text-white hover:bg-blue-400"
      >
        Predict
      </button>
    </form>
  );
}
