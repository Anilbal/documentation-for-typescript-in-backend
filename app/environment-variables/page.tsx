export default function EnvironmentVariablesPage() {
  return (
    <div className="w-full flex-1 bg-zinc-50 font-sans text-zinc-900 dark:bg-black dark:text-zinc-100">
      <main className="px-6 py-16 sm:px-10">
        {/* Header */}
        <div className="space-y-3 border-b border-zinc-200 pb-8 dark:border-zinc-800">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
            <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
            Configuration
          </div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Environment Variables
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Learn how to securely store, access, and validate application
            settings and secret keys using{" "}
            <code className="text-emerald-600 dark:text-emerald-400">
              dotenv
            </code>{" "}
            and TypeScript.
          </p>
        </div>

        {/* Content Section */}
        <div className="mt-10 space-y-12">
          {/* Section 1: What are Environment Variables */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              1. What Are Environment Variables?
            </h2>
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Environment variables are key-value pairs stored outside of your
              application source code. They allow you to pass dynamic runtime
              configurations—such as database connection strings, API
              credentials, and secret tokens—without hardcoding sensitive data
              into your repository.
            </p>

            {/* Why Card */}
            <div className="rounded-lg border border-zinc-200 bg-white p-4 text-xs dark:border-zinc-800 dark:bg-zinc-900/50">
              <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                💡 Core Benefits
              </span>
              <ul className="mt-2 list-disc pl-4 space-y-1 text-zinc-600 dark:text-zinc-400">
                <li>
                  <strong className="text-zinc-800 dark:text-zinc-200">
                    Security:
                  </strong>{" "}
                  Keeps secrets out of public version control repositories like
                  GitHub.
                </li>
                <li>
                  <strong className="text-zinc-800 dark:text-zinc-200">
                    Portability:
                  </strong>{" "}
                  Allows seamless transitions between local development,
                  staging, and production environments.
                </li>
              </ul>
            </div>
          </section>

          {/* Section 2: .env File & Example */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              2. Setting Up the `.env` File
            </h2>
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Create a hidden file named{" "}
              <code className="rounded bg-zinc-200/70 px-1.5 py-0.5 font-mono text-xs dark:bg-zinc-800">
                .env
              </code>{" "}
              in the root directory of your project:
            </p>
            <pre className="overflow-x-auto rounded-lg border border-zinc-200 bg-zinc-900 p-4 font-mono text-xs text-zinc-100 dark:border-zinc-800">
              {`# App Configuration
PORT=5000
NODE_ENV=development

# Database Configuration
DATABASE_URL=postgresql://postgres:password@localhost:5432/mydb?schema=public

# Authentication Secrets
JWT_SECRET=super_secret_jwt_key_12345`}
            </pre>
          </section>

          {/* Section 3: Loading Variables with dotenv */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              3. Loading Variables in Node.js
            </h2>
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Import and initialize the{" "}
              <code className="rounded bg-zinc-200/70 px-1.5 py-0.5 font-mono text-xs dark:bg-zinc-800">
                dotenv
              </code>{" "}
              package at the top of your main entry file (e.g.,{" "}
              <code className="rounded bg-zinc-200/70 px-1.5 py-0.5 font-mono text-xs dark:bg-zinc-800">
                src/server.ts
              </code>
              ):
            </p>
            <pre className="overflow-x-auto rounded-lg border border-zinc-200 bg-zinc-900 p-4 font-mono text-sm text-emerald-400 dark:border-zinc-800">
              {`import express from "express";
import dotenv from "dotenv";

// Read and parse key-value pairs from .env into process.env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;
const DATABASE_URL = process.env.DATABASE_URL;`}
            </pre>

            <div className="rounded-lg border border-zinc-200 bg-white p-4 text-xs dark:border-zinc-800 dark:bg-zinc-900/50 space-y-2">
              <span className="font-semibold text-amber-500">
                ⚠️ Execution Order Notice
              </span>
              <p className="text-zinc-600 dark:text-zinc-400">
                Always invoke{" "}
                <code className="font-mono text-zinc-800 dark:text-zinc-200">
                  dotenv.config()
                </code>{" "}
                before importing or running modules that depend on{" "}
                <code className="font-mono text-zinc-800 dark:text-zinc-200">
                  process.env
                </code>{" "}
                values. If called late, variables will evaluate to{" "}
                <code className="font-mono text-zinc-800 dark:text-zinc-200">
                  undefined
                </code>
                .
              </p>
            </div>
          </section>

          {/* Section 4: Validation Pattern with Zod */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              4. Safe Type-Checking with Validation
            </h2>
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Since{" "}
              <code className="rounded bg-zinc-200/70 px-1.5 py-0.5 font-mono text-xs dark:bg-zinc-800">
                process.env
              </code>{" "}
              fields are untyped strings or{" "}
              <code className="rounded bg-zinc-200/70 px-1.5 py-0.5 font-mono text-xs dark:bg-zinc-800">
                undefined
              </code>
              , validate your environment variables on server launch using a
              schema validator like <strong>Zod</strong>:
            </p>
            <pre className="overflow-x-auto rounded-lg border border-zinc-200 bg-zinc-900 p-4 font-mono text-xs text-zinc-100 dark:border-zinc-800">
              {`// src/config/env.ts
import dotenv from "dotenv";
import { z } from "zod";

dotenv.config();

const envSchema = z.object({
  PORT: z.string().default("8000"),
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
  DATABASE_URL: z.string().url("Invalid PostgreSQL URL format"),
  JWT_SECRET: z.string().min(10, "JWT Secret must be at least 10 characters"),
});

// Fail fast at runtime if required variables are missing or invalid
export const env = envSchema.parse(process.env);`}
            </pre>
          </section>

          {/* Section 5: Security Best Practices */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              5. Security Best Practices
            </h2>
            <div className="rounded-lg border border-zinc-200 bg-white p-4 text-xs dark:border-zinc-800 dark:bg-zinc-900/50 space-y-3">
              <ul className="list-disc pl-4 space-y-2 text-zinc-600 dark:text-zinc-400">
                <li>
                  <strong className="text-zinc-800 dark:text-zinc-200">
                    Never Commit `.env`:
                  </strong>{" "}
                  Always add{" "}
                  <code className="font-mono text-zinc-800 dark:text-zinc-200">
                    .env
                  </code>{" "}
                  to your{" "}
                  <code className="font-mono text-zinc-800 dark:text-zinc-200">
                    .gitignore
                  </code>{" "}
                  file to prevent accidental pushes to version control.
                </li>
                <li>
                  <strong className="text-zinc-800 dark:text-zinc-200">
                    Maintain a `.env.example` Template:
                  </strong>{" "}
                  Provide a commit-safe template file containing key names with
                  placeholder values so team members know which variables are
                  required.
                </li>
              </ul>
            </div>

            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              Example{" "}
              <code className="rounded bg-zinc-200/70 px-1.5 py-0.5 font-mono text-xs dark:bg-zinc-800">
                .env.example
              </code>{" "}
              file:
            </p>
            <pre className="overflow-x-auto rounded-lg border border-zinc-200 bg-zinc-900 p-4 font-mono text-xs text-zinc-100 dark:border-zinc-800">
              {`PORT=5000
NODE_ENV=development
DATABASE_URL=postgresql://user:password@localhost:5432/dbname
JWT_SECRET=your_secret_here`}
            </pre>
          </section>
        </div>
      </main>
    </div>
  );
}
