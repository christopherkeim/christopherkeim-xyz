/**
 * Example: https://api.exchange.coinbase.com/products/BTC-USD/candles?start=2025-04-10T00:00:00&end=2025-04-11T00:00:00&granularity=3600
 */

const BTC_USD_SCALING_MEANS = [
  43742.119483098933415, 43743.9292393288997118, 43745.7354238835469005,
  43747.5440355292448658, 43749.3501041204071953, 43751.1548213668866083,
  43752.9530276338555268, 43754.7511460646419437, 43756.5472267456207192,
  43758.3418712065104046, 43760.1353619541114313, 43761.9268107574607711,
  43763.7191075746304705, 43765.5140922773352941, 43767.3092857142837602,
  43769.1018337034256547, 43770.8913311127616907, 43772.6764979027939262,
  43774.4654996299068443, 43776.2556679003173485, 43778.0478593634397839,
  43779.8375196151027922, 43781.6257937330301502, 43783.4181186775240349,
  695.33925540519283, 695.3154408315314186, 695.3094214507431161,
  695.3067814140257497, 695.3005327817053285, 695.2914205426530998,
  695.2817821598947603, 695.2592945774915734, 695.2391117624960089,
  695.2284095318879054, 695.2147817522360356, 695.2064058640386293,
  695.1956412528026021, 695.1871565641015422, 695.176834045887972,
  695.1499914574702643, 695.1143470048752988, 695.0777188684162411,
  695.0634831239300411, 695.0521315448972928, 695.0395804675640647,
  695.0320395827093307, 695.0226272194495323, 695.0106471729349096,
  43580.5865240562561667, 43977.0741584011775558, 43783.3448835430608597,
  43785.2093091537099099, 694.9902930904401046, 0.0000000000232226,
  0.0005447854813029, -0.0002525218985027, 99.7366506291635915,
  110.6301608684925242, 43762.8062982872725115, 465.7902787387860144,
  686.7830176068330275, 463.6439860190370723, 0.0000711049237032,
  0.0001415798604277, 0.000211403326911, 0.0007659688005043, 0.0016194024485088,
  50.8424427629329614,
];

const BTC_USD_SCALER_SCALES = [
  22736.6654363625675614, 22737.0271381858474342, 22737.383454474631435,
  22737.7446790606882132, 22738.1059903078385105, 22738.4648832921484427,
  22738.8196885225879669, 22739.1797335255541839, 22739.5406789532171388,
  22739.8983349697955418, 22740.2560745390255761, 22740.6086160519153054,
  22740.9585315869735496, 22741.3154921819004812, 22741.6696820174838649,
  22742.0218394076946424, 22742.379772587428306, 22742.7266896005639865,
  22743.0770138035622949, 22743.4316981452102482, 22743.7874238597032672,
  22744.1422665964273619, 22744.4948500726823113, 22744.8508421356673352,
  758.677500706372598, 758.6808056783007714, 758.6843197329653776,
  758.6861687164350769, 758.6903147411177315, 758.6958980904795453,
  758.7016685977841917, 758.7070177375036337, 758.7138456872826282,
  758.7191062166405118, 758.7258190208849555, 758.7312570012637707,
  758.7374720102665151, 758.7426356125628217, 758.7481166721444197,
  758.7501753468408197, 758.7431240355691671, 758.734474758255601,
  758.7403900347405852, 758.7454615997121437, 758.7515015478180658,
  758.7562199069758435, 758.7611326900398581, 758.7671362011417386,
  22652.7758483554389386, 22835.2251853617708548, 22744.8361847866253811,
  22745.2003685080380819, 758.7729788541774951, 0.0000000001344279,
  0.7070478434937011, 0.7071654590351376, 127.9745047570879564,
  165.6876185201824114, 22732.2628873416142596, 432.4468859911982008,
  471.7612233825061594, 350.7609033214193346, 0.0067613670718354,
  0.0095115475306373, 0.0115704722551444, 0.0216974656007511, 0.031776172252636,
  14.3694538900132898,
];

