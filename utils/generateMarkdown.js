// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === undefined) {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === undefined) {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === undefined) {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
// ${renderLicenseBadge(data.license)}\n
// ${renderLicenseLink(data.licenseLink)}\n
// ${renderLicenseSection(data.renderLicenseSection)}\n
// table
function generateMarkdown(data) {
  return `# ${data.title}\n
  ## Description\n
  $(data.description)\n
  ## Installation\n
  $(data.installationInstructions)\n
  ## Usage\n
  $(data.usageInfomation)\n
  ## Contributing\n
  $(data.contributionGuidlines)\n
  ## Tests\n
  $(data.testInstructions)
  ## Questions\n
  Please reach me out if you have any questions!
  ![My GitHub Link](https://github.com/${data.username})\n
  Emails: ${data.email}\n
`;
// title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
}

module.exports = generateMarkdown;
