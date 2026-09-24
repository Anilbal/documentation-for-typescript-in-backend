import Link from "next/link";

export default function InstallationPage() {
  return (
    <div className="w-full flex-1 bg-zinc-50 font-sans text-zinc-900 dark:bg-black dark:text-zinc-100">
      <main className="px-6 py-16 sm:px-10">
        {/* Page Title & Header */}
        <div className="space-y-3 border-b border-zinc-200 pb-8 dark:border-zinc-800">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
            <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
            Getting Started
          </div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Installation & Setup
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Follow this step-by-step guide to set up a production-ready Node.js,
            Express, TypeScript, and PostgreSQL project environment from scratch
            using{" "}
            <code className="text-emerald-600 dark:text-emerald-400">npm</code>.
          </p>
        </div>

        {/* Steps Container */}
        <div className="mt-10 space-y-12">
          {/* Step 1 */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-sm font-bold text-white">
                1
              </span>
              <h2 className="text-xl font-semibold">
                Initialize Node.js Project
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 pl-11">
              Start by creating a new directory for your project (or navigate to
              your root folder) and generate a default{" "}
              <code className="rounded bg-zinc-200/70 px-1.5 py-0.5 font-mono text-xs dark:bg-zinc-800">
                package.json
              </code>{" "}
              file.
            </p>
            <div className="pl-11 space-y-3">
              <pre className="overflow-x-auto rounded-lg border border-zinc-200 bg-zinc-900 p-4 font-mono text-sm text-zinc-100 dark:border-zinc-800">
                <code>npm init -y</code>
              </pre>

              {/* Why Card */}
              <div className="rounded-lg border border-zinc-200 bg-white p-4 text-xs dark:border-zinc-800 dark:bg-zinc-900/50">
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                  💡 Why is this needed?
                </span>
                <p className="mt-1 text-zinc-600 dark:text-zinc-400">
                  <code className="font-mono text-zinc-800 dark:text-zinc-200">
                    package.json
                  </code>{" "}
                  acts as the manifest for your project. It tracks installed
                  dependencies, project metadata, and runnable scripts. The{" "}
                  <code className="font-mono text-zinc-800 dark:text-zinc-200">
                    -y
                  </code>{" "}
                  flag skips the interactive prompts and sets up standard
                  defaults instantly.
                </p>
              </div>
            </div>
          </section>

          {/* Step 2 */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-sm font-bold text-white">
                2
              </span>
              <h2 className="text-xl font-semibold">
                Install Core Production Dependencies
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 pl-11">
              Install the essential packages that execute inside your runtime
              when processing HTTP requests.
            </p>
            <div className="pl-11 space-y-3">
              <pre className="overflow-x-auto rounded-lg border border-zinc-200 bg-zinc-900 p-4 font-mono text-sm text-zinc-100 dark:border-zinc-800">
                <code>npm install express dotenv</code>
              </pre>

              {/* Package Explanations */}
              <div className="rounded-lg border border-zinc-200 bg-white p-4 text-xs dark:border-zinc-800 dark:bg-zinc-900/50 space-y-2">
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                  📦 Why these packages?
                </span>
                <ul className="list-disc pl-4 space-y-1.5 text-zinc-600 dark:text-zinc-400">
                  <li>
                    <strong className="text-zinc-800 dark:text-zinc-200">
                      express:
                    </strong>{" "}
                    Minimalist, fast web framework for Node.js. Handles URL
                    routing, HTTP request mapping (GET, POST, etc.), and
                    middleware execution.
                  </li>
                  <li>
                    <strong className="text-zinc-800 dark:text-zinc-200">
                      dotenv:
                    </strong>{" "}
                    Loads environment configuration variables from a hidden{" "}
                    <code className="font-mono text-zinc-800 dark:text-zinc-200">
                      .env
                    </code>{" "}
                    file into{" "}
                    <code className="font-mono text-zinc-800 dark:text-zinc-200">
                      process.env
                    </code>
                    . Keeps secrets like port numbers, API keys, and database
                    passwords out of your source code.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Step 3 */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-sm font-bold text-white">
                3
              </span>
              <h2 className="text-xl font-semibold">
                Configure Git Ignore File (
                <code className="font-mono text-lg">.gitignore</code>)
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 pl-11">
              Create a{" "}
              <code className="rounded bg-zinc-200/70 px-1.5 py-0.5 font-mono text-xs dark:bg-zinc-800">
                .gitignore
              </code>{" "}
              file in your root directory to prevent sensitive files, build
              artifacts, and heavy dependencies from being tracked by version
              control.
            </p>
            <div className="pl-11 space-y-3">
              <pre className="overflow-x-auto rounded-lg border border-zinc-200 bg-zinc-900 p-4 font-mono text-xs text-zinc-100 dark:border-zinc-800">
                {`# Dependencies
node_modules/
.pnp
.pnp.js

# Build output
dist/
build/
*.tsbuildinfo

# Environment variables
.env
.env.local
.env.development
.env.test
.env.production
.env.*.local

# Logs
logs/
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*

# Testing / coverage
coverage/
.nyc_output/

# Editor / IDE
.vscode/
.idea/
*.swp
*.swo

# OS files
.DS_Store
Thumbs.db

# Package manager
package-lock.json.bak
.yarn/
.pnpm-store/

# Misc
*.pid
*.seed
*.pid.lock
.cache/
tmp/
temp/`}
              </pre>

              {/* Why Card */}
              <div className="rounded-lg border border-zinc-200 bg-white p-4 text-xs dark:border-zinc-800 dark:bg-zinc-900/50">
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                  💡 Why is this needed?
                </span>
                <p className="mt-1 text-zinc-600 dark:text-zinc-400">
                  The{" "}
                  <code className="font-mono text-zinc-800 dark:text-zinc-200">
                    .gitignore
                  </code>{" "}
                  file keeps your Git history clean and safe by ensuring large
                  directories (like{" "}
                  <code className="font-mono text-zinc-800 dark:text-zinc-200">
                    node_modules
                  </code>
                  ), generated build output (
                  <code className="font-mono text-zinc-800 dark:text-zinc-200">
                    dist
                  </code>
                  ), and sensitive credentials in{" "}
                  <code className="font-mono text-zinc-800 dark:text-zinc-200">
                    .env
                  </code>{" "}
                  are never pushed to remote repositories.
                </p>
              </div>
            </div>
          </section>

          {/* Step 4 */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-sm font-bold text-white">
                4
              </span>
              <h2 className="text-xl font-semibold">
                Install Development & TypeScript Dependencies
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 pl-11">
              Install development-only tools (
              <code className="rounded bg-zinc-200/70 px-1.5 py-0.5 font-mono text-xs dark:bg-zinc-800">
                -D
              </code>{" "}
              flag) needed for compiling TypeScript and auto-reloading your
              server during development.
            </p>
            <div className="pl-11 space-y-3">
              <pre className="overflow-x-auto rounded-lg border border-zinc-200 bg-zinc-900 p-4 font-mono text-sm text-zinc-100 dark:border-zinc-800">
                <code>
                  npm install -D typescript tsx @types/node @types/express
                </code>
              </pre>

              {/* Package Explanations */}
              <div className="rounded-lg border border-zinc-200 bg-white p-4 text-xs dark:border-zinc-800 dark:bg-zinc-900/50 space-y-2">
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                  🛠️ Why dev dependencies (<code className="font-mono">-D</code>
                  )?
                </span>
                <ul className="list-disc pl-4 space-y-1.5 text-zinc-600 dark:text-zinc-400">
                  <li>
                    <strong className="text-zinc-800 dark:text-zinc-200">
                      typescript:
                    </strong>{" "}
                    The official TypeScript compiler (
                    <code className="font-mono text-zinc-800 dark:text-zinc-200">
                      tsc
                    </code>
                    ) that converts strongly-typed{" "}
                    <code className="font-mono text-zinc-800 dark:text-zinc-200">
                      .ts
                    </code>{" "}
                    code into browser/Node-compatible JavaScript (
                    <code className="font-mono text-zinc-800 dark:text-zinc-200">
                      .js
                    </code>
                    ).
                  </li>
                  <li>
                    <strong className="text-zinc-800 dark:text-zinc-200">
                      tsx:
                    </strong>{" "}
                    Fast TypeScript execution tool for Node.js powered by
                    Esbuild. Watches your files for edits and restarts the local
                    development server automatically without requiring manual
                    recompiles.
                  </li>
                  <li>
                    <strong className="text-zinc-800 dark:text-zinc-200">
                      @types/node & @types/express:
                    </strong>{" "}
                    Type definitions files. They supply auto-completion, hover
                    documentation, and compile-time error checks for native
                    Node.js modules and Express components in editors like VS
                    Code.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Step 5 */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-sm font-bold text-white">
                5
              </span>
              <h2 className="text-xl font-semibold">
                Initialize TypeScript Configuration (`tsconfig.json`)
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 pl-11">
              Generate a{" "}
              <code className="rounded bg-zinc-200/70 px-1.5 py-0.5 font-mono text-xs dark:bg-zinc-800">
                tsconfig.json
              </code>{" "}
              configuration file for compiling TypeScript code.
            </p>
            <div className="pl-11 space-y-3">
              <pre className="overflow-x-auto rounded-lg border border-zinc-200 bg-zinc-900 p-4 font-mono text-sm text-zinc-100 dark:border-zinc-800">
                <code>npx tsc --init</code>
              </pre>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Recommended settings for modern Node.js backends:
              </p>
              <pre className="overflow-x-auto rounded-lg border border-zinc-200 bg-zinc-900 p-4 font-mono text-xs text-emerald-400 dark:border-zinc-800">
                {`{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}`}
              </pre>

              {/* Why Card */}
              <div className="rounded-lg border border-zinc-200 bg-white p-4 text-xs dark:border-zinc-800 dark:bg-zinc-900/50">
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                  💡 Why is this needed?
                </span>
                <p className="mt-1 text-zinc-600 dark:text-zinc-400">
                  <code className="font-mono text-zinc-800 dark:text-zinc-200">
                    tsconfig.json
                  </code>{" "}
                  controls compiler rules. Setting{" "}
                  <code className="font-mono text-zinc-800 dark:text-zinc-200">
                    rootDir: "./src"
                  </code>{" "}
                  forces all source code into an isolated folder, and{" "}
                  <code className="font-mono text-zinc-800 dark:text-zinc-200">
                    outDir: "./dist"
                  </code>{" "}
                  outputs clean, executable JavaScript files when deploying to
                  production servers.
                </p>
              </div>
            </div>
          </section>

          {/* Step 6 */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-sm font-bold text-white">
                6
              </span>
              <h2 className="text-xl font-semibold">
                Configure Environment Variables (`.env`)
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 pl-11">
              Create a{" "}
              <code className="rounded bg-zinc-200/70 px-1.5 py-0.5 font-mono text-xs dark:bg-zinc-800">
                .env
              </code>{" "}
              file in your root folder to configure server options and
              PostgreSQL database credentials.
            </p>
            <div className="pl-11 space-y-3">
              <pre className="overflow-x-auto rounded-lg border border-zinc-200 bg-zinc-900 p-4 font-mono text-xs text-zinc-100 dark:border-zinc-800">
                {`PORT=5000`}
              </pre>

              {/* Why Card */}
              <div className="rounded-lg border border-zinc-200 bg-white p-4 text-xs dark:border-zinc-800 dark:bg-zinc-900/50">
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                  💡 Why is this needed?
                </span>
                <p className="mt-1 text-zinc-600 dark:text-zinc-400">
                  Storing configuration values outside source files allows you
                  to change ports or database servers across different
                  environments (local development vs. live production hosting)
                  without modifying application source code.
                </p>
                <div className="space-x-4">
                  <Link
                    href="/port-defining"
                    className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-md bg-emerald-600 px-3 py-2 font-semibold text-white transition-colors hover:bg-emerald-500 dark:bg-emerald-500 dark:hover:bg-emerald-400 mt-4"
                  >
                    Learn more about port
                  </Link>
                  <Link
                    href="/port-defining"
                    className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-md bg-emerald-600 px-3 py-2 font-semibold text-white transition-colors hover:bg-emerald-500 dark:bg-emerald-500 dark:hover:bg-emerald-400 mt-4"
                  >
                    Learn more about port
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Step 7 */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-sm font-bold text-white">
                7
              </span>
              <h2 className="text-xl font-semibold">
                Create Server Entry Point (
                <code className="font-mono text-lg">src/server.ts</code>)
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 pl-11">
              Create a{" "}
              <code className="rounded bg-zinc-200/70 px-1.5 py-0.5 font-mono text-xs dark:bg-zinc-800">
                src
              </code>{" "}
              directory and add a{" "}
              <code className="rounded bg-zinc-200/70 px-1.5 py-0.5 font-mono text-xs dark:bg-zinc-800">
                server.ts
              </code>{" "}
              file as the main entry point for your Express application.
            </p>
            <div className="pl-11 space-y-3">
              <pre className="overflow-x-auto rounded-lg border border-zinc-200 bg-zinc-900 p-4 font-mono text-xs text-emerald-400 dark:border-zinc-800">
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

              {/* Why Card */}
              <div className="rounded-lg border border-zinc-200 bg-white p-4 text-xs dark:border-zinc-800 dark:bg-zinc-900/50">
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                  💡 Why is this needed?
                </span>
                <p className="mt-1 text-zinc-600 dark:text-zinc-400">
                  This file initializes the Express app, loads environment
                  variables using{" "}
                  <code className="font-mono text-zinc-800 dark:text-zinc-200">
                    dotenv
                  </code>
                  , defines an initial health-check route, and starts listening
                  for incoming HTTP requests.
                </p>
                <Link
                  href="/how-to-make-server"
                  className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-md bg-emerald-600 px-3 py-2 font-semibold text-white transition-colors hover:bg-emerald-500 dark:bg-emerald-500 dark:hover:bg-emerald-400 mt-4"
                >
                  Learn more about server
                </Link>
              </div>
            </div>
          </section>

          {/* Step 8 */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-sm font-bold text-white">
                8
              </span>
              <h2 className="text-xl font-semibold">Update Package Scripts</h2>
            </div>
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 pl-11">
              Add execution and build commands to your{" "}
              <code className="rounded bg-zinc-200/70 px-1.5 py-0.5 font-mono text-xs dark:bg-zinc-800">
                package.json
              </code>{" "}
              file:
            </p>
            <div className="pl-11 space-y-3">
              <pre className="overflow-x-auto rounded-lg border border-zinc-200 bg-zinc-900 p-4 font-mono text-xs text-zinc-100 dark:border-zinc-800">
                {`"scripts": {
  "dev": "tsx watch src/server.ts",
  "build": "tsc",
  "start": "node dist/server.js"
}`}
              </pre>

              {/* Script Explanations */}
              <div className="rounded-lg border border-zinc-200 bg-white p-4 text-xs dark:border-zinc-800 dark:bg-zinc-900/50 space-y-2">
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                  📜 What do these scripts do?
                </span>
                <ul className="list-disc pl-4 space-y-1.5 text-zinc-600 dark:text-zinc-400">
                  <li>
                    <strong className="text-zinc-800 dark:text-zinc-200">
                      dev:
                    </strong>{" "}
                    Runs{" "}
                    <code className="font-mono text-zinc-800 dark:text-zinc-200">
                      tsx watch
                    </code>{" "}
                    to monitor changes in{" "}
                    <code className="font-mono text-zinc-800 dark:text-zinc-200">
                      src/server.ts
                    </code>{" "}
                    and automatically restart your development server.
                  </li>
                  <li>
                    <strong className="text-zinc-800 dark:text-zinc-200">
                      build:
                    </strong>{" "}
                    Runs the TypeScript compiler to convert all TypeScript files
                    in{" "}
                    <code className="font-mono text-zinc-800 dark:text-zinc-200">
                      src/
                    </code>{" "}
                    to compiled JavaScript inside{" "}
                    <code className="font-mono text-zinc-800 dark:text-zinc-200">
                      dist/
                    </code>
                    .
                  </li>
                  <li>
                    <strong className="text-zinc-800 dark:text-zinc-200">
                      start:
                    </strong>{" "}
                    Executes the compiled production code using Node’s native
                    runtime engine.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Step 9 */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-sm font-bold text-white">
                9
              </span>
              <h2 className="text-xl font-semibold">Run Development Server</h2>
            </div>
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 pl-11">
              Start your server with hot reloading enabled:
            </p>
            <div className="pl-11">
              <pre className="overflow-x-auto rounded-lg border border-zinc-200 bg-zinc-900 p-4 font-mono text-sm text-zinc-100 dark:border-zinc-800">
                <code>npm run dev</code>
              </pre>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
