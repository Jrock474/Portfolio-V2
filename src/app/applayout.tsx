export default function appLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body
          className="antialiased bg-gray-900 text-white min-h-screen flex flex-col relative"
        >
          {children}
        </body>
      </html>
    );
  }