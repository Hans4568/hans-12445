let personas = [
    {
    nombre:"Ana",
    edad:15,
    grado:"5to",
    nivel:"Secundaria"
    },
    {
    nombre:"Carlos",
    edad:16,
    grado:"5to",
    nivel:"Secundaria"
    },
    {
    nombre:"Juan",
    edad:12,
    grado:"2do",
    nivel:"Secundaria"
    },
    {
    nombre:"Sofia",
    edad:10,
    grado:"6to",
    nivel:"Primaria"
    },
    {
    nombre:"Ana",
    edad:12,
    grado:"1ro",
    nivel:"Secundaria"
    },
    {
    nombre:"Pedro",
    edad:11,
    grado:"1ro",
    nivel:"Secundaria"
    }
]
/*Pregunta 1 */
personas.forEach((e,i)=>{
    console.log((i+1) + '.- '+ e.nombre+' - '+e.edad+' - '+ e.grado+' - '+e.nivel)
})
/*Pregunta 2 */

let nivel_secundario = personas.filter(e=>e.nivel=='Secundaria')

console.log(nivel_secundario)
/*Pregunta 3 */

let nivel_primario = personas.filter(e=>e.nivel=='Primaria')
console.log(nivel_primario)

/*Pregunta 4 */
let edad15 = personas.filter(e=>e.edad>=15)
console.log(edad15)

/*Pregunta 5 */
personas.sort((a,b)=>{
    if(a.edad>b.edad) return 1;
    if(a.edad<b.edad) return -1;
    return 0;
})
console.log(personas)

/*Pregunta 6 */
let cantidad_nivel_primario = personas.filter(e=>e.nivel=="Primaria")
console.log(cantidad_nivel_primario.length)

/*Pregunta 7 */
let cantidad_nivel_secundario = personas.filter(e=>e.nivel=="Secundaria")
console.log(cantidad_nivel_secundario.length)


/*Pregunta 8 */
let sum = 0

for(let i=0;i<personas.length;i++)
{
    sum = sum + personas[i].edad;
}

console.log(Math.ceil(sum/personas.length));