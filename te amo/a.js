        /* ---------- Música ---------- */

        const musica = $("#musica");
        const btnMusica = $("#btnMusica");
        musica.volume = 0.6;

        function actualizarBotonMusica() {
            const suena = !musica.paused;
            btnMusica.classList.toggle("pausada", !suena);
            btnMusica.setAttribute("aria-pressed", suena);
            btnMusica.setAttribute("aria-label", suena ? "Pausar música" : "Reproducir música");
        }

        // Empieza al abrir el regalo (el clic permite que el navegador reproduzca audio)
        $("#abrir").addEventListener("click", () => {
            // musica.currentTime = 45; // ← quita las // para empezar desde el segundo 45
            musica.play().catch(() => {});
            btnMusica.classList.remove("oculto");
            actualizarBotonMusica();
        });

        btnMusica.addEventListener("click", () => {
            musica.paused ? musica.play() : musica.pause();
        });

        musica.addEventListener("play", actualizarBotonMusica);
        musica.addEventListener("pause", actualizarBotonMusica);