import localFont from "next/font/local";
import { Poppins } from "next/font/google";

export const canela = localFont({
  src: "./[lang]/fonts/Canela-Thin.ttf",
});

export const poppins = Poppins({
  weight: "800",
  subsets: ["latin"],
});
