
import "./globals.scss";

import { 
  Lato, 
  Inter, 
  Poppins, 
  Roboto, 
  Plus_Jakarta_Sans 
} from "next/font/google";

// Pre-load all possible Google fonts at module scope
const LatoFont = Lato({
  variable: "--font-lato",
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

const InterFont = Inter({
  variable: "--font-inter",
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

const PoppinsFont = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

const RobotoFont = Roboto({
  variable: "--font-roboto",
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

const JakartaFont = Plus_Jakarta_Sans({
  variable: "--font-jakarata",
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

// Map Google families → CSS variables already loaded
const FONT_MAP = {
  "Lato": LatoFont.variable,
  "Inter": InterFont.variable,
  "Poppins": PoppinsFont.variable,
  "Roboto": RobotoFont.variable,
  "Plus Jakarta Sans": JakartaFont.variable,
};

export default async function RootLayout({ children }) {
  const slug = process.env.SITE_SLUG;

  const res = await fetch(
    `https://blinkflo-backend.onrender.com/api/websites/${slug}`,
    { cache: "no-store" }
  );

  const site = await res.json();

  // Resolve primary font
  let primaryVar;
  if (site.fonts.primary.type === "google") {
    primaryVar = FONT_MAP[site.fonts.primary.family];
  } else {
    primaryVar = "--font-lato"; // custom font injected below
  }

  // Resolve secondary font
  let secondaryVar;
  if (site.fonts.secondary.type === "google") {
    secondaryVar = FONT_MAP[site.fonts.secondary.family];
  } else {
    secondaryVar = "--font-jakarata"; // custom font injected below
  }

  // @font-face injection for custom fonts
  const customFontCSS = `
    ${site.fonts.primary.type === "custom" ? 
      `@font-face {
        font-family: 'PrimaryCustom';
        src: url(${site.fonts.primary.url}) format('truetype');
      }` : ""}

    ${site.fonts.secondary.type === "custom" ? 
      `@font-face {
        font-family: 'SecondaryCustom';
        src: url(${site.fonts.secondary.url}) format('truetype');
      }` : ""}
  `;

  return (
    <html lang="en">
      <head>
        <title>{site.websiteName}</title>
        <link rel="icon" href={site.favicon} />

        <style>{`
          ${customFontCSS}

          :root {
            --font-lato: ${site.fonts.primary.type === "google" 
              ? site.fonts.primary.family 
              : "PrimaryCustom"};

            --font-jakarata: ${site.fonts.secondary.type === "google"
              ? site.fonts.secondary.family 
              : "SecondaryCustom"};

            --color-lime: ${site.colors[0]?.code};
            --color-blue-500: ${site.colors[1]?.code};
            --color-white: ${site.colors[2]?.code};
            --color-blue-400: ${site.colors[3]?.code};
          }
        `}</style>
      </head>

      <body className={`${primaryVar} ${secondaryVar}`}>
        {children}
      </body>
    </html>
  );
}
