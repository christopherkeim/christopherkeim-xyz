import { Prediction } from "./PredictionForm";
import { PredictionRow } from "./PredictionRow";
import { PredictionTable } from "./PredictionTable";

type PredictionResultProps = {
  prediction: Prediction | null;
};

export function PredictionResult({ prediction }: PredictionResultProps) {
  return (
    <div className="flex w-full flex-col justify-center gap-5 rounded bg-gray-50 px-5 py-2 shadow-md shadow-gray-500 dark:border dark:border-gray-800 dark:bg-zinc-900">
      {/* TODO: add animation to load content */}
      {/* <p className="whitespace-nowrap text-xl text-gray-600 dark:text-gray-400">
        {prediction &&
          `The ${prediction.coin} price prediction is $${
            prediction.prediction
          } at ${prediction.time.toLocaleTimeString()}. This prediction used the ${
            prediction.model
          } model.`}
        {!prediction && "Set prediction parameters to get started."}
      </p> */}
      <PredictionTable>
        <PredictionRow
          title="Prediction"
          value={prediction?.prediction ? `$${prediction.prediction}` : "$0"}
          valueColor={prediction?.difference.startsWith("-") ? "red" : "green"}
        />
        <PredictionRow
          title="Time"
          value={
            prediction?.time
              ? prediction.time.toLocaleTimeString()
              : "Run Prediction"
          }
        />
        <PredictionRow
          title="Current Price"
          value={
            prediction?.current_price ? `$${prediction.current_price}` : "$0"
          }
        />
        <PredictionRow
          title="Difference"
          value={prediction?.difference ?? "0"}
          valueColor={prediction?.difference.startsWith("-") ? "red" : "green"}
        />
        <PredictionRow
          title="Model"
          value={prediction?.model?.toUpperCase() ?? "Choose a model"}
        />
      </PredictionTable>
    </div>
  );
}
