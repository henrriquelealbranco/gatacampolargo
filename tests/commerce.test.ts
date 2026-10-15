import { test } from "node:test";
import assert from "node:assert/strict";
import {
  filterProducts,
  restoreBag,
  addItem,
  makeOrderMessage,
  whatsappUrl,
} from "../src/lib/commerce.ts";
const products = [
  {
    id: "blusa",
    name: "Blusa Elegância",
    category: "Blusas",
    sizes: ["P", "M"],
    price: null,
  },
  {
    id: "calca",
    name: "Calça Jeans",
    category: "Calças",
    sizes: ["38"],
    price: 129.9,
  },
];
test("search ignores accents and combines category and size", () => {
  assert.equal(filterProducts(products, "elegancia", "Blusas", "M").length, 1);
  assert.equal(filterProducts(products, "", "Blusas", "38").length, 0);
});
test("matching sizes merge quantities and distinct sizes stay separate", () => {
  const bag = addItem([], products, "blusa", "P", 2);
  assert.equal(addItem(bag, products, "blusa", "P", 1)[0].quantity, 3);
  assert.equal(addItem(bag, products, "blusa", "M", 1).length, 2);
  assert.throws(() => addItem(bag, products, "blusa", "GG", 1));
});
test("restore rejects corrupt, obsolete and invalid entries", () => {
  assert.deepEqual(restoreBag("oops", products), []);
  assert.deepEqual(
    restoreBag(
      JSON.stringify([
        { id: "missing", size: "P", quantity: 1 },
        { id: "blusa", size: "P", quantity: -1 },
      ]),
      products,
    ),
    [],
  );
});
test("message includes sizes, quantities and known or unknown prices", () => {
  const message = makeOrderMessage(
    [
      { id: "blusa", size: "M", quantity: 2 },
      { id: "calca", size: "38", quantity: 1 },
    ],
    products,
  );
  assert.match(message, /Blusa Elegância.*M.*2.*Consulte o valor/);
  assert.match(message, /129,90/);
  assert.match(message, /confirmar/);
  assert.equal(whatsappUrl("", message), null);
  assert.match(
    whatsappUrl("5542999972974", message)!,
    /^https:\/\/wa.me\/5542999972974\?text=/,
  );
  assert.match(
    whatsappUrl("https://wa.me/message/IBJF2M65K7BDC1", message)!,
    /^https:\/\/wa.me\/message\/IBJF2M65K7BDC1\?text=/,
  );
});
