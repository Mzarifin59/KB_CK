import localFont from "next/font/local";
import "./globals.css";
import { Nunito } from 'next/font/google';
import { PT_Serif } from 'next/font/google';
import { ThemeProvider } from 'next-themes';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const geistNunito = Nunito({
  subsets: ['latin'], 
  weight: ['300', '400', '600', '700', '800'],  
  variable: '--font-nunito', 
});

const geistPtSerif = PT_Serif({
  subsets: ['latin'], 
  weight: ['400', '700'], 
  variable: '--font-pt-serif',  
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${geistNunito.variable}  ${geistPtSerif.variable} antialiased`}
      >
        <ThemeProvider enableSystem={true} attribute="class">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
