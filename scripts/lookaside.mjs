import { Storage } from '@google-cloud/storage';
import path from 'node:path';
import fs from 'node:fs';
import read from 'fs-readdir-recursive';
import minimist from 'minimist';
import logSymbols from 'log-symbols';

const { branch, keyFilename } = minimist(process.argv.slice(2));

run();

async function run() {
    const dist = path.resolve(fs.realpathSync(process.cwd()), 'dist');
    const files = read(dist).map((file) => {
        return {
            name: file,
            path: path.join(dist, file),
            destination: `${branch}/${file}`
        };
    });

    const storage = new Storage({
        projectId: 'pendo-dev',
        keyFilename
    });

    const bucket = storage.bucket('prism-design-system');

    try {
        // clear out destination folder before uploading new files
        console.log(logSymbols.info, 'Deleting existing files');
        await bucket.deleteFiles({ prefix: `${branch}/`, force: true });

        console.log(logSymbols.info, 'Uploading new files');
        const uploads = files.map((file) => {
            return bucket.upload(file.path, {
                destination: file.destination,
                gzip: true,
                resumable: false,
                metadata: {
                    cacheControl: 'no-cache'
                }
            });
        });

        await Promise.all(uploads);
        console.log(logSymbols.success, 'Lookaside deployed');
        process.env.GITHUB_OUTPUT = `page_url=https://storage.googleapis.com/prism-design-system/${branch}/index.html`;
    } catch (error) {
        console.log(logSymbols.error, error);
        process.exit(1);
    }
}
