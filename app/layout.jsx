import "./globals.scss";
import RenderBlock from "../components/RenderBlock";

export default async function RootLayout({ children }) {
  const baseUrl = "https://chevxokeratin.com";

  const res = await fetch(`${baseUrl}/site.json`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return (
      <html>
        <body>Failed to load site</body>
      </html>
    );
  }

  const data = await res.json();

  // ✅ handle array or object
  const site = Array.isArray(data) ? data[0] : data;

  // ✅ Decide active color set
  const activeColors =
    site?.darkmodeOn && site?.darkcolors ? site.darkcolors : site?.colors || {};

  // ✅ Generate CSS variables
  const cssVariables = Object.entries(activeColors)
    .map(([key, value]) => `--color-${key}: ${value};`)
    .join("\n");

  // ✅ Fonts (important)
  const fontLinks = site?.fonts?.google || [];

  return (
    <html lang="en">
      <head>
        <title>{site.websiteName}</title>
        <link rel="icon" href={site.favicon} />

        {/* ✅ Google Fonts */}
        {fontLinks.map((font) => (
          <link key={font.family} href={font.importUrl} rel="stylesheet" />
        ))}

        {/* ✅ CSS Variables */}
        <style>{`
          :root {
            ${cssVariables}
          }
        `}</style>
      </head>

      <body>
        {/* HEADER */}
        {site.layout?.header && (
          <RenderBlock
            block={site.layout.header}
            site={site}
            logo={site.logo}
          />
        )}

        {children}

        {/* FOOTER */}
        {site.layout?.footer && (
          <RenderBlock block={site.layout.footer} site={site} />
        )}
      </body>
    </html>
  );
}
