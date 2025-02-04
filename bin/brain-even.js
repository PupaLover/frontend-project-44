#!/usr/bin/env node
import readline from 'readline';
import process from 'node:process';
import Function from '../src/func.js';




const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const func = new Function;



function isEven(number) {
  return number % 2 === 0;
}

function askQuestion(name) {
  const number = func.getRandomNumber();
  console.log(`Question: ${number}`);

  rl.question('Your answer: ', (answer) => {
    const correctAnswer = isEven(number) ? 'yes' : 'no';

    if (answer.toLowerCase() === correctAnswer) {
      console.log('Correct!');
      askQuestion(name);
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      rl.close();
    }
  });
}

console.log('Welcome to the Brain Games!');
rl.question('May I have your name? ', (name) => {
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  askQuestion(name);
});