const ETH_USD_SCALER_MEANS = [
  2267.9558926677682393, 2267.9842676400226082, 2268.0124734259011348,
  2268.0407413618763712, 2268.068882531383224, 2268.0969627839294844,
  2268.1247202012477828, 2268.1522914149013559, 2268.1798542432243266,
  2268.2075490171901038, 2268.23507041211451, 2268.2626199225592245,
  2268.2901134485905459, 2268.3177477988506325, 2268.3454773472758461,
  2268.3730949268747281, 2268.400391397637577, 2268.4276301575951038,
  2268.455051915061631, 2268.482506967223344, 2268.5100579574318544,
  2268.5374614644733811, 2268.5648445014426215, 2268.5924176881153471,
  8129.1209025088892304, 8128.9540701487585466, 8128.8740625568298128,
  8128.8354671247379883, 8128.4013810795204336, 8128.1638146198647519,
  8127.7877863479134248, 8127.2456345998762117, 8127.0222987978158926,
  8126.7823488011345034, 8126.2995884476495121, 8126.0165456910535795,
  8125.7637909980221593, 8125.4958270133047336, 8125.3104934415769094,
  8124.7998785471718293, 8124.0297294088641138, 8123.7364201036325539,
  8123.4676786659665595, 8123.279459502865393, 8122.8258312581183418,
  8122.5917607766814399, 8122.4258027234354813, 8122.187547347662985,
  2255.2134956963518562, 2281.0051737489825427, 2268.5875460576617115,
  2268.6199704047153318, 8121.7868839688053413, 0.0000000000232122,
  0.0002337883840211, -0.0001536421611672, 6.3171761166054186,
  7.3060231336473711, 2268.2757550496953627, 30.6166336711576612,
  8018.4126855010663348, 5181.6476597931841752, 0.0000669560921672,
  0.0001339448066597, 0.000199357969386, 0.000717249497994, 0.0015279849038784,
  50.6620535996578596,
];

const ETH_USD_SCALER_SCALES = [
  970.5213646282245463, 970.4845430583469579, 970.4479263331425045,
  970.4112832278792666, 970.3749237661403413, 970.3386563221031338,
  970.3029094121892513, 970.2675214062077202, 970.2321324307373516,
  970.196584659126529, 970.1614316760633301, 970.1262645776603222,
  970.0910735085145689, 970.055810504577039, 970.0204439530808713,
  969.9852688186078922, 969.9505774662994781, 969.9158279910196825,
  969.8808540554521187, 969.8459382342534809, 969.8108908310691731,
  969.7761137798851223, 969.7413774887070304, 969.7064686076063253,
  9683.8721244861426385, 9683.92691819290485, 9683.9659145528621593,
  9683.9860253066508449, 9683.8848111723600596, 9683.9424880187070812,
  9683.9317959689633426, 9683.6927267690207373, 9683.7596001858510135,
  9683.8157090778913698, 9683.6824316959991847, 9683.7299353677317413,
  9683.787612574726154, 9683.8430680920937448, 9683.8898546468262793,
  9683.6661705640835862, 9682.8838140932657552, 9682.8885557463345322,
  9682.9267125263795606, 9682.9631969208530791, 9682.8440579307225562,
  9682.8864992727940262, 9682.9310322704041027, 9682.9490417484394129,
  963.9993564125128387, 974.8968264285424539, 969.7040172238213245,
  969.6713930848678729, 9682.9001206596549309, 0.0000000001344292,
  0.7070805832699579, 0.7071329227943598, 7.6048725741266869,
  11.1167399309216481, 969.2671038655478242, 27.7310533731097557,
  6652.9044570685337021, 4496.0537214420437522, 0.0086323403657259,
  0.0122231661273893, 0.014871644027681, 0.0278885907266148, 0.0406714301202696,
  14.5039993246914651,
];

export type RawData = {
  time: string;
  data: number[][];
};

export type PreprocessedData = {
  currentPrice: number;
  closingPricesForLast24Hours: number[];
  data: number[];
};

const coinToScalerMap = (coin: string) => {
  return coin === "BTC-USD"
    ? [BTC_USD_SCALING_MEANS, BTC_USD_SCALER_SCALES]
    : [ETH_USD_SCALER_MEANS, ETH_USD_SCALER_SCALES];
};

/**
 * This creates a format string compliant with requests to the Coinbase
 * Exchange API.
 *
 * Using this function after `floorToHour` guarantees 25 rows are returned.
 * @param {Date} date
 * @returns {String}
 */
