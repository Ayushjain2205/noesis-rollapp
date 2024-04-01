import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="h-full" lang="en">
      <Head />
      <body className="flex flex-col min-h-full bg-white" data-theme="custom">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
