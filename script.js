const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confetti = [];

function createConfetti() {
    return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        size: Math.random() * 6 + 4,
        speed: Math.random() * 3 + 2,
        color: `hsl(${Math.random() * 360},100%,50%)`
    };
}

function startConfetti() {
    confetti = [];
    for (let i = 0; i < 150; i++) {
        confetti.push(createConfetti());
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        confetti.forEach(c => {
            ctx.fillStyle = c.color;
            ctx.fillRect(c.x, c.y, c.size, c.size);
            c.y += c.speed;
            if (c.y > canvas.height) c.y = -10;
        });
        requestAnimationFrame(animate);
    }
    animate();
}

function showBirthday() {
    const name = document.getElementById("nameInput").value;

    if (!name) {
        alert("Nama tidak boleh kosong!");
        return;
    }

    document.getElementById("nameOutput").innerText = name;
    document.getElementById("inputSection").classList.add("hidden");
    document.getElementById("cardSection").classList.remove("hidden");

    startConfetti();
}

function reset() {
    document.getElementById("nameInput").value = "";
    document.getElementById("cardSection").classList.add("hidden");
    document.getElementById("inputSection").classList.remove("hidden");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

function goToInput() {
    document.getElementById("landing").classList.add("hidden");
    document.getElementById("inputSection").classList.remove("hidden");
}
