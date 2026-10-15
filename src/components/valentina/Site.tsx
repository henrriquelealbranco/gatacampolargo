"use client";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowUpRight,
  Search,
  ShoppingBag,
  Menu,
  X,
  Instagram,
  MessageCircle,
  MapPin,
} from "lucide-react";
import { products, store } from "@/data/store";
import { addItem, restoreBag, whatsappUrl, type Item } from "@/lib/commerce";

type BagContext = {
  bag: Item[];
  ready: boolean;
  storageError: boolean;
  add: (id: string, size: string, quantity: number) => void;
  update: (id: string, size: string, quantity: number) => void;
  remove: (id: string, size: string) => void;
};

const Context = createContext<BagContext | null>(null);

export function useBag() {
  const value = useContext(Context);
  if (!value) throw new Error("Bag provider missing");
  return value;
}

export function WhatsAppLink({
  children,
  className = "button",
  message = "Olá, Gata Campo Largo! Gostaria de consultar as peças da coleção.",
  label,
}: {
  children: ReactNode;
  className?: string;
  message?: string;
  label?: string;
}) {
  const url = whatsappUrl(store.whatsapp, message);
  return url ? (
    <a
      className={className}
      aria-label={label}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  ) : (
    <div>
      <button className={className} disabled>
        {children}
      </button>
      <p>WhatsApp comercial ainda não confirmado.</p>
    </div>
  );
}

export function Site({ children }: { children: ReactNode }) {
  const [bag, setBag] = useState<Item[]>([]),
    [ready, setReady] = useState(false),
    [storageError, setStorageError] = useState(false),
    [menu, setMenu] = useState(false),
    [search, setSearch] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    try {
      setBag(restoreBag(localStorage.getItem("gata-campo-largo-bag-v1"), products));
    } catch {
      setStorageError(true);
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (ready)
      try {
        localStorage.setItem("gata-campo-largo-bag-v1", JSON.stringify(bag));
      } catch {
        setStorageError(true);
      }
  }, [bag, ready]);

  useEffect(() => {
    setMenu(false);
    setSearch(false);
  }, [pathname]);

  const remove = (id: string, size: string) =>
    setBag((b) => b.filter((i) => i.id !== id || i.size !== size));
  const count = bag.reduce((n, i) => n + i.quantity, 0);

  return (
    <Context.Provider
      value={{
        bag,
        ready,
        storageError,
        add: (id, size, quantity) =>
          setBag((b) => addItem(b, products, id, size, quantity)),
        remove,
        update: (id, size, quantity) => {
          if (quantity >= 1 && quantity <= 99 && Number.isInteger(quantity))
            setBag((b) =>
              b.map((i) =>
                i.id === id && i.size === size ? { ...i, quantity } : i,
              ),
            );
        },
      }}
    >
      <a href="#conteudo" className="skip-link">
        Pular para o conteúdo
      </a>
      <div className="announcement">
        Prévia de Apresentação Comercial <span>Gata Campo Largo · Moda Feminina</span>
      </div>
      <header className="site-header">
        <div className="header-inner">
          <button
            className="icon-button mobile-menu"
            aria-label={menu ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menu}
            aria-controls="mobile-navigation"
            onClick={() => setMenu(!menu)}
          >
            {menu ? <X /> : <Menu />}
          </button>
          <Link
            className="wordmark"
            href="/"
            aria-label="Gata Campo Largo — início"
          >
            <span className="wordmark-main">{store.brandDisplay}</span>
            <span className="wordmark-sub">CAMPO LARGO</span>
          </Link>
          <nav className="desktop-nav" aria-label="Navegação principal">
            <Link href="/colecao">Catálogo</Link>
            <Link href="/#editorial">Editorial</Link>
            <Link href="/#sobre">A Loja</Link>
            <Link href="/#contato">Atendimento</Link>
          </nav>
          <div className="header-actions">
            <button
              className="icon-button"
              aria-label={search ? "Fechar busca" : "Abrir busca"}
              aria-expanded={search}
              aria-controls="site-search"
              onClick={() => setSearch(!search)}
            >
              {search ? <X /> : <Search />}
            </button>
            <Link
              className="bag-link icon-button"
              href="/sacola"
              aria-label={`Sacola, ${count} ${count === 1 ? "peça" : "peças"}`}
            >
              <ShoppingBag />
              <span>{count}</span>
            </Link>
          </div>
        </div>
        {menu && (
          <nav
            id="mobile-navigation"
            className="mobile-nav"
            aria-label="Navegação móvel"
          >
            <Link href="/colecao" onClick={() => setMenu(false)}>
              Catálogo
            </Link>
            <Link href="/#editorial" onClick={() => setMenu(false)}>
              Editorial
            </Link>
            <Link href="/#sobre" onClick={() => setMenu(false)}>
              A Loja
            </Link>
            <Link href="/#contato" onClick={() => setMenu(false)}>
              Atendimento
            </Link>
          </nav>
        )}
        {search && (
          <form id="site-search" action="/colecao" className="header-search">
            <label htmlFor="global-search">Pesquisar no catálogo:</label>
            <div>
              <input
                id="global-search"
                name="busca"
                placeholder="Busque por vestidos, conjuntos, linho, saias..."
                autoFocus
              />
              <button className="button" type="submit">
                Buscar <Search size={16} />
              </button>
            </div>
          </form>
        )}
      </header>
      <main id="conteudo">{children}</main>
      <footer className="site-footer" id="contato">
        <div className="footer-grid container">
          <div>
            <Link href="/" className="wordmark">
              <span className="wordmark-main">{store.brandDisplay}</span>
              <span className="wordmark-sub">CAMPO LARGO</span>
            </Link>
            <p>
              Moda contemporânea e elegância atemporal.
              <br />
              Prévia de experiência digital desenvolvida com padrão de estúdio.
            </p>
          </div>
          <div>
            <h3>Navegação</h3>
            <Link href="/colecao">Catálogo Completo</Link>
            <Link href="/#editorial">Ensaio Editorial</Link>
            <Link href="/#sobre">Sobre a Loja</Link>
            <Link href="/sacola">Sacola de Peças</Link>
          </div>
          <div>
            <h3>Atendimento & Loja Física</h3>
            <a href={store.instagram} target="_blank" rel="noopener noreferrer">
              <Instagram size={16} /> {store.instagramHandle}
            </a>
            <WhatsAppLink className="footer-link">
              <MessageCircle size={16} /> Contato via WhatsApp
            </WhatsAppLink>
            <p>
              <MapPin size={16} /> {store.city}
            </p>
            <p style={{ fontSize: "11px", color: "var(--muted)", marginTop: "2px" }}>
              {store.hours}
            </p>
          </div>
        </div>
        <div className="footer-bottom container">
          <span>Gata Campo Largo · Moda Feminina</span>
          <span>{store.demoNotice}</span>
        </div>
      </footer>
      <WhatsAppLink
        className="floating-whatsapp"
        label="Fale com a Gata Campo Largo no WhatsApp"
      >
        <MessageCircle size={17} />
        <span>Fale no WhatsApp</span>
      </WhatsAppLink>
    </Context.Provider>
  );
}

export function TextLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link className="text-link" href={href}>
      {children}
      <ArrowUpRight size={16} />
    </Link>
  );
}
