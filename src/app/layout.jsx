import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Kings Heath Clangers",
  description:
    "Current Division 3 Championships in West Midlands Basketball league",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
