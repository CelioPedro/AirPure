# Guia de Imagens - AirPure Project

## Estrutura de Pastas

```
images/
├── hero/           # Imagens da seção hero (backgrounds, elementos visuais)
├── products/       # Imagens de produtos (purificadores, acessórios)
├── icons/          # Ícones (logos, ícones de navegação, sociais)
└── backgrounds/    # Imagens de fundo para outras seções
```

## Formatos Recomendados

### Para Web:
- **JPEG/JPG**: Para fotografias e imagens com muitos detalhes
- **PNG**: Para imagens com transparência ou elementos gráficos
- **WebP**: Formato moderno com melhor compressão (suporte limitado)
- **SVG**: Para ícones e elementos vetoriais

### Tamanhos Recomendados:

#### Hero Background:
- **Desktop**: 1920x1080px (mínimo), 2560x1440px (recomendado)
- **Tablet**: 1024x768px
- **Mobile**: 768x1024px
- **Formato**: JPG ou WebP para melhor performance

#### Product Images:
- **Thumbnail**: 400x400px
- **Medium**: 800x800px
- **Large**: 1200x1200px

#### Icons:
- **Small**: 24x24px, 32x32px
- **Medium**: 48x48px, 64x64px
- **Large**: 128x128px

## Otimização de Imagens

### Ferramentas Recomendadas:
1. **TinyPNG** ou **TinyJPG** - Compressão lossless
2. **ImageOptim** (Mac) ou **FileOptimizer** (Windows)
3. **Photoshop** ou **GIMP** - Edição e otimização
4. **Online tools**: Compressor.io, Squoosh.app

### Dicas de Performance:
- Mantenha o tamanho do arquivo abaixo de 500KB para imagens grandes
- Use lazy loading para imagens fora do viewport
- Considere usar imagens responsivas com `srcset`

## Como Adicionar Imagens

### 1. Hero Background
Para adicionar uma imagem de fundo no hero:

1. **Salve a imagem** em `images/hero/`
   - Nome sugerido: `hero-background.jpg` ou `hero-bg.webp`

2. **Atualize o CSS** em `css/hero.css`:
   ```css
   .hero {
     background-image: url('../images/hero/hero-background.jpg');
     background-size: cover;
     background-position: center;
     background-attachment: fixed;
   }
   ```

3. **Para múltiplas resoluções** (responsivo):
   ```css
   .hero {
     background-image: url('../images/hero/hero-bg-mobile.jpg');
   }

   @media (min-width: 768px) {
     .hero {
       background-image: url('../images/hero/hero-bg-tablet.jpg');
     }
   }

   @media (min-width: 1024px) {
     .hero {
       background-image: url('../images/hero/hero-bg-desktop.jpg');
     }
   }
   ```

### 2. Product Images
Para adicionar imagens de produtos:

1. **Salve as imagens** em `images/products/`
   - Exemplo: `purifier-model-x.jpg`, `filter-replacement.jpg`

2. **No HTML**, use:
   ```html
   <img src="images/products/purifier-model-x.jpg"
        alt="Purificador de Ar Modelo X"
        loading="lazy">
   ```

### 3. Icons
Para adicionar ícones:

1. **Salve os ícones** em `images/icons/`
   - Exemplo: `logo.svg`, `facebook-icon.png`

2. **No HTML**, use:
   ```html
   <img src="images/icons/logo.svg" alt="AirPure Logo">
   ```

## Convenções de Nomenclatura

- Use **kebab-case** para nomes de arquivos: `hero-background.jpg`
- Inclua **palavras-chave descritivas**: `air-purifier-white.jpg`
- Adicione **sufixos para versões**: `logo-dark.png`, `logo-light.png`
- Use **números sequenciais** para séries: `product-01.jpg`, `product-02.jpg`

## Checklist Antes de Upload

- [ ] Imagem otimizada para web?
- [ ] Nome do arquivo descritivo?
- [ ] Formato apropriado para o uso?
- [ ] Tamanho adequado para o dispositivo?
- [ ] Alt text preparado para acessibilidade?

## Exemplo Prático - Hero Background

1. **Prepare a imagem**:
   - Resolução: 1920x1080px
   - Formato: JPG
   - Tamanho: < 300KB
   - Nome: `hero-background.jpg`

2. **Coloque no diretório**:
   ```
   airpure/1010-final/images/hero/hero-background.jpg
   ```

3. **Atualize o CSS** (será feito automaticamente pelo sistema)

## Suporte e Manutenção

- Mantenha backups das imagens originais
- Documente mudanças significativas neste arquivo
- Teste em diferentes dispositivos e navegadores
- Monitore o impacto no tempo de carregamento da página
