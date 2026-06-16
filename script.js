const audioFiles = [
    "audio_files/message01.mp3",
    "audio_files/message02.mp3",
    "audio_files/message03.mp3",
    "audio_files/message04.mp3",
    "audio_files/message05.mp3",
    "audio_files/message06.mp3",
    "audio_files/message07.mp3",
    "audio_files/message08.mp3",
    "audio_files/message09.mp3",
    "audio_files/message10.mp3",
    "audio_files/message11.mp3",
    "audio_files/message12.mp3",
    "audio_files/message13.mp3",
    "audio_files/message14.mp3",
    "audio_files/message15.mp3",
    "audio_files/message16.mp3",
    "audio_files/message17.mp3",
    "audio_files/message18.mp3",
    "audio_files/message19.mp3",
    "audio_files/message20.mp3",
    "audio_files/message21.mp3",
    "audio_files/message22.mp3",
    "audio_files/message23.mp3",
    "audio_files/message24.mp3",
    "audio_files/message25.mp3",
    "audio_files/message26.mp3",
    "audio_files/message27.mp3",
    "audio_files/message28.mp3",
    "audio_files/message29.mp3",
    "audio_files/message30.mp3",
    "audio_files/message31.mp3",
    "audio_files/message32.mp3",
    "audio_files/message33.mp3",
    "audio_files/message34.mp3",
    "audio_files/message35.mp3",
    "audio_files/message36.mp3"
];

// Optional display names
const audioNames = [
    "Message 1",
    "Message 2",
    "Message 4",
    "Message 5",
    "Message 6",
    "Message 7",
    "Message 8",
    "Message 9",
    "Message 10",
    "Message 11",
    "Message 12",
    "Message 13",
    "Message 14",
    "Message 15",
    "Message 16",
    "Message 17",
    "Message 18",
    "Message 19",
    "Message 20",
    "Message 21",
    "Message 22",
    "Message 23",
    "Message 24",
    "Message 25",
    "Message 26",
    "Message 27",
    "Message 28",
    "Message 29",
    "Message 30",
    "Message 31",
    "Message 32",
    "Message 33",
    "Message 34",
    "Message 35",
    "Message 36"
];

const playButton = document.getElementById("playButton");
const nowPlaying = document.getElementById("nowPlaying");

let currentAudio = null;

playButton.addEventListener("click", () => {

    const randomIndex =
        Math.floor(Math.random() * audioFiles.length);

    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    currentAudio = new Audio(audioFiles[randomIndex]);

    currentAudio.play()
        .then(() => {
            console.log("Audio playing");
        })
        .catch(error => {
            console.error("Audio error:", error);
        });

    nowPlaying.textContent =
        "Now Playing: " + audioNames[randomIndex];
});

const canvas = document.getElementById("sparkles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const sparkles = [];

function createSparkle() {
    return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedY: Math.random() * 0.5 + 0.2,
        opacity: Math.random()
    };
}

for (let i = 0; i < 80; i++) {
    sparkles.push(createSparkle());
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < sparkles.length; i++) {
        let s = sparkles[i];

        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 255, 255, ${s.opacity})`;
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();

        s.y -= s.speedY;

        if (s.y < 0) {
            sparkles[i] = createSparkle();
            sparkles[i].y = canvas.height;
        }
    }

    requestAnimationFrame(animate);
}

animate();

// resize support
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});