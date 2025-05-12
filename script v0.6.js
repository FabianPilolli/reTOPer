document.getElementById('BgInput').addEventListener('change', function(e) {
    let file = e.target.files[0];
    let reader = new FileReader();

    reader.onload = function(e) {
        let BgShow = document.getElementById('BgShow');
        BgShow.src = e.target.result;
        BgShow.style.display = 'block'; // Muestra la imagen
    }

    reader.readAsDataURL(file);
});

document.getElementById('Main1Input').addEventListener('change', function(e) {
    let file = e.target.files[0];
    let reader = new FileReader();

    reader.onload = function(e) {
        let Main1 = document.getElementById('Main1');
        Main1.src = e.target.result;
        Main1.style.display = 'block'; // Muestra la imagen
    }

    reader.readAsDataURL(file);
});

document.getElementById('Main2Input').addEventListener('change', function(e) {
    let file = e.target.files[0];
    let reader = new FileReader();

    reader.onload = function(e) {
        let Main2 = document.getElementById('Main2');
        Main2.src = e.target.result;
        Main2.style.display = 'block'; // Muestra la imagen
    }

    reader.readAsDataURL(file);
});

document.getElementById('Main3Input').addEventListener('change', function(e) {
    let file = e.target.files[0];
    let reader = new FileReader();

    reader.onload = function(e) {
        let Main3 = document.getElementById('Main3');
        Main3.src = e.target.result;
        Main3.style.display = 'block'; // Muestra la imagen
    }

    reader.readAsDataURL(file);
});

document.getElementById('Main4Input').addEventListener('change', function(e) {
    let file = e.target.files[0];
    let reader = new FileReader();

    reader.onload = function(e) {
        let Main4 = document.getElementById('Main4');
        Main4.src = e.target.result;
        Main4.style.display = 'block'; // Muestra la imagen
    }

    reader.readAsDataURL(file);
});

document.getElementById('Main5Input').addEventListener('change', function(e) {
    let file = e.target.files[0];
    let reader = new FileReader();

    reader.onload = function(e) {
        let Main5 = document.getElementById('Main5');
        Main5.src = e.target.result;
        Main5.style.display = 'block'; // Muestra la imagen
    }

    reader.readAsDataURL(file);
});

document.getElementById('Main6Input').addEventListener('change', function(e) {
    let file = e.target.files[0];
    let reader = new FileReader();

    reader.onload = function(e) {
        let Main6 = document.getElementById('Main6');
        Main6.src = e.target.result;
        Main6.style.display = 'block'; // Muestra la imagen
    }

    reader.readAsDataURL(file);
});

document.getElementById('Main7Input').addEventListener('change', function(e) {
    let file = e.target.files[0];
    let reader = new FileReader();

    reader.onload = function(e) {
        let Main7 = document.getElementById('Main7');
        Main7.src = e.target.result;
        Main7.style.display = 'block'; // Muestra la imagen
    }

    reader.readAsDataURL(file);
});

document.getElementById('Main8Input').addEventListener('change', function(e) {
    let file = e.target.files[0];
    let reader = new FileReader();

    reader.onload = function(e) {
        let Main8 = document.getElementById('Main8');
        Main8.src = e.target.result;
        Main8.style.display = 'block'; // Muestra la imagen
    }

    reader.readAsDataURL(file);
});

document.getElementById('Sponsor1Input').addEventListener('change', function(e) {
    let file = e.target.files[0];
    let reader = new FileReader();

    reader.onload = function(e) {
        let Sponsor1 = document.getElementById('Sponsor1');
        Sponsor1.src = e.target.result;
        Sponsor1.style.display = 'block'; // Muestra la imagen
    }

    reader.readAsDataURL(file);
});

document.getElementById('Sponsor2Input').addEventListener('change', function(e) {
    let file = e.target.files[0];
    let reader = new FileReader();

    reader.onload = function(e) {
        let Sponsor2 = document.getElementById('Sponsor2');
        Sponsor2.src = e.target.result;
        Sponsor2.style.display = 'block'; // Muestra la imagen
    }

    reader.readAsDataURL(file);
});

document.getElementById('Sponsor3Input').addEventListener('change', function(e) {
    let file = e.target.files[0];
    let reader = new FileReader();

    reader.onload = function(e) {
        let Sponsor3 = document.getElementById('Sponsor3');
        Sponsor3.src = e.target.result;
        Sponsor3.style.display = 'block'; // Muestra la imagen
    }

    reader.readAsDataURL(file);
});

