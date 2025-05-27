// script.js

// --- Lógica para la descarga del banner ---

const downloadButton = document.getElementById('download-banner');

if (downloadButton) {
    console.log("Botón de descarga encontrado."); // Mensaje de éxito si el botón se encuentra
    downloadButton.addEventListener('click', () => {
        console.log("Click en el botón de descarga. Intentando capturar el banner..."); // Confirmación del click

        // Introduce un pequeño retraso para asegurar que el DOM y el CSS estén completamente renderizados
        // antes de que html2canvas tome la instantánea.
        setTimeout(() => {
            html2canvas(document.querySelector('.banner'), {
                useCORS: true, // Crucial para permitir la carga de imágenes de diferentes orígenes (incluyendo imágenes locales cuando se sirve con Live Server/GitHub Pages)
                allowTaint: true, // Permite que el lienzo se "ensucie" para renderizar, aunque `useCORS` es preferible.
                                  // Puede ser útil como fallback o para depuración.
                ignoreElements: (element) => { // Ignora elementos que no quieres en la captura (ej. los inputs del controlador)
                    return element.classList.contains('controller');
                }
            }).then(canvas => {
                console.log("Banner capturado en un canvas. Generando enlace de descarga..."); // Confirmación de captura
                const link = document.createElement('a');
                link.download = 'retoper_banner.png'; // Nombre del archivo a descargar
                link.href = canvas.toDataURL('image/png'); // Convierte el canvas a imagen PNG en formato Data URL
                link.click(); // Simula el click para iniciar la descarga
                console.log("Descarga iniciada."); // Mensaje de descarga
            }).catch(error => {
                // Captura y registra cualquier error que ocurra durante la generación o descarga del banner
                console.error("Error al generar o descargar el banner:", error);
            });
        }, 200); // Retraso de 200 milisegundos. Puedes ajustar este valor (ej. 300, 500) si es necesario.
    });
} else {
    console.warn("El botón con ID 'download-banner' no se encontró en el DOM."); // Advertencia si el botón no se encuentra
}


// --- Lógica para la actualización de texto e imágenes en el banner ---

// 1. Obtener referencias a los elementos de entrada (controller) y de visualización (banner)

// Top texts
const topLeftTextInput = document.getElementById('top-left-text-input');
const topLeftBannerText = document.getElementById('top--left-text'); // ID en el banner para el texto superior izquierdo

const topRightTextInput = document.getElementById('top-right-text-input');
const topRightBannerText = document.getElementById('top--right-text'); // CORREGIDO: ID en el banner para el texto superior derecho

// Bottom texts
const bottomLeftTextInput = document.getElementById('bottom-left-text-input');
const bottomLeftBannerText = document.getElementById('bottom--left-text'); // ID en el banner para el texto inferior izquierdo

const bottomRightTextInput = document.getElementById('bottom-right-text-input');
const bottomRightBannerText = document.getElementById('bottom--right-text'); // ID en el banner para el texto inferior derecho


// 2. Funciones para manejar la actualización de contenido

// Función genérica para manejar la actualización de texto desde un input a un elemento de texto en el banner
const handleTextInputUpdate = (inputElement, bannerTextElement) => {
    if (inputElement && bannerTextElement) { // Verificación para asegurar que ambos elementos existan
        inputElement.addEventListener('input', (event) => {
            bannerTextElement.textContent = event.target.value;
        });
    } else {
        console.warn(`No se pudo enlazar input '${inputElement ? inputElement.id : 'N/A'}' con banner text '${bannerTextElement ? bannerTextElement.id : 'N/A'}'`);
    }
};

// Función genérica para manejar la carga de imágenes desde un input de tipo file a una etiqueta <img> en el banner
const handleImageUpload = (inputElement, imgElement) => {
    if (inputElement && imgElement) { // Verificación para asegurar que ambos elementos existan
        inputElement.addEventListener('change', (event) => {
            const file = event.target.files[0]; // Obtener el primer archivo seleccionado
            if (file) {
                const reader = new FileReader(); // Crear un lector de archivos
                reader.onload = (e) => {
                    imgElement.src = e.target.result; // Establecer el src de la imagen como la Data URL del archivo
                };
                reader.readAsDataURL(file); // Leer el archivo como una Data URL
            }
        });
    } else {
        console.warn(`No se pudo enlazar input file '${inputElement ? inputElement.id : 'N/A'}' con img '${imgElement ? imgElement.id : 'N/A'}'`);
    }
};


// 3. Enlazar los inputs del controlador con los elementos del banner

// Enlazar inputs de texto
handleTextInputUpdate(topLeftTextInput, topLeftBannerText);
handleTextInputUpdate(topRightTextInput, topRightBannerText);
handleTextInputUpdate(bottomLeftTextInput, bottomLeftBannerText);
handleTextInputUpdate(bottomRightTextInput, bottomRightBannerText);

// Enlazar inputs de patrocinadores (imágenes)
handleImageUpload(document.getElementById('sponsor1-input'), document.getElementById('sponsor1'));
handleImageUpload(document.getElementById('sponsor2-input'), document.getElementById('sponsor2'));
handleImageUpload(document.getElementById('sponsor3-input'), document.getElementById('sponsor3'));
handleImageUpload(document.getElementById('sponsor4-input'), document.getElementById('sponsor4'));
handleImageUpload(document.getElementById('sponsor5-input'), document.getElementById('sponsor5'));
handleImageUpload(document.getElementById('sponsor6-input'), document.getElementById('sponsor6'));
handleImageUpload(document.getElementById('sponsor7-input'), document.getElementById('sponsor7'));
handleImageUpload(document.getElementById('sponsor8-input'), document.getElementById('sponsor8'));


// Enlazar inputs de las tarjetas de jugadores (texto e imágenes)
for (let i = 1; i <= 8; i++) {
    // Inputs del controlador
    const prefixInput = document.getElementById(`prefix${i}-input`);
    const tagInput = document.getElementById(`tag${i}-input`);
    const mainInput = document.getElementById(`main${i}-input`);
    const secondaryInput = document.getElementById(`secondary${i}-input`);
    const tertiaryInput = document.getElementById(`tertiary${i}-input`);

    // Elementos de visualización en el banner
    const playerPrefix = document.getElementById(`player${i}-prefix`);
    const playerTag = document.getElementById(`player${i}-tag`);
    const polygonMain = document.getElementById(`polygon${i}__main1`);
    const polygonSecondary = document.getElementById(`polygon${i}__secondary`);
    const polygonTertiary = document.getElementById(`polygon${i}__tertiary`);

    // Enlazar texto de prefijo
    handleTextInputUpdate(prefixInput, playerPrefix);
    // Enlazar texto de tag
    handleTextInputUpdate(tagInput, playerTag);

    // Enlazar imágenes de personajes
    handleImageUpload(mainInput, polygonMain);
    handleImageUpload(secondaryInput, polygonSecondary);
    handleImageUpload(tertiaryInput, polygonTertiary);
}

// Puedes añadir más lógica aquí si necesitas manejar otros elementos o interacciones.