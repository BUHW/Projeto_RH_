window.onload = function () {
    let show = true;
    const menuContent = document.querySelector('.content');
    const menuToggle = menuContent.querySelector('.menu_toggle');


    menuToggle.addEventListener('click', () => {

        document.body.style.overflow = show ? 'hidden' : 'inicial'

        menuContent.classList.toggle('on', show);
        show = !show;
    });

    // var btn = document.getElementById("btn-diretoria");
    // btn.addEventListener("click", function () {
    //     var div = document.getElementById("conini");

    //     if (div.style.display === "none") {
    //         div.style.display = "flex";
    //     } else {
    //         div.style.display = "none";
    //     }

    // });

    // var btn1 = document.getElementById("btn-qualidade");
    // btn1.addEventListener("click", function () {
    //     var div = document.getElementById("sobrenos");

    //     if (div.style.display === "none") {
    //         div.style.display = "flex";
    //     } else {
    //         div.style.display = "none";
    //     }

    // });

    // var btn2 = document.getElementById("btn-sgo");
    // btn2.addEventListener("click", function () {
    //     var div = document.getElementById("qualid");
    //     var div1 = document.getElementById("ttx_vc");
    //     var div2 = document.getElementById("ideologia");

    //     if (div.style.display && div1.style.display && div2.style.display === "none") {
    //         div.style.display = "flex";
    //         div1.style.display = "flex";
    //         div2.style.display = "flex";
    //     } else {
    //         div.style.display = "none";
    //         div1.style.display = "none";
    //         div2.style.display = "none";
    //     }

    // });

    // var btn3 = document.getElementById("btn-rh");
    // btn3.addEventListener("click", function () {
    //     var div = document.getElementById("rh");
    //     var div1 = document.getElementById("dor");

    //     if (div.style.display && div1.style.display === "none") {
    //         div.style.display = "flex";
    //         div1.style.display = "flex";
    //     } else {
    //         div.style.display = "none";
    //         div1.style.display = "none";
    //     }

    // });

    // var btn4 = document.getElementById("btn-segtra");
    // btn4.addEventListener("click", function () {
    //     var div = document.getElementById("segtra");
    //     var div1 = document.getElementById("od");

    //     if (div.style.display && div1.style.display === "none") {
    //         div.style.display = "flex";
    //         div1.style.display = "flex";
    //     } else {
    //         div.style.display = "none";
    //         div1.style.display = "none";
    //     }

    // });

    // var btn5 = document.getElementById("btn-beneficios");
    // btn5.addEventListener("click", function () {
    //     var div = document.getElementById("beneficios");

    //     if (div.style.display === "none") {
    //         div.style.display = "flex";
    //     } else {
    //         div.style.display = "none";
    //     }

    // });

    // var btn6 = document.getElementById("btn-canden");
    // btn6.addEventListener("click", function () {
    //     var div = document.getElementById("canald");

    //     if (div.style.display === "none") {
    //         div.style.display = "flex";
    //     } else {
    //         div.style.display = "none";
    //     }

    // });

    var divAtualmenteVisivel = null;

function toggleDiv(divId) {
    var div = document.getElementById(divId);

    if (div === divAtualmenteVisivel) {
        div.style.display = "none";
        divAtualmenteVisivel = null;
    } else {
        if (divAtualmenteVisivel !== null) {
            divAtualmenteVisivel.style.display = "none";
        }
        div.style.display = "flex";
        divAtualmenteVisivel = div;
    }
}

document.getElementById("btn-diretoria").addEventListener("click", function () {
    toggleDiv("conini");
});

document.getElementById("btn-qualidade").addEventListener("click", function () {
    toggleDiv("sobrenos");
});

document.getElementById("btn-sgo").addEventListener("click", function () {
    toggleDiv("qualid");
    toggleDiv("ttx_vc");
    toggleDiv("ideologia");
});

document.getElementById("btn-rh").addEventListener("click", function () {
    toggleDiv("rh");
    toggleDiv("dor");
});


document.getElementById("btn-segtra").addEventListener("click", function () {
    toggleDiv("segtra");
    toggleDiv("od");
});


document.getElementById("btn-beneficios").addEventListener("click", function () {
    toggleDiv("beneficios");
});


document.getElementById("btn-canden").addEventListener("click", function () {
    toggleDiv("canald");
});



// Repita para os outros botões...

}

