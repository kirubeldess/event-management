import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
// import { ClerkProvider } from "@clerk/nextjs";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ['400','500','600','700']
});



export const metadata: Metadata = {
  title: "EventEase",
  description: "Your goto platform for event management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY} afterSignOutUrl='/'>
      <html lang="en">
        <body className={`${poppins.variable}  antialiased`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
