"use client";

import { useState } from "react";
import {
  PredictionForm,
  Prediction,
} from "@/components/Projects/Crypto/PredictionForm";
import { PredictionResult } from "@/components/Projects/Crypto/PredictionResult";

export function PredictionContainer() {
  const [prediction, setPrediction] = useState<Prediction | null>(null);

  return (
    <>
      <PredictionForm setPrediction={setPrediction} />
      <PredictionResult prediction={prediction} />
    </>
  );
}
