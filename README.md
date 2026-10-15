# Gata Arrumada — demonstração comercial

Loja virtual de moda feminina navegável, com catálogo e seleção de peças com integração para atendimento e pedidos via WhatsApp, criada para a marca **Gata Arrumada** (@gatacampolargo), de Campo Largo - PR.

## Executar localmente

Requer Node.js 20+ ou 24 e npm. Dentro deste repositório:

```sh
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000). Para testar o build de produção:

```sh
npm run build
npm start
```

Verificações:

```sh
npm test
npm run typecheck
```

## Experiência implementada

- **Página inicial:** Identidade visual completa da Gata Arrumada, logotipo oficial, banner com slogan *"Seu próximo look favorito está aqui! ✨"*, categorias, vitrine com peças em destaque, looks/inspirações de moda festa e combinações, apresentação da loja física de Campo Largo e canal de atendimento.
- **Catálogo:** Peças reais do feed, busca por nome e categoria (sem distinção de acentos), filtros combinados por categoria e tamanho, URLs compartilháveis e estados vazios amigáveis.
- **Detalhe do Produto:** Galeria de imagens em alta definição, seleção obrigatória de tamanho, controle de quantidade e botão direto de tirar dúvidas no WhatsApp da loja.
- **Sacola de Compras:** Quantidades ajustáveis, remoção de itens, persistência no navegador (`localStorage`) e resumo com mensagem formatada.
- **Integração WhatsApp:** Mensagem pré-formatada contendo os itens, tamanhos e quantidades. O link abre diretamente o chat oficial da Gata Arrumada (`wa.me/message/IBJF2M65K7BDC1`).
- **Design & Acessibilidade:** Responsivo para smartphones, tablets e desktop, paleta sofisticada com blush pink, rosé suave, off-white e detalhes refinados, tipografia elegante, foco visível e meta tags configuradas.
- **Totalmente estático e seguro:** Sem backend, cobrança, login ou banco de dados externo.

## Configuração e materiais

`src/data/store.ts` centraliza as informações da loja, horários, endereço, link do Instagram e produtos.
As imagens utilizadas foram extraídas e otimizadas em formato WebP a partir do material público da marca no Instagram (@gatacampolargo).

## Publicação na Vercel

1. Conecte o repositório `henrriquelealbranco/gatacampolargo` na Vercel.
2. Preset **Next.js**, diretório raiz.
3. Não requer variáveis de ambiente adicionais.

## Base e licença

Base adaptada a partir da estrutura de e-commerce com licença MIT preservada. O repositório remoto oficial é `henrriquelealbranco/gatacampolargo`.