document.getElementById('Sponsor4Input').addEventListener('change', function(e) {
    let file = e.target.files[0];
    let reader = new FileReader();

    reader.onload = function(e) {
        let Sponsor4 = document.getElementById('Sponsor4');
        Sponsor4.src = e.target.result;
        Sponsor4.style.display = 'block'; // Muestra la imagen
    }

    reader.readAsDataURL(file);
});

document.getElementById('Sponsor5Input').addEventListener('change', function(e) {
    let file = e.target.files[0];
    let reader = new FileReader();

    reader.onload = function(e) {
        let Sponsor5 = document.getElementById('Sponsor5');
        Sponsor5.src = e.target.result;
        Sponsor5.style.display = 'block'; // Muestra la imagen
    }

    reader.readAsDataURL(file);
});

document.getElementById('Sponsor6Input').addEventListener('change', function(e) {
    let file = e.target.files[0];
    let reader = new FileReader();

    reader.onload = function(e) {
        let Sponsor6 = document.getElementById('Sponsor6');
        Sponsor6.src = e.target.result;
        Sponsor6.style.display = 'block'; // Muestra la imagen
    }

    reader.readAsDataURL(file);
});

document.getElementById('Sponsor7Input').addEventListener('change', function(e) {
    let file = e.target.files[0];
    let reader = new FileReader();

    reader.onload = function(e) {
        let Sponsor7 = document.getElementById('Sponsor7');
        Sponsor7.src = e.target.result;
        Sponsor7.style.display = 'block'; // Muestra la imagen
    }

    reader.readAsDataURL(file);
});

document.getElementById('Sponsor8Input').addEventListener('change', function(e) {
    let file = e.target.files[0];
    let reader = new FileReader();

    reader.onload = function(e) {
        let Sponsor8 = document.getElementById('Sponsor8');
        Sponsor8.src = e.target.result;
        Sponsor8.style.display = 'block'; // Muestra la imagen
    }

    reader.readAsDataURL(file);
});

function Send() {
    var texto = document.getElementById("TopLeftTextInput").value;
    document.getElementById("TopLeftText").textContent = texto;

    var texto = document.getElementById("BottomLeftTextInput").value;
    document.getElementById("BottomLeftText").textContent = texto;

    var texto = document.getElementById("TopRightTextInput").value;
    document.getElementById("TopRightText").textContent = texto;

    var texto = document.getElementById("BottomRightTextInput").value;
    document.getElementById("BottomRightText").textContent = texto;

    var texto = document.getElementById("Tag1Input").value;
    document.getElementById("Tag1").textContent = texto;
    var texto = document.getElementById("Player1Input").value;
    document.getElementById("Player1").textContent = texto;

    var texto = document.getElementById("Tag2Input").value;
    document.getElementById("Tag2").textContent = texto;
    var texto = document.getElementById("Player2Input").value;
    document.getElementById("Player2").textContent = texto;

    var texto = document.getElementById("Tag3Input").value;
    document.getElementById("Tag3").textContent = texto;
    var texto = document.getElementById("Player3Input").value;
    document.getElementById("Player3").textContent = texto;

    var texto = document.getElementById("Tag4Input").value;
    document.getElementById("Tag4").textContent = texto;
    var texto = document.getElementById("Player4Input").value;
    document.getElementById("Player4").textContent = texto;

    var texto = document.getElementById("Tag5Input").value;
    document.getElementById("Tag5").textContent = texto;
    var texto = document.getElementById("Player5Input").value;
    document.getElementById("Player5").textContent = texto;

    var texto = document.getElementById("Tag6Input").value;
    document.getElementById("Tag6").textContent = texto;
    var texto = document.getElementById("Player6Input").value;
    document.getElementById("Player6").textContent = texto;

    var texto = document.getElementById("Tag7Input").value;
    document.getElementById("Tag7").textContent = texto;
    var texto = document.getElementById("Player7Input").value;
    document.getElementById("Player7").textContent = texto;

    var texto = document.getElementById("Tag8Input").value;
    document.getElementById("Tag8").textContent = texto;
    var texto = document.getElementById("Player8Input").value;
    document.getElementById("Player8").textContent = texto;
}