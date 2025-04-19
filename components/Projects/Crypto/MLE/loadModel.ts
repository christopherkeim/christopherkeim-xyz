import * as tf from "@tensorflow/tfjs";

export const BTC_CNN_PATH = "/BTC-USD_cnn_web_model/model.json";
export const ETH_CNN_PATH = "/ETH-USD_cnn_web_model/model.json";

export function loadModel(modelPath: string) {
  return tf.loadGraphModel(modelPath);
}
