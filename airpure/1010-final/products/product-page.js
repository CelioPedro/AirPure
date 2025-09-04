// Product Page JavaScript

// Simple product page functionality
document.addEventListener('DOMContentLoaded', () => {
  // Add to cart functionality
  const addToCartBtn = document.querySelector('.btn-secondary');
  if (addToCartBtn) {
    addToCartBtn.addEventListener('click', () => {
      const productName = document.querySelector('.product-info-title').textContent;
      const productPrice = document.querySelector('.product-info-price').textContent;

      // Simple cart simulation
      addToCartBtn.textContent = 'Adicionado!';
      addToCartBtn.style.background = '#27ae60';

      setTimeout(() => {
        addToCartBtn.textContent = 'Adicionar ao Carrinho';
        addToCartBtn.style.background = '';
      }, 2000);

      alert(`${productName} foi adicionado ao carrinho!\nPreço: ${productPrice}`);
    });
  }

  // Buy now functionality
  const buyNowBtn = document.querySelector('.btn-primary');
  if (buyNowBtn) {
    buyNowBtn.addEventListener('click', () => {
      const productName = document.querySelector('.product-info-title').textContent;
      alert(`Redirecionando para checkout de ${productName}...`);
      // In a real app, this would redirect to checkout
    });
  }
});
