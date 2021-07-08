// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
  return ` Badge Placeholder
  # ${data.title} 

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  To install any necessay dependencies fun the following command: 
  
  \`\`\`
  ${data.installation}
  \`\`\`
  
  ## Usage

  ## License
  ${data.license}

  ## Contributing

  ## Tests

  ##Questions
  ${data.username}
  
  `;
}

module.exports = generateMarkdown;