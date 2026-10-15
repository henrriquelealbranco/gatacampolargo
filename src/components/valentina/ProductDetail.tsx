"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Check,
  ShoppingBag,
  MessageCircle,
  Minus,
  Plus,
  ArrowLeft,
} from "lucide-react";
import { type Product } from "@/data/store";
import { formatPrice } from "@/lib/commerce";
import { useBag, WhatsAppLink } from "./Site";
export default function ProductDetail({ product }: { product: Product }) {
  const [photo, setPhoto] = useState(0),
    [size, setSize] = useState(""),
    [quantity, setQuantity] = useState(1),
    [status, setStatus] = useState(""),
    [guide, setGuide] = useState(false);
  const { add, ready } = useBag();
  const addToBag = () => {
    if (!size) {
      setStatus("Escolha um tamanho para adicionar a peça.");
      return;
    }
    add(product.id, size, quantity);
    setStatus("Peça adicionada à sua sacola.");
  };
  return (
    <div className="container product-page">
      <Link className="back-link" href="/colecao">
        <ArrowLeft size={17} />
        Voltar à coleção
      </Link>
      <div className="product-layout">
        <div className="gallery">
          <div className="gallery-main">
            <Image
              src={product.images[photo]}
              alt={`${product.name} — foto ${photo + 1}`}
              fill
              loading="eager"
              sizes="(max-width:700px) 92vw, 50vw"
            />
            {product.illustrative && (
              <span className="product-badge">Imagem ilustrativa</span>
            )}
          </div>
          <div className="thumbnails">
            {product.images.map((image, i) => (
              <button
                key={image}
                aria-label={`Ver foto ${i + 1}`}
                aria-pressed={photo === i}
                className={photo === i ? "selected" : ""}
                onClick={() => setPhoto(i)}
              >
                <Image src={image} alt="" fill sizes="75px" />
              </button>
            ))}
          </div>
        </div>
        <div className="product-detail">
          <span className="eyebrow">
            {product.category} · GATA ARRUMADA
          </span>
          <h1>{product.name}</h1>
          <p className="product-price">{formatPrice(product.price)}</p>
          <p>{product.description}</p>
          <div className="detail-rule" />
          <div className="size-heading">
            <label>Tamanho {size && <strong>· {size}</strong>}</label>
            <button
              className="text-link"
              onClick={() => setGuide(!guide)}
              aria-expanded={guide}
            >
              Sobre os tamanhos
            </button>
          </div>
          <div className="sizes" role="group" aria-label="Escolha o tamanho">
            {product.sizes.map((s) => (
              <button
                key={s}
                aria-pressed={size === s}
                onClick={() => {
                  setSize(s);
                  setStatus("");
                }}
                className={size === s ? "selected" : ""}
              >
                {s}
              </button>
            ))}
          </div>
          {guide && (
            <div className="size-guide">
              Os tamanhos são opções de demonstração e não indicam estoque. Peça
              as medidas da peça pelo WhatsApp antes de confirmar seu pedido.
            </div>
          )}
          <div className="purchase-row">
            <div className="quantity-control">
              <button
                aria-label="Diminuir quantidade"
                disabled={quantity <= 1}
                onClick={() => setQuantity((q) => q - 1)}
              >
                <Minus size={16} />
              </button>
              <output aria-label="Quantidade">{quantity}</output>
              <button
                aria-label="Aumentar quantidade"
                disabled={quantity >= 99}
                onClick={() => setQuantity((q) => q + 1)}
              >
                <Plus size={16} />
              </button>
            </div>
            <button className="button" onClick={addToBag} disabled={!ready}>
              <ShoppingBag size={19} />
              Adicionar à sacola
            </button>
          </div>
          <div role="status" className="product-status">
            {status && (
              <>
                <Check size={17} />
                {status}{" "}
                {status.startsWith("Peça") && (
                  <Link href="/sacola">Ver sacola</Link>
                )}
              </>
            )}
          </div>
          <WhatsAppLink
            className="text-link"
            message={`Olá, Gata Arrumada! Gostaria de confirmar o valor, as medidas e a disponibilidade de ${product.name}${size ? " no tamanho " + size : ""}.`}
          >
            <MessageCircle size={18} />
            Pergunte sobre esta peça
          </WhatsAppLink>
          <p className="small-note">
            Produto de exemplo da demonstração. Valor, tamanhos e
            disponibilidade sujeitos à confirmação com a Gata Arrumada.
          </p>
        </div>
      </div>
    </div>
  );
}
