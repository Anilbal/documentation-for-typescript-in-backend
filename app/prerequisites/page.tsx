export default function PrerequisitesPage() {
  return (
    <div className="w-full flex-1 bg-zinc-50 font-sans text-zinc-900 dark:bg-black dark:text-zinc-100">
      <main className="px-6 py-12 sm:px-10">
        {/* Header */}
        <div className="space-y-3 border-b border-zinc-200 pb-8 dark:border-zinc-800">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
            <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
            Getting Started
          </div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Prerequisites
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Before building APIs with Node.js, Express, TypeScript, and
            PostgreSQL, ensure you are comfortable with the following core
            concepts and development tools.
          </p>
        </div>

        {/* Prerequisites Grid */}
        <div className="mt-10 space-y-10">
          {/* Section 1: JavaScript & TypeScript */}
          <section className="space-y-4 rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
              1. Modern JavaScript (ES6+) & TypeScript
            </h2>
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Express backends rely heavily on asynchronous programming, modular
              imports, and strong static typing.
            </p>
            <ul className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 font-bold">✓</span>
                <span>
                  <strong>Async / Await & Promises:</strong> Handling
                  non-blocking code execution during database operations.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 font-bold">✓</span>
                <span>
                  <strong>TypeScript Interfaces & Types:</strong> Defining
                  request payloads, database models, and response structures.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 font-bold">✓</span>
                <span>
                  <strong>ES Modules:</strong> Using{" "}
                  <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-xs dark:bg-zinc-800">
                    import / export
                  </code>{" "}
                  syntax instead of CommonJS{" "}
                  <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-xs dark:bg-zinc-800">
                    require()
                  </code>
                  .
                </span>
              </li>
            </ul>
            <div className="pt-2">
              <pre className="overflow-x-auto rounded-lg border border-zinc-200 bg-zinc-900 p-4 font-mono text-xs text-emerald-400 dark:border-zinc-800">
                {`// TypeScript Interface & Async Example
interface UserRequest {
  email: string;
  age: number;
}

async function fetchUser(id: string): Promise<UserRequest> {
  // Asynchronous database lookup
  return { email: "dev@example.com", age: 25 };
}`}
              </pre>
            </div>
          </section>

          {/* Section 2: HTTP & REST API Architecture */}
          <section className="space-y-4 rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
              2. HTTP Protocol & REST API Concepts
            </h2>
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Express is an HTTP framework. You should understand how
              client-server communications operate over the web.
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
                <h3 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100">
                  HTTP Methods
                </h3>
                <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
                  <code className="text-emerald-500">GET</code> (Fetch),{" "}
                  <code className="text-emerald-500">POST</code> (Create),{" "}
                  <code className="text-emerald-500">PUT/PATCH</code> (Update),{" "}
                  <code className="text-emerald-500">DELETE</code> (Remove).
                </p>
              </div>
              <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
                <h3 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100">
                  Status Codes
                </h3>
                <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
                  <code className="text-emerald-500">200 OK</code>,{" "}
                  <code className="text-emerald-500">201 Created</code>,{" "}
                  <code className="text-emerald-500">400 Bad Request</code>,{" "}
                  <code className="text-emerald-500">401 Unauthorized</code>,{" "}
                  <code className="text-emerald-500">500 Internal Error</code>.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Node.js Runtime & Package Management */}
          <section className="space-y-4 rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
              3. Node.js Environment & CLI Basics
            </h2>
            <ul className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 font-bold">✓</span>
                <span>
                  <strong>
                    Package Management (
                    <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-xs dark:bg-zinc-800">
                      npm
                    </code>
                    ):
                  </strong>{" "}
                  Installing, updating, and understanding{" "}
                  <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-xs dark:bg-zinc-800">
                    dependencies
                  </code>{" "}
                  vs{" "}
                  <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-xs dark:bg-zinc-800">
                    devDependencies
                  </code>{" "}
                  in{" "}
                  <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-xs dark:bg-zinc-800">
                    package.json
                  </code>
                  .
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 font-bold">✓</span>
                <span>
                  <strong>Environment Variables:</strong> Using{" "}
                  <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-xs dark:bg-zinc-800">
                    process.env
                  </code>{" "}
                  to store sensitive variables like database credentials and
                  secret keys.
                </span>
              </li>
            </ul>
          </section>

          {/* Section 4: Relational Databases & PostgreSQL */}
          <section className="space-y-4 rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
              4. Relational Databases & SQL
            </h2>
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Since PostgreSQL is used as the primary database, familiarity with
              fundamental relational concepts is required:
            </p>
            <ul className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 font-bold">✓</span>
                <span>
                  <strong>Basic SQL Queries:</strong>{" "}
                  <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-xs dark:bg-zinc-800">
                    SELECT
                  </code>
                  ,{" "}
                  <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-xs dark:bg-zinc-800">
                    INSERT
                  </code>
                  ,{" "}
                  <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-xs dark:bg-zinc-800">
                    UPDATE
                  </code>
                  , and{" "}
                  <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-xs dark:bg-zinc-800">
                    DELETE
                  </code>
                  .
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 font-bold">✓</span>
                <span>
                  <strong>Schema Design:</strong> Tables, primary keys, foreign
                  keys, and basic indexing.
                </span>
              </li>
            </ul>
          </section>

          {/* Section 5: API Testing Tools */}
          <section className="space-y-4 rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
              5. Recommended Development Tools
            </h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="rounded-lg border border-zinc-200 p-3 text-center dark:border-zinc-800">
                <span className="font-semibold text-sm">Postman / Bruno</span>
                <p className="text-xs text-zinc-500 mt-1">API Testing</p>
              </div>
              <div className="rounded-lg border border-zinc-200 p-3 text-center dark:border-zinc-800">
                <span className="font-semibold text-sm">Node.js (v18+)</span>
                <p className="text-xs text-zinc-500 mt-1">JavaScript Runtime</p>
              </div>
              <div className="rounded-lg border border-zinc-200 p-3 text-center dark:border-zinc-800">
                <span className="font-semibold text-sm">
                  TablePlus / pgAdmin
                </span>
                <p className="text-xs text-zinc-500 mt-1">PostgreSQL Client</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
