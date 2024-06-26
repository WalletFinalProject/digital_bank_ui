import { Quicksand } from "next/font/google";
import "./globals.css";
import Aside from "../../component/aside/Aside";
import Appbar from "../../component/appbar/Appbar";
const quicksand = Quicksand({ subsets: ["latin"] });
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { Providers } from "../Provider";
config.autoAddCss = false;
export const metadata = {
  title: "U-bank Digital",
  description: "This is an appplication to manage a digital bank ",
};

export default function RootLayout({ children }) {
  return (
    <div>
      <Aside />
      <Appbar />
      <div className="children">
        <Providers>{children}</Providers>
      </div>
    </div>
  );
}
