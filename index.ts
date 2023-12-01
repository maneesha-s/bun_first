import figlet from "figlet";

const server = Bun.serve({
  port: 3000,
  fetch(res) {
    const body = figlet.textSync("Hai! Hello!!!!");

    return new Response(body);
    // return new Response("Hello World");
  },
});

console.log(`Listening to port ${server.port}`);
