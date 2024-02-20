function sumar(num1, num2){
    return num1 + num2;
}

function calc(num1, num2, callback){
    return callback(num1, num2)
} 

console.log(calc(3,5,sumar))

////////////////////////////////////////////////////////////////

setTimeout(function () {
    console.log('Hola JavaScript');
  }, 5000)
  
  function gretting(name) {
    console.log(`Hola ${name}`);
  }
  
  setTimeout(gretting, 2000, 'Oscar');