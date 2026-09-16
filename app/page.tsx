export default function Home() {
  return (
    <div className="w-full flex flex-1 flex-col items-center justify-start bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full flex-1 flex-col items-start justify-center gap-8 px-8 py-16 sm:px-12">
        {/* Header Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-800 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200">
          <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
          Backend Documentation
        </div>

        {/* Title & Subtitle */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
            Building Scalable REST APIs with Node.js & TypeScript
          </h1>
          <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            Welcome to the official developer documentation. This guide walks
            you through building, configuring, and deploying a production-ready
            backend architecture powered by Node.js, Express, TypeScript, and
            PostgreSQL.
          </p>
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2 text-xs font-medium text-zinc-600 dark:text-zinc-400">
          <span className="rounded-md bg-zinc-200/60 px-2.5 py-1 dark:bg-zinc-800">
            Node.js (v18+)
          </span>
          <span className="rounded-md bg-zinc-200/60 px-2.5 py-1 dark:bg-zinc-800">
            Express.js
          </span>
          <span className="rounded-md bg-zinc-200/60 px-2.5 py-1 dark:bg-zinc-800">
            TypeScript
          </span>
          <span className="rounded-md bg-zinc-200/60 px-2.5 py-1 dark:bg-zinc-800">
            PostgreSQL
          </span>
          <span className="rounded-md bg-zinc-200/60 px-2.5 py-1 dark:bg-zinc-800">
            Joi Validation
          </span>
        </div>

        {/* Prerequisites Section */}
        <div className="w-full space-y-4 rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
            Prerequisites
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Before jumping into this documentation, you should have a basic
            understanding of the following concepts:
          </p>
          <ul className="grid grid-cols-1 gap-3 text-sm text-zinc-700 dark:text-zinc-300 sm:grid-cols-2">
            <li className="flex items-start gap-2">
              <span className="text-emerald-500">✓</span>
              <span>
                <strong>JavaScript (ES6+) & TypeScript:</strong> Async/await,
                Promises, Interfaces, and Types.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-500">✓</span>
              <span>
                <strong>HTTP & REST Fundamentals:</strong> Verbs (GET, POST,
                PUT, DELETE), status codes, and JSON response structures.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-500">✓</span>
              <span>
                <strong>Node.js Core Concepts:</strong> Package management
                (`npm`), modules, and process environment variables
                (`process.env`).
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-500">✓</span>
              <span>
                <strong>Relational Databases:</strong> Basic SQL query syntax
                and relational modeling (PostgreSQL).
              </span>
            </li>
          </ul>
          <a
            className="flex h-11 w-fit items-center justify-center rounded-lg bg-zinc-900 px-6 text-zinc-50 transition-colors hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
            href="/prerequisites"
          >
            Learn more
          </a>
        </div>
      </main>
    </div>
  );
}
