import './styles/globals.css';

export const metadata = {
  title: 'Number to Words Converter',
  description: 'Convert numbers to words in the Indian numbering system.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
