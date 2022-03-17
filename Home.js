
let choix = [];
let repons = [];
a = 0;
z = 0
let grille = document.getElementById('grille');


for (let i = 1; i < 26; i++) {
    let btnCreate = document.createElement('input');
    btnCreate.setAttribute('type', 'button');
    btnCreate.setAttribute('value', i);
    btnCreate.setAttribute('class', 'btn');
    btnCreate.setAttribute('onclick', 'number(this.value)');
    document.getElementById('grille').appendChild(btnCreate);
};

function number(val) {
    let result = document.getElementById('result');
    let fin = document.getElementById('fin');
    let zp = document.getElementById('z');
    let again = document.createElement('input');

    again.setAttribute('type','button');
    again.setAttribute('value','Rejouer');
    again.setAttribute('onclick','javascript:location.reload()');

    choix.push(val);
    result.innerHTML += choix[choix.length - 1] + " ";

    if (choix.length == 6) {
        document.body.removeChild(grille);
        document.body.appendChild(again);
        fin.innerHTML = "Résultat : ";
        zp.innerHTML = "Nombre égaux : " + z;

        var inter = setInterval(function () {
            let ran = Math.floor(Math.random() * 25);
            repons.push(ran);
            fin.innerHTML += repons[a] + " ";
            a += 1;
            console.log(a)
            for (let j = 0; j < choix.length; j++) {
                if (choix[j] == repons[repons.length - 1]) {
                    z += 1;
                    zp.innerHTML = "Nombre égaux : " + z;

                };
            };
            if (repons.length == 6) {
                clearInterval(inter)
            };
        }, 2000);

    };
};
