function generateMarkdown(answers) {
  return `
# ${answers.Projectsname}

## Description 

${answers.Description}

## Table of Contents

* Installation

* Usage

* License

* Contributing

* Tests

* Questions

## Installation
 
Installation needed for generator to work.

  \`\`\`
  ${ answers.Dependencies}
  \`\`\`

Email: ${answers.email}



`;
}

module.exports = generateMarkdown;
