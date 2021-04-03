// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ![badge](https://img.shields.io/badge/license-${data.license}-blue.svg)

  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#Installation)
  * [Usage](#Usage)
  * [License](#License)
  * [Contributors](#Contributors)
  * [Test](#Test)
  * [Questions](#question) 

  ## Installation 
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License 

  This project is licensed under ${data.license} license

  ## Contributors

  ${data.contributors}

  ## Test

  ${data.test}

  ## Questions

  If there are any questions, contact me at ${data.email}. You can find more of my work at [${data.github}](https://github.com/${data.github}/).
  `;
}

module.exports = generateMarkdown;
