/* Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa 
con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore 
utilizzando destructuring e template literal nel DOM */

let bici = [

    {
    
        nome: "Canyon Ultimate",
        peso: 7

    },

    {
    
        nome: "Rose X-Lite",
        peso: 8

    },

    {
    
        nome: "Sarto asola",
        peso: 6

    },

    {
    
        nome: "Colnago V2-R ",
        peso: 1

    },

    {
    
        nome: "Scott Addict RC",
        peso: 4

    },

    {
    
        nome: "Trek Èmonda",
        peso: 9

    }

]


//ciclo for che stabilisce il peso minore fra le bici da corsa
//se il valore del peso dell oggetto che scorre è minore 
//di quello di default allora sostituisce il valore di default

//pesoMinBici --> oggetto bici di default (il primo oggetto bici)
let pesoMinBici = bici[0];

//thisBici --> oggetto bici che scorre in base al contatore
for( let i = 0; i < bici.length; i++ ){

    const thisBici = bici[i];

    if( thisBici.peso < pesoMinBici.peso ){

        pesoMinBici = thisBici;

    }

}

/* const biciLeggera = document.getElementById("bici-leggera");
biciLeggera.innerHTML= `

    La bici più leggera è <span>${pesoMinBici.nome}</span> e pesa <span>${pesoMinBici.peso}kg</span>

`; */

//Destructuring
const {nome, peso} = pesoMinBici;
const biciLeggeraDes = document.getElementById("bici-leggera");
biciLeggeraDes.innerHTML= `

    La bici più leggera è <span>${nome}</span> e pesa <span>${peso}kg</span> (Destructuring)

`;
