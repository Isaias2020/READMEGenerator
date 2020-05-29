function generateMarkdown(answers) {
  return `
# Title:  ${answers.Projectsname}

## Description 

${answers.Description}

Email: ${answers.email}



`;
}

module.exports = generateMarkdown;
