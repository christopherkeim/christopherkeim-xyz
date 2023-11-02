export async function POST(request: Request) {
  try {
    const body = await request.json();
    const coin = body.coin;
    const time = body.time;
    const model = body.model;

    if (!coin) {
      return Response.json({ error: "Coin is required" }, { status: 400 });
    }

    if (!time) {
      return Response.json({ error: "Time is required" }, { status: 400 });
    }

    if (!model) {
      return Response.json({ error: "Model is required" }, { status: 400 });
    }

    console.log("From body: ", coin, time, model);

    const params = new URLSearchParams({
      coin: coin,
      time_from: time,
      model_name: model,
    });

    const res = await fetch(
      process.env.CRYPTO_REALTIME_INFERENCE_API_URI! + "?" + params.toString()
    );
    const data = await res.json();
    return Response.json(data);
  } catch (error) {
    return Response.json({ error: error }, { status: 500 });
  }
}
