
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Training and Development',
  description: 'Professional training and development solutions for your organization',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}