import React from "react";

export default function HowToMakeServerPage() {
  return (
    <div className="w-full flex-1 bg-zinc-50 font-sans text-zinc-900 dark:bg-black dark:text-zinc-100">
      <main className="mx-auto max-w-4xl px-6 py-12 sm:px-10">
        {/* Header */}
        <div className="space-y-3 border-b border-zinc-200 pb-8 dark:border-zinc-800">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
            Core Guides
          </div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Creating an Express Server
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Learn how to initialize and run a basic Express application written
            in TypeScript using environment variables.
          </p>
        </div>

        {/* Complete Code Preview */}
        <section className="mt-8 space-y-3">
          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
            Complete Code (`src/server.ts`)
          </h2>
          <pre className="overflow-x-auto rounded-lg border border-zinc-200 bg-zinc-900 p-4 font-mono text-sm text-emerald-400 dark:border-zinc-800">
            {`import express, { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.get("/", (req: Request, res: Response) => {
  res.send("Server is running!");
});

app.listen(PORT, () => {
  console.log(\`Server listening on http://localhost:\${PORT}\`);
});`}
          </pre>
        </section>

        {/* Step by Step Breakdown */}
        <div className="mt-12 space-y-10">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 border-b border-zinc-200 pb-3 dark:border-zinc-800">
            Step-by-Step Breakdown
          </h2>

          {/* Step 1 */}
          <section className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-white">
                1
              </span>
              <h3 className="text-lg font-semibold">
                Import Dependencies & Types
              </h3>
            </div>
            <p className="pl-10 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Import Express alongside the explicit TypeScript type interfaces{" "}
              <code className="rounded bg-zinc-200/70 px-1.5 py-0.5 font-mono text-xs dark:bg-zinc-800">
                Request
              </code>{" "}
              and{" "}
              <code className="rounded bg-zinc-200/70 px-1.5 py-0.5 font-mono text-xs dark:bg-zinc-800">
                Response
              </code>
              . Also import{" "}
              <code className="rounded bg-zinc-200/70 px-1.5 py-0.5 font-mono text-xs dark:bg-zinc-800">
                dotenv
              </code>{" "}
              to load environment variables.
            </p>
            <div className="pl-10">
              <pre className="overflow-x-auto rounded-lg border border-zinc-200 bg-zinc-900 p-3 font-mono text-xs text-zinc-100 dark:border-zinc-800">
                {`import express, { Request, Response } from "express";
import dotenv from "dotenv";`}
              </pre>
            </div>
          </section>

          {/* Step 2 */}
          <section className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-white">
                2
              </span>
              <h3 className="text-lg font-semibold">
                Load Environment Configuration
              </h3>
            </div>
            <p className="pl-10 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Call{" "}
              <code className="rounded bg-zinc-200/70 px-1.5 py-0.5 font-mono text-xs dark:bg-zinc-800">
                dotenv.config()
              </code>{" "}
              as early as possible in your application lifecycle. This loads
              values from your root{" "}
              <code className="rounded bg-zinc-200/70 px-1.5 py-0.5 font-mono text-xs dark:bg-zinc-800">
                .env
              </code>{" "}
              file into{" "}
              <code className="rounded bg-zinc-200/70 px-1.5 py-0.5 font-mono text-xs dark:bg-zinc-800">
                process.env
              </code>
              .
            </p>
            <div className="pl-10">
              <pre className="overflow-x-auto rounded-lg border border-zinc-200 bg-zinc-900 p-3 font-mono text-xs text-zinc-100 dark:border-zinc-800">
                {`dotenv.config();`}
              </pre>
            </div>
          </section>

          {/* Step 3 */}
          <section className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-white">
                3
              </span>
              <h3 className="text-lg font-semibold">
                Initialize App & Define Port
              </h3>
            </div>
            <p className="pl-10 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Create an instance of the Express application and set the port. It
              checks{" "}
              <code className="rounded bg-zinc-200/70 px-1.5 py-0.5 font-mono text-xs dark:bg-zinc-800">
                process.env.PORT
              </code>{" "}
              first and falls back to port{" "}
              <code className="rounded bg-zinc-200/70 px-1.5 py-0.5 font-mono text-xs dark:bg-zinc-800">
                8000
              </code>{" "}
              if it is not defined.
            </p>
            <div className="pl-10">
              <pre className="overflow-x-auto rounded-lg border border-zinc-200 bg-zinc-900 p-3 font-mono text-xs text-zinc-100 dark:border-zinc-800">
                {`const app = express();
const PORT = process.env.PORT || 8000;`}
              </pre>
            </div>
          </section>

          {/* Step 4 */}
          <section className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-white">
                4
              </span>
              <h3 className="text-lg font-semibold">Create a Test Route</h3>
            </div>
            <p className="pl-10 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Define a basic HTTP{" "}
              <code className="rounded bg-zinc-200/70 px-1.5 py-0.5 font-mono text-xs dark:bg-zinc-800">
                GET
              </code>{" "}
              endpoint at the root (
              <code className="rounded bg-zinc-200/70 px-1.5 py-0.5 font-mono text-xs dark:bg-zinc-800">
                /
              </code>
              ) path to verify that the server receives and processes requests.
            </p>
            <div className="pl-10">
              <pre className="overflow-x-auto rounded-lg border border-zinc-200 bg-zinc-900 p-3 font-mono text-xs text-zinc-100 dark:border-zinc-800">
                {`app.get("/", (req: Request, res: Response) => {
  res.send("Server is running!");
});`}
              </pre>
            </div>
          </section>

          {/* Step 5 */}
          <section className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-white">
                5
              </span>
              <h3 className="text-lg font-semibold">Start the Server</h3>
            </div>
            <p className="pl-10 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Call{" "}
              <code className="rounded bg-zinc-200/70 px-1.5 py-0.5 font-mono text-xs dark:bg-zinc-800">
                app.listen()
              </code>{" "}
              to bind the app to your designated port and log a confirmation URL
              to the terminal console.
            </p>
            <div className="pl-10">
              <pre className="overflow-x-auto rounded-lg border border-zinc-200 bg-zinc-900 p-3 font-mono text-xs text-zinc-100 dark:border-zinc-800">
                {`app.listen(PORT, () => {
  console.log(\`Server listening on http://localhost:\${PORT}\`);
});`}
              </pre>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
