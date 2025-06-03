import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Companion Labs - Where AI Meets Soul",
  description: "Pioneering the intersection of artificial intelligence and human connection.",
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16 2C8.268 2 2 8.268 2 16C2 23.732 8.268 30 16 30C23.732 30 30 23.732 30 16C30 8.268 23.732 2 16 2ZM16 28C9.373 28 4 22.627 4 16C4 9.373 9.373 4 16 4C22.627 4 28 9.373 28 16C28 22.627 22.627 28 16 28Z' fill='%233B82F6'/%3E%3Cpath d='M16 8C11.582 8 8 11.582 8 16C8 20.418 11.582 24 16 24C20.418 24 24 20.418 24 16C24 11.582 20.418 8 16 8ZM16 22C12.686 22 10 19.314 10 16C10 12.686 12.686 10 16 10C19.314 10 22 12.686 22 16C22 19.314 19.314 22 16 22Z' fill='%233B82F6'/%3E%3Cpath d='M16 14C14.895 14 14 14.895 14 16C14 17.105 14.895 18 16 18C17.105 18 18 17.105 18 16C18 14.895 17.105 14 16 14Z' fill='%233B82F6'/%3E%3Cpath d='M24 12C23.448 12 23 12.448 23 13V19C23 19.552 23.448 20 24 20C24.552 20 25 19.552 25 19V13C25 12.448 24.552 12 24 12Z' fill='%233B82F6'/%3E%3Cpath d='M8 12C7.448 12 7 12.448 7 13V19C7 19.552 7.448 20 8 20C8.552 20 9 19.552 9 19V13C9 12.448 8.552 12 8 12Z' fill='%233B82F6'/%3E%3C/svg%3E",
        type: "image/svg+xml",
      },
    ],
    apple: [
      {
        url: "data:image/svg+xml,%3Csvg width='180' height='180' viewBox='0 0 180 180' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M90 10C45.147 10 10 45.147 10 90C10 134.853 45.147 170 90 170C134.853 170 170 134.853 170 90C170 45.147 134.853 10 90 10ZM90 160C50.147 160 20 129.853 20 90C20 50.147 50.147 20 90 20C129.853 20 160 50.147 160 90C160 129.853 129.853 160 90 160Z' fill='%233B82F6'/%3E%3Cpath d='M90 40C65.147 40 45 60.147 45 85C45 109.853 65.147 130 90 130C114.853 130 135 109.853 135 85C135 60.147 114.853 40 90 40ZM90 120C71.147 120 55 103.853 55 85C55 66.147 71.147 50 90 50C108.853 50 125 66.147 125 85C125 103.853 108.853 120 90 120Z' fill='%233B82F6'/%3E%3Cpath d='M90 70C79.147 70 70 79.147 70 90C70 100.853 79.147 110 90 110C100.853 110 110 100.853 110 90C110 79.147 100.853 70 90 70Z' fill='%233B82F6'/%3E%3Cpath d='M135 60C134.448 60 134 60.448 134 61V109C134 109.552 134.448 110 135 110C135.552 110 136 109.552 136 109V61C136 60.448 135.552 60 135 60Z' fill='%233B82F6'/%3E%3Cpath d='M45 60C44.448 60 44 60.448 44 61V109C44 109.552 44.448 110 45 110C45.552 110 46 109.552 46 109V61C46 60.448 45.552 60 45 60Z' fill='%233B82F6'/%3E%3C/svg%3E",
        type: "image/svg+xml",
        sizes: "180x180",
      },
    ],
    shortcut: [
      {
        url: "data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16 2C8.268 2 2 8.268 2 16C2 23.732 8.268 30 16 30C23.732 30 30 23.732 30 16C30 8.268 23.732 2 16 2ZM16 28C9.373 28 4 22.627 4 16C4 9.373 9.373 4 16 4C22.627 4 28 9.373 28 16C28 22.627 22.627 28 16 28Z' fill='%233B82F6'/%3E%3Cpath d='M16 8C11.582 8 8 11.582 8 16C8 20.418 11.582 24 16 24C20.418 24 24 20.418 24 16C24 11.582 20.418 8 16 8ZM16 22C12.686 22 10 19.314 10 16C10 12.686 12.686 10 16 10C19.314 10 22 12.686 22 16C22 19.314 19.314 22 16 22Z' fill='%233B82F6'/%3E%3Cpath d='M16 14C14.895 14 14 14.895 14 16C14 17.105 14.895 18 16 18C17.105 18 18 17.105 18 16C18 14.895 17.105 14 16 14Z' fill='%233B82F6'/%3E%3Cpath d='M24 12C23.448 12 23 12.448 23 13V19C23 19.552 23.448 20 24 20C24.552 20 25 19.552 25 19V13C25 12.448 24.552 12 24 12Z' fill='%233B82F6'/%3E%3Cpath d='M8 12C7.448 12 7 12.448 7 13V19C7 19.552 7.448 20 8 20C8.552 20 9 19.552 9 19V13C9 12.448 8.552 12 8 12Z' fill='%233B82F6'/%3E%3C/svg%3E",
        type: "image/svg+xml",
      },
    ],
  },
  manifest: "/manifest.json",
  themeColor: "#3B82F6",
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
