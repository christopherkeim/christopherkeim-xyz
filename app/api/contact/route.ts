export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (!body) {
      return Response.json({ error: "Invalid request" }, { status: 400 });
    }

    const { name, email, message } = body;

    if (!name) {
      return Response.json({ error: "Name is required" }, { status: 400 });
    }

    if (!email) {
      return Response.json({ error: "Email is required" }, { status: 400 });
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      return Response.json({ error: "Email is invalid" }, { status: 400 });
    }

    if (!message) {
      return Response.json({ error: "Message is required" }, { status: 400 });
    }

    if (message.length < 60) {
      return Response.json(
        { error: "Message should be at least 60 characters" },
        { status: 400 },
      );
    }

    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

    const data = { serverMessage: "Message received!" };
    return Response.json(data);
  } catch (error) {
    return Response.json({ error: error }, { status: 500 });
  }
}
