const generateManager = Manager => {
  // console.log(Manager)
  return `
  <div class="container col-3">
    <div class="bg-info">
      <h2 class="">${Manager.name}</h2>
      <h3>Manager</h3>
    </div>
    <div class="bg-light p">
      <p>ID:${Manager.id}</p>
      <p>Email:<a href="${Manager.email}">${Manager.email}</a></p>
      <p>Office number:${Manager.officeNumber}</p>
    </div>`
}

const generateEngineer = Engineer => {
  // console.log(Engineer)
  return `
  <div class="container col-3">
    <div class="bg-info">
      <h2 class="">${Engineer.name}</h2>
      <h3>Engineer</h3>
    </div>
    <div class="bg-light p">
      <p>ID:${Engineer.id}</p>
      <p>Email:<a href="${Engineer.email}">${Engineer.email}</a></p>
      <p>Office number:${Engineer.officeNumber}</p>
    </div>`
}

const generateIntern = Intern => {
  // console.log(Intern)
  return `
  <div class="container col-3">
    <div class="bg-info">
      <h2 class="">${Intern.name}</h2>
      <h3>Intern</h3>
    </div>
    <div class="bg-light p">
      <p>ID:${Intern.id}</p>
      <p>Email:<a href="${Intern.email}">${Intern.email}</a></p>
      <p>Office number:${Intern.officeNumber}</p>
    </div>`
}

const generatePage = data => {
  console.log(data)
  // pageArray = [];

  // for (let i = 0; i < data.length; i++) {
    // console.log(data[i])
    // call manager function
  //   if (data[i].getRole() === 'Manager') {
  //     const managerCard = generateManager(data[i]);

  //     pageArray.push(managerCard);
  //   }

  //   // call engineer function
  //   if (data[i].getRole() === 'Engineer') {
  //     const engineerCard = generateEngineer(data[i]);

  //     pageArray.push(engineerCard);
  //   }

  //   // call intern function 
  //   if (data[i].getRole() === 'Intern') {
  //     const internCard = generateIntern(data[i]);

  //     pageArray.push(internCard);
  //   }
  // }

  // // joining strings 
  // const employeeCards = pageArray.join('')

  // // return to generated page
  // const generateTeam = generatePage(employeeCards);
  // return generateTeam;

//   return `
//  <!DOCTYPE html>
//  <html lang="en">
//    <head>
//      <meta charset="UTF-8">
//      <meta name="viewport" content="width=device-width, initial-scale=1.0">
//      <meta http-equiv="X-UA-Compatible" content="ie=edge">
//      <title>Team Profile Generator</title>
//      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
//      <link rel="stylesheet" href="style.css">
//    </head>

//    <body>
//      <header>
//      <h1 class="bg-danger d-flex justify-content-center">My Team</h1>
//      </header>
//      <main>
//      <section class='employee-card'>
//      </section>
//      </main>
//      <footer>
//      </footer>
//    </body>
//  </html>`
}

module.exports = generatePage;