let answer = prompt("Please type a number 1-12 to see what month it is")


function whatMonth(number){
    if (number == 1){
        alert("January *the best month of course*");
    }
  else if(number == 2){
    alert("February");
  }
  else if(number == 3){
    alert("March")
  }
  else if(number == 4){
    alert("April")
  }
  else if (number == 5){
    alert("May")
  }
  else if (number == 6){
    alert("June")
  }
  else if (number == 7){
    alert("July")
  }
  else if (number == 8){
    alert("August")
  }
  else if (number == 9){
    alert("September")
  }
  else if (number == 10){
    alert("October")
  }
  else if (number == 11){
    alert("November")
  }
else if (number == 12){
    alert("December");
}
  else {
    alert("Not a month");
  }
}
console.log(whatMonth(answer))
