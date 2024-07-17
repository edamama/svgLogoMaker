//imports

const inquirer = require('inquirer');
const fs = require('fs'); //to write file
const generateSvg = require("libraries/generateSvg.js");


function writeToFile(fileName, data) {

    fs.writeFile(fileName, generateSvg(data), (err) =>
        err ? console.error(err) : console.log('Success!')
     );

}


//questions

const questions = ["Please enter three characters", "What color would you like the text to be?", "Next, pick a shape from the list:", "What is the shape's color?"]


function runApp(){

    inquirer
        .prompt([
            {
            type: "input",
            message: questions[0],
            name: "characters",
            
            },

            {

            type: "input",
            message: questions[1],
            name: "textColor",

            },

            {
                
            type: "list",
            message: questions[2],
            name: "shape",
            choices: ["Circle","Triangle", "Square"]
                
            },

          

            {
                
            type: "input",
            message: questions[3],
            name: "shapeColor",
                
            },


    ]).then((response) =>
            
        writeToFile("sampleLogos/example.svg", response)

    );

}





runApp();