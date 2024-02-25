import { html } from "hono/html";

export default function HomePage() {
  return html`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body class="bg-red-500 text-2xl">
        hello world
      </body>
    </html>
  `;
}
