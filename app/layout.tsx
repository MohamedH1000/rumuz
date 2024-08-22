import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Fab from "@mui/material/Fab";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ابو خالد",
  description: "سداد قروض",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar">
      <body className={inter.className}>
        <NavBar />
        <Link href={"https://wa.me/+966546742134"} target="_blank">
          <div className="fixed bottom-20 left-10 z-50">
            {" "}
            <Fab
              className="bg-[#20a362] hover:bg-[#20a362] text-white"
              aria-label="add"
            >
              <WhatsAppIcon />
            </Fab>
          </div>
        </Link>
        {children}
        <Footer />
      </body>
    </html>
  );
}
