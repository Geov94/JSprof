///////// CLASE 1 ///////////

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





//////// CLASE 2 ////////

// funciones

function add (a: number,b:number): number {
    return a+b
}

const sum = add (4,6);


function createAdder (a:number): (number)=> number{
    return function (b:number){
        return b+a
    }
}

const addFour = createAdder(4);
const fourPlus6 = addFour (6);

//function con string type

function fullName (firstName: string,lastName: string = 'Not Lastname'): string{

    return `yo me llamo ${firstName} ${lastName}`
}

const myName = fullName ('geovani')

console.log(myName)