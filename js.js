// @ts-check
let sifirinciDugme = document.getElementById("idDugme");
let birinciDugme = document.getElementById('idDugme1');

async function bekle() {

    for (let i = 1; i <= 50; i++) {
        sifirinciDugme.style.padding = i + "px";
        birinciDugme.style.margin = i + "px";
        birinciDugme.textContent = "margin = " + i;
        sifirinciDugme.textContent = "padding = " + i;
        await sleep(50);
        sifirinciDugme.onclick = null;
        birinciDugme.onclick = null;
    };
    // onclick null oldugu icin baska yoloni bulamadim
    sifirinciDugme.onclick = bekle
    birinciDugme.onclick = geri
};

async function geri() {

    for (let i = 50; i >= 0; i--) {
        sifirinciDugme.style.padding = i + "px";
        birinciDugme.style.margin = i + "px";
        birinciDugme.textContent = "margin = " + i;
        sifirinciDugme.textContent = "padding = " + i;
        await sleep(50);
        sifirinciDugme.onclick = null;
        birinciDugme.onclick = null;
    };
    // onclick null oldugu icin baska yoloni bulamadim
    sifirinciDugme.onclick = bekle
    birinciDugme.onclick=geri
};



function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

bekle();

sifirinciDugme.onclick = function () {
    bekle();
}
