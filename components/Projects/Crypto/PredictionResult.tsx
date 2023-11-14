import { Prediction } from "./PredictionForm";
import { PredictionRow } from "./PredictionRow";
import { PredictionTable } from "./PredictionTable";

type PredictionResultProps = {
  prediction: Prediction | null;
};

export function PredictionResult({ prediction }: PredictionResultProps) {
  return (
    <div className="mt-16 flex h-fit w-full flex-col justify-center gap-5 rounded border border-gray-300 px-5 py-4 dark:border dark:border-gray-800 dark:bg-zinc-800 md:mt-0">
      {/* TODO: add animation to load content */}
      <p className="text-center text-2xl">
        <b>
          {prediction?.coin.startsWith("E") ? "Ethereum" : "Bitcoin"} Prediction
        </b>
      </p>
      <PredictionTable>
        <PredictionRow
          title="Prediction:"
          value={prediction?.prediction ? `$${prediction.prediction}` : "$0"}
          valueColor={
            prediction
              ? prediction.difference.startsWith("-")
                ? "red"
                : "green"
              : "white"
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
              : "white"
          }
        />
        <PredictionRow
          title="Model:"
          value={prediction?.model?.toUpperCase() ?? "Choose a model"}
        />
      </PredictionTable>
    </div>
  );
}
