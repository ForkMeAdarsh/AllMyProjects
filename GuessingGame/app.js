let maximum = parseInt(prompt("Enter a maximum number of your choice!"));
console.log("maximum: ", maximum);

while (!maximum)
{
    maximum = parseInt(prompt("Enter a maximum number of your choice!"));
}

let targetNum = Math.floor(Math.random() * maximum) + 1;
console.log("random: ", targetNum);

let guess = prompt("Enter your guess!! or type 'q' to quit the game."); 
let attempts = 1;

while (parseInt(guess) !== targetNum)
{
    if (guess === 'q')
    {
        break;
    }
    guess = parseInt(guess);
    if (guess > targetNum)
    {
        guess = prompt("Too big. Try another guess!");
        attempts++;
    }
    else if (guess < targetNum)
    {
        guess = prompt("Too low. Try another guess!");
        attempts++;
    }
    else
    {
        guess = prompt("Invalid input. Enter a number or 'q' to exit.");
    }
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