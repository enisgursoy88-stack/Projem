export const metadata = {
  title: "Projem",
  description: "Enis Gürsoy Projesi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
