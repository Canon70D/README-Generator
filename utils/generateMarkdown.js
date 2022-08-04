// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license != "None") {
    const badges = {
      GUNAGPLv3:
        "[![License: GUNAGPLv3](https://img.shields.io/badge/License-GUNAGPLv3-orange.svg)](https://choosealicense.com/licenses/agpl-3.0/)",
      GUNGPLv3:
        "[![License: GUNGPLv3](https://img.shields.io/badge/License-GUNGPLv3-green.svg)](https://choosealicense.com/licenses/gpl-3.0/)",
      GUNLGPLv3:
        "[![License: GUNLGPLv3](https://img.shields.io/badge/License-GUNLGPLv3-red.svg)](https://choosealicense.com/licenses/lgpl-3.0/)",
      Mozilla:
        "[![License: Mozilla](https://img.shields.io/badge/License-Mozilla-blue.svg)](https://choosealicense.com/licenses/mpl-2.0/)",
      Apache:
        "[![License: Apache](https://img.shields.io/badge/License-Apache-brightgreen.svg)](https://choosealicense.com/licenses/apache-2.0/)",
      MIT: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://choosealicense.com/licenses/mit/)",
    };
    return badges[license];
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license != "None") {
    const links = {
      GUNAGPLv3: "[GUNAGPLv3](https://choosealicense.com/licenses/agpl-3.0/)",
      GUNGPLv3: "[GUNGPLv3](https://choosealicense.com/licenses/gpl-3.0/)",
      GUNLGPLv3: "[GUNLGPLv3](https://choosealicense.com/licenses/lgpl-3.0/)",
      Mozilla: "[Mozilla](https://choosealicense.com/licenses/mpl-2.0/)",
      Apache: "[Apache](https://choosealicense.com/licenses/apache-2.0/)",
      MIT: "[MIT](https://choosealicense.com/licenses/mit/)",
    };
    return links[license];
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license != "None") {
    return `## License

### The project is licensed under the ${renderLicenseLink(license)} license.`;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description
    ${data.description}

  ## Table of contect 
  - [Description](#description)
  - [Installation Instrustions](#installation-instrustions)
  - [Usage Information](#usage-information)
  - [Contribution Guidelines](#contribution-guidelines)
  - [Test Instructions](#test-instructions)
  - [License](#license)
  - [Questions](#questions)

  ## Installation Instrustions
  ### You will have to install the following for the application to function:
    - ${data.installation}

  ## Usage Information
    - ${data.usage}

  ## Contribution Guidelines
    - ${data.contribution}

  ## Test Instructions
  ### In your terminal, run the following commands to Test
    - ${data.test}

  ${renderLicenseSection(data.license)}

  ## Questions
  ### Github: [${data.username}](https://github.com/${data.username})
    - Any additional questions, please email me: ${data.email}
  `;
}

module.exports = generateMarkdown;
