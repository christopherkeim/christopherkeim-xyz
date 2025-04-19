"use client";

import { useEffect, useState } from "react";
import * as tf from "@tensorflow/tfjs";
import {
  PredictionForm,
  Prediction,
} from "@/components/Projects/Crypto/PredictionForm";
import { BTC_CNN_PATH, ETH_CNN_PATH, loadModel } from "./MLE/loadModel";
import { PredictionResult } from "@/components/Projects/Crypto/PredictionResult";

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

export function PredictionContainer() {
  const [prediction, setPrediction] = useState<Prediction | null>(null);
  const [btcCnnModel, setBtcCnnModel] = useState<tf.GraphModel | null>(null);
  const [ethCnnModel, setEthCnnModel] = useState<tf.GraphModel | null>(null);

  useEffect(() => {
    if (btcCnnModel === null) {
      wrapLoadBtcCnnModel();
    }
  }, [btcCnnModel]);

  useEffect(() => {
    if (ethCnnModel === null) {
      wrapLoadEthCnnModel();
    }
  }, [ethCnnModel]);

  async function wrapLoadBtcCnnModel() {
    const model = await loadModel(BTC_CNN_PATH);
    setBtcCnnModel(model);
  }
  async function wrapLoadEthCnnModel() {
    const model = await loadModel(ETH_CNN_PATH);
    setEthCnnModel(model);
  }

  return (
    <>
      <PredictionForm
        btcCnnModel={btcCnnModel}
        ethCnnModel={ethCnnModel}
        setPrediction={setPrediction}
      />
      <PredictionResult prediction={prediction} />
    </>
  );
}
