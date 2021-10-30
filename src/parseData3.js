const fs = require('fs');

const parseData3 = (data) => {
    console.log(data[0]);
    console.log('parseData file');


let nameVar0 = data[0].name0;
    let idVar0 = data[0].id0;
    let emailVar0 = data[0].email0;
    let officeNumber0 = data[0].officeNumber;
    let nameVar1 = data[1].name0;
    let idVar1 = data[1].id0;
    let emailVar1 = data[1].email0;
    let github = data[1].engineerGithub;
    let githubURL = 'https://www.github.com/' + github; 
    let layout = `<!DOCTYPE html>
    <html lang="en-US">
    
        <meta charset="UTF-8">
        <title>Awesome Team Profile Generator</title>
        <link rel = 'stylesheet' href='style.css'>
      <body>
          <h1>My Team</h1>    
          <div>
              <h2>${nameVar0} Manager</h1>
              <p class = 'headSection'>
                  <a class = 'bodySection'> id: ${idVar0} </a><br>
                  <a class = 'bodySection'> email: <a href = 'mailto:'> ${emailVar0} </a> </a><br>
                  <a class = 'bodySection'> office number: ${officeNumber0} </a>
              </p>
          </div> 
          <div>
              <h2>${nameVar1} Manager</h1>
              <p class = 'headSection'>
                  <a class = 'bodySection'> id: ${idVar1} </a><br>
                  <a class = 'bodySection'> email: <a href = 'mailto:'> ${emailVar1} </a>  </a><br>
                  <a class = 'bodySection'> github: <a href = ${githubURL}> ${github} </a> </a>
              </p>
          </div>    
      </body>
    
    </html>`
    fs.writeFile('./src/index_parse.html', layout, function(err) {
        console.log(err)
    })
}
module.exports = parseData3