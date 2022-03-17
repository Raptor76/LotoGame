
let choix = [];
let repons = [];
a = 0;
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
    console.log(val);
    choix.push(val);
    result.innerHTML += choix[choix.length - 1] + " ";
    if (choix.length == 6) {
        document.body.removeChild(grille);
        result.innerHTML += "Résultat : ";
        var inter = setInterval(function () {
            let ran = Math.floor(Math.random() * 25);
            repons.push(ran);
            result.innerHTML += repons[a] + " ";
            a += 1;
            console.log(a)
            if (repons.length == 6) { 
                clearInterval(inter)
            };

        }, 2000);

    };
};

function resultat(result) {


}

