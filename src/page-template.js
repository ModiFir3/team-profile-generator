const generateManager = Manager => {
  return `
  <div class=" col-3">
    <div class="bg-info">
      <h2 class=""> ${Manager.name}</h2>
      <h3>Manager</h3>
    </div>
    <div class="bg-light p">
      <p>ID:${Manager.id}</p>
      <p>Email:<a href="mailto:${Manager.email}"> ${Manager.email}</a></p>
      <p>Office number: ${Manager.officeNumber}</p>
    </div>
  </div>`
}

const generateEngineer = Engineer => {
  return `
  <div class=" col-3">
    <div class="bg-info">
      <h2 class=""> ${Engineer.name}</h2>
      <h3>Engineer</h3>
    </div>
    <div class="bg-light">
      <p>ID:${Engineer.id}</p>
      <p>Email:<a href="mailto:${Engineer.email}"> ${Engineer.email}</a></p>
      <p>Github:<a href="${Engineer.github}"> ${Engineer.github}</a></p>
    </div>
  </div>`
}

const generateIntern = Intern => {
  return `
  <div class=" col-3">
    <div class="bg-info">
      <h2 class="">${Intern.name}</h2>
      <h3>Intern</h3>
    </div>
    <div class="bg-light p">
      <p>ID: ${Intern.id}</p>
      <p>Email:<a href="mailto:${Intern.email}"> ${Intern.email}</a></p>
      <p>School: ${Intern.school}</p>
    </div>
  </div>`
}

const generatePage = data => {
  pageArray = [];
  
  for (let i = 0; i < data.length - 1; i++) {
    let employee = data[i];
    let role = employee.getRole();
    
    if (role === 'Manager') {
      const managerCard = generateManager(employee);

      pageArray.push(managerCard);
    }

    // call engineer function
    if (role === 'Engineer') {
      const engineerCard = generateEngineer(employee);

      pageArray.push(engineerCard);
    }

    // call intern function 
    if (role === 'Intern') {
      const internCard = generateIntern(employee);

      pageArray.push(internCard);
    }
  }

  // joining strings 
  const employeeCards = pageArray.join('')

  // return to generated page
  const generateTeam = generateHTML(employeeCards);
  return generateTeam;
}

const generateHTML = employeeCards => {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Team Profile Generator</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
      <link rel="stylesheet" href="style.css">
    </head>
 
    <body>
      <header>
        <h1 class="bg-danger d-flex justify-content-center p-3">My Team</h1>
      </header>
      <main>
        <section class='employee-card container-fluid'>
          <div class="row d-flex justify-content-center gap-2">
            ${employeeCards}
          </div>
        </section>
      </main>
      <footer>
      </footer>
    </body>
  </html>`
}

module.exports = generatePage;