let maximum = parseInt(prompt("Enter a maximum number of your choice!"));
console.log(maximum);

while (!maximum)
{
    maximum = parseInt(prompt("Enter a maximum number of your choice!"));
}

let targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = parseInt(prompt("Enter your guess!!"));
let attempts = 1;

while (parseInt(guess) !== targetNum)
{
    if (guess === 'q')
    {
        break;
    }
    if (guess > targetNum)
    {
        guess = prompt("Too big. Try another guess!");
    }
    else
    {
        guess = prompt("Too low. Try another guess!");
    }
    attempts++;
}
if (guess === 'q')
{
    console.log("Ok quitting as per you instructions....!!!");
    console.log("You are out from here.");
}
else
{
    if (attempts === 1)
    {
        console.log("Congrats you guessed correctly. It took you 1 guess.");
    }
    else
    {
        console.log(`Congrats you guessed correctly. It took you ${attempts} guesses.`);
    }
}