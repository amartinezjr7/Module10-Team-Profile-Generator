module.exports = templateData =>{
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
    <h1 class="page-title text-light bg-danger py-5 px-5 text-center">${templateData.teamName}</h1>
  </div>
</header>
    <main class="constainer">
      <div class="row">
        <div class="col-sm-6">
          <div class="card shadow-lg border-3" style="width: 18rem;">
            <div class="card-body">
              <h3 class="card-title bg-primary text-light text-center">${templateData.managerName}</h3>
                <h4 class="card-subtitle mb-2 text-light text-center bg-primary">Manager</h4>
              <ul class="list-group list-group-flush">    
                  <li class="list-group-item">Employee ID: ${templateData.managerID}</li>
                  <li class="list-group-item">Email:<a href="${templateData.managerEmail}" class="card-link">${templateData.managerEmail}</a></li>
                  <li class="list-group-item">Github:<a href="https://www.github.com/${templateData.managerGithub}" class="card-link">${templateData.managerGithub}</a></li>
                  <li class="list-group-item">Office Number:<a>${templateData.officeNum}</a></li>
              </ul>      
            </div>
          </div>
        </div>
      </div>  
    </main>

  </body>
  </html>`;
}