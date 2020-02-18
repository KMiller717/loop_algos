// Take your previous solutions and write them using the other kind of loop.  
// I.E.  If you wrote both of your algorithms using for loops, now write them out with while loops
//Problem 1
var i=1
while (i<20) {
  if (i%2 != 0){
    console.log(i);
  }
  i++;
}

//Problem 2
sum=0;
var i=1;
while(i<11) {
    console.log(i);
    sum = sum + i;
    console.log(sum);
    i++;
}

//Problem 3
var i=1

while (i<=30) {
  if (i%3==00 && i%5==0) {
    console.log("FizzBuzz");
  }
  else if (i%3==0) {
    console.log("Fizz");
  }
  else if(i%5==0) {
    console.log("Buzz");
  }
  else {
    console.log(i);
  }
  i++;
}


// YOUR CODE HERE