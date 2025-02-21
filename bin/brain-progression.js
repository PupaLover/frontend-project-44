import readlineSync from 'readline-sync';

const generateProgression = (length, start, step) => {
  return Array.from({ length }, (_, i) => start + i * step);
};

const playGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What number is missing in the progression?');

  const rounds = 3;
  for (let i = 0; i < rounds; i++) {
    const length = Math.floor(Math.random() * 6) + 5; // От 5 до 10 чисел
    const start = Math.floor(Math.random() * 10) + 1;
    const step = Math.floor(Math.random() * 5) + 1;
    const progression = generateProgression(length, start, step);
    const hiddenIndex = Math.floor(Math.random() * length);
    const correctAnswer = progression[hiddenIndex];
    progression[hiddenIndex] = '..';

    console.log(`Question: ${progression.join(' ')}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (parseInt(userAnswer, 10) !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

playGame();
