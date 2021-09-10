import { readFile, writeFile } from 'fs/promises'

try {
    var template = await readFile(new URL('./template.html', import.meta.url), {
        encoding: 'utf-8'
    })
} catch (e) {
    console.error(e)
    console.log('--------')
    console.log('Does this reach?')
} finally {
    console.log('This definitely runs')
}

const data = {
    title: 'Learn Node.js',
    body: 'This is the final HTML'
}

for (const [key, value] of Object.entries(data)) {
    template = template.replace(`{${key}}`, value)
}

await writeFile(new URL('index.html', import.meta.url), template)
