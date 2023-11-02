"use client";

import { Dispatch, SetStateAction, useState } from "react";

type PredictionFormProps = {
  setPrediction: Dispatch<SetStateAction<Prediction | null>>;
};

// Example prediction response:
// {
//   "prediction": {
//     "model": "cnn",
//     "coin": "BTC-USD",
//     "current_price": "34433.76",
//     "prediction": "35680.61",
//     "difference": "+1246.85",
//     "time": "1698894000000",
//     "request_timestamp": "1698894259695"
//   }
// }

export type Prediction = {
  model: string;
  coin: string;
  current_price: string;
  prediction: string;
  time: Date;
  request_timestamp: string;
};

export function PredictionForm({ setPrediction }: PredictionFormProps) {
  const [coin, setCoin] = useState<string>("BTC-USD");
  const [time, setTime] = useState<string>("now");
  const [model, setModel] = useState<string>("cnn");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      console.log(
        "URI: ",
        process.env.NEXT_PUBLIC_CRYPTO_REALTIME_INFERENCE_API_URI
      );
      // Fire off fetch to predict endpoint
      const response = await fetch("/api/crypto/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify({
          coin: coin,
          time: time,
          model: model,
        }),
      });

      if (!response.ok)
        throw new Error(
          "An error occurred while performing api fetch: " + response.statusText
        );

      const json: {
        prediction: {
          model: string;
          coin: string;
          current_price: string;
          prediction: string;
          time: string;
          request_timestamp: string;
        };
      } = await response.json();

      if (!json.prediction) {
        throw new Error("An error occurred while parsing response: " + json);
      }

      console.log("Prediction: ", json.prediction);

      const { prediction } = json;

      // If all goes well, set the prediction state, which will trigger a re-render in the prediction result component
      setPrediction({
        model: prediction.model,
        coin: prediction.coin,
        current_price: prediction.current_price,
        prediction: prediction.prediction,
        time: new Date(parseInt(prediction.time)),
        request_timestamp: prediction.request_timestamp,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form
      className="mt-8 flex w-full flex-col gap-1 md:flex-row md:gap-4"
      data-aos="fade-down"
      data-aos-delay="300"
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
          <option value="lasso">LASSO</option>
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
