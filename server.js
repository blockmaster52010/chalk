import chalk from "chalk"
import inquirer from 'inquirer';
import gradient from 'gradient-string'
import chalkAnimation from 'chalk-animation'
import figlet from 'figlet'
console.log(chalk.bgGreen("kddkmddffcfcfvhvcfuvxivhisdfxvkdfxviuhfv"))
//Function that allows you to control timing
function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
  
  let animation = chalkAnimation.karaoke("ydihfiw", 1)
  await sleep(3000)
  animation.stop()
  let answers = await inquirer.prompt({
    name: 'player',
    type: 'input',
    message: "What is your name?",
    default(){
        return 'Random Guy'
    },})
    console.log(answers.player)
