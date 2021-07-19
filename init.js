const fs = require('fs');
const path = require('path');

const configs = [
  {
    name: '.eslintrc.js',
    content: "module.exports = {extends: '@rellafella'}",
  },
  {
    name: 'prettier.config.js',
    content: "module.exports = {extends: '@rellafella/prettier.config.js'}",
  },
  {
    name: 'stylelint.config.js',
    content:
      "module.exports = {extends: '@rellafella/eslint-config/stylelint.config.js',ignoreFiles: ['./vendor/**/*']};",
  },
];

const createConfigFiles = () => {
  configs.forEach((config) => {
    const filePath = path.join(process.env.INIT_CWD, `${config.name}`);
    if (!fs.existsSync(filePath)) {
      fs.writeFile(filePath, config.content, (err) => {
        if (err) throw err;
        console.log(`📝 Created ./${config.name}`);
      });
    }
  });
};

createConfigFiles();
