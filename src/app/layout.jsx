import localfont from "next/font/local";
import "./globals.css";
import Head from 'next/head';

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
  // title: "From Folio",
  // description: "FormFolio Application",
};


export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${ttHovesThinItalic.variable} ${ttHovesThin.variable} ${ttHovesNormal.variable}`}
    >
    <Head>
			<link rel='icon' href='https://i.ibb.co/MM4Zr11/Logo48x48.png' />
		</Head>
      <body>{children}</body>
    </html>
  );
}
