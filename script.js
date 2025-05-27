document.addEventListener('DOMContentLoaded', () => {
    // Todo tu código JavaScript va dentro de esta función
    // Ahora, cuando se ejecute este código, el DOM ya estará listo.

    const downloadButton = document.getElementById('download-banner');
    if (downloadButton) { // Siempre es buena práctica verificar si el elemento existe
        downloadButton.addEventListener('click', () => {
            html2canvas(document.querySelector('.banner'), {
                useCORS: true
            }).then(canvas => {
                const link = document.createElement('a');
                link.download = 'retoper_banner.png';
                link.href = canvas.toDataURL('image/png');
                link.click();
            });
        });
    }

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