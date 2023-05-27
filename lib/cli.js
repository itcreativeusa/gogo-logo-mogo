const inquirer = require('inquirer');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt);
const { join } = require('path');
const { writeFile } = require('fs/promises');
const { createDocument } = require('./document');
//Class CLI
class CLI {
  constructor() {
    this.title = '';

    // Array of questions
    this.shape = [];
  }
  run() {
    
    /*return writeFile(
      join(__dirname, '..', 'examples', 'logo.svg'),
      createDocument("bye", "green", "Triangle", "tan" )
    );*/
  
    return inquirer
      .prompt([
        {
          type: 'maxlength-input',
          name: 'logoName',
          message: 'Please enter logo name. You can enter up to three characters',
          maxLength: 3,
        },
        {
          type: 'input',
          name: 'textColor',
          message: 'Enter prefered text color. You can enter color keyword (OR a hexadecimal number)',
        },
        {
          type: 'checkbox',
          name: 'shape',
          message: 'Choose a shape:',
          choices: ['Circle','Triangle','Square'],
        },
        {
          type: 'input',
          name: 'shapeColor',
          message: 'Enter prefered shape color. You can enter color keyword (OR a hexadecimal number)',
        },
      ])
      //User answers
      .then((res) => {
        this.title = res.logoName;
        this.textColor = res.textColor;
        this.shape = res.shape;
        this.shapeColor = res.shapeColor;
      })
      .then(() => {
       //Create file logo.svg in 'examples' folder
        return writeFile(
          join(__dirname, '..', 'examples', 'logo.svg'),
          createDocument(this.title, this.textColor, this.shape, this.shapeColor )
        );
      })
      //Show this message when user shave entered input for all the prompts
      .then(() => console.log('Created logo.svg!'))
      .catch((err) => {
        console.log(err);
        console.log('Oops. Something went wrong.');
      });
  }
}

module.exports = CLI;
