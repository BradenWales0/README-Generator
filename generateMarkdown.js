// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === 'BSD 3')
        return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)' ;
}
    if (license === 'APACHE 2.0') {
        return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)' ;
}  
    if (license === 'MIT') {
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)' ;
    }
    if (license === "None")
        return '' ;

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
    function renderLicenseSection(license) {
        return license
            ? `[![${license}](${renderLicenseBadge(license)})]`
            : '' ;
    }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
