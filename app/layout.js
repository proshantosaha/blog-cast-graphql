import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

export const metadata = {
  title: "BlogCast",
  description: "read and tech",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen ">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
