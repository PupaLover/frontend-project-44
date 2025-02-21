#!/usr/bin/env node
import readlineSync from 'readline-sync';



function getGcdGame() {
    console.log("Welcome to the Brain Games!");
    const name = readlineSync.question("May I have your name? ");
    console.log(`Hello, ${name}!`);
    console.log("Find the greatest common divisor of given numbers.");
    
    const rounds = 3;
    
    for (let i = 0; i < rounds; i++) {
        const num1 = Math.floor(Math.random() * 100) + 1;
        const num2 = Math.floor(Math.random() * 100) + 1;
        const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
        const correctAnswer = gcd(num1, num2);
        
        console.log(`Question: ${num1} ${num2}`);
        const userAnswer = readlineSync.question("Your answer: ");
        
        if (!isNaN(userAnswer) && parseInt(userAnswer, 10) === correctAnswer) {
            console.log("Correct!");
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${name}!`);
            return;
        }
    }
    
    console.log(`Congratulations, ${name}!`);
}

getGcdGame();

