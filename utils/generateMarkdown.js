function generateMarkdown(answers) {
  return `
# Title:  ${answers.Projectsname}

## Description 

${answers.Description}

## Table of Contents

* Installation

* Usage

* License

* Contributing

* Tests

* Questions

${answers.Dependencies}

Email: ${answers.email}



`;
}

module.exports = generateMarkdown;
