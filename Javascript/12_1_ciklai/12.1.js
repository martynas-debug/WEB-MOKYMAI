// 1. 
console.log('-----1-----'); 
console.log();

for (let i = 1; i <= 10; i++) {
    console.log('skaicius:', i);
}
console.log();

//2. 
console.log('-----2-----'); 
console.log();

for (let i = 0; i <= 15; i+= 2) {
    console.log('skaicius i = ' + i);
}
console.log();

//3. 
console.log('-----3-----'); 
console.log();

for (let i = 1; i <= 20; i++) {
    if (i % 3 == 0) {
    console.log('[' + i + ']');
    //console.log(`*${i}*`)
    }
}
console.log();

//4. 
console.log('-----4-----'); 
console.log();

for (let i = 1; i <= 20; i++) {
    if (i % 4 ==0){
        console.log('skaicius', i, 'dalinasi is 4');
    }
}
console.log();

//5. 
console.log('-----5-----'); 
console.log();

let pradzia = 5;
let pabaiga = 10;

if (pradzia < pabaiga){

    for (let i = pradzia; i <= pabaiga; i++)
     {
        
         console.log('skaicius', i, 'kvadratas', i * i);
    }
    
    console.log();
}




//6. 
console.log('-----6-----'); 
console.log();

let pradzia1 = 9, pabaiga1 = 21;

if(pradzia1 < pabaiga1)
{
    for(let i = pradzia1; i <= pabaiga1; i++)
        {
        
            if(i % 2 != 0 || i % 8 == 0)
                {
                    console.log('${i} yra nelyginis skaicius arba dalinasi is 8');
                }
}
}
console.log();

//7. 
console.log('-----7-----'); 
console.log();

let a = 3, b = 8, suma = 0;

for(let i = 1; i <= b; i++)
{
    suma += a;
}
console.log('${suma}');

console.log();


