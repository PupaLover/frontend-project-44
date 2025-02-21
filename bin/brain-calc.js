#!/usr/bin/env node
import readline from 'readline';
import process from 'node:process';
import Function from '../src/func.js';


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const func = new Function();2


function getRandomOperator() {
  const operators = ['+', '-', '*'];
  return operators[Math.floor(Math.random() * operators.length)];
}

function calculate(a, b, operator) {
  switch (operator) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    default: return null;
  }
}

function askQuestion(name) {
  const num1 = func.getRandomNumber();
  const num2 = func.getRandomNumber();
  const operator = getRandomOperator();
  const correctAnswer = calculate(num1, num2, operator);

  console.log(`Question: ${num1} ${operator} ${num2}`);

  rl.question('Your answer: ', (answer) => {
    if (parseInt(answer, 10) === correctAnswer) {
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
  console.log('What is the result of the expression?');
  askQuestion(name);
});