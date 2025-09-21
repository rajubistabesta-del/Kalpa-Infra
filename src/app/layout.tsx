import React from 'react';

// Root layout providing the base HTML structure for the app
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Kalpa Infra</title>
        <meta
          name="description"
          content="Delivering modern, sustainable, and elegant homes and commercial buildings."
        />
        {/* Load Tailwind via CDN (only for dev/test; for production it's better to use PostCSS config) */}
        <script src="https://cdn.tailwindcss.com"></script>

        {/* Google Fonts preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"   // ✅ FIXED
        />

        {/* Inter font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

        {/* Custom inline styles */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              body {
                font-family: 'Inter', sans-serif;
              }
            `,
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
