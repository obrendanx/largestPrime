


function largestPrime(num){
  let div = 2;
  while(div <= num){
    if(num % div == 0 ){
      num = num / div;
    }else{
      div++
    }
  }
  console.log(div);
}

console.log(largestPrime(600851475143));
