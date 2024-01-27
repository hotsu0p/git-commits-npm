const getCommitHistory = require('./index.js');

const apiUrl = 'https://api.github.com/repos/hotsu0p/Pogy/commits';

async function main() {
    const commitHistory = await getCommitHistory(apiUrl);

    if (commitHistory.error) {
        console.error(commitHistory.error);
    } else {
        console.log('Commit History:');
        console.log(commitHistory);
    }
}

main();