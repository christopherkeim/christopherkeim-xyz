export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = body.name;
    const email = body.email;
    const message = body.message;

    if (!name) {
      return Response.json({ error: "Name is required" }, { status: 400 });
    }

    if (!email) {
      return Response.json({ error: "Email is required" }, { status: 400 });
    }

    if (!message) {
      return Response.json({ error: "Message is required" }, { status: 400 });
    }

    const data = { serverMessage: "Message received!" };
    return Response.json(data);
  } catch (error) {
    return Response.json({ error: error }, { status: 500 });
  }
}
