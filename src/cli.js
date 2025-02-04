#!/usr/bin/env node
import readlineSync from 'readline-sync';


function name_read() {
    const name = readlineSync.question('May I have your name?');



    console.log('Hello,', name, '!')
};


export default name_read;

