import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MessageCircle, Heart, ShoppingBag } from "lucide-react";
import ProductCard from "@/components/valentina/ProductCard";
import { TextLink, WhatsAppLink } from "@/components/valentina/Site";
import { products, categories, store } from "@/data/store";

export default function Home() {
  const categoryImages: Record<string, string> = {
    Vestidos: "/images/gata/vestido-chemise-marsala.webp",
    Conjuntos: "/images/gata/conjunto-nautico-listrado.webp",
    Blusas: "/images/gata/camisa-cetim-champagne.webp",
    Saias: "/images/gata/saia-poa-marrom.webp",
    Acessórios: "/images/gata/semijoias-acessorios.webp",
  };

  return (
    <>
      <section className="hero container">
        <div className="hero-copy">
          <span className="eyebrow">GATA ARRUMADA · MODA FEMININA</span>
          <h1>
            Seu próximo
            <br />
            look favorito
            <br />
            <em>está aqui.</em>
          </h1>
          <p>
            Do look contemporâneo para o dia a dia às produções mais
            deslumbrantes para ocasiões especiais. Encontre o seu jeito de
            brilhar.
          </p>
          <Link className="button" href="/colecao">
            Conheça a coleção <ArrowUpRight size={20} />
          </Link>
          <div className="hero-footnote">
            <span className="small-line" /> Feminina · Elegante · Campo Largo
          </div>
        </div>
        <div className="hero-art">
          <div className="hero-photo">
            <Image
              src="/images/gata/conjunto-linho-richelieu.webp"
              alt="Conjunto em linho areia com bordados Richelieu — Gata Arrumada"
              fill
              loading="eager"
              sizes="(max-width:700px) 85vw, 40vw"
            />
          </div>
          <div className="hero-inset">
            <Image
              src="/images/gata/semijoias-acessorios.webp"
              alt="Semijoias e acessórios Gata Arrumada"
              fill
              sizes="(max-width:700px) 28vw, 15vw"
            />
            <span>Detalhes que encantam.</span>
          </div>
          <div className="hero-caption">
            <span>LOJA FÍSICA EM CAMPO LARGO</span>
            <span>{store.hours}</span>
          </div>
        </div>
      </section>

      <div className="benefits container">
        <div>
          <Heart size={19} />
          <span>Moda feminina que valoriza você</span>
        </div>
        <div>
          <ShoppingBag size={19} />
          <span>Escolha suas peças com calma</span>
        </div>
        <div>
          <MessageCircle size={19} />
          <span>Atendimento direto pelo WhatsApp</span>
        </div>
      </div>

      <section className="section container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">ESCOLHA POR ONDE COMEÇAR</span>
            <h2>Qual é o seu estilo?</h2>
          </div>
          <TextLink href="/colecao">Ver toda a coleção</TextLink>
        </div>
        <div className="category-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
          {categories.map((name) => (
            <Link
              href={`/colecao?categoria=${encodeURIComponent(name)}`}
              className="category-card"
              key={name}
            >
              <Image
                src={categoryImages[name] || "/images/gata/conjunto-linho-richelieu.webp"}
                alt={`Categoria ${name} — Gata Arrumada`}
                fill
                sizes="(max-width:700px) 46vw, 20vw"
              />
              <div>
                <h3>{name}</h3>
                <ArrowUpRight size={22} />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="novidades" className="section container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">NA NOSSA VITRINE</span>
            <h2>Destaques que você vai amar.</h2>
          </div>
          <TextLink href="/colecao">Explore as peças</TextLink>
        </div>
        <div className="product-grid">
          {[products[0], products[1], products[2], products[4]].map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <section id="looks" className="looks-section">
        <div className="container section">
          <div className="section-heading">
            <div>
              <span className="eyebrow">INSPIRE-SE</span>
              <h2>Para momentos inesquecíveis.</h2>
            </div>
            <p>Versatilidade, sofisticação e charme em cada look.</p>
          </div>
          <div className="looks-grid">
            <Link href="/colecao?categoria=Vestidos" className="look-card">
              <Image
                src="/images/gata/vestido-longo-turquesa.webp"
                alt="Vestido longo de gala turquesa com capa — Gata Arrumada"
                fill
                sizes="(max-width:700px) 90vw, 45vw"
              />
              <div>
                <span className="eyebrow">MODA FESTA & CELEBRAÇÕES</span>
                <h3>Pronta para o seu grande momento.</h3>
                <span className="text-link">
                  Ver vestidos de festa <ArrowUpRight size={18} />
                </span>
              </div>
            </Link>
            <Link href="/colecao?categoria=Blusas" className="look-card">
              <Image
                src="/images/gata/editorial-calca-marrom.webp"
                alt="Guia de combinações e estilo — Gata Arrumada"
                fill
                sizes="(max-width:700px) 90vw, 45vw"
              />
              <div>
                <span className="eyebrow">INSPIRAÇÃO & VERSATILIDADE</span>
                <h3>Composições que transformam seu look.</h3>
                <span className="text-link">
                  Ver blusas e combinações <ArrowUpRight size={18} />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section id="sobre" className="about-section container section">
        <div className="about-mark">
          <Image
            src="/images/gata/logo.webp"
            alt="Gata Arrumada — logotipo oficial"
            width={180}
            height={180}
          />
          <span>CAMPO LARGO · PR</span>
        </div>
        <div>
          <span className="eyebrow">DE CAMPO LARGO, PARA VOCÊ</span>
          <h2>
            Prazer, somos
            <br />a <em>Gata Arrumada.</em>
          </h2>
          <p>
            Moda feminina contemporânea, moderna e elegante, com peças pensadas
            para valorizar cada mulher com conforto e atitude.
          </p>
          <p>
            Nossa loja física está em Campo Largo (Paraná), pronta para receber
            você com carinho e atendimento dedicado. Gostou de algum look?
            Chame a gente no WhatsApp para conferir medidas, caimento e
            disponibilidade!
          </p>
          <TextLink href={store.instagram}>
            Conheça nosso Instagram {store.instagramHandle}
          </TextLink>
        </div>
      </section>

      <section className="contact-section container">
        <div>
          <span className="eyebrow">PODEMOS AJUDAR A ESCOLHER?</span>
          <h2>
            Seu próximo look começa
            <br />
            com uma conversa.
          </h2>
          <p>Tire suas dúvidas sobre tamanhos, medidas e disponibilidade.</p>
        </div>
        <WhatsAppLink className="button light">
          <MessageCircle size={20} /> Fale com a Gata Arrumada{" "}
          <ArrowUpRight size={18} />
        </WhatsAppLink>
      </section>
    </>
  );
}
