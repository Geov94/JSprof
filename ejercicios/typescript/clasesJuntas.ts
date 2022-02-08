///////// CLASE 1  tipos basicos ///////////

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





//////// CLASE 2 funciones////////

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

/////// CLASE 3 interfaces //////

console.log('si esta funcionando la pagina')

enum Color{
    Rojo2='Rojo',
    Verde2 ='Verde'
}

interface Rectangulo {
    ancho:number,
    alto:number,
    color?:Color
}

let rect: Rectangulo = {
    ancho:4,
    alto:26,
    // color:Color.Rojo
    

}

function area (r:Rectangulo):number{
    return r.alto*r.ancho
}

const areaRect = area(rect);
console.log (areaRect)

rect.toString = function(){
    return this.color?`un rectangulo ${this.color}` : `Un Rectangulo`
}

console.log(rect.toString())


/////////// clases ////////