"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarItem {
  title: string;
  href: string;
}

interface SidebarSection {
  category: string;
  items: SidebarItem[];
}

const sidebarNavigation: SidebarSection[] = [
  {
    category: "Getting Started",
    items: [
      { title: "Introduction", href: "/" },
      { title: "Prerequisites", href: "/prerequisites" },
      { title: "Installation", href: "/installation" },
    ],
  },
  {
    category: "Core Guides",
    items: [
      { title: "How to Make Server", href: "/how-to-make-server" },
      { title: "Port Defining", href: "/port-defining" },
      { title: "Environment Variables", href: "/environment-variables" },
    ],
  },
  {
    category: "Database & Security",
    items: [
      { title: "PostgreSQL Connection", href: "/postgres-connection" },
      { title: "Authentication", href: "/authentication" },
      { title: "Validation with Joi", href: "/validation" },
    ],
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-16 h-[calc(100vh-64px)] w-64 shrink-0 overflow-y-auto border-r border-gray-200 bg-white px-4 py-6 dark:border-gray-800 dark:bg-gray-950">
      <div className="space-y-6">
        {sidebarNavigation.map((section) => (
          <div key={section.category}>
            <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
              {section.category}
            </h3>
            <ul className="space-y-1">
              {section.items.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`block rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-gray-100 text-gray-900 font-semibold dark:bg-gray-800 dark:text-white"
                          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-white"
                      }`}
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
}
