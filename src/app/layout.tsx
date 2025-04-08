import { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Toaster } from "react-hot-toast";
export async function generateMetadata(): Promise<Metadata> {
  const title = "PixiQuiz";

  const description = "PixiQuiz - AI powered quiz generator";

  return {
    metadataBase: new URL("https://pixiquiz.pixismith.com"),
    title,
    description,
    openGraph: {
      title,
      description,
      url: "https://pixiquiz.pixismith.com",
      images: [
        {
          url: "/openGraph.png",
          secureUrl: "/openGraph.png",
          width: 1200,
          height: 630,
          alt: "Preview of PixiQuiz",
        },
      ],
      type: "website",
      siteName: "PixiQuiz",
    },
  };
}

import "./globals.css";
import FooterComponent from "@/components/Footer/Footer";

const roboto = Roboto({
  weight: ["400", "700", "900"],
  // style: "italic",
  subsets: ["latin"],
  variable: "--font-roboto",
  // display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Toaster position="top-center" />
        {children}
        <FooterComponent />
      </body>
    </html>
  );
}
