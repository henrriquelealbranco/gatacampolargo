# Verificação — 14/10/2026

## Comandos

- Instalação: `npm install`, concluída; `package-lock.json` incluído para instalações reproduzíveis com `npm ci`.
- `npm test`: seis testes aprovados (busca, filtros combinados, sacola, dados persistidos inválidos, mensagem WhatsApp, integridade do catálogo e arquivos).
- `npm run typecheck`: aprovado.
- `npm run build`: aprovado, incluindo os dez produtos pré-renderizados.
- `npm audit --audit-level=low`: zero vulnerabilidades.
- `git diff --check`: aprovado.

O template não trazia uma suíte de testes. O antigo script `next lint` foi substituído por verificações de tipos e testes, pois a versão atual do Next não disponibiliza aquele comando. Não há resultado de lint para declarar.

## Navegação e apresentação

Conferidas no Chrome do usuário, em desktop e viewport móvel de 390 × 844:

- Página inicial, categorias, vitrine, seção de looks, apresentação, rodapé e contato.
- Catálogo, resultados da busca, filtros por categoria/tamanho e estado sem resultados.
- Produto com fotografia completa na galeria, troca de foto, seleção de tamanho e quantidade.
- Sacola com inclusão, alteração de quantidade, remoção, recuperação após reload e estado vazio.

O menu móvel foi operado também por Enter, e a seleção de tamanho foi ativada pelo teclado. O CSS inclui foco visível, link de salto e tratamento de redução de movimento. Isso é uma verificação prática, não uma certificação formal de acessibilidade.

Encontrado e corrigido durante a conferência: a busca removia o filtro de tamanho; agora os filtros permanecem na URL ao buscar. Encontrada e corrigida uma sobra horizontal do cabeçalho em 320 pixels. Após a correção, a página inicial em 320 pixels apresentou largura de conteúdo igual à largura disponível (305 pixels com a barra de rolagem do Chrome). Catálogo/produto/sacola foram conferidos no layout móvel, sem rolagem horizontal observada.

Respostas HTTP 200 verificadas para `/`, `/colecao`, `/produto/camiseta-wildflower`, `/sacola` e `/robots.txt`. Metadados `noindex`, idioma `pt-BR` e favicon Valentina presentes no HTML.

A última conferência visual utilizou `next start` sobre o build local. As capturas estão em `docs/screenshots/`. Não houve implantação externa.

## WhatsApp e limites

O destino foi confirmado no perfil público da própria loja: `5542999972974`. A mensagem da sacola foi inspecionada no link gerado, incluindo nome, tamanho, quantidade e “Consulte o valor”. Nenhum pedido ou mensagem foi enviado.

Valores, medidas e disponibilidade atuais não estão confirmados. Os produtos estão identificados como exemplos. Todas as imagens entregues vêm de publicações da Valentina ou das capturas enviadas; a proprietária deve aprovar os materiais antes de publicação em produção. Navegação não exige banco, login ou serviços pagos.
