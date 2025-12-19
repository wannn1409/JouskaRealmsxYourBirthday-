const landing = document.getElementById("landing");
const formSection = document.getElementById("formSection");
const gallerySection = document.getElementById("gallerySection");
const resultSection = document.getElementById("resultSection");

const finalPhoto = document.getElementById("finalPhoto");
const finalName = document.getElementById("finalName");

function toForm() {
    landing.classList.add("hidden");
    formSection.classList.remove("hidden");
}

function toGallery() {
    const name = document.getElementById("nameInput").value;
    const birth = document.getElementById("birthInput").value;
    const gender = document.getElementById("genderInput").value;

    if (!name || !birth || !gender) {
        alert("Lengkapi semua data dulu ya 😊");
        return;
    }

    formSection.classList.add("hidden");
    gallerySection.classList.remove("hidden");
}

let selectedPhoto = null;

function selectPhoto(el) {
  document.querySelectorAll('.photo-box').forEach(photo => {
    photo.classList.remove('selected');
  });

  el.classList.add('selected');
  selectedPhoto = el.querySelector('img').src;

  document.getElementById('nextBtn').disabled = false;
}

function toResult() {
  if (!selectedPhoto) return;

  document.getElementById('gallerySection').classList.add('hidden');
  document.getElementById('resultSection').classList.remove('hidden');

  document.getElementById('finalPhoto').src = selectedPhoto;

  const name = document.getElementById('nameInput').value;
  document.getElementById('finalName').innerText =
    name ? `Untuk ${name} 🤍` : 'Untuk Kamu 🤍';
}


    startConfetti();
}

/* CONFETTI */
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confetti = [];

function startConfetti() {
    confetti = Array.from({ length: 120 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 6 + 4,
        speed: Math.random() * 3 + 2
    }));

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        confetti.forEach(c => {
            ctx.fillStyle = "#788BFF";
            ctx.fillRect(c.x, c.y, c.size, c.size);
            c.y += c.speed;
            if (c.y > canvas.height) c.y = -10;
        });
        requestAnimationFrame(animate);
    }
    animate();
}

function toResult() {
  document.getElementById('gallerySection').classList.add('hidden');
  document.getElementById('resultSection').classList.remove('hidden');

  // isi nama (contoh)
  const name = document.getElementById('nameInput').value;
  document.getElementById('finalName').innerText = name
    ? `Untuk ${name} 🤍`
    : 'Untuk Kamu 🤍';
}
