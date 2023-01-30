//function to generate markdown for README
function generateMarkdown(response) {
  return `

# ${response.project_title}

## Description
🔍 ${response.description}

# Table of Content
* [Installation](#installation)
* [Usage](#usage)
* [Licenses](#licenses)
* [Contribution](#contribution)
* [Test](#test)
* [Questions](#questions) 
* [Deployed Site URL](#deployed-site-url) 


    ${response.description}
## description:

    ${response.installation}
## installation:

    ${response.usage}
##usage:

    ${response.licenses}
## Licenses:

    ${response.contribution}
## Contribution:

    ${response.test}
## Test:

## Questions
  You can direct any questions that you may have regarding this project to; \n
  ${'- ' + 'GitHub: ' + '[' + response.github_username + ']' + '(https://github.com/' + response.github_username +')'}
  ${'- ' + 'Email: ' + response.email_address}

This project is covered by the ${response.license} license. \n
  ${response.insert_license_text}

`;
}

module.exports = generateMarkdown;