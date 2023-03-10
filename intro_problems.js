//addNumbers

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
    if (numsLeft > 0) {
        rl.question('Gimme a numba: ', function(answer) {
            let numba = parseInt(answer, 10);
            sum += numba
            console.log(sum);
            numsLeft--;
            // console.log(numsLeft);
            addNumbers(sum, numsLeft, completionCallback);
            
        })
        
    } else {
        rl.close();
        
        completionCallback(sum);
    }
}

// addNumbers(0, 3, sum => console.log(`Total Sum ${sum}`));

Function.prototype.myBind = function(context, ...bindArgs){
    let that = this
    return function(...callArgs){
           return that.call(context, ...bindArgs, ...callArgs)
    }
}
class Lamp {
    constructor() {
      this.name = "a lamp";
    }
  }
  
  const turnOn = function() {
    console.log("Turning on " + this.name);
  };
  
  const lamp = new Lamp();
  
//   turnOn(); // should not work the way we want it to
  
  const boundTurnOn = turnOn.bind(lamp);
  const myBoundTurnOn = turnOn.myBind(lamp);
  
//   boundTurnOn(); // should say "Turning on a lamp"
//   myBoundTurnOn(); // should say "Turning on a lamp"


function askIfGreaterThan(el1, el2, callback){
    rl.question(`Is ${el1} greater than ${el2}? (yes or no)`, function(answer){
        if (answer === "yes"){
            callback(true);
        }else {
            callback(false);
        }
        
    });
}
function innerBubbleSortLoop(array, i, madeAnySwaps=false, outerBubbleSortLoop){
    if (i < array.length - 1) {
        askIfGreaterThan(array[i], array[i + 1], function(isGreaterThan) {
            if (isGreaterThan) {
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                madeAnySwaps = true;
            }
            innerBubbleSortLoop(array, i + 1, madeAnySwaps, outerBubbleSortLoop)
        })
    } else if (i === (array.length - 1)) {
        outerBubbleSortLoop(madeAnySwaps);
    }

}
// const outer = function() {
//     console.log('outer');
// }
// let array = [1, 2, 4, 3, 5];
// innerBubbleSortLoop(array, 0, false, outer);

function absurdBubbleSort(array, sortCompletionCallback) {
    
    function outerBubbleSortLoop (madeAnySwaps) {

        if (madeAnySwaps) {
            innerBubbleSortLoop(array, 0, false, outerBubbleSortLoop)
        } else if (!madeAnySwaps) {
            sortCompletionCallback(array)
        }
    }
    outerBubbleSortLoop(true)
}

absurdBubbleSort([3, 2, 1], function(arr) {
    console.log("Sorted array: " + JSON.stringify(arr));
    rl.close();
  });