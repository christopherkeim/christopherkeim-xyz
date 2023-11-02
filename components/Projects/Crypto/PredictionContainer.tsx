"use client";

import { useState } from "react";
import {
  PredictionForm,
  Prediction,
} from "@/components/Projects/Crypto/PredictionForm";
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

  return (
    <>
      <PredictionForm setPrediction={setPrediction} />
      <PredictionResult prediction={prediction} />
    </>
  );
}
