const archiver = require('archiver');
const fs = require('fs');
const { spawn } = require('child_process');

async function ghRelease(changes) {
  const package = JSON.parse(fs.readFileSync('package.json'));

  const archive = archiver('zip', { zlib: { level: 9 } });
  const dirPipes = ['_locales/', 'images/'];

  const filePipes = ['manifest.json', 'block-script.js', 'popup.html', 'popup.js', 'content-script.js', 'LICENSE', 'README.md', 'PRIVACY_POLICY.md'];
  const outputPath = `releases/${package.version}.zip`;
  const outputZip = fs.createWriteStream(outputPath);

  await new Promise((resolve, reject) => {
    let arch = archive;
    dirPipes.forEach((dir) => {
      arch = arch.directory(dir, false);
    });
    filePipes.forEach((file) => {
      arch = arch.file(file, { name: file });
    });
    arch.on('error', (err) => reject(err)).pipe(stream);

    stream.on('close', () => resolve());
    arch.finalize();
  });

  const changeLogPath = `releases/${package.version}-changeLog.md`;

  fs.writeFileSync(
    changeLogPath,
    `# ${package.version} \n\n
  ${changes.reduce((acc, change) => {
    return acc + `- ${change}\n`;
  }, '')}`,
  );

  await new Promise((resolve) => {
    const p = spawn('gh', ['release', `create v${package.version} '${outputPath}' -F ${changeLogPath}`]);
    let result = '';
    p.stdout.on('data', (data) => (result += data.toString()));
    p.stderr.on('data', (data) => (result += data.toString()));
    p.on('close', () => {
      resolve(result);
    });
  });
}

(async () => {
  if (!process.argv[2]) {
    console.log('No changes provided');
    return;
  }
  const changes = process.argv[2].split(',');
  // ghRelease(changes)
  console.log('Release created', changes);
})();
