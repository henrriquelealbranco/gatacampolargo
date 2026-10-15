import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MessageCircle, Sparkles, ShoppingBag, ShieldCheck } from "lucide-react";
import ProductCard from "@/components/valentina/ProductCard";
import { TextLink, WhatsAppLink } from "@/components/valentina/Site";
import { products, store } from "@/data/store";

export default function Home() {
  return (
    <>
      {/* HERO SECTION EDITORIAL WIDE */}
      <section className="hero-wide">
        <div className="hero-wide-bg">
          <Image
            src="/images/editorial/hero-banner.webp"
            alt="Campanha editorial de moda feminina — Gata Campo Largo"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="hero-wide-overlay" />
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="hero-wide-content">
            <span className="eyebrow">PRÉVIA COMERCIAL · GATA CAMPO LARGO</span>
            <h1>
              Elegância atemporal,
              <br />
              feita para o seu
              <br />
              <em>momento.</em>
            </h1>
            <p>
              Uma experiência digital de moda feminina com padrão de estúdio.
              Modelagens contemporâneas, tecidos refinados e atendimento sob
              medida para Campo Largo e região.
            </p>
            <div className="hero-wide-actions">
              <Link className="button" href="/colecao">
                Explorar Catálogo <ArrowUpRight size={16} />
              </Link>
              <WhatsAppLink className="button light">
                <MessageCircle size={16} /> Atendimento WhatsApp
              </WhatsAppLink>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS BAR */}
      <div className="benefits container">
        <div>
          <Sparkles size={18} />
          <span>Modelagens nobres & corte refinado</span>
        </div>
        <div>
          <ShoppingBag size={18} />
          <span>Seleção de looks com sacola dinâmica</span>
        </div>
        <div>
          <ShieldCheck size={18} />
          <span>Atendimento direto pelo WhatsApp</span>
        </div>
      </div>

      {/* CURADORIA / VITRINE */}
      <section id="novidades" className="section container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">CURADORIA EM EVIDÊNCIA</span>
            <h2>Destaques da Coleção</h2>
          </div>
          <TextLink href="/colecao">Ver catálogo completo</TextLink>
        </div>
        <div className="product-grid">
          {[products[0], products[1], products[2], products[3]].map((p) => (
            <ProductCard key={p.id} product={p} eager />
          ))}
        </div>
      </section>

      {/* EDITORIAL SPLIT */}
      <section id="editorial" className="container">
        <div className="editorial-split">
          <div className="editorial-split-photo">
            <Image
              src="/images/editorial/editorial-look-luxo.webp"
              alt="Ensaio editorial — Gata Campo Largo"
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
          </div>
          <div className="editorial-split-copy">
            <span className="eyebrow">EDITORIAL DE MODA & ESTILO</span>
            <h2>Da alfaiataria ao look festa.</h2>
            <p>
              Peças versáteis desenhadas para transitar com naturalidade entre o
              dia a dia contemporâneo e ocasiões memoráveis. Uma abordagem que
              une conforto, elegância discreta e acabamentos impecáveis.
            </p>
            <Link className="button secondary" href="/colecao">
              Explorar Looks <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* SEGUNDA FILEIRA DE DESTAQUES */}
      <section className="section container" style={{ paddingTop: 0 }}>
        <div className="section-heading">
          <div>
            <span className="eyebrow">COMPOSIÇÕES & DETALHES</span>
            <h2>Camisaria & Semijoias</h2>
          </div>
          <TextLink href="/colecao">Ver todas as opções</TextLink>
        </div>
        <div className="product-grid">
          {[products[4], products[5], products[6], products[7]].map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* INSTITUCIONAL / SOBRE A LOJA */}
      <section id="sobre" className="container section">
        <div className="about-preview">
          <div>
            <span className="eyebrow">LOCALIZAÇÃO & ATENDIMENTO</span>
            <h2>
              Moda com presença,
              <br />
              feita para <em>você.</em>
            </h2>
            <p style={{ marginTop: "20px", fontSize: "14px", lineHeight: "1.85" }}>
              Localizada em Campo Largo (Paraná), a Gata Campo Largo reúne peças
              de moda feminina selecionadas para valorizar diferentes estilos,
              desde conjuntos contemporâneos até vestidos de festa sofisticados.
            </p>
            <p style={{ marginTop: "16px", fontSize: "14px", lineHeight: "1.85" }}>
              Nosso atendimento pelo WhatsApp permite confirmar caimentos,
              medidas exatas e disponibilidade de cada peça de forma ágil e
              atenciosa.
            </p>
            <div style={{ marginTop: "28px" }}>
              <TextLink href={store.instagram}>
                Visite nosso Instagram {store.instagramHandle}
              </TextLink>
            </div>
          </div>
          <div className="about-preview-card">
            <span className="about-preview-badge">Prévia Comercial</span>
            <h3>Estrutura pronta para a marca</h3>
            <p>
              Este site foi desenvolvido como uma proposta visual premium para
              apresentação à cliente. Todas as fontes, cores e fotografias estão
              organizadas em um ponto central do projeto.
            </p>
            <p>
              Assim que os materiais oficiais da marca forem confirmados, a
              substituição ocorre de forma direta e sem necessidade de
              reconstruir o layout.
            </p>
            <div style={{ marginTop: "20px", paddingTop: "16px", borderTop: "1px solid var(--line)", fontSize: "12px", color: "var(--muted)" }}>
              📍 <strong>{store.city}</strong> · {store.hours}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT BANNER */}
      <section className="contact-section container">
        <div>
          <span className="eyebrow">DÚVIDAS OU ENCOMENDAS</span>
          <h2>
            Seu próximo look começa
            <br />
            com uma conversa.
          </h2>
          <p>Consulte detalhes de tecido, medidas e disponibilidade diretamente no WhatsApp.</p>
        </div>
        <WhatsAppLink className="button light">
          <MessageCircle size={18} /> Iniciar Atendimento{" "}
          <ArrowUpRight size={16} />
        </WhatsAppLink>
      </section>
    </>
  );
}
