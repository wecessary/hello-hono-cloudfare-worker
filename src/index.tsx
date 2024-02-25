import { Hono } from "hono";
import HomePage from "./_components/homePage";
import { serveStatic } from "hono/cloudflare-workers";
//@ts-ignore
import manifest from "__STATIC_CONTENT_MANIFEST";

const app = new Hono();

app.get("/static/*", serveStatic({ root: "./", manifest }));

app.get("/", (c) => {
  return c.html(<HomePage />);
});

app.get("/:id", (c) => {
  const id = c.req.param("id");
  return c.text(`hello ${id}!`);
});

export default app;
