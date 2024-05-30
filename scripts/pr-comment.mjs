import path from 'node:path';
import { Octokit } from '@octokit/rest';

if (!process.env.GH_TOKEN) {
    console.log('Could not find auth token.');
    process.exit(0);
}

const pullRequest = path.basename(process.env.CIRCLE_PULL_REQUEST || '');

if (!pullRequest) {
    console.log('No open pull request found.');
    process.exit(0);
}

const github = new Octokit({
    auth: process.env.GH_TOKEN
});

const owner = 'pendo-io';
const repo = 'prism-design-system';
const COMMENT_START = '<!-- PrComment:start -->';
const COMMENT_END = '<!-- PrComment:end -->';

function parseCommentBody(body) {
    const match = new RegExp(`${COMMENT_START}(.*)${COMMENT_END}`, 'gms');
    const re = match.exec(body);

    if (re && re.length >= 2) {
        return re[1].trim();
    }

    return null;
}

async function findExistingComment() {
    const comments = await github.issues
        .listComments({
            owner,
            repo,
            issue_number: pullRequest
        })
        .then((res) => res.data);

    return comments.find((comment) => Boolean(parseCommentBody(comment.body)));
}

const linkify = (releaseInfo) =>
    `[${releaseInfo.name}](${releaseInfo.url})${
        releaseInfo.code ? ` \`${releaseInfo.code}\`` : ''
    }`;

function generateCommentBody() {
    const releaseInfos = [];
    const branch = process.env.CIRCLE_BRANCH;

    releaseInfos.push({
        name: 'Google Cloud Storage',
        url: `https://storage.googleapis.com/prism-design-system/${branch}/index.html`
    });

    return `Changes in this pull request are available on${
        releaseInfos.length === 1
            ? ` ${linkify(releaseInfos[0])}`
            : `:\n${releaseInfos
                  .map((releaseInfo) => `- ${linkify(releaseInfo)}`)
                  .join('\n')}`
    }`;
}

async function createOrUpdateComment() {
    const existingComment = await findExistingComment();
    const message = generateCommentBody();

    if (existingComment) {
        const data = parseCommentBody(existingComment.body);
        const body = existingComment.body.replace(data, message);
        const comment = { owner, repo, comment_id: existingComment.id, body };

        return github.issues.updateComment(comment);
    }

    const body = `\n${COMMENT_START}\n${message}\n${COMMENT_END}`;
    const comment = { owner, repo, issue_number: pullRequest, body };

    return github.issues.createComment(comment);
}

createOrUpdateComment();
