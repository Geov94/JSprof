console.log(" madre estoy usando typescript");

//-------------------boolean--------------------

let muted : boolean = true;

// muted = 2;


//----numeros-------

let age =6;
let numerador : number = 42;
let denominador: number = age;
let resultado = numerador/denominador;


// --------string--------------

let nombre:string = 'andres';
let saludo= `me llamo ${nombre}`


//----------- arreglos---------

let people : string[] = [];

people = ['andres','geovani','salamanca','martinez'];

// people.push(100)


// arreglo mixto sintasis

let ArregloMixto : Array< string| number> =[]

ArregloMixto.push('Julian');
ArregloMixto.push(2017);

//--------------enum------------- 

enum Color {

    Rojo='Rojo',
    Verde='Verde',
    Azul='Azul'
}

let colorFavorito: Color=  Color.Rojo;
console.log(`Mi color favorito es ${colorFavorito}`)


//---------any------------ cuando no tenemos certeza del tipo de variable


let comodin:any ='Joker';
comodin = {type:'wildcard'};

//---object---

let someObject: object= {type:'wildcard'}