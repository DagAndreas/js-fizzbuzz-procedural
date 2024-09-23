const answer = []

// Write your code below this line

const fizz = 3
const buzz = 5

for (let i = 1; i <= 15; i++){
    if (i % fizz === 0 && i % buzz === 0){
        answer.push('FizzBuzz')
    }
    else if (i % fizz == 0){
        answer.push('Fizz')
    }
    else if (i % buzz == 0){
        answer.push('Buzz')
    }
    else {
        answer.push(i)
    }
}



// Don't touch the code below this line, we'll cover it later
module.exports = answer