function toFormatDateString(date: Date): String {
  return date.toISOString().slice(0, 19).replace(".", ":").replace("0Z", "");
}

function floorToHour(date: Date): Date {
  return new Date(date.setMinutes(0, 0, 0));
}

export function removeXHours(date: Date, hours: number) {
  return new Date(date.getTime() - hours * 60 * 60 * 1000);
}

/**
 * Requests to coinbase are sent using UTC time values and
 * ISO string formatting.
 * @param {String} productId The product ID - "BTC-USD" or "ETH-USD"
 * @param {Date} from The target `end` time to collect 24 hours of candles into the past from
 * @returns
 */
export async function getPast24HoursCoinbaseCandles(
  productId: string,
  from: Date,
): Promise<RawData> {
  const COINBASE_API_URL = `https://api.exchange.coinbase.com/products/${productId}/candles`;
  const PAST_24_HOURS_QUERY = "granularity=3600";

  const endTarget = floorToHour(from);
  const start = removeXHours(endTarget, 24);

  const formattedEnd = toFormatDateString(endTarget);
  const formattedStart = toFormatDateString(start);
  const query = `?start=${formattedStart}&end=${formattedEnd}&${PAST_24_HOURS_QUERY}`;

  const response = await fetch(`${COINBASE_API_URL}${query}`, {
    method: "GET",
  });

  const rawData: number[][] = await response.json();
  return {
    time: endTarget.toISOString(),
    data: rawData,
  };
}

/**
 *
 * @param {number[][]} rawData
 * @returns {number[]} Extracted prices in descending order (24, 23, 22, ... 1)
 */
function generateClosingPricesForLast24Hours(rawData: number[][]): number[] {
  const CLOSING_PRICE = 4;
  return rawData
    .slice(1)
    .map((row) => row[CLOSING_PRICE])
    .reverse();
}

/**
 *
 * @param {number[][]} rawData
 * @returns {number[]} Extracted volumes in descending order (24, 23, 22, ... 1)
 */
function generateVolumesForLast24Hours(rawData: number[][]): number[] {
  const VOLUME = 5;
  return rawData
    .slice(1)
    .map((row) => row[VOLUME])
    .reverse();
}

/**
 *
 * @param {number[]} predictionRow Target prediction row
 * @returns {number[]} Trigonometric time features `sin_hour`, `sin_day`, and `cos_day`
 */
function generateTrigTimeFeatures(predictionRow: number[]): number[] {
  const TIME_INDEX = 0;
  const NUMBER_OF_SECONDS_IN_HOUR: number = 60 * 60;
  const NUMBER_OF_SECONDS_IN_DAY: number = 60 * 60 * 24;

  // `sin_hour`
  const sinHour = (row: number[]) =>
    Math.sin(row[TIME_INDEX] * ((2 * Math.PI) / NUMBER_OF_SECONDS_IN_HOUR));
  // `sin_day`
  const sinDay = (row: number[]) =>
    Math.sin(row[TIME_INDEX] * ((2 * Math.PI) / NUMBER_OF_SECONDS_IN_DAY));
  // `cos_day`
  const cosDay = (row: number[]) =>
    Math.cos(row[TIME_INDEX] * ((2 * Math.PI) / NUMBER_OF_SECONDS_IN_DAY));

  return [sinHour(predictionRow), sinDay(predictionRow), cosDay(predictionRow)];
}

/**
 *
 * @param {number[]} predictionRow Target prediction row
 * @returns {number[]} Polynommial features `upper_shadow` and `lower_shadow`
 */
function generatePolynomialFeatures(predictionRow: number[]): number[] {
  //const RAW_DATA_COLUMNS = ["time", "low", "high", "open", "close", "volume"];
  const LOW_INDEX = 1;
  const HIGH_INDEX = 2;
  const OPEN_INDEX = 3;
  const CLOSE_INDEX = 4;

  const upperShadow =
    predictionRow[HIGH_INDEX] -
    Math.max(predictionRow[CLOSE_INDEX], predictionRow[OPEN_INDEX]);

  const lowerShadow =
    Math.min(predictionRow[CLOSE_INDEX], predictionRow[OPEN_INDEX]) -
    predictionRow[LOW_INDEX];

  return [upperShadow, lowerShadow];
}

