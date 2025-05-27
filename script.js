// script.js

// --- Obtener referencias a los elementos de entrada (controller) y de visualización (banner) ---

// Top texts
const topLeftTextInput = document.getElementById('top-left-text-input');
const topLeftBannerText = document.getElementById('top--left-text');

const topRightTextInput = document.getElementById('top-right-text-input');
const topRightBannerText = document.getElementById('top--right-text');

// Bottom texts
const bottomLeftTextInput = document.getElementById('bottom-left-text-input');
const bottomLeftBannerText = document.getElementById('bottom--left-text');

const bottomRightTextInput = document.getElementById('bottom-right-text-input');
const bottomRightBannerText = document.getElementById('bottom--right-text');


// --- Funciones genéricas para manejar la actualización de contenido ---

/**
 * Enlaza un input de texto con un elemento de texto en el banner, actualizando su contenido en tiempo real.
 * @param {HTMLInputElement} inputElement El elemento <input type="text"> del controlador.
 * @param {HTMLElement} bannerTextElement El elemento HTML (ej. <div>, <p>) en el banner que mostrará el texto.
 */
const handleTextInputUpdate = (inputElement, bannerTextElement) => {
    if (inputElement && bannerTextElement) {
        inputElement.addEventListener('input', (event) => {
            bannerTextElement.textContent = event.target.value;
        });
        // console.log(`Enlace para ${inputElement.id} establecido exitosamente.`); // Descomentar para depuración
    } else {
        console.warn(`[ERROR - TEXT_UPDATE]: No se pudo enlazar.
        Input ID: '${inputElement ? inputElement.id : 'NO ENCONTRADO'}'
        Banner Text ID: '${bannerTextElement ? bannerTextElement.id : 'NO ENCONTRADO'}'
        Asegúrate de que los IDs son correctos en tu HTML.`);
    }
};

/**
 * Enlaza un input de tipo file con una etiqueta <img> en el banner, mostrando la imagen seleccionada.
 * @param {HTMLInputElement} inputElement El elemento <input type="file"> del controlador.
 * @param {HTMLImageElement} imgElement El elemento <img> en el banner que mostrará la imagen.
 */
const handleImageUpload = (inputElement, imgElement) => {
    if (inputElement && imgElement) {
        inputElement.addEventListener('change', (event) => {
            const file = event.target.files[0]; // Obtener el primer archivo seleccionado
            if (file) {
                const reader = new FileReader(); // Crear un lector de archivos
                reader.onload = (e) => {
                    imgElement.src = e.target.result; // Establecer el src de la imagen como la Data URL del archivo
                };
                reader.readAsDataURL(file); // Leer el archivo como una Data URL
                // console.log(`Imagen para ${imgElement.id} cargada exitosamente.`); // Descomentar para depuración
            }
        });
    } else {
        console.warn(`[ERROR - IMAGE_UPLOAD]: No se pudo enlazar.
        Input File ID: '${inputElement ? inputElement.id : 'NO ENCONTRADO'}'
        Image Element ID: '${imgElement ? imgElement.id : 'NO ENCONTRADO'}'
        Asegúrate de que los IDs son correctos en tu HTML.`);
    }
};


// --- Enlazar los inputs del controlador con los elementos correspondientes en el banner ---

// Enlazar inputs de texto principales (superior e inferior)
handleTextInputUpdate(topLeftTextInput, topLeftBannerText);
handleTextInputUpdate(topRightTextInput, topRightBannerText);
handleTextInputUpdate(bottomLeftTextInput, bottomLeftBannerText);
handleTextInputUpdate(bottomRightTextInput, bottomRightBannerText);


// Enlazar inputs de patrocinadores (imágenes)
// Se asume que tienes 8 inputs de patrocinador y 8 etiquetas <img> correspondientes en el banner
handleImageUpload(document.getElementById('sponsor1-input'), document.getElementById('sponsor1'));
handleImageUpload(document.getElementById('sponsor2-input'), document.getElementById('sponsor2'));
handleImageUpload(document.getElementById('sponsor3-input'), document.getElementById('sponsor3'));
handleImageUpload(document.getElementById('sponsor4-input'), document.getElementById('sponsor4'));
handleImageUpload(document.getElementById('sponsor5-input'), document.getElementById('sponsor5'));
handleImageUpload(document.getElementById('sponsor6-input'), document.getElementById('sponsor6'));
handleImageUpload(document.getElementById('sponsor7-input'), document.getElementById('sponsor7'));
handleImageUpload(document.getElementById('sponsor8-input'), document.getElementById('sponsor8'));


