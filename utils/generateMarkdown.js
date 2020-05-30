function generateMarkdown(answers) {
  return `
# ${answers.Projectsname}

<p>
<a>
<img src="https://img.shields.io/badge/License-MIT-blueviolet"/></a>
</p>

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

${answers.Usage}

## License

${answers.License}

## Contributor

${answers.Contributor}

## Tests

To run tests run the following command: 

\`\`\`
${answers.Tests}
\`\`\`

## Questions
${answers.Username}
<br><br>
<img src="${answers.image}" height="100" style="border-radius:50%">
<br><br>
If you have any questions please feel free to reach out to me at ${answers.email}.

`;
}

module.exports = generateMarkdown;
