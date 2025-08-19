import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // TODO: set dir dynamically based on locale
  return (
    <html lang="en" dir="ltr">
      <body>{children}</body>
    </html>
  );
}
