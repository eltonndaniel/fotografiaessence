const params = new URLSearchParams(window.location.search);
const categoria = params.get('categoria');

const titulo = document.getElementById('titulo-categoria');
const container = document.getElementById('imagens-categoria');

let currentIndex = 0;
let imagensCategoria = []; // vai receber as imagens da categoria

// ---------------- Dados das imagens direto no JS ----------------
const imagens = {
  ".tmp.driveupload": [],
  "aniversario": [
    "fotos/aniversario/WhatsApp%20Image%202025-08-17%20at%2020.04.31.jpeg",
    "fotos/aniversario/WhatsApp%20Image%202025-08-17%20at%2020.04.32%20%281%29.jpeg",
    "fotos/aniversario/WhatsApp%20Image%202025-08-17%20at%2020.04.32.jpeg",
    "fotos/aniversario/WhatsApp%20Image%202025-08-17%20at%2020.04.33.jpeg",
    "fotos/aniversario/WhatsApp%20Image%202025-08-17%20at%2020.04.34.jpeg"
  ],
  "familia": [
    "fotos/familia/IMG_8978.jpg",
    "fotos/familia/IMG_8978.png"
  ],
  "prewedding": [
    "fotos/prewedding/WhatsApp%20Image%202025-08-09%20at%2016.54.03.jpeg",
    "fotos/prewedding/WhatsApp%20Image%202025-08-09%20at%2016.54.04.jpeg",
    "fotos/prewedding/WhatsApp%20Image%202025-08-09%20at%2016.54.05%20%281%29.jpeg",
    "fotos/prewedding/WhatsApp%20Image%202025-08-09%20at%2016.54.05.jpeg",
    "fotos/prewedding/WhatsApp%20Image%202025-08-09%20at%2016.54.06.jpeg"
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
