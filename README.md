# AGIJ FERT

Testeagr

Landing page institucional da AGIJ FERT para Sorriso–MT e região.

## Desenvolvimento

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## GitHub Pages

O workflow em `.github/workflows/deploy-pages.yml` executa o build e publica automaticamente a branch `main` no GitHub Pages.

O endereço do site é:

`https://nluttllbg.github.io/Manus1/`

O Vite usa `/Manus1/` como base de produção e as imagens usam `import.meta.env.BASE_URL`. Isso evita a tela branca e os assets quebrados quando o GitHub Pages serve o projeto dentro da subpasta do repositório.
