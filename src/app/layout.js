
import "./globals.css";
import Footer from "@/components/Footer";



export const metadata = {
  title: "Google-Next",
  description: "Google clone bult with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className='relative min-h-screen'
      >
        {children}
        <Footer/>
      </body>
    </html>
  );
}