/**
 * Generates `pr_24hr_mavg` and `pr_24hr_mstd` for past 24 hour lag features of price and volume.
 * @param {number[]} valuesForLast24Hours lag features consisting of price or volume points for the last 24 hours
 * @returns {number[]} `pr_24hr_mavg` and `pr_24hr_mstd` for price or `volume_24hr_mavg` and `volume_24hr_mstd` for volume
 */
function generatePast24HourRollingStatistics(
  valuesForLast24Hours: number[],
): number[] {
  const sum_ = (accumulator: number, current: number) => accumulator + current;
  const past24HourMovingAverage =
    valuesForLast24Hours.reduce(sum_, 0) / valuesForLast24Hours.length;

  const sumVariance = (accumulator: number, current: number) =>
    accumulator + Math.pow(current - past24HourMovingAverage, 2);
  const variance =
    valuesForLast24Hours.reduce(sumVariance, 0) /
    (valuesForLast24Hours.length - 1);

  const past24HourMovingStandardDeviation = Math.sqrt(variance);

  return [past24HourMovingAverage, past24HourMovingStandardDeviation];
}

/**
 * The formula for price percentage return is (Current Value − Initial Value) / Initial Value.
 *
 * This was calculated during training and here as:
 * (X["price_1_hour_ago"] - X[f"price_{hours}_hour_ago"]) / X[f"price_{hours}_hour_ago"].
 * @param closingPricesForLast24Hours Lag features consisting of price points for the last 24 hours [24, 23, ... 1]
 * @param hours The set of hours to calculate percentage returns for
 * @returns A price percentage return `price_{hours}_hour_ago`
 */
function generatePricePercentageReturns(
  closingPricesForLast24Hours: number[],
  hours: number[],
): number[] {
  if (
    hours.some((hour) => hour < 0 || hour > closingPricesForLast24Hours.length)
  ) {
    console.error(
      "`generatePricePercentageReturn`: `hours` must be a non empty array " +
        "holding numbers between 1 and 24",
    );

    return [];
  }

  // An indexing array [0, 1, 2, 3, 4, ... 24] of length 25.
  const offsetsForPricePercentageCalculations = [
    0,
    ...[...closingPricesForLast24Hours].reverse(),
  ];

  const priceOneHourAgo =
    closingPricesForLast24Hours[closingPricesForLast24Hours.length - 1];

  const percentageReturn = (pricePointXHoursAgo: number) =>
    (priceOneHourAgo - pricePointXHoursAgo) / pricePointXHoursAgo;

  return hours.map((hour) =>
    percentageReturn(offsetsForPricePercentageCalculations[hour]),
  );
}

function generateRSI(
  closingPricesForLast24Hours: number[],
  window: number = 14,
): number {
  function isGain(current: number, previous: number): Boolean {
    return current >= previous;
  }

  function calculateAbsoluteDifference(
    current: number,
    previous: number,
  ): number {
    return Math.abs(current - previous);
  }

  const sum_ = (accumulator: number, current: number) => accumulator + current;

  const gains = [];
  const losses = [];

  // Partition the closing prices into two disjoint sets
  for (let i = 0; i < closingPricesForLast24Hours.length - 1; i++) {
    const current = closingPricesForLast24Hours[i];
    const previous = closingPricesForLast24Hours[i + 1];
    const absoluteDifference = calculateAbsoluteDifference(current, previous);
    if (isGain(current, previous)) {
      gains.push(absoluteDifference);
    } else {
      losses.push(absoluteDifference);
    }
  }

  const alpha = 1 / window;

  function exponentialMovingAverage(
    closingPricesSubset: number[],
    window: number,
    alpha: number,
  ): number {
    let currentEma =
      closingPricesSubset.slice(0, window).reduce(sum_, 0) /
      closingPricesSubset.length;

    const calculatedEmas = [currentEma];

    closingPricesSubset.slice(window).map((closingPrice: number) => {
      currentEma = alpha * closingPrice + (1 - alpha) * currentEma;
      calculatedEmas.push(currentEma);
    });

    return calculatedEmas.reduce(sum_, 0) / calculatedEmas.length;
  }

  const gainsEMA = exponentialMovingAverage(gains, 14, alpha);
  const lossesEMA = exponentialMovingAverage(losses, 14, alpha);

  const relativeStrength = gainsEMA / lossesEMA;

  return 100 - 100 / (1 + relativeStrength);
}

