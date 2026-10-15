"use client";
import Image from "next/image";
import Link from "next/link";
import {
  ShoppingBag,
  Minus,
  Plus,
  Trash2,
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";
import { products } from "@/data/store";
import { formatPrice, makeOrderMessage } from "@/lib/commerce";
import { useBag, WhatsAppLink } from "./Site";
export default function Bag() {
  const { bag, ready, update, remove, storageError } = useBag();
  const count = bag.reduce((n, i) => n + i.quantity, 0);
  const message = makeOrderMessage(bag, products);
  const allPricesKnown = bag.every(
    (i) => products.find((p) => p.id === i.id)?.price !== null,
  );
  const total = bag.reduce(
    (n, i) =>
      n + (products.find((p) => p.id === i.id)?.price || 0) * i.quantity,
    0,
  );
  return (
    <div className="container bag-page">
      <div className="page-intro">
        <span className="eyebrow">SELEÇÃO DE PEÇAS · GATA CAMPO LARGO</span>
        <h1>Sua sacola.</h1>
        <p>
          Peças escolhidas por você. Uma conversa para confirmar os detalhes.
        </p>
      </div>
      {storageError && (
        <p role="status" className="size-guide">
          Seu navegador não permitiu salvar a sacola. A seleção ficará
          disponível apenas nesta visita.
        </p>
      )}
      {!ready ? (
        <p role="status">Carregando sua sacola...</p>
      ) : bag.length ? (
        <div className="bag-layout">
          <div className="bag-items">
            {bag.map((item) => {
              const p = products.find((p) => p.id === item.id)!;
              return (
                <article className="bag-item" key={item.id + item.size}>
                  <Link href={`/produto/${p.slug}`} className="bag-photo">
                    <Image src={p.images[0]} alt={p.name} fill sizes="120px" />
                  </Link>
                  <div className="bag-item-info">
                    <span className="eyebrow">{p.category}</span>
                    <h2>
                      <Link href={`/produto/${p.slug}`}>{p.name}</Link>
                    </h2>
                    <p>Tamanho: {item.size}</p>
                    <p>{formatPrice(p.price)}</p>
                    <div className="quantity-control">
                      <button
                        aria-label={`Diminuir quantidade de ${p.name}, tamanho ${item.size}`}
                        disabled={item.quantity <= 1}
                        onClick={() =>
                          update(item.id, item.size, item.quantity - 1)
                        }
                      >
                        <Minus size={15} />
                      </button>
                      <output aria-label={`Quantidade de ${p.name}`}>
                        {item.quantity}
                      </output>
                      <button
                        aria-label={`Aumentar quantidade de ${p.name}, tamanho ${item.size}`}
                        disabled={item.quantity >= 99}
                        onClick={() =>
                          update(item.id, item.size, item.quantity + 1)
                        }
                      >
                        <Plus size={15} />
                      </button>
                    </div>
                  </div>
                  <button
                    className="icon-button remove-item"
                    aria-label={`Remover ${p.name}, tamanho ${item.size}`}
                    onClick={() => remove(item.id, item.size)}
                  >
                    <Trash2 size={19} />
                  </button>
                </article>
              );
            })}
            <Link href="/colecao" className="text-link">
              Continuar escolhendo <ArrowUpRight size={18} />
            </Link>
          </div>
          <aside className="bag-summary">
            <h2>Vamos combinar?</h2>
            <div className="summary-line">
              <span>Peças na sacola</span>
              <strong>{count}</strong>
            </div>
            <div className="summary-line">
              <span>Total</span>
              <strong>
                {allPricesKnown ? formatPrice(total) : "A confirmar"}
              </strong>
            </div>
            <p>
              Os valores, as medidas e a disponibilidade serão confirmados pela
              Gata Campo Largo.
            </p>
            <WhatsAppLink message={message} className="button">
              <MessageCircle size={20} />
              Consultar pelo WhatsApp
            </WhatsAppLink>
            <small>
              Ao clicar, você abre o WhatsApp com a seleção preenchida. Revise a
              mensagem e envie quando quiser.
            </small>
            <details>
              <summary>Ver mensagem da seleção</summary>
              <pre>{message}</pre>
            </details>
          </aside>
        </div>
      ) : (
        <div className="empty-state">
          <ShoppingBag size={38} strokeWidth={1} />
          <h2>Sua sacola está esperando um look.</h2>
          <p>
            Explore a coleção, escolha um tamanho e adicione suas peças
            favoritas.
          </p>
          <Link href="/colecao" className="button">
            Conheça a coleção <ArrowUpRight size={18} />
          </Link>
        </div>
      )}
    </div>
  );
}
