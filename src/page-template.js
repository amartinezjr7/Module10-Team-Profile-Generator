
const generateEngineer = () =>{
  return `
  <div class="col">
  <div class="card shadow-lg border-3" style="width: 18rem;">
    <div class="card-body">
      <h3 class="card-title bg-primary text-light text-center">${map.teamMemberName}}</h3>
        <h4 class="card-subtitle mb-2 text-light text-center bg-primary">${map.jobTitle}</h4>
      <ul class="list-group list-group-flush">    
          <li class="list-group-item">Employee ID: ${map.teamMemID}</li>
          <li class="list-group-item">Email:<a href="${map.teamMemEmail}" class="card-link">${map.teamMemEmail}</a></li>
          <li class="list-group-item">github:<a>${map.github}</a></li>
      </ul>      
    </div>
  </div>
</div>
`;
}




module.exports = () =>{
    return `
    <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Profile Generator</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
  <header>
  <div class="container align-center">
    <h1 class="page-title text-light bg-danger py-5 px-5 text-center">${teamName}</h1>
  </div>
</header>
    <main class="constainer px-4">
      <div class="row row-cols-1 row-cols-md-3 g-5">
        <div class="col">
          <div class="card shadow-lg border-3" style="width: 18rem;">
            <div class="card-body">
              <h3 class="card-title bg-primary text-light text-center">${managerName}</h3>
                <h4 class="card-subtitle mb-2 text-light text-center bg-primary">Manager</h4>
              <ul class="list-group list-group-flush">    
                  <li class="list-group-item">Employee ID: ${managerID}</li>
                  <li class="list-group-item">Email:<a href="${managerEmail}" class="card-link">${managerEmail}</a></li>
                  <li class="list-group-item">Office Number:<a>${officeNum}</a></li>
              </ul>      
            </div>
          </div>
        </div>
      </div> 
    </main>
    ${generateEngineer}
  </body>
  </html>`;
}