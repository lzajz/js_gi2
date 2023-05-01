var tomsHeight = 9 
var tomsMass = 8 
var jerrysHeight = 10 
var jerrysMass = 45


var tomsBMI = (tomsMass / tomsHeight ** 2)
var jerrysBMI = (jerrysMass / jerrysHeight **2)

let biggerBmi = tomsBMI > jerrysBMI ? `true` :`false`
console.log(`Is Tom's BMI higher than Jerry's? ${biggerBmi}`)


