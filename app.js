const inquirer = require('inquirer');
const { writeFile, copyFolder } = require('./utils/generate-site.js');
const generateLandingPage = require('./src/page-template');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the site? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the site name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'link',
            message: 'What is the address to your website?'
        },
        {
            type: 'confirm',
            name: 'confirmSlogan',
            message: 'Do you have a slogan you want to use?',
            default: true
        },
        {
            type: 'input',
            name: 'slogan',
            message: 'What is the company slogan?',
            when: ({confirmSlogan}) => {
                if (confirmSlogan) {
                    return true;
                } else {
                    console.log('Please enter the company slogan');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'header',
            message: 'What is the header text?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter Header text!');
                    return false;
                }
            }

        },
        {
            type: 'confirm',
            name: 'confirmBenefit',
            message: 'Is there woridng to add in the hero section?',
            default: true
        },
        {
            type: 'input',
            name: 'benefit',
            message: 'what wording do you want in the benefit section?',
            when: ({confirmBenefit}) => {
                if (confirmBenefit) {
                    return true;
                } else {
                    console.log('Please enter the benefit test.');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmForm',
            message: 'Add in the capture and send email box?',
            default: false
        },
        {
            type: 'input',
            name: 'form',
            message: 'To what email address is the form information to be sent?',
            when: ({confirmForm}) => {
                if (confirmForm) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'addSocialMedia',
            message: 'Add Social Media links?',
            default: false
        },
    ]);
};

promptUser()
  .then(landingPageInfo => {
      return generateLandingPage(landingPageInfo);
  })    
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .then(writeFileResponse => {
    console.log(writeFileResponse);
    return copyFolder();
  })
  .then(copyFileResponse => {
    console.log(copyFileResponse);
  })
  .catch(err => {
    console.log(err);
  });


