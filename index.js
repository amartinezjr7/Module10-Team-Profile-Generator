const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/page-template.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

const allTeam = [];


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
    ]).then(managerAns =>{
        var manager = new Manager(managerAns.managerName, managerAns.managerID, managerAns.managerEmail, managerAns.officeNum, managerAns.teamName);
        allTeam.push(manager);
        
        promptTeam();
    })
};

const promptTeam = ()=>{
    console.log('Please give me information about your team!!');
    return inquirer.prompt([
        {
            type:'list',
            name:'jobTitle',
            message:'Please pick the job title of your employee',
            choices:['Engineer','Intern', 'all done']
            
        }
    ]).then(role =>{
        if(role.jobTitle === 'Engineer'){
            newEngineer()
        }else if(role.jobTitle ==='Intern'){
            newIntern();
        }else{
            renderPage();
        }
    })
};

function newEngineer(){
    return inquirer.prompt([
        {
            type: 'input',
            name:'engineerName',
            message:'What is the name of your employee?',
            validate:(nameVal) =>{
                if(nameVal){
                    return true;
                }else{
                    console.log("You must enter their name!!");
                    return false;
                }

            }
        },
        {
            type:'input',
            name:'engineerID',
            message:"Wahat is the Team Members's ID?",
            validate:(IDval) =>{
                if(IDval){
                    return true;
                }else{
                    console.log("Please provide the Team Member's ID");
                    return true;
                }
            }
        },
        {
            type:'input',
            name:'engineerEmail',
            message:"Please provide the Team Member's email",
            validate:(emailVal) =>{
                if(emailVal){
                    return true;
                }else{
                    console.log("You must provide the Team Member's email");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name:'github',
            message:"Please provide the engineer's github",
        }
    ]).then(enginAns=>{
        const newEngin = new Engineer(enginAns.engineerName, enginAns.engineerID, enginAns.engineerEmail, enginAns.github);
        allTeam.push(newEngin);
        promptTeam();
    })

}

function newIntern(){
    return inquirer.prompt([
        {
            type: 'input',
            name:'internName',
            message:'What is the name of your employee?',
            validate:(nameVal) =>{
                if(nameVal){
                    return true;
                }else{
                    console.log("You must enter their name!!");
                    return false;
                }

            }
        },
        {
            type:'input',
            name:'internID',
            message:"Wahat is the Team Members's ID?",
            validate:(IDval) =>{
                if(IDval){
                    return true;
                }else{
                    console.log("Please provide the Team Member's ID");
                    return true;
                }
            }
        },
        {
            type:'input',
            name:'internEmail',
            message:"Please provide the Team Member's email",
            validate:(emailVal) =>{
                if(emailVal){
                    return true;
                }else{
                    console.log("You must provide the Team Member's email");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name:'school',
            message:"Please provide the intern's school", 
        },
    ]).then(interAns =>{
        const newInt = new Intern(interAns.internName, interAns.internID, interAns.internEmail, interAns.school)
        allTeam.push(newInt);
        promptTeam();
    })
}



function renderPage(){
   console.log(allTeam);


    const pageHTML = generatePage(allTeam);
   fs.writeFile('./dist/index.html', pageHTML, err =>{
        if(err) throw new Error (err);
    });

}


promptUser();