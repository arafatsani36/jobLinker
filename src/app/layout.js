import "./globals.css";
import { Inter } from "next/font/google";
import AuthProvider from "@/provider/AuthProvider";
import Toaster from "@/components/Shared/ToasterComponent/ToasterComponent";

import "../styles/aos.css";
import ReactQueryProvider from "@/components/Shared/ReactQueryProvider/ReactQueryProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "JobLinker",
  description: "Generated by Team Chameleons",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryProvider>
          <AuthProvider>
            <div>{children}</div>
          </AuthProvider>
        </ReactQueryProvider>
        <Toaster />
      </body>
    </html>
  );
}
