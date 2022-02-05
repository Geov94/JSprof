console.log('si esta funcionando la pagina')

enum Color{
    Rojo='Rojo',
    Verde ='Verde'
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