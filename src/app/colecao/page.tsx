import { Suspense } from "react";
import Catalog from "@/components/valentina/Catalog";
export const metadata = { title: "Nossa coleção" };
export default function Page() {
  return (
    <Suspense
      fallback={<div className="container section">Carregando coleção...</div>}
    >
      <Catalog />
    </Suspense>
  );
}
