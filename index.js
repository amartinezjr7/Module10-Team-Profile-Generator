const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/page-template.js');

const promptUser=() =>{
    return inquirer.prompt([
        {
            type:'input',
            name:'name',
            message:'What is your name? (require)',
            validate: nameInput =>{
                if (nameInput){
                    return true;
                }else{
                    console.log('please enter your name!');
                    return false;
                }
            }
        }
    ]);
};

promptUser()
    .then(portfolioData =>{
        console.log(portfolioData);

        const pageHTML = generatePage(portfolioData);

        fs.writeFile('index.html', pageHTML, err =>{
            if(err) throw new Error (err);
        });
    });