// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "https://img.shields.io/badge/License-MIT-blue.svg";
      break;
    case "GNU GPLv3":
      return "https://img.shields.io/badge/License-GPL%20v3-blue.svg";
      break;
    case "GNU AGPLv3":
      return "https://img.shields.io/badge/License-AGPL%20v3-blue.svg";
      break;
    case "GNU LGPLv3":
      return "https://img.shields.io/badge/License-LGPL%20v3-blue.svg";
      break;
    case "GNU GPLv2":
      return "https://img.shields.io/badge/License-GPL%20v2-blue.svg";
      break;
    case "Mozilla Public License 2.0":
      return "https://img.shields.io/badge/License-GPL%20v2-blue.svg";
      break;
    case "Apache License 2.0":
      return "https://img.shields.io/badge/License-Apache%202.0-blue.svg";
      break; 
    case "ISC":
      return "https://img.shields.io/badge/License-ISC-blue.svg";
      break;
    case "Boost Software License 1.0":
      return "https://img.shields.io/badge/License-Boost%201.0-blue.svg";
      break;
    case "The Unlicense":
      return "https://img.shields.io/badge/license-Unlicense-blue.svg";
      break;
    default:
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return "https://opensource.org/licenses/MIT";
      break;
    case "GNU GPLv3":
      return "https://www.gnu.org/licenses/gpl-3.0";
      break;
    case "GNU AGPLv3":
      return "https://www.gnu.org/licenses/agpl-3.0";
      break;
    case "GNU LGPLv3":
      return "https://www.gnu.org/licenses/lgpl-3.0";
      break;
    case "GNU GPLv2":
      return "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html";
      break;
    case "Mozilla Public License 2.0":
      return "https://opensource.org/licenses/MPL-2.0";
      break;
    case "Apache License 2.0":
      return "https://opensource.org/licenses/Apache-2./";
      break; 
    case "ISC":
      return "https://opensource.org/licenses/ISC";
      break;
    case "Boost Software License 1.0":
      return "https://www.boost.org/LICENSE_1_0.txt";
      break;
    case "The Unlicense":
      return "http://unlicense.org/";
      break;
    default:
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license.length === 0) {
    return "";
  }
  else {
    return `The application is covered under license: ${license.join(", ")}. Please click the badge at the top to check more details.`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  var {username, email, title, description, licenseArray, installationInstructions, testInstructions, usageInfomation, contributionGuidlines} = data;
  return `${(licenseArray.length === 0) ? "" : licenseArray.map(license => `[![license](${renderLicenseBadge(license)})](${renderLicenseLink(license)})`).join(` `)}
# ${title}
## Description
${description}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
## Installation
\`\`\`bash
${installationInstructions.split("\\n").map(element=>element.trim()).join(`

`)}
\`\`\`
## Usage
${usageInfomation}
## License
${renderLicenseSection(licenseArray)}
## Contributing
${contributionGuidlines}
## Tests
\`\`\`console
${testInstructions.split("\\n").map(element=>element.trim()).join(`

`)}
\`\`\`
## Questions
[Click to check My GitHub profile](https://github.com/${username})\n
Please reach me out with additional questions!\n
Emails: ${email}
`;
}

module.exports = generateMarkdown;

