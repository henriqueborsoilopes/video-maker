const readLine = require('readline-sync')
const robots = { text: require('./robots/text.js')}

async function start() {
    const content = {
        maximunSentences: 7
    }

    content.searchTerm = askAndReturnSearchTerm()
    content.prefix = askAndReturnPrefix()

    await robots.text(content)

    function askAndReturnSearchTerm() {
        return readLine.question('Type a Wikipedia search term: ')
    }

    function askAndReturnPrefix() {
        const prefixes = ['Who is', 'What is', 'The history of']
        const selectedPrefixIndex = readLine.keyInSelect(prefixes)
        const selectedPrefixText = prefixes[selectedPrefixIndex]
        return(selectedPrefixText)
    }
}

start()