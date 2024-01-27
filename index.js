const axios = require('axios');

async function getCommitHistory(apiUrl) {
    try {
        const response = await axios.get(apiUrl);

        const commits = response.data.map(commit => ({
            sha: commit.sha,
            message: commit.commit.message,
            author: commit.commit.author.name,
            date: commit.commit.author.date,
        }));

        return commits;
    } catch (error) {
        return {
            error: `Error fetching commit history: ${error.message}`,
        };
    }
}

module.exports = getCommitHistory;