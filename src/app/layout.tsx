import type { Metadata, Viewport } from "next";
import "@/styles/valentina.css";
import { Site } from "@/components/valentina/Site";
export const metadata: Metadata = {
  title: {
    default: "Gata Arrumada | Moda Feminina em Campo Largo",
    template: "%s | Gata Arrumada",
  },
  description:
    "Conheça a seleção de moda feminina da Gata Arrumada em Campo Largo, Paraná. Demonstração de catálogo com atendimento pelo WhatsApp.",
  robots: { index: false, follow: false },
  icons: { icon: "/icon.svg" },
};
export const viewport: Viewport = { themeColor: "#fffafc" };
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" data-scroll-behavior="smooth">
      <body>
        <Site>{children}</Site>
      </body>
    </html>
  );
}
