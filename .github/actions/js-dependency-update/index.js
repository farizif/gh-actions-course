const core = require('@actions/core');

async function run() { 
  core.info('I am a custom JS action');
}
/*
1. Parse inputs:
    1.1  base-branch from which to check for updates
    1.2 target branch to use to create the PR
    1.3 GitHub Token for authentication purposes (to create PRs)
    1.4 Working directory for which to check for dependencies
2. Execute NPM update command within the working directory

*/

run(); 