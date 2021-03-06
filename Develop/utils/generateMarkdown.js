// function to generate markdown for README
function generateMarkdown(data) {

  const badges = {
    "MIT License": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=plastic.svg)](https://opensource.org/licenses/MIT)",
    "GNU Affero General Public License v3.0": "[![License: AGPL v3.0](https://img.shields.io/badge/License-AGPL%20v3-red?style=plastic.svg)](https://www.opensource.org/licenses/AGPL-3.0)",
    "Apache License 2.0": "[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-orange?style=plastic.svg)](https://www.opensource.org/licenses/Apache-2.0)",
    "The Unlicense": "[![License: Unlicense](https://img.shields.io/badge/License-Unlicense-blue?style=plastic.svg)](http://unlicense.org/)",
    "GNU General Public License v3.0": "[![License: GPL v3.0](https://img.shields.io/badge/License-GPLv3-blue?style=plastic.svg)](https://www.gnu.org/licenses/gpl-3.0)",
  };
  return `
  #${data.title}

  ${data.badges}

  ## Description

  ${data.description}

  ## Table of Contents

  * [Description](#Description)
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Licence](#Licence)
  * [Contributors](#Contributors)
  * [Test](#Test)
  * [Questions](#question) 

  ## Installation 
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License 

  ${data.license}

  ## Contributors

  ${data.contributors}

  ## Test

  ${data.test}

  ## Questions

  If there are any questions, contact me at ${data.email}. You can find more of my work at [${data.github}](https://github.com/${data.hithub}/).
  `;
}

module.exports = generateMarkdown;
