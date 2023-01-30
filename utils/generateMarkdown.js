//function to generate markdown for README
function generateMarkdown(response) {
  return `

# ${response.project_title}

## Description
🔍 ${response.description}

# Table of Content
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contribution](#contribution)
* [Test](#test)
* [Questions](#questions) 
* [Deployed Site URL](#deployed-site-url) 

## Installation:   
  ${response.installation}

## Usage:
  ${response.usage}
    
## License:
  ${response.license}

## Contribution:
  ${response.contribution}
   
## Test:
  ${response.test}

## Questions
  You can direct any questions that you may have regarding this project to; \n
  ${'- ' + 'GitHub: ' + '[' + response.username + ']' + '(https://github.com/' + response.username +')'}
  ${'- ' + 'Email: ' + response.email}

This project is covered by the ${response.license}. \n
  ${response.insert_license_text}

`;
}

module.exports = generateMarkdown;