// Enlazar inputs de las tarjetas de jugadores (texto: prefix y tag; imágenes: main, secondary, tertiary)
// Este bucle manejará hasta 8 jugadores.
for (let i = 1; i <= 8; i++) {
    // Inputs del controlador para el jugador actual (i)
    const prefixInput = document.getElementById(`prefix${i}-input`);
    const tagInput = document.getElementById(`tag${i}-input`);
    const mainInput = document.getElementById(`main${i}-input`); // Input para la imagen principal
    const secondaryInput = document.getElementById(`secondary${i}-input`); // Input para la imagen secundaria
    const tertiaryInput = document.getElementById(`tertiary${i}-input`); // Input para la imagen terciaria

    // Elementos de visualización en el banner para el jugador actual (i)
    const playerPrefix = document.getElementById(`player${i}-prefix`);
    const playerTag = document.getElementById(`player${i}-tag`);
    const polygonMain = document.getElementById(`polygon${i}__main1`); // <img> para la imagen principal
    const polygonSecondary = document.getElementById(`polygon${i}__secondary`); // <img> para la imagen secundaria
    const polygonTertiary = document.getElementById(`polygon${i}__tertiary`); // <img> para la imagen terciaria

    // Enlazar texto de prefijo
    handleTextInputUpdate(prefixInput, playerPrefix);
    // Enlazar texto de tag
    handleTextInputUpdate(tagInput, playerTag);

    // Enlazar imágenes de personajes
    handleImageUpload(mainInput, polygonMain);
    handleImageUpload(secondaryInput, polygonSecondary);
    handleImageUpload(tertiaryInput, polygonTertiary);
}

document.getElementById('player-name-color-input').addEventListener('input', function(e) {
    const color = e.target.value;
    document.querySelectorAll('.player-name--container').forEach(element => {
        element.style.backgroundColor = color;
    });
    document.querySelectorAll('.playercard').forEach(element => {
        element.style.backgroundColor = color;
    });
    // Convertir el color hexadecimal a rgba para la sombra
    const rgbaColor = hexToRgba(color, 0.75); // 0.75 es la opacidad
    document.querySelectorAll('.polygon__main1').forEach(element => {
        element.style.filter = `drop-shadow(2vw calc(2vw * 9/16) 0.5px ${rgbaColor})`;
    });
});

// Función para convertir hexadecimal a rgba
function hexToRgba(hex, opacity) {
    hex = hex.replace("#", "");
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

document.getElementById('banner-background-input').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.querySelector('.banner').style.backgroundImage = `url(${e.target.result})`;
        }
        reader.readAsDataURL(file);
    }
});

document.getElementById('banner-background-image-toggle').addEventListener('change', function() {
    const banner = document.querySelector('.banner');
    const backgroundImage = document.getElementById('banner-background-input');
    if (this.checked) {
        banner.style.backgroundImage = `url(${backgroundImage.value})`;
    } else {
        banner.style.backgroundImage = 'none';
    }
});

document.getElementById('banner-background-color-input').addEventListener('input', function(e) {
    const color = e.target.value;
    document.querySelector('.banner').style.backgroundColor = color;
});

function autoResizeInput(input) {
    input.style.width = '80px'; // min-width
    const tmp = document.createElement('span');
    tmp.style.visibility = 'hidden';
    tmp.style.position = 'absolute';
    tmp.style.font = window.getComputedStyle(input).font;
    tmp.textContent = input.value || input.placeholder;
    document.body.appendChild(tmp);
    let newWidth = tmp.offsetWidth + 20;
    newWidth = Math.max(80, Math.min(300, newWidth));
    input.style.width = newWidth + 'px';
    document.body.removeChild(tmp);
}

// Selecciona todos los inputs de texto de las esquinas
const cornerInputs = [
    document.getElementById('top-left-text-input'),
    document.getElementById('top-right-text-input'),
    document.getElementById('bottom-left-text-input'),
    document.getElementById('bottom-right-text-input')
];

cornerInputs.forEach(input => {
    if (input) {
        input.addEventListener('input', function() {
            autoResizeInput(input);
        });
        // Inicializar tamaño al cargar
        autoResizeInput(input);
    }
});