"use client";
import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { products } from "@/data/store";
import { filterProducts } from "@/lib/commerce";
import ProductCard from "./ProductCard";
export default function Catalog() {
  const params = useSearchParams(),
    router = useRouter();
  const [filters, setFilters] = useState(false);
  const query = params.get("busca") || "",
    category = params.get("categoria") || "",
    size = params.get("tamanho") || "";
  const shown = filterProducts(products, query, category, size);
  const change = (key: string, value: string) => {
    const next = new URLSearchParams(params.toString());
    if (value) next.set(key, value);
    else next.delete(key);
    router.replace("/colecao" + (next.size ? "?" + next.toString() : ""), {
      scroll: false,
    });
  };
  const allCategories = Array.from(new Set(products.map((p) => p.category))),
    sizes = Array.from(new Set(products.flatMap((p) => p.sizes)));
  return (
    <div className="container catalog-page">
      <div className="page-intro">
        <span className="eyebrow">ENCONTRE O SEU PRÓXIMO LOOK</span>
        <h1>Nossa coleção.</h1>
        <p>Escolha suas peças. Os detalhes a gente conversa.</p>
      </div>
      <form className="catalog-search" action="/colecao">
        <Search size={19} />
        <label className="sr-only" htmlFor="catalog-query">
          Buscar peças
        </label>
        <input
          id="catalog-query"
          name="busca"
          placeholder="Busque por peça ou categoria"
          defaultValue={query}
          key={query}
        />
        {category && <input type="hidden" name="categoria" value={category} />}
        {size && <input type="hidden" name="tamanho" value={size} />}
        <button className="button" type="submit">
          Buscar
        </button>
      </form>
      <div className="catalog-toolbar">
        <span aria-live="polite">
          {shown.length} {shown.length === 1 ? "peça" : "peças"} na seleção
        </span>
        <button
          className="filter-toggle"
          onClick={() => setFilters(!filters)}
          aria-expanded={filters}
          aria-controls="catalog-filters"
        >
          <SlidersHorizontal size={18} />
          Filtros
        </button>
      </div>
      <div className="catalog-layout">
        <aside
          id="catalog-filters"
          className={`filters ${filters ? "is-open" : ""}`}
        >
          <h2>Encontre por</h2>
          <label htmlFor="category-filter">Categoria</label>
          <select
            id="category-filter"
            value={category}
            onChange={(e) => change("categoria", e.target.value)}
          >
            <option value="">Todas as peças</option>
            {allCategories.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
          <label htmlFor="size-filter">Tamanho</label>
          <select
            id="size-filter"
            value={size}
            onChange={(e) => change("tamanho", e.target.value)}
          >
            <option value="">Todos os tamanhos</option>
            {sizes.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
          <p className="small-note">
            Tamanhos apresentados para demonstrar a seleção. Confirme medidas e
            disponibilidade com a loja.
          </p>
          {(category || size || query) && (
            <button
              className="text-link"
              onClick={() => router.replace("/colecao", { scroll: false })}
            >
              <X size={16} />
              Limpar filtros
            </button>
          )}
        </aside>
        <div>
          {shown.length ? (
            <div className="product-grid catalog-grid">
              {shown.map((p, index) => (
                <ProductCard key={p.id} product={p} eager={index < 2} />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <Search size={32} />
              <h2>Nenhuma peça por aqui.</h2>
              <p>
                Experimente outro termo ou limpe os filtros para ver toda a
                seleção.
              </p>
              <button
                className="button"
                onClick={() => router.replace("/colecao")}
              >
                Ver todas as peças
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
