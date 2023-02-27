const { Circle, Square, Triangle } = require("./lib/shapes")
const SVG= require("./lib/svg")
const inquirer = require("inquirer");
const fs= require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'text',
            message: "What 3 letters are in the logo?"
        },
        {
            type: 'list',
            name: 'shape',
            message: "What shape is your logo?",
            choices: ['circle', 'square', 'triangle']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: "What color should the shape be?"
        },
        {
            type: 'input',
            name: 'textColor',
            message: "What color should the text be?"
        }
    ])
    .then ((response)=>{
        console.log(response);
        let shape;
        if(response.shape=== "circle"){
            shape= new Circle()
        }
        if(response.shape=== "square"){
            shape= new Square()
        }
        if(response.shape=== "triangle"){
            shape= new Triangle()
        }
        shape.setColor(response.shapeColor)
        const Svg = new SVG()
        Svg.setText(response.text, response.textColor)
        Svg.setShape(shape)
fs.writeFileSync("logo.svg", Svg.render())
    })
