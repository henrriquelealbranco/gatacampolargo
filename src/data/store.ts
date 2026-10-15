import type { ShopProduct } from "../lib/commerce";

export const store = {
  name: "Gata Arrumada",
  subtitle: "Moda Feminina",
  city: "Campo Largo, Paraná",
  hours: "Seg–Sex 9h–18h | Sáb 9h–15h",
  instagram: "https://www.instagram.com/gatacampolargo/",
  instagramHandle: "@gatacampolargo",
  whatsapp: "https://wa.me/message/IBJF2M65K7BDC1",
  whatsappSource:
    "Link wa.me/message/IBJF2M65K7BDC1 confirmado no perfil público @gatacampolargo pelo Chrome do usuário em 15/10/2026.",
  demoNotice:
    "Demonstração de layout comercial para Gata Arrumada. Produtos e condições sujeitos à confirmação da loja.",
  tagline: "Seu próximo look favorito está aqui! ✨",
};

export type Product = ShopProduct & {
  slug: string;
  images: string[];
  description: string;
  illustrative?: boolean;
  tag?: string;
};

const image = (name: string) => `/images/gata/${name}.webp`;

export const categories = [
  "Vestidos",
  "Conjuntos",
  "Blusas",
  "Saias",
  "Acessórios",
];

export const products: Product[] = [
  {
    id: "conjunto-linho-richelieu",
    slug: "conjunto-linho-bordado-richelieu",
    name: "Conjunto Linho Bordado Richelieu",
    category: "Conjuntos",
    sizes: ["P", "M", "G"],
    price: null,
    images: [image("conjunto-linho-richelieu"), image("detalhe-floral-denim")],
    description:
      "Top corset estruturado tomara-que-caia e calça em alfaiataria de linho areia com bordados vazados e renda guipir branca nas laterais.",
    tag: "Destaque da Coleção",
  },
  {
    id: "vestido-chemise-marsala",
    slug: "vestido-chemise-listrado-marsala",
    name: "Vestido Chemise Listrado Marsala",
    category: "Vestidos",
    sizes: ["P", "M", "G"],
    price: null,
    images: [image("vestido-chemise-marsala"), image("camisa-listrada-marsala")],
    description:
      "Vestido maxi com gola halter, abotoamento frontal e cinto faixa para ajuste na cintura em elegante padronagem listrada marsala.",
    tag: "Novidade",
  },
  {
    id: "conjunto-nautico-listrado",
    slug: "conjunto-nautico-peplum-listrado",
    name: "Conjunto Náutico Peplum Listrado",
    category: "Conjuntos",
    sizes: ["P", "M", "G"],
    price: null,
    images: [image("conjunto-nautico-listrado"), image("look-resort-cocktail")],
    description:
      "Corset tomara-que-caia com modelagem peplum marcante acompanhado de shorts de alfaiataria em listrado vermelho e off-white.",
    tag: "Na vitrine",
  },
  {
    id: "saia-poa-marrom",
    slug: "saia-longa-evase-poa-marrom",
    name: "Saia Longa Evasê Poá Marrom",
    category: "Saias",
    sizes: ["P", "M", "G"],
    price: null,
    images: [image("saia-poa-marrom"), image("editorial-calca-marrom")],
    description:
      "Modelagem fluida evasê em poá marrom com microbolinhas brancas. Peça atemporal que combina perfeitamente com croppeds e camisas.",
    tag: "Tendência",
  },
  {
    id: "vestido-longo-turquesa",
    slug: "vestido-festa-turquesa-capa",
    name: "Vestido de Festa Turquesa com Capa",
    category: "Vestidos",
    sizes: ["P", "M", "G"],
    price: null,
    images: [image("vestido-longo-turquesa"), image("vestido-azul-serenity")],
    description:
      "Vestido de gala em tom turquesa deslumbrante com decote drapeado e mangas capa esvoaçantes que garantem movimento e sofisticação.",
    tag: "Moda Festa",
  },
  {
    id: "vestido-azul-serenity",
    slug: "vestido-longo-plissado-azul-serenity",
    name: "Vestido Plissado Azul Serenity",
    category: "Vestidos",
    sizes: ["P", "M", "G"],
    price: null,
    images: [image("vestido-azul-serenity"), image("vestido-longo-turquesa")],
    description:
      "Musseline delicada em plissado fluido, tonalidade azul serenity suave, fenda lateral e mangas em capa esvoaçante.",
    tag: "Moda Festa",
  },
  {
    id: "camisa-cetim-champagne",
    slug: "camisa-acetinada-champagne-alfaiataria",
    name: "Camisa Acetinada Champagne & Calça Marrom",
    category: "Blusas",
    sizes: ["P", "M", "G"],
    price: null,
    images: [image("camisa-cetim-champagne"), image("editorial-calca-marrom")],
    description:
      "Camisa em cetim de toque macio e brilho champagne sofisticado, acompanhada de calça marrom em corte impecável.",
    tag: "Chic Contemporâneo",
  },
  {
    id: "camisa-listrada-marsala",
    slug: "camisa-alongada-listrada-marsala",
    name: "Camisa Alongada Listrada Marsala",
    category: "Blusas",
    sizes: ["P", "M", "G"],
    price: null,
    images: [image("camisa-listrada-marsala"), image("vestido-chemise-marsala")],
    description:
      "Camisa de alfaiataria contemporânea com listras verticais em tom marsala, punhos alongados e caimento impecável.",
  },
  {
    id: "semijoias-acessorios",
    slug: "cartela-semijoias-cristais-gata-arrumada",
    name: "Cartela Semijoias & Cristais Gata Arrumada",
    category: "Acessórios",
    sizes: ["Único"],
    price: null,
    images: [image("semijoias-acessorios")],
    description:
      "Conjuntos de brincos e colares com cristais nobres facetados em lapidação gota e oval na embalagem personalizada Gata Arrumada.",
    tag: "Acessórios",
  },
  {
    id: "look-resort-cocktail",
    slug: "look-resort-primavera-verao",
    name: "Look Resort Primavera/Verão",
    category: "Conjuntos",
    sizes: ["P", "M", "G"],
    price: null,
    images: [image("look-resort-cocktail"), image("saia-poa-marrom")],
    description:
      "Conjunto leve e refrescante com estampa poá clássica, feito sob medida para passeios, fins de semana e viagens ensolaradas.",
    tag: "Primavera/Verão",
  },
];
