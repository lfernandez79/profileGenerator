function generateMarkdown(answers) {
  return `

## Project Title
${answers.userAnswers.projectTitle}

## Project Description
${answers.userAnswers.Description}

## Table of Contents:
[Installation](#installation)
[Usage](#usage)
[Credits](#credits)
[License](#license)

## Usage
[Provide instructions and examples to use.]

## Credits
[List your collaborators.]

## License
${answers.userAnswers.License}

## Badges
[![star this repo](https://githubbadges.com/star.svg?user=lfernandez79&repo=project1&style=default)](https://github.com/lfernandez79/project1)
[![fork this repo](https://githubbadges.com/fork.svg?user=lfernandez79&repo=project1&style=default)](https://github.com/lfernandez79/project1/fork)

## GitHub Email
${answers.userAnswers.email}

## GitHub Username
${answers.login}

## Avatar URL
![avatarurl](${answers.avatar_url})
`;
}

module.exports = generateMarkdown;
