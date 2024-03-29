import localfont from "next/font/local";
import "./globals.css";

const ttHovesThinItalic = localfont({
  src: [{ path: "../../public/fonts/TT Hoves Thin Italic.otf" }],
  variable: "--font-tt-hoves-thin-italic",
});

const ttHovesThin = localfont({
  src: [{ path: "../../public/fonts/TT Hoves Regular.otf" }],
  variable: "--font-tt-hoves-thin",
});

const ttHovesNormal = localfont({
  src: [{ path: "../../public/fonts/TT Hoves Medium.otf" }],
  variable: "--font-tt-hoves-normal",
});

export const metadata = {
  title: "FromFolio",
  description: "FormFolio Application",
  icons: {
    icon: "https://i.ibb.co/rbrdhwx/f-logo-01.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${ttHovesThinItalic.variable} ${ttHovesThin.variable} ${ttHovesNormal.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
