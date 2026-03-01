import {Poppins,Space_Grotesk,Bricolage_Grotesque} from 'next/font/google'


export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space",
});
export const bricolageGrotesque=Bricolage_Grotesque({
 subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-bricolageGrotesque",
})
export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});