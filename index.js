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
        var manager = new Manager(managerAns.managerName, managerAns.manager)
    })
};

const promptTeam = ()=>{
    console.log('Please give me information about your team!!');
    return inquirer.prompt([
        {
            type:'list',
            name:'jobTitle',
            message:'Please pick the job title of your employee',
            choices:['Engineer','Intern']
            
        },
        {
            type: 'input',
            name:'teamMemberName',
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
            name:'teamMemID',
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
            name:'TeamMemEmail',
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
            when: (jobAns) => jobAns.jobTitle === 'Engineer'
        },
        {
            type: 'input',
            name:'school',
            message:"Please provide the intern's school",
            when:(roleAns)=> roleAns.jobTitle === 'Intern' 
        },
        {
            type:'confirm',
            name:'newTeamMember',
            message:'Would you like to add another Team Member?'
        }

    ])
};


function managerObj(managerAns){
    managerInfo = new Manager(managerAns.managerName, managerAns.managerID, managerAns.managerEmail, managerAns.officeNum);
    
    teamName = managerAns.teamName;
    managerName = managerAns.managerName;
    managerID = managerAns.managerID;
    managerEmail = managerAns.managerEmail;
    officeNum = managerAns.officeNum;


    return managerInfo;
};

function teamObj(teamData){
    var name = teamData.teamMemberName;
    var id = teamData.teamMemID;
    var email = teamData.teamMemEmail;
    var role = teamData.jobTitle;


    /*const 
    const newIntern = new Intern(name, id, email, teamData.school);*/

   if(role = 'Engineer'){
        console.log("its an engineer");
        const engineer = new Engineer(name, id, email, teamData.github);
        teamData.push(engineer);
        console.log(engineer);
    }else if(role = 'Intern'){
        console.log("its an intern");
    }
    return teamData;

    
};


function renderPage(managerInfo, teamData){
    const output = new Map();

    output.set(managerInfo);
    output.set(teamData);

   // console.log(output);


    const pageHTML = generatePage(output);
    fs.writeFile('./dist/index.html', pageHTML, err =>{
        if(err) throw new Error (err);
    });

}


promptUser()
  .then(managerAns =>{managerObj(managerAns);})
  .then(promptTeam)
  .then(teamData => {teamObj(teamData);
    renderPage(managerInfo, teamData)})