export default function PortConfigurationPage() {
  return (
    <div className="w-full flex-1 bg-zinc-50 font-sans text-zinc-900 dark:bg-black dark:text-zinc-100">
      <main className="mx-auto max-w-4xl px-6 py-16 sm:px-10">
        {/* Page Title & Header */}
        <div className="space-y-3 border-b border-zinc-200 pb-8 dark:border-zinc-800">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
            <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
            Configuration
          </div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Defining Server Ports
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Learn how network ports work in Node.js, how to load port
            configurations using environment variables, and how to handle
            fallback defaults.
          </p>
        </div>

        {/* Content Section */}
        <div className="mt-10 space-y-12">
          {/* Section 1: Code Pattern */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              Standard Port Declaration Pattern
            </h2>
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              In your{" "}
              <code className="rounded bg-zinc-200/70 px-1.5 py-0.5 font-mono text-xs dark:bg-zinc-800">
                server.ts
              </code>{" "}
              file, the port is defined using the logical OR operator (
              <code className="rounded bg-zinc-200/70 px-1.5 py-0.5 font-mono text-xs dark:bg-zinc-800">
                ||
              </code>
              ):
            </p>
            <pre className="overflow-x-auto rounded-lg border border-zinc-200 bg-zinc-900 p-4 font-mono text-sm text-emerald-400 dark:border-zinc-800">
              {`import dotenv from "dotenv";
dotenv.config();

// Reads PORT from .env, or defaults to 8000
const PORT = process.env.PORT || 8000;`}
            </pre>

            {/* Why Card */}
            <div className="rounded-lg border border-zinc-200 bg-white p-4 text-xs dark:border-zinc-800 dark:bg-zinc-900/50">
              <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                💡 Why use a fallback port?
              </span>
              <p className="mt-1 text-zinc-600 dark:text-zinc-400">
                If the{" "}
                <code className="font-mono text-zinc-800 dark:text-zinc-200">
                  .env
                </code>{" "}
                file is missing or doesn't define a{" "}
                <code className="font-mono text-zinc-800 dark:text-zinc-200">
                  PORT
                </code>{" "}
                key, the server uses the default port (e.g.,{" "}
                <code className="font-mono text-zinc-800 dark:text-zinc-200">
                  8000
                </code>
                ) rather than crashing or throwing a runtime error.
              </p>
            </div>
          </section>

          {/* Section 2: Environment File Setup */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              Configuring the `.env` File
            </h2>
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Create a{" "}
              <code className="rounded bg-zinc-200/70 px-1.5 py-0.5 font-mono text-xs dark:bg-zinc-800">
                .env
              </code>{" "}
              file in the root directory of your project to specify the desired
              port value:
            </p>
            <pre className="overflow-x-auto rounded-lg border border-zinc-200 bg-zinc-900 p-4 font-mono text-xs text-zinc-100 dark:border-zinc-800">
              {`# Server Configuration
PORT=5000`}
            </pre>

            <div className="rounded-lg border border-zinc-200 bg-white p-4 text-xs dark:border-zinc-800 dark:bg-zinc-900/50 space-y-2">
              <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                📦 Important details to remember:
              </span>
              <ul className="list-disc pl-4 space-y-1.5 text-zinc-600 dark:text-zinc-400">
                <li>
                  <strong className="text-zinc-800 dark:text-zinc-200">
                    dotenv.config():
                  </strong>{" "}
                  Must be called before accessing{" "}
                  <code className="font-mono text-zinc-800 dark:text-zinc-200">
                    process.env.PORT
                  </code>
                  , otherwise the variable will return{" "}
                  <code className="font-mono text-zinc-800 dark:text-zinc-200">
                    undefined
                  </code>
                  .
                </li>
                <li>
                  <strong className="text-zinc-800 dark:text-zinc-200">
                    String Conversion:
                  </strong>{" "}
                  Values read from{" "}
                  <code className="font-mono text-zinc-800 dark:text-zinc-200">
                    process.env
                  </code>{" "}
                  are parsed as strings by default, but Express's{" "}
                  <code className="font-mono text-zinc-800 dark:text-zinc-200">
                    app.listen()
                  </code>{" "}
                  automatically coerces string numbers into valid network ports.
                </li>
                <li>
                  <strong className="text-zinc-800 dark:text-zinc-200">
                    Security Note:
                  </strong>{" "}
                  Always add{" "}
                  <code className="font-mono text-zinc-800 dark:text-zinc-200">
                    .env
                  </code>{" "}
                  to your{" "}
                  <code className="font-mono text-zinc-800 dark:text-zinc-200">
                    .gitignore
                  </code>{" "}
                  file so environment secrets are not committed to source
                  control.
                </li>
              </ul>
            </div>
          </section>

          {/* Section 3: How Cloud Providers Use process.env.PORT */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              Why Dynamic Port Binding Matters for Deployment
            </h2>
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              When deploying Node.js apps to cloud platforms (such as Render,
              Railway, AWS, or Heroku), the hosting provider dynamically assigns
              a port to your container by injecting its own{" "}
              <code className="rounded bg-zinc-200/70 px-1.5 py-0.5 font-mono text-xs dark:bg-zinc-800">
                PORT
              </code>{" "}
              environment variable at runtime.
            </p>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900/50">
                <h3 className="font-semibold text-sm text-rose-500">
                  ❌ Hardcoded Port (Bad)
                </h3>
                <pre className="mt-2 overflow-x-auto rounded border border-zinc-200 bg-zinc-900 p-2 font-mono text-xs text-rose-400 dark:border-zinc-800">
                  {`app.listen(8000, () => ...)`}
                </pre>
                <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-400">
                  Will fail on hosting providers because the platform cannot
                  bind its assigned port to your application.
                </p>
              </div>

              <div className="rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900/50">
                <h3 className="font-semibold text-sm text-emerald-500">
                  ✓ Dynamic Port (Recommended)
                </h3>
                <pre className="mt-2 overflow-x-auto rounded border border-zinc-200 bg-zinc-900 p-2 font-mono text-xs text-emerald-400 dark:border-zinc-800">
                  {`const PORT = process.env.PORT || 8000;
app.listen(PORT, () => ...)`}
                </pre>
                <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-400">
                  Adapts to the environment dynamically in both local
                  development and live cloud production environments.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: Common Issues */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              Troubleshooting Port Conflicts
            </h2>
            <div className="rounded-lg border border-zinc-200 bg-white p-4 text-xs dark:border-zinc-800 dark:bg-zinc-900/50 space-y-2">
              <span className="font-semibold text-amber-500">
                ⚠️ Error: EADDRINUSE :::8000
              </span>
              <p className="text-zinc-600 dark:text-zinc-400">
                This error means another process or background service is
                already using port{" "}
                <code className="font-mono text-zinc-800 dark:text-zinc-200">
                  8000
                </code>
                . To resolve this:
              </p>
              <ul className="list-disc pl-4 space-y-1 text-zinc-600 dark:text-zinc-400">
                <li>
                  Change the{" "}
                  <code className="font-mono text-zinc-800 dark:text-zinc-200">
                    PORT
                  </code>{" "}
                  value in your{" "}
                  <code className="font-mono text-zinc-800 dark:text-zinc-200">
                    .env
                  </code>{" "}
                  file (e.g., set{" "}
                  <code className="font-mono text-zinc-800 dark:text-zinc-200">
                    PORT=5000
                  </code>{" "}
                  or{" "}
                  <code className="font-mono text-zinc-800 dark:text-zinc-200">
                    PORT=8080
                  </code>
                  ).
                </li>
                <li>
                  Stop any stale Node processes running in the background.
                </li>
              </ul>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
