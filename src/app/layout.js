import localFont from 'next/font/local';
import './globals.css';
import Navbar from '@/components/Navbar/Navbar';
import { Toaster } from 'react-hot-toast';

import { auth } from '@/auth';
import dbConnect from '@/lib/dbConnect';
import Footer from '@/components/Shared/Footer';
import TawkToWidget from '@/components/Shared/TawkToWidget';
import SmoothScrollWrapper from '@/components/ui/SmoothScroll';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata = {
  title: 'AS Programming - Learn and Master IT Skills',
  description:
    'AS Programming offers a wide range of IT-related courses, including web development, data science, cybersecurity, cloud computing, and full-stack JavaScript development. Start your learning journey with us and achieve your career goals.',
  keywords:
    'AS Programming, IT courses, web development, data science, cybersecurity, cloud computing, full-stack development, programming courses, online learning',
  author: 'Md Akash Khan',
  openGraph: {
    type: 'website',
    url: 'https://as-programming-next.netlify.app',
    title: 'AS Programming - Learn and Master IT Skills',
    description:
      'AS Programming offers a wide range of IT-related courses, including web development, data science, cybersecurity, cloud computing, and full-stack JavaScript development. Start your learning journey with us and achieve your career goals.',

    site_name: 'AS Programming',
  },
};

export default async function RootLayout({ children }) {
  const session = await auth();
  await dbConnect();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SmoothScrollWrapper>
          <header>
            <Navbar user={session?.user} />
          </header>
          <main className="min-h-[calc(100vh-268px)] w-full relative">
            <div
              className="fixed inset-0 z-[-9] bg-cover bg-center"
              style={{
                background:
                  'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255, 80, 120, 0.25), transparent 70%), #000000',
              }}
            />

            {/* Dual Gradient Overlay Background */}
            <div
              className="fixed inset-0 z-[-9]"
              style={{
                backgroundImage: `
        linear-gradient(to right, rgba(229,231,235,0.2) 0.1px, transparent 0.7px),
        linear-gradient(to bottom, rgba(229,231,235,0.2) 0.1px, transparent 0.7px),
        radial-gradient(circle 0px at 20% 80%, rgba(139,92,246,0.3), transparent),
        radial-gradient(circle 0px at 80% 20%, rgba(59,130,246,0.3), transparent)
      `,
                backgroundSize: '48px 48px, 48px 48px, 100% 100%, 100% 100%',
              }}
            />

            <Toaster position="top-center" reverseOrder={false} />

            {children}
          </main>
          {/* <TawkToWidget /> */}
          <Footer />
        </SmoothScrollWrapper>
      </body>
    </html>
  );
}
