import "./globals.scss";
import Header from "../components/header";
import Footer from "../components/footer";

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

  // ✅ Fonts
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
        {/* ✅ HEADER */}
        {site?.layout?.header && (
          <Header {...site.layout.header.props} site={site} />
        )}

        {children}

        {/* ✅ FOOTER */}
        {site?.layout?.footer && (
          <Footer {...site.layout.footer.props} site={site} />
        )}
      </body>
    </html>
  );
}
