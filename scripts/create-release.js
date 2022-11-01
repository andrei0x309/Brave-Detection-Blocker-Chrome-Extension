const archiver = require('archiver')
const fs = require('fs')
const { spawn } = require('child_process')

async function ghRelease(changes) {
    const pkg = JSON.parse(fs.readFileSync('package.json'))

    const archive = archiver('zip', { zlib: { level: 9 } })
    const dirPipes = ['_locales/', 'images/']

    const filePipes = ['manifest.json', 'block-script.js', 'popup.html', 'popup.js', 'content-script.js', 'LICENSE', 'README.md', 'PRIVACY_POLICY.md']
    const outputPath = `releases/${pkg.version}.zip`
    const outputZip = fs.createWriteStream(outputPath)

    await new Promise((resolve, reject) => {
        let arch = archive
        dirPipes.forEach((dir) => {
            arch = arch.directory(dir)
        })
        filePipes.forEach((file) => {
            arch = arch.file(file, { name: file })
        })
        arch.on('error', (err) => reject(err)).pipe(outputZip)

        outputZip.on('close', () => resolve())
        arch.finalize()
    })

    const changeLogPath = `releases/${pkg.version}.changelog.md`

    fs.writeFileSync(
        changeLogPath,
        `# ${pkg.version} \n
  ${changes.reduce((acc, change) => {
        return acc + `- ${change}\n`
    }, '')}`,
    )

    console.log(
        await new Promise((resolve) => {
            const p = spawn('gh', ['release', 'create', `v${pkg.version}`, `./${outputPath}`, '-F', `./${changeLogPath}`], {
                shell: true,
            })
            let result = ''
            p.stdout.on('data', (data) => (result += data.toString()))
            p.stderr.on('data', (data) => (result += data.toString()))
            p.on('close', () => {
                resolve(result)
            })
        }),
    )
}

(async () => {
    if (!process.argv[2]) {
        console.log('No changes provided')
        return
    }
    const changes = process.argv[2].split(',')
    await ghRelease(changes)
    console.log('Release created', changes)
})()
