export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    );
  }

  // global components like NavBar or Footer would live here
  // layout page can nested. You can have multiple layouts of sub-directories that would only apply to the children components