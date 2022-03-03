const generateEngineer = eData =>{
  return `
  <div class="col">
  <div class="card shadow-lg border-3" style="width: 18rem;">
    <div class="card-body">
      <h3 class="card-title bg-primary text-light text-center">${eData.name}</h3>
        <h4 class="card-subtitle mb-2 text-light text-center bg-primary">Engineer</h4>
      <ul class="list-group list-group-flush">    
          <li class="list-group-item">Employee ID: ${eData.id}</li>
          <li class="list-group-item">Email:<a href="${eData.email}" class="card-link">${eData.email}</a></li>
          <li class="list-group-item">github:<a>${eData.github}</a></li>
      </ul>      
    </div>
  </div>
</div>
`;
}

const generateIntern = iData =>{
  return `
  <div class="col">
  <div class="card shadow-lg border-3" style="width: 18rem;">
    <div class="card-body">
      <h3 class="card-title bg-primary text-light text-center">${iData.name}</h3>
        <h4 class="card-subtitle mb-2 text-light text-center bg-primary">Engineer</h4>
      <ul class="list-group list-group-flush">    
          <li class="list-group-item">Employee ID: ${iData.id}</li>
          <li class="list-group-item">Email:<a href="${iData.email}" class="card-link">${iData.email}</a></li>
          <li class="list-group-item">school:<a>${iData.school}</a></li>
      </ul>      
    </div>
  </div>
</div>
`;
}




module.exports = templateData =>{
  var mData = templateData[0];
  var eData = templateData[1];
  var iData = templateData[2];
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
    <h1 class="page-title text-light bg-danger py-5 px-5 text-center">${mData.teamName}</h1>
  </div>
</header>
    <main class="container px-4">
      <div class="row row-cols-1 row-cols-md-3 g-5">
        <div class="col">
          <div class="card shadow-lg border-3" style="width: 18rem;">
            <div class="card-body">
              <h3 class="card-title bg-primary text-light text-center">${mData.name}</h3>
                <h4 class="card-subtitle mb-2 text-light text-center bg-primary">Manager</h4>
              <ul class="list-group list-group-flush">    
                  <li class="list-group-item">Employee ID: ${mData.id}</li>
                  <li class="list-group-item">Email:<a href="{Manager.email}" class="card-link">${mData.email}</a></li>
                  <li class="list-group-item">Office Number:<a>${mData.officeNumber}</a></li>
              </ul>      
            </div>
          </div>
        </div>
      </div>  
      ${generateEngineer(eData)}
      ${generateIntern(iData)}
    </main>
   
  </body>
  </html>`;
}