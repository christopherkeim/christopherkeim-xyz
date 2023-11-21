"use client";
import { Prediction } from "./PredictionForm";
import { PredictionRow } from "./PredictionRow";
import { PredictionTable } from "./PredictionTable";
import NonSSRWrapper from "@/components/NonSSRWrapper";
import { useEffect, useRef } from "react";
import {
  Chart,
  LineController,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Colors,
  Legend,
  Tooltip,
  Title,
  Filler,
} from "chart.js";

// Register our Chart
Chart.register(
  LineController,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Colors,
  Legend,
  Tooltip,
  Title,
  Filler,
);

type PredictionResultProps = {
  prediction: Prediction | null;
};

export function PredictionResult({ prediction }: PredictionResultProps) {
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const context = canvas.current;
    if (!context) return;

    if (prediction) {
      const options = {
        type: "line",
        data: {
          labels: createHours(prediction.time.getHours()),
          datasets: [
            {
              label: "Charts Title",
              data: [...prediction.prices_24_hours, prediction.prediction],
              borderWidth: 1,
            },
          ],
        },
      };

      const newChart = constructChart(context, options);
      return () => newChart.destroy();
    }
  }, [prediction]);

  function constructChart(context: HTMLCanvasElement, options: any): Chart {
    return new Chart(context, options);
  }

  function createHours(hour: number) {
    const hours: number[] = [];

    for (let i = 0; i < 25; i++) {
      hours.push((hour + i) % 24);
    }
    return hours;
  }
  return (
    <div className="mt-16 flex h-fit w-full flex-col justify-center gap-5 rounded border border-gray-300 px-5 py-4 dark:border dark:border-gray-800 dark:bg-zinc-800 md:mt-0">
      {/* TODO: add animation to load content */}
      <p className="text-center text-2xl">
        <b>
          {prediction?.coin.startsWith("E") ? "Ethereum" : "Bitcoin"} Prediction
        </b>
      </p>
      <NonSSRWrapper>
        <PredictionTable>
          <PredictionRow
            title="Prediction:"
            value={prediction?.prediction ? `$${prediction.prediction}` : "$0"}
            valueColor={
              prediction
                ? prediction.difference.startsWith("-")
                  ? "red"
                  : "green"
                : "inherit"
            }
          />
          <PredictionRow
            title="Time:"
            value={
              prediction?.time
                ? prediction.time.toLocaleTimeString()
                : "Choose a time"
            }
          />
          <PredictionRow
            title="Current Price:"
            value={
              prediction?.current_price ? `$${prediction.current_price}` : "$0"
            }
          />
          <PredictionRow
            title="Difference:"
            value={
              prediction?.difference
                ? `${
                    prediction.difference.slice(0, 1) +
                    "$" +
                    prediction.difference.slice(1)
                  }`
                : "$0"
            }
            valueColor={
              prediction
                ? prediction.difference.startsWith("-")
                  ? "red"
                  : "green"
                : "inherit"
            }
          />
          <PredictionRow
            title="Model:"
            value={prediction?.model?.toUpperCase() ?? "Choose a model"}
          />
        </PredictionTable>
        {prediction && <canvas ref={canvas}></canvas>}
      </NonSSRWrapper>
    </div>
  );
}
