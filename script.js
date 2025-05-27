document.addEventListener('DOMContentLoaded', () => {
    // Todo tu código JavaScript va dentro de esta función
    // Ahora, cuando se ejecute este código, el DOM ya estará listo.

downloadButton.addEventListener('click', () => {
    console.log("Click en el botón de descarga. Intentando capturar el banner...");
    // Introduce un pequeño retraso antes de la captura
    setTimeout(() => {
        html2canvas(document.querySelector('.banner'), {
            useCORS: true, // Crucial para imágenes de otros orígenes (incluyendo imágenes locales al servir con Live Server/Python)
            allowTaint: true, // Puede ayudar en algunos casos, aunque useCORS es la principal
            ignoreElements: (element) => { // Ignora elementos que no quieres en la captura (ej. los inputs del controlador)
                return element.classList.contains('controller');
            }
        }).then(canvas => {
            console.log("Banner capturado en un canvas. Generando enlace de descarga...");
            const link = document.createElement('a');
            link.download = 'retoper_banner.png'; // Nombre del archivo
            link.href = canvas.toDataURL('image/png'); // Convierte el canvas a imagen PNG
            link.click(); // Simula el click para descargar
            console.log("Descarga iniciada.");
        }).catch(error => {
            console.error("Error al generar o descargar el banner:", error); // Captura cualquier error de html2canvas
        });
    }, 200); // Prueba con 200 milisegundos (0.2 segundos). Puedes ajustar este valor.
});

    // Get references to elements and add event listeners
    const topLeftTextInput = document.getElementById('top-left-text-input');
    const topLeftBannerText = document.getElementById('top--left-text');
    const topRightTextInput = document.getElementById('top-right-text-input');
    const topRightBannerText = document.getElementById('top--right-text');
    const bottomLeftTextInput = document.getElementById('bottom-left-text-input');
    const bottomLeftBannerText = document.getElementById('bottom--left-text');
    const bottomRightTextInput = document.getElementById('bottom-right-text-input');
    const bottomRightBannerText = document.getElementById('bottom--right-text');

    if (topLeftTextInput) {
        topLeftTextInput.addEventListener('input', (event) => {
            if (topLeftBannerText) topLeftBannerText.textContent = event.target.value;
        });
    }
    if (topRightTextInput) {
        topRightTextInput.addEventListener('input', (event) => {
            if (topRightBannerText) topRightBannerText.textContent = event.target.value;
        });
    }
    if (bottomLeftTextInput) {
        bottomLeftTextInput.addEventListener('input', (event) => {
            if (bottomLeftBannerText) bottomLeftBannerText.textContent = event.target.value;
        });
    }
    if (bottomRightTextInput) {
        bottomRightTextInput.addEventListener('input', (event) => {
            if (bottomRightBannerText) bottomRightBannerText.textContent = event.target.value;
        });
    }

    // Function to handle image uploads for sponsors and player characters
    const handleImageUpload = (inputElement, imgElement) => {
        if (inputElement && imgElement) { // Check if both elements exist
            inputElement.addEventListener('change', (event) => {
                const file = event.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        imgElement.src = e.target.result;
                    };
                    reader.readAsDataURL(file);
                }
            });
        }
    };

    // Sponsors
    handleImageUpload(document.getElementById('sponsor1-input'), document.getElementById('sponsor1'));
    handleImageUpload(document.getElementById('sponsor2-input'), document.getElementById('sponsor2'));
    handleImageUpload(document.getElementById('sponsor3-input'), document.getElementById('sponsor3'));
    handleImageUpload(document.getElementById('sponsor4-input'), document.getElementById('sponsor4'));
    handleImageUpload(document.getElementById('sponsor5-input'), document.getElementById('sponsor5'));
    handleImageUpload(document.getElementById('sponsor6-input'), document.getElementById('sponsor6'));
    handleImageUpload(document.getElementById('sponsor7-input'), document.getElementById('sponsor7'));
    handleImageUpload(document.getElementById('sponsor8-input'), document.getElementById('sponsor8'));


    // Player cards loop
    for (let i = 1; i <= 8; i++) {
        const prefixInput = document.getElementById(`prefix${i}-input`);
        const tagInput = document.getElementById(`tag${i}-input`);
        const mainInput = document.getElementById(`main${i}-input`);
        const secondaryInput = document.getElementById(`secondary${i}-input`);
        const tertiaryInput = document.getElementById(`tertiary${i}-input`);

        const playerPrefix = document.getElementById(`player${i}-prefix`);
        const playerTag = document.getElementById(`player${i}-tag`);
        const polygonMain = document.getElementById(`polygon${i}__main1`);
        const polygonSecondary = document.getElementById(`polygon${i}__secondary`);
        const polygonTertiary = document.getElementById(`polygon${i}__tertiary`);

        if (prefixInput && playerPrefix) {
            prefixInput.addEventListener('input', (event) => {
                playerPrefix.textContent = event.target.value;
            });
        }
        if (tagInput && playerTag) {
            tagInput.addEventListener('input', (event) => {
                playerTag.textContent = event.target.value;
            });
        }

        handleImageUpload(mainInput, polygonMain);
        handleImageUpload(secondaryInput, polygonSecondary);
        handleImageUpload(tertiaryInput, polygonTertiary);
    }
});