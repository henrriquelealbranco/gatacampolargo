import type { Metadata, Viewport } from "next";
import "@/styles/valentina.css";
import { Site } from "@/components/valentina/Site";
export const metadata: Metadata = {
  title: {
    default: "Gata Campo Largo | Moda Feminina em Campo Largo",
    template: "%s | Gata Campo Largo",
  },
  description:
    "Catálogo e prévia exclusiva da Gata Campo Largo. Moda feminina contemporânea, alfaiataria e peças selecionadas em Campo Largo - PR.",
  robots: { index: false, follow: false },
  icons: { icon: "/icon.svg" },
};
export const viewport: Viewport = { themeColor: "#fbf9f6" };
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" data-scroll-behavior="smooth">
      <body>
        <Site>{children}</Site>
      </body>
    </html>
  );
}
