import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PR Review Time Predictor – Know Before You Merge",
  description: "Predict how long code reviews will take. Analyze PR size, complexity, and reviewer availability to optimize your team's review workflow."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="03a7a279-f528-4aff-ad55-7119390bcb7a"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
