/* Creare un array di oggetti di squadre di calcio. 
Ogni squadra avrà diverse proprietà: 
nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, 
le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array 
i cui elementi contengono solo nomi e falli subiti 
e stampiamo tutto in console. */

let squadre = [

    {
        nome: "Atalanta",
        punti: 0,
        falli: 0

    },

    {
        nome: "Bologna",
        punti: 0,
        falli: 0

    },

    {
        nome: "Cagliari",
        punti: 0,
        falli: 0

    },

    {
        nome: "Empoli",
        punti: 0,
        falli: 0

    },

    {
        nome: "Fiorentina",
        punti: 0,
        falli: 0

    },

    {
        nome: "Genoa",
        punti: 0,
        falli: 0

    },

    {
        nome: "Inter",
        punti: 0,
        falli: 0

    },

    {
        nome: "Juventus",
        punti: 0,
        falli: 0

    },

    {
        nome: "Lazio",
        punti: 0,
        falli: 0

    },

    {
        nome: "Milan",
        punti: 0,
        falli: 0

    },

    {
        nome: "Napoli",
        punti: 0,
        falli: 0

    },

    {
        nome: "Roma",
        punti: 0,
        falli: 0

    },

    {
        nome: "Salernitana",
        punti: 0,
        falli: 0

    },

    {
        nome: "Sampdoria",
        punti: 0,
        falli: 0

    },

    {
        nome: "Sassuolo",
        punti: 0,
        falli: 0

    },

    {
        nome: "Spezia",
        punti: 0,
        falli: 0

    },

    {
        nome: "Torino",
        punti: 0,
        falli: 0

    },

    {
        nome: "Udinese",
        punti: 0,
        falli: 0

    },

    {
        nome: "Venezia",
        punti: 0,
        falli: 0

    },

    {
        nome: "Verona",
        punti: 0,
        falli: 0

    }

]


//Ciclo for per aggiorare punti e falli di ogni squadra
//aggiornamento --> scorrendo il ciclo, 
//al modificarsi del contatore 
//si modifica la selezione dell'oggetto 
//all'interno dell'array squadre
for( let i = 0; i < squadre.length; i++ ){

    let aggiornamento = squadre[i];

    aggiornamento.punti = genNum();
    aggiornamento.falli = genNum();

    console.log(aggiornamento.nome + " - Punti: " + aggiornamento.punti);
    console.log(aggiornamento.nome + " - Falli: " + aggiornamento.falli);


    //Nuovo array con solo nomi e squadre
    const {nome, falli} = squadre[i];

    let infoSquadre = [

        nome,
        falli
    
    ]

    console.log(infoSquadre);

}


//--------
//FUNZIONI
//--------

//Generatore di numeri casuali
function genNum(){

    return Math.floor(Math.random() * 100) + 0;

}