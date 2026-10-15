"use client";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import Link from "next/link";
import Image from "next/image";
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
  message = "Olá, Gata Arrumada! Gostaria de conhecer melhor as peças da loja.",
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
      setBag(restoreBag(localStorage.getItem("gata-arrumada-bag-v1"), products));
    } catch {
      setStorageError(true);
    }
    setReady(true);
  }, []);
  useEffect(() => {
    if (ready)
      try {
        localStorage.setItem("gata-arrumada-bag-v1", JSON.stringify(bag));
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
        Seu próximo look favorito está aqui! ✨ <span>Gata Arrumada · Campo Largo</span>
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
            aria-label="Gata Arrumada — início"
          >
            <Image
              src="/images/gata/logo.webp"
              alt="Logo Gata Arrumada"
              width={44}
              height={44}
              className="wordmark-logo"
              priority
            />
            <div className="wordmark-text">
              <span>GATA ARRUMADA</span>
              <small>MODA FEMININA · CAMPO LARGO</small>
            </div>
          </Link>
          <nav className="desktop-nav" aria-label="Navegação principal">
            <Link href="/colecao">Coleção</Link>
            <Link href="/#novidades">Novidades</Link>
            <Link href="/#looks">Inspire-se</Link>
            <Link href="/#sobre">A Loja</Link>
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
              Coleção
            </Link>
            <Link href="/#novidades" onClick={() => setMenu(false)}>
              Novidades
            </Link>
            <Link href="/#looks" onClick={() => setMenu(false)}>
              Inspire-se
            </Link>
            <Link href="/#sobre" onClick={() => setMenu(false)}>
              A Loja
            </Link>
          </nav>
        )}
        {search && (
          <form id="site-search" action="/colecao" className="header-search">
            <label htmlFor="global-search">O que você procura?</label>
            <div>
              <input
                id="global-search"
                name="busca"
                placeholder="Experimente vestido, conjunto, saia, blusa..."
                autoFocus
              />
              <button className="button" type="submit">
                Buscar <Search size={18} />
              </button>
            </div>
          </form>
        )}
      </header>
      <main id="conteudo">{children}</main>
      <footer className="site-footer">
        <div className="footer-grid container">
          <div>
            <Link href="/" className="wordmark">
              <Image
                src="/images/gata/logo.webp"
                alt="Logo Gata Arrumada"
                width={40}
                height={40}
                className="wordmark-logo"
              />
              <div className="wordmark-text">
                <span>GATA ARRUMADA</span>
                <small>MODA FEMININA · CAMPO LARGO</small>
              </div>
            </Link>
            <p>
              Seu próximo look favorito está aqui! ✨
              <br />
              Moda feminina, moderna e elegante.
              <br />
              {store.hours}
            </p>
          </div>
          <div>
            <h3>Explore</h3>
            <Link href="/colecao">Nossa coleção</Link>
            <Link href="/#sobre">Conheça a loja</Link>
            <Link href="/sacola">Sua sacola</Link>
          </div>
          <div>
            <h3>Vamos conversar</h3>
            <a href={store.instagram} target="_blank" rel="noopener noreferrer">
              <Instagram size={17} /> {store.instagramHandle}
            </a>
            <WhatsAppLink className="footer-link">
              <MessageCircle size={17} /> Atendimento pelo WhatsApp
            </WhatsAppLink>
            <p>
              <MapPin size={17} />
              {store.city}
            </p>
          </div>
          <Image
            className="footer-logo"
            src="/images/gata/logo.webp"
            alt="Logo Gata Arrumada"
            width={90}
            height={90}
          />
        </div>
        <div className="footer-bottom container">
          <span>Gata Arrumada | Moda Feminina · Campo Largo - PR</span>
          <span>{store.demoNotice}</span>
        </div>
      </footer>
      <WhatsAppLink
        className="floating-whatsapp"
        label="Fale com a Gata Arrumada pelo WhatsApp"
      >
        <MessageCircle size={22} />
        <span>Fale com a Gata Arrumada</span>
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
      <ArrowUpRight size={18} />
    </Link>
  );
}
