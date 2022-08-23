const inquirer = require('inquirer');
const { writeFile, copyFolder } = require('./utils/generate-site.js');
const generateLandingPage = require('./src/page-template');

const promptSetupQuestions = () => {
    return inquirer.prompt([
        // =========Header Section==============        
        {
            type: 'input',
            name: 'siteName',
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
            name: 'siteLink',
            message: 'What is the address to your website?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the URL to the site!');
                    return false;
                }
            }
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
        // =========Benefit Section==============        
        {
            type: 'confirm',
            name: 'confirmBenefit',
            message: 'Is there woridng to add in the hero section?',
            default: false
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
        // =========Email Form==============        
        {
            type: 'confirm',
            name: 'confirmForm',
            message: 'Add in the capture and send email box?',
            default: false
        },
        {
            type: 'input',
            name: 'formEmail',
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
            type: 'input',
            name: 'emailSubject',
            message: 'What will be the subject of your email?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the subject of the email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'emailBody',
            message: 'What is the body of the email?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the text to go in the body of the email!');
                    return false;
                }
            }
        },
        // =========Feature Section==============        
        {
            type: 'confirm',
            name: 'confirmFeature',
            message: 'Do you want to add in a feature section?',
            default: false  
        },
        // =========Feature One==============
        {
            type: 'input',
            name: 'featureOneIcon',
            message: 'What icon to use for feature one?',
            when: ({confirmFeature}) => {
                if ({confirmFeature}) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'featureOneHeader',
            message: 'What is feature one header text?',
            when: ({confirmFeature}) => {
                if ({confirmFeature}) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'featureOneText',
            message: 'What is feature one text?',
            when: ({confirmFeature}) => {
                if ({confirmFeature}) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        // =========Feature Two==============                
        {
            type: 'input',
            name: 'featureTwoIcon',
            message: 'What icon to use for feature two?',
            when: ({confirmFeature}) => {
                if ({confirmFeature}) {
                    return true;
                } else {
                    return false;
                }
            }
        },
                {
            type: 'input',
            name: 'featureTwoHeader',
            message: 'What is feature two header text?',
            when: ({confirmFeature}) => {
                if ({confirmFeature}) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'featureTwoText',
            message: 'What is feature two text?',
            when: ({confirmFeature}) => {
                if ({confirmFeature}) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        // =========Feature Three==============
        {
            type: 'input',
            name: 'featureThreeIcon',
            message: 'What icon to use for feature three?',
            when: ({confirmFeature}) => {
                if ({confirmFeature}) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'featureThreeHeader',
            message: 'What is feature three header text?',
            when: ({confirmFeature}) => {
                if ({confirmFeature}) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'featureThreeText',
            message: 'What is feature three text?',
            when: ({confirmFeature}) => {
                if ({confirmFeature}) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        // =========Social Media==============                        
        {
            type: 'confirm',
            name: 'confirmSocialMedia',
            message: 'Add Social Media links?',
            default: false
        },
        // =========Facebook==============            
        {
            type: 'confirm',
            name: 'addFacebook',
            message: 'Add a Facebook accout?',
            default: false,
            when: ({confirmSocialMedia}) => {
                if ({confirmSocialMedia}) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'facebook',
            message: 'What is the facebook link?',
            when: ({addFacebook}) => {
                if ({addFacebook}) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        // =========Twitter==============   
        {
            type: 'confirm',
            name: 'addTwitter',
            message: 'Add a Twitter accout?',
            default: false,
            when: ({confirmSocialMedia}) => {
                if ({confirmSocialMedia}) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'twitter',
            message: 'What is the twitter link?',
            when: ({addTwitter}) => {
                if ({addTwitter}) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        // =========Instagram==============   
        {
            type: 'confirm',
            name: 'addInstagram',
            message: 'Add an Instagram accout?',
            default: false,
            when: ({confirmSocialMedia}) => {
                if ({confirmSocialMedia}) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'instagram',
            message: 'What is the instagram link?',
            when: ({addInstagram}) => {
                if ({addInstagram}) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        // =========Snapchat==============   
        {
            type: 'confirm',
            name: 'addSnapchat',
            message: 'Add a Snapchat accout?',
            default: false,
            when: ({confirmSocialMedia}) => {
                if ({confirmSocialMedia}) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'snapchat',
            message: 'What is the snapchat link?',
            when: ({addSnapchat}) => {
                if ({addSnapchat}) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        // =========WhatsApp==============   
        {
            type: 'confirm',
            name: 'addWhatsapp',
            message: 'Add a WhatsApp accout?',
            default: false,
            when: ({confirmSocialMedia}) => {
                if ({confirmSocialMedia}) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'whatsapp',
            message: 'What is the WhatsApp link?',
            when: ({addWhatsapp}) => {
                if ({addWhatsapp}) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        // =========Footer==============
        {
            type: 'confirm',
            name: 'confirmFooter',
            message: 'Add in footer section?',
            default: true                
        },
        {
            type: 'input',
            name: 'aboutLink',
            message: 'What is the link to the main site About?',
            when: ({confirmFooter}) => {
                if ({confirmFooter}) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'termsLink',
            message: 'What is the link to the main site Terms of Use?',
            when: ({confirmFooter}) => {
                if ({confirmFooter}) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'privacyLink',
            message: 'What is the link to the main site Privacy Policy?',
            when: ({confirmFooter}) => {
                if ({confirmFooter}) {
                    return true;
                } else {
                    return false;
                }
            }
        },
    ]);
};

promptSetupQuestions()
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


