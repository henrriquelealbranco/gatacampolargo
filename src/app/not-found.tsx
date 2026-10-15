import Link from "next/link";
export default function NotFound() {
  return (
    <div className="empty-state container">
      <h1>Essa página não está na vitrine.</h1>
      <p>Volte à coleção para encontrar suas peças.</p>
      <Link href="/colecao" className="button">
        Ver coleção
      </Link>
    </div>
  );
}
