const params = new URLSearchParams(window.location.search);
const categoria = params.get('categoria');

const titulo = document.getElementById('titulo-categoria');
const container = document.getElementById('imagens-categoria');

let currentIndex = 0;
let imagensCategoria = []; // vai receber as imagens da categoria

// ---------------- Dados das imagens direto no JS ----------------
const imagens = {
  aniversario: [
    "fotos/aniversario/WhatsApp Image 2025-08-17 at 20.04.31.jpeg",
    "fotos/aniversario/WhatsApp Image 2025-08-17 at 20.04.32 (1).jpeg",
    "fotos/aniversario/WhatsApp Image 2025-08-17 at 20.04.32.jpeg",
    "fotos/aniversario/WhatsApp Image 2025-08-17 at 20.04.33.jpeg",
    "fotos/aniversario/WhatsApp Image 2025-08-17 at 20.04.34.jpeg"
  ],
  prewedding: [
    "fotos/prewedding/WhatsApp Image 2025-08-09 at 16.54.03.jpeg",
    "fotos/prewedding/WhatsApp Image 2025-08-09 at 16.54.04.jpeg",
    "fotos/prewedding/WhatsApp Image 2025-08-09 at 16.54.05 (1).jpeg",
    "fotos/prewedding/WhatsApp Image 2025-08-09 at 16.54.05.jpeg",
    "fotos/prewedding/WhatsApp Image 2025-08-09 at 16.54.06.jpeg"
  ]
};

// ---------------- Nomes das categorias ----------------
const nomesCategoria = {
  prewedding: 'Pre-Wedding',
  aniversario: 'Aniversário'
};

// ---------------- Carrega as imagens da categoria ----------------
if (imagens[categoria]) {
  imagensCategoria = imagens[categoria];
  titulo.textContent = nomesCategoria[categoria] || 'Portfólio';

  imagensCategoria.forEach((src, index) => {
    const div = document.createElement('div');
    div.className = 'foto-item';

    const img = document.createElement('img');
    img.src = src;
    img.alt = nomesCategoria[categoria];
    img.dataset.index = index;

    div.appendChild(img);
    container.appendChild(div);
  });
}

// ---------------- Lightbox ----------------
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.lightbox .close');
const prevBtn = document.querySelector('.lightbox .prev');
const nextBtn = document.querySelector('.lightbox .next');

container.addEventListener('click', e => {
  if (e.target.tagName === 'IMG') {
    currentIndex = parseInt(e.target.dataset.index);
    openLightbox();
  }
});

function openLightbox() {
  lightbox.style.display = 'flex';
  lightboxImg.src = imagensCategoria[currentIndex];
}

function closeLightbox() {
  lightbox.style.display = 'none';
}

function nextImage() {
  currentIndex = (currentIndex + 1) % imagensCategoria.length;
  lightboxImg.src = imagensCategoria[currentIndex];
}

function prevImage() {
  currentIndex = (currentIndex - 1 + imagensCategoria.length) % imagensCategoria.length;
  lightboxImg.src = imagensCategoria[currentIndex];
}

closeBtn.addEventListener('click', closeLightbox);
nextBtn.addEventListener('click', nextImage);
prevBtn.addEventListener('click', prevImage);

// Fecha ao clicar fora da imagem
lightbox.addEventListener('click', e => {
  if (e.target === lightbox) closeLightbox();
});
