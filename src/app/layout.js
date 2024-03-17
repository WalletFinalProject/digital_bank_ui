import { Quicksand } from "next/font/google";
import "./globals.css";
import Aside from "@/component/aside/Aside";
import Appbar from "@/component/appbar/Appbar";
const quicksand = Quicksand({ subsets: ["latin"] });
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
export const metadata = {
  title: "U-bank Digital",
  description: "This is an appplication to manage a digital bank ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        <Aside />
        <Appbar name="test" />
        {children}
      </body>
    </html>
  );
}
