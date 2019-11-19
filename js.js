// @ts-check
async function bekle() {
    let bas = document.getElementById("idDugme");

    let sifirinciDugme = document.getElementById('idDugme');
    let birinciDugme = document.getElementById('idDugme1');
    for (let i = 1; i <= 50; i++) {
        sifirinciDugme.style.padding = i + "px";
        birinciDugme.style.margin = i + "px";
        birinciDugme.textContent = "margin = " + i;
        sifirinciDugme.textContent = "padding = " + i;
        await sleep(300);
    };

    bas.onclick = function () {
        alert("meraba");
    }
};

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

bekle();