function scaleFeatureEngineeredRow(
  featureEngineeredRow: number[],
  coin: string,
): number[] {
  const scaled = [];

  const [coinScalerMeans, coinScalerScales] = coinToScalerMap(coin);

  for (let i = 0; i < featureEngineeredRow.length; i++) {
    scaled.push(
      (featureEngineeredRow[i] - coinScalerMeans[i]) / coinScalerScales[i],
    );
  }

  return scaled;
}

/**
 * This algorithm maps the first row defined by `end` consisting of 6
 * columms `["time", "low", "high", "open", "close", "volume"]` to a
 * 68 column row for model inference.
 *
 * The "time" column is removed from the row because it is a monotonically
 * increasing value that introduces noise.
 *
 * ----- Before raw data -----
 *
 * 1. Generate price lag features consisting of price points for the last
 *    24 hours
 * 2. Generate volume lag features conisting of volume points for the last
 *    24 hours
 *
 * ----- Raw data (minus "time") -----
 *
 * ----- Append after raw data -----
 *
 * 3. Generate "sin_hour", "sin_day", and "cos_day" features
 * 4. Generate polynomial features "upper_shadow" and "lower_shadow"
 * 5. Generate price rolling statistics "pr_24hr_mavg" and "pr_24hr_mstd"
 * 6. Generate volume rolling statistics "volume_24hr_mavg" and "volume_24hr_mstd"
 * 7. Generate price percentage return for "percentage_return_2_hour",
 *    "percentage_return_3_hour", "percentage_return_4_hour",
 *    "percentage_return_12_hour", and "percentage_return_24_hour"
 * 8. Calculate the RSI over the last 24 hours of prices
 *
 *
 * @param {number[][]} rawData
 * @returns {number[]} Full row with 68 columns for model inference
 */
export function runFeatureEngineeringPipeline(
  rawData: number[][],
  coin: string,
): PreprocessedData {
  const TARGET_PREDICTION_ROW = 0;
  const CLOSE_INDEX = 4;

  const currentPrice = rawData[TARGET_PREDICTION_ROW][CLOSE_INDEX];

  const closingPricesForLast24Hours =
    generateClosingPricesForLast24Hours(rawData);

  const volumesForLast24Hours = generateVolumesForLast24Hours(rawData);

  const trigTimeFeatures = generateTrigTimeFeatures(
    rawData[TARGET_PREDICTION_ROW],
  );

  const polynomialFeatures = generatePolynomialFeatures(
    rawData[TARGET_PREDICTION_ROW],
  );

  const price24HourRollingStatistics = generatePast24HourRollingStatistics(
    closingPricesForLast24Hours,
  );

  const volume24HourRollingStatistics = generatePast24HourRollingStatistics(
    volumesForLast24Hours,
  );

  const pricePercentageReturns = generatePricePercentageReturns(
    closingPricesForLast24Hours,
    [2, 3, 4, 12, 24],
  );

  const ema = [generateRSI(closingPricesForLast24Hours, 14)];

  const row = [
    ...closingPricesForLast24Hours,
    ...volumesForLast24Hours,
    ...rawData[TARGET_PREDICTION_ROW].slice(1),
    ...trigTimeFeatures,
    ...polynomialFeatures,
    ...price24HourRollingStatistics,
    ...volume24HourRollingStatistics,
    ...pricePercentageReturns,
    ...ema,
  ];

  return {
    currentPrice: currentPrice,
    closingPricesForLast24Hours: closingPricesForLast24Hours,
    data: scaleFeatureEngineeredRow(row, coin),
  };
}

// (async () => {
//   const rawData = await getPast24HoursCoinbaseCandles("BTC-USD", new Date());
//   console.log("Raw data:");
//   console.log(rawData);
//   console.log(rawData.length);
//   console.log();

//   const rowForPrediction = runFeatureEngineeringPipeline(rawData);
//   console.log("Feature engineering:");
//   console.log(rowForPrediction);
//   console.log(rowForPrediction.length);
//   console.log();
// })();
