import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Blog -  Este é um blog feito com next.js",
  description: "Essa seria a descrição desta página",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR" >
      <body className="qualquer">
        <header><h1>Header</h1></header>

        <div className="bg-red-500">{children}</div>

        <footer><h1>Footer</h1></footer>
      </body>
    </html>
  );
}
