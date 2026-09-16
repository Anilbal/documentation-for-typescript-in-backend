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
          <h1 className="font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
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

        {/* Action Buttons */}
        <div className="flex flex-col gap-4 text-sm font-medium sm:flex-row">
          <a
            className="flex h-11 items-center justify-center rounded-lg bg-zinc-900 px-6 text-zinc-50 transition-colors hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
            href="/docs/how-to-make-server"
          >
            Get Started
          </a>
          <a
            className="flex h-11 items-center justify-center rounded-lg border border-zinc-300 px-6 text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-900"
            href="https://github.com/Anilbal/Backend-with-typescript.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Repository
          </a>
        </div>
      </main>
    </div>
  );
}
