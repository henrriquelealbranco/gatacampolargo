export type Item = { id: string; size: string; quantity: number };
export type ShopProduct = {
  id: string;
  name: string;
  category: string;
  sizes: string[];
  price: number | null;
};
const normalize = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
export function filterProducts<T extends ShopProduct>(
  products: T[],
  query = "",
  category = "",
  size = "",
): T[] {
  return products.filter(
    (p) =>
      (!category || p.category === category) &&
      (!size || p.sizes.includes(size)) &&
      normalize(p.name + " " + p.category).includes(normalize(query.trim())),
  );
}
export function addItem(
  bag: Item[],
  products: ShopProduct[],
  id: string,
  size: string,
  quantity: number,
): Item[] {
  const product = products.find((p) => p.id === id);
  if (
    !product?.sizes.includes(size) ||
    !Number.isInteger(quantity) ||
    quantity < 1 ||
    quantity > 99
  )
    throw new Error("Selecione um tamanho e uma quantidade válida.");
  const existing = bag.find((i) => i.id === id && i.size === size);
  return existing
    ? bag.map((i) =>
        i === existing
          ? { ...i, quantity: Math.min(99, i.quantity + quantity) }
          : i,
      )
    : [...bag, { id, size, quantity }];
}
export function restoreBag(
  raw: string | null,
  products: ShopProduct[],
): Item[] {
  try {
    const data: unknown = JSON.parse(raw || "[]");
    if (!Array.isArray(data)) return [];
    return data.reduce<Item[]>((bag, i) => {
      if (
        i &&
        typeof i.id === "string" &&
        typeof i.size === "string" &&
        Number.isInteger(i.quantity) &&
        i.quantity >= 1 &&
        i.quantity <= 99 &&
        products.some((p) => p.id === i.id && p.sizes.includes(i.size))
      )
        return addItem(bag, products, i.id, i.size, i.quantity);
      return bag;
    }, []);
  } catch {
    return [];
  }
}
export const formatPrice = (price: number | null) =>
  price === null
    ? "Consulte o valor"
    : price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
export function makeOrderMessage(bag: Item[], products: ShopProduct[]): string {
  return [
    "Olá, Gata Arrumada! Montei esta seleção na demonstração e gostaria de confirmar valores, tamanhos e disponibilidade:",
    ...bag.map((i) => {
      const p = products.find((p) => p.id === i.id);
      return p
        ? `• ${p.name} | tamanho ${i.size} | quantidade ${i.quantity} | ${formatPrice(p.price)}`
        : "";
    }),
    "Os tamanhos e produtos são exemplos da demonstração. Aguardo a confirmação da loja.",
  ]
    .filter(Boolean)
    .join("\n");
}
export function whatsappUrl(numberOrUrl: string, message: string): string | null {
  if (!numberOrUrl) return null;
  const clean = numberOrUrl.trim();
  const textParam = `text=${encodeURIComponent(message)}`;
  if (/^\d{10,14}$/.test(clean)) {
    return `https://wa.me/${clean}?${textParam}`;
  }
  if (clean.startsWith("https://wa.me/") || clean.startsWith("http://wa.me/")) {
    const separator = clean.includes("?") ? "&" : "?";
    return `${clean}${separator}${textParam}`;
  }
  if (clean.startsWith("wa.me/")) {
    const separator = clean.includes("?") ? "&" : "?";
    return `https://${clean}${separator}${textParam}`;
  }
  if (clean.startsWith("message/")) {
    return `https://wa.me/${clean}?${textParam}`;
  }
  return null;
}
