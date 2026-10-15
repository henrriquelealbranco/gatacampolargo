import type { ShopProduct } from "../lib/commerce";

export const store = {
  name: "Gata Campo Largo",
  brandDisplay: "GATA",
  subtitle: "Moda Feminina",
  city: "Campo Largo, Paraná",
  hours: "Seg–Sex 9h–18h | Sáb 9h–15h",
  instagram: "https://www.instagram.com/gatacampolargo/",
  instagramHandle: "@gatacampolargo",
  whatsapp: "https://wa.me/message/IBJF2M65K7BDC1",
  whatsappSource:
    "Link wa.me/message/IBJF2M65K7BDC1 confirmado no perfil público @gatacampolargo pelo Chrome do usuário em 15/10/2026.",
  demoNotice:
    "Demonstração comercial de layout para Gata Campo Largo desenvolvida por Véllum. Fotografias editoriais conceituais para demonstração de prévia comercial.",
  tagline: "Elegância atemporal, feita para o seu momento.",
};

export type Product = ShopProduct & {
  slug: string;
  images: string[];
  description: string;
  illustrative?: boolean;
  tag?: string;
};

const image = (name: string) => `/images/editorial/${name}.webp`;

export const categories = [
  "Vestidos",
  "Conjuntos",
  "Blusas",
  "Saias",
  "Acessórios",
];

export const products: Product[] = [
  {
    id: "conjunto-alfaiataria-linho",
    slug: "conjunto-alfaiataria-linho-areia",
    name: "Conjunto Alfaiataria em Linho Areia",
    category: "Conjuntos",
    sizes: ["36", "38", "40", "42"],
    price: null,
    images: [image("conjunto-alfaiataria-linho"), image("conjunto-linho-detalhe")],
    description:
      "Tailleur em linho areia de alta gramatura com bordados botânicos aplicados, caimento reto e lapela clássica.",
    tag: "Destaque Editorial",
  },
  {
    id: "vestido-festa-plissado",
    slug: "vestido-longo-plissado-serenity",
    name: "Vestido Longo Plissado Serenity",
    category: "Vestidos",
    sizes: ["36", "38", "40", "42"],
    price: null,
    images: [image("vestido-festa-plissado"), image("vestido-plissado-detalhe")],
    description:
      "Vestido de gala em musseline plissada fluida com decote transpassado e saia em degradê suave azul serenity.",
    tag: "Moda Festa",
  },
  {
    id: "saia-evase-poa",
    slug: "saia-evase-poa-chocolate",
    name: "Saia Midi Evasê Poá Chocolate",
    category: "Saias",
    sizes: ["P", "M", "G"],
    price: null,
    images: [image("saia-evase-poa"), image("saia-poa-detalhe")],
    description:
      "Saia fluida com padronagem poá clássica em fundo marrom chocolate, cintura alta estruturada e movimento elegante.",
    tag: "Ateliê",
  },
  {
    id: "camisa-seda-champagne",
    slug: "camisa-acetinada-champagne",
    name: "Camisa Acetinada Champagne",
    category: "Blusas",
    sizes: ["P", "M", "G"],
    price: null,
    images: [image("camisa-seda-champagne"), image("camisa-champagne-detalhe")],
    description:
      "Blusa de seda acetinada com gola drapeada suave, punhos alongados e acabamento impecável.",
    tag: "Clássico",
  },
  {
    id: "semijoias-cristais-luxo",
    slug: "conjunto-gota-cristais-ouro",
    name: "Conjunto Gota Cristais & Ouro",
    category: "Acessórios",
    sizes: ["Único"],
    price: null,
    images: [image("semijoias-cristais-luxo"), image("semijoias-detalhe")],
    description:
      "Colar e brincos com pedras em lapidação nobre facetada e acabamento com banho em ouro e cravação de zircônias.",
    tag: "Acessórios",
  },
  {
    id: "tailleur-camel-estruturado",
    slug: "tailleur-estruturado-camel",
    name: "Tailleur Estruturado Camel",
    category: "Conjuntos",
    sizes: ["36", "38", "40", "42"],
    price: null,
    images: [image("editorial-look-luxo"), image("editorial-luxo-detalhe")],
    description:
      "Blazer clássico em lã fria e algodão penteado acompanhado de calça pantalona com vinco impecável.",
    tag: "Alfaiataria",
  },
  {
    id: "colete-tricot-offwhite",
    slug: "colete-tricot-canelado-offwhite",
    name: "Colete Tricot Canelado Off-White",
    category: "Blusas",
    sizes: ["P", "M", "G"],
    price: null,
    images: [image("saia-poa-detalhe"), image("saia-evase-poa")],
    description:
      "Tricot macio com gola canelada, perfeito para composições e sobreposições atemporais.",
    tag: "Essenciais",
  },
  {
    id: "vestido-musseline-festa",
    slug: "vestido-evase-drapeado-festa",
    name: "Vestido Evasê Drapeado Festa",
    category: "Vestidos",
    sizes: ["36", "38", "40"],
    price: null,
    images: [image("vestido-plissado-detalhe"), image("vestido-festa-plissado")],
    description:
      "Modelagem fluida com drapeado artesanal no busto e caimento leve em tons suaves para celebrações.",
    tag: "Moda Festa",
  },
];
