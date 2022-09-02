/******EVERY METHODU*******/

/*Ever methodu dizideki bütün değerler için bir koşul sunar.
 Eğer tüm dizi değerleri koşulu sağlıyorsa bize true döndürür.
Bir değer dahi koşulu sağlamazsa diğer değerlere bakmadan 
direk işlemi durudur ve bize false değerini döndürür. */

const numbers=[2,4,6,8,10]

const nmbers_=numbers.every((number)=>{
    return number>3;
})

console.log(nmbers_)

/*-----------------------*/
const nmbers_2=numbers.every((number)=>{

    return number%2===0;
})

console.log(nmbers_2)

/*---------------------------*/

const nmbers_3=numbers.every((number,index,arr)=>{
    console.log(index,arr)

    return (number *3)%2===0
})

console.log(nmbers_3)

/*-----------------------------*/

const users=[
    {
        name:"Emre",
        surName:"Demir",
        age:23
    },
    {
        name:"Gurbet",
        surName:"Polat",
        age:23
    },
    {
        name:"Buse",
        surName:"Bekmezci",
        age:22
    }
]

const obje=users.every((user)=>{

    return user.age>20 

})
console.log(obje)

/*------------------------*/

const obje2=users.every((user)=>{
    return user.name==="Buse"
})

console.log(obje2)