function generateMarkdown(answers) {
  return `
# Title:  ${answers.Projectsname}

Email: ${answers.email}



`;
}

module.exports = generateMarkdown;
