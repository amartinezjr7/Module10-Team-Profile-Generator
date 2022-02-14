const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/page-template.js');

const promptUser=() =>{
    return inquirer.prompt([
        {
            type:'input',
            name:'teamName',
            message:'What is the name of your Team? (require)',
            validate: teamNameInput =>{
                if (teamNameInput){
                    return true;
                }else{
                    console.log('please enter your team name!');
                    return false;
                }
            }
        },
        {
            type:'input',
            name:'managerName',
            message:'Please Enter the managers name(required)',
            validate: managerInput=>{
                if(managerInput){
                    return true;
                }else{
                    console.log("Please Enter the manager's name!");
                    return false;
                }
            }
        },
        {
            type:'input',
            name:'managerID',
            message:'Please enter the Managers employee ID (required)',
            validate: managerID=>{
                if(managerID){
                    return true;
                }else{
                    console.log('Please Enter the manager ID');
                    return false;
                }
            }
        },
        {
            type:'link',
            name:'managerEmail',
            message:'Please enter the managers email (required)',
            validate: manEmail=>{
                if(manEmail){
                    return true;
                }else{
                    console.log('Please enter the managers email');
                    return false;
                }
            }
        },
        {
            type:'input',
            name:'managerGithub',
            message:'Please enter the managers github handle (required)',
            validate: manGit =>{
                if(manGit){
                    return true;
                }else{
                    console.log('manager github required');
                    return false; 
                }
            }
        },
        {
            type:'input',
            name:'officeNum',
            message:'Please Enter the office Number (required)',
            validate:offNum=>{
                if(offNum){
                    return true;
                }else{
                    console.log('You must enter the office number');
                    return false;
                }
            }
        }
    ]);
};

const promptTeam = teamData=>{
    if(!teamData.roster){
        teamData.roster = [];
    }

    console.log('Please give me information about your team!!');
    return inquirer.prompt([
        {
            type:'checkbox',
            name:'jobTitle',
            message:'Please pick the job title of your employee',
            choices:['engineer','intern','Finished building']
            
        }
    ]).then(rosterData =>{
        teamData.roster.push(rosterData);
    });
};

promptUser()
    //.then(promptTeam)
    .then(teamData =>{
        console.log(teamData);

        const pageHTML = generatePage(teamData);

        fs.writeFile('index.html', pageHTML, err =>{
            if(err) throw new Error (err);
        });
    });