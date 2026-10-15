import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { products, store, categories } from "../src/data/store.ts";
test("catalog has complete products and every image is a packaged local asset", () => {
  assert.ok(products.length >= 8 && products.length <= 12);
  assert.equal(new Set(products.map((p) => p.id)).size, products.length);
  assert.equal(new Set(products.map((p) => p.slug)).size, products.length);
  for (const p of products) {
    assert.ok(p.sizes.length);
    assert.ok(p.description);
    assert.ok(p.images.length);
    for (const image of p.images)
      assert.ok(
        existsSync(new URL("../public" + image, import.meta.url)),
        `${p.name}: missing ${image}`,
      );
  }
  for (const category of categories)
    assert.ok(products.some((p) => p.category === category));
});
test("demo prices remain unconfirmed and contact has public provenance", () => {
  assert.ok(products.every((p) => p.price === null));
  assert.match(store.whatsappSource, /perfil público/);
  assert.match(store.demoNotice, /Demonstração/);
});
