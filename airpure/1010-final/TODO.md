# TODO: Corrigir imagens de fundo do hero

## Passos para resolver o problema das imagens de fundo não aparecerem:

1. [x] Corrigir o array de imagens no hero-slider.js para incluir apenas as imagens que existem (HeroBG01.jpg a HeroBG04.jpg)
2. [x] Ajustar o z-index do container do slider JS para garantir que as imagens apareçam acima do ::before do CSS
3. [x] Remover ou comentar o ::before no hero.css para evitar conflito com o slider JS
4. [x] Ajustar z-index do texto para aparecer acima das imagens
5. [x] Adicionar efeito de movimento da esquerda para a direita e zoom em todas as imagens (usando backgroundPosition para evitar corte da imagem)
6. Testar o slider para garantir que as imagens mudem corretamente
