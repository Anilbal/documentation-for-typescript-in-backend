export default function InstallationPage() {
  return (
    <div className="w-full flex-1 bg-zinc-50 font-sans dark:bg-black text-zinc-900 dark:text-zinc-100">
      <main className="mx-auto px-6 py-16 sm:px-10">
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
            <div className="pl-11">
              <pre className="overflow-x-auto rounded-lg border border-zinc-200 bg-zinc-900 p-4 font-mono text-sm text-zinc-100 dark:border-zinc-800">
                <code>npm init -y</code>
              </pre>
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
              Install Express framework, PostgreSQL driver (
              <code className="rounded bg-zinc-200/70 px-1.5 py-0.5 font-mono text-xs dark:bg-zinc-800">
                pg
              </code>
              ), validation library (
              <code className="rounded bg-zinc-200/70 px-1.5 py-0.5 font-mono text-xs dark:bg-zinc-800">
                joi
              </code>
              ), environment variable managers, security headers, and
              authentication tools.
            </p>
            <div className="pl-11">
              <pre className="overflow-x-auto rounded-lg border border-zinc-200 bg-zinc-900 p-4 font-mono text-sm text-zinc-100 dark:border-zinc-800">
                <code>npm install express dotenv</code>
              </pre>
            </div>
          </section>

          {/* Step 3 */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-sm font-bold text-white">
                3
              </span>
              <h2 className="text-xl font-semibold">
                Install Development & TypeScript Dependencies
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 pl-11">
              Install TypeScript compiler, type definitions for installed
              packages, and execution tools like{" "}
              <code className="rounded bg-zinc-200/70 px-1.5 py-0.5 font-mono text-xs dark:bg-zinc-800">
                tsx
              </code>{" "}
              for fast local development.
            </p>
            <div className="pl-11">
              <pre className="overflow-x-auto rounded-lg border border-zinc-200 bg-zinc-900 p-4 font-mono text-sm text-zinc-100 dark:border-zinc-800">
                <code>
                  npm install -D typescript tsx @types/node @types/express
                </code>
              </pre>
            </div>
          </section>

          {/* Step 4 */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-sm font-bold text-white">
                4
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
            </div>
          </section>

          {/* Step 5 */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-sm font-bold text-white">
                5
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
            <div className="pl-11">
              <pre className="overflow-x-auto rounded-lg border border-zinc-200 bg-zinc-900 p-4 font-mono text-xs text-zinc-100 dark:border-zinc-800">
                {`PORT=5000`}
              </pre>
            </div>
          </section>

          {/* Step 6 */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-sm font-bold text-white">
                6
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
            <div className="pl-11">
              <pre className="overflow-x-auto rounded-lg border border-zinc-200 bg-zinc-900 p-4 font-mono text-xs text-zinc-100 dark:border-zinc-800">
                {`"scripts": {
  "dev": "tsx watch src/server.ts",
  "build": "tsc",
  "start": "node dist/server.js"
}`}
              </pre>
            </div>
          </section>

          {/* Step 7 */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-sm font-bold text-white">
                7
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
