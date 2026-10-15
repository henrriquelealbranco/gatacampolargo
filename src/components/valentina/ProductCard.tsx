import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/data/store";
import { formatPrice } from "@/lib/commerce";
export default function ProductCard({
  product,
  eager = false,
}: {
  product: Product;
  eager?: boolean;
}) {
  return (
    <article className="product-card">
      <Link href={`/produto/${product.slug}`} className="product-photo">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          loading={eager ? "eager" : "lazy"}
          sizes="(max-width:600px) 46vw, (max-width:1000px) 30vw, 23vw"
        />
        <span className="product-badge">
          {product.illustrative
            ? "Imagem ilustrativa"
            : product.tag || "Editorial"}
        </span>
        <span className="photo-arrow">
          <ArrowUpRight size={16} />
        </span>
      </Link>
      <div className="product-card-info">
        <span className="eyebrow">{product.category}</span>
        <h3>
          <Link href={`/produto/${product.slug}`}>{product.name}</Link>
        </h3>
        <p>{formatPrice(product.price)}</p>
        <small>Disponibilidade sob consulta</small>
      </div>
    </article>
  );
}
