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
              label: `${
                prediction?.coin.startsWith("E") ? "Ethereum" : "Bitcoin"
              } Prices`,
              data: [...prediction.prices_24_hours, prediction.prediction],
              pointBorderColor: (context: any) => {
                const index = context.dataIndex;
                if (index !== 24) {
                  return "rgba(0, 0, 0, 0.1)";
                }
                return `${
                  prediction.difference.startsWith("-") ? "red" : "green"
                }`;
              },
              pointBackgroundColor: (context: any) => {
                const index = context.dataIndex;
                if (index !== 24) {
                  return "rgba(54, 162, 235, 0.3)";
                }
                return `${
                  prediction.difference.startsWith("-")
                    ? "rgba(255, 99, 132, 0.3)"
                    : "rgba(75, 192, 192, 0.3)"
                }`;
              },
              segment: {
                borderColor: (context: any) => {
                  const p0Index = context.p0DataIndex;
                  const p1Index = context.p1DataIndex;
                  if (p0Index !== 23 && p1Index !== 24) {
                    return "rgb(54, 162, 235)";
                  }
                  return `${
                    prediction.difference.startsWith("-") ? "red" : "green"
                  }`;
                },
              },
              borderWidth: 1,
            },
          ],
        },

        options: {
          scales: {
            y: {
              title: {
                display: true,
                text: "Price ($USD)",
              },
            },
            x: {
              title: {
                display: true,
                text: "Time (Hours)",
              },
            },
          },
          plugins: {
            title: {
              display: true,
              text: `${
                prediction?.coin.startsWith("E") ? "Ethereum" : "Bitcoin"
              } Price vs. Time`,
            },
            legend: {
              display: false,
            },
            tooltip: {
              displayColors: false,

              titleFont: {
                size: 16,
              },
              bodyFont: {
                size: 14,
              },
              xPadding: 10,
              yPadding: 10,
              callbacks: {
                label: (tooltipItem: any) => {
                  console.log(tooltipItem);
                  return `Price: ${new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(tooltipItem.parsed.y)}`;
                },
                title: (tooltipItem: any) => {
                  const x = tooltipItem[0].label;
                  return `Hour: ${x}`;
                },
              },
            },
          },
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
    <div className="mt-16 flex h-full w-full flex-col justify-center gap-5 rounded border border-gray-300 px-5 py-4 dark:border dark:border-gray-800 dark:bg-zinc-800 md:mt-0">
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
            value={
              prediction?.prediction
                ? `${new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(Number(prediction.prediction))}`
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
              prediction?.current_price
                ? `${new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(Number(prediction.current_price))}`
                : "$0"
            }
          />
          <PredictionRow
            title="Difference:"
            value={
              prediction?.difference
                ? `${
                    prediction.difference.slice(0, 1) +
                    new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                    }).format(Number(prediction.difference.slice(1)))
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
