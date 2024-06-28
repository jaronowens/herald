export function onRequest(context) {
    return new Response(JSON.stringify({greeting: "Hello, world!"}));
  }