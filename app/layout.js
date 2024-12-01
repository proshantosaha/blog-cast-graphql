import "./globals.css";

export const metadata = {
  title: "BlogCast",
  description: "read and tech",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
}
