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

addNumbers(0, 3, sum => console.log(`Total Sum ${sum}`));