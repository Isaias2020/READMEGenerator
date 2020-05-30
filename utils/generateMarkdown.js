function generateMarkdown(answers) {
  return `
# ${answers.Projectsname}

## Description 

${answers.Description}

## Table of Contents

* [Installation](#Installation)

* [Usage](#Usage)

* [License](#License)

* [Contributor](#Contributor)

* [Tests](#Tests)

* [Questions](#Questions)

## Installation

Installation needed for generator to work.

  \`\`\`
  ${answers.Installation}
  \`\`\`

## Usage

## License

## Contributor

${answers.Contributor}

## Tests

## Questions

${answers.image}
If you have any questions please feel free to reach out to me at ${answers.email}.

`;
}

module.exports = generateMarkdown;
