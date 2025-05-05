"use client";

import Image from "next/image";
import "@/app/globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoPersonCircle } from "react-icons/io5";
import { FaFileAlt, FaShareAlt, FaRegClock, FaHome } from "react-icons/fa";

const routeTitles: { [key: string]: string } = {
  "/dashboard": "Dashboard",
  "/documents": "Documents",
  "/share-settings": "Share Settings",
  "/access-logs": "Access Logs",
};

const navItems = [
  { label: "Dashboard", href: "/dashboard", icon: <FaHome /> },
  { label: "Documents", href: "/documents", icon: <FaFileAlt /> },
  { label: "Share Settings", href: "/share-settings", icon: <FaShareAlt /> },
  { label: "Access Logs", href: "/access-logs", icon: <FaRegClock /> },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const pageTitle = routeTitles[pathname] || "WalkID";

  return (
    <html lang="en">
      <body className="flex">
        {/* Sidebar */}
        <aside className="w-[200px] h-screen bg-gray-900 text-white fixed top-0 left-0 shadow-xl z-[1] px-4 pt-4 rounded-r-lg">
          <div className="text-2xl font-bold mb-6 text-white">WALKID</div>
          <ul className="space-y-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`text-[14px] flex items-center gap-2 px-3 py-2 rounded transition-all ${
                      isActive
                        ? "bg-blue-600 text-white"
                        : "hover:bg-gray-700 text-gray-300"
                    }`}
                  >
                    <span
                      className={`p-2 rounded-md ${
                        isActive ? "bg-white text-blue-600" : "bg-blue-500"
                      }`}
                    >
                      {item.icon}
                    </span>
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </aside>

        {/* Main content area */}
        <main className="flex-1 ml-[200px]">
          {/* Navbar */}
          <nav className="h-[64px] shadow-2xl bg-white flex items-center justify-between px-4 z-[10] sticky top-0 rounded-lg mx-2">
            <div>
              <h1 className="text-blue-500 text-lg font-bold">{pageTitle}</h1>
              <p className="text-sm text-blue-500">/ {pageTitle}</p>
            </div>
            <div className="flex items-center gap-1 text-sm">
              <IoPersonCircle className="text-[30px]" /> Theodore Bennett
            </div>
          </nav>

          {/* Page Content */}
          <div className="p-6">{children}</div>
        </main>
      </body>
    </html>
  );
}
