const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Square, Circle } = require('./lib/shapes');
const create = require('./createLogo')

function init() {
  inquirer.prompt([
    {
       type: 'input',
      message: 'What would you like your logo to say?(3 character max)',
      name: 'logoName',
    },
    {
      type: 'input',
      message: 'Choose a text color',
      name: 'textColor',
    },
    {
      type: 'list',
      message: 'Choose a shape for your logo',
      choices: ['circle', 'square', 'triangle'],
      name: 'shape',
    },
    {
      type: 'input',
      message: 'Choose a color for your shape',
      name: 'shapeColor',
    },
  ]).then((response)=>{
    fs.writeFile('./examples/logo.svg',create(response),function(err){
      if(err) throw err;
    })
  })
}

init();