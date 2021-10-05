/**
 * Class to generate the README.md file
 * @author Philane Msibi
 */

const fs = require("fs");
const Logger = require("loba");

class ReadmeGenerator {

     contructor() {}

    static  generate (project_name = ``, image_url = ``, description = ``, requirements = ``, installation = ``, language = ``, usage = ``, tests = ``, contributing = ``, license = ``) {
        
        if (!image_url) {
            image_url = "assets/placeholder.jpg";
        }
        let template = `# ${project_name}

![alt tag](${image_url})

${description}

# Table of Content

- [Requirements](#Requirements)
- [Installation](#Installation)
- [Usage](#Usage)
- [Tests](#Tests)
- [Contributing](#Contributing)
- [License](#License)

# Requirements

${requirements}

# Installation

\`\`\`bash
${installation}
\`\`\`

# Usage

\`\`\`${language}
${usage}
\`\`\`

# Tests

${tests}

# Contributing
${contributing}

# License
${license}
`;

        fs.writeFile(`README.md`, template, (err) => {

            if (err) return Logger.error(err.message);

            Logger.success("README.md was created succesfully.");
        })
    }
}

module.exports = ReadmeGenerator;