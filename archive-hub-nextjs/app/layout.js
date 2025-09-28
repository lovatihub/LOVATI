export const metadata = {
  title: "Ain't George — Archive",
  description: "Creative archive for music, fashion, acting & ventures",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
