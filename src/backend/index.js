const { ipcMain } = require('electron')
const pathsToRows = require('./pathsToRows')
const prepareData = require('./prepareData.js')
const groupedWords = require('./groupedWords.js')

ipcMain.on('process-subtitles', (e, paths)=>{

    pathsToRows(paths)
        .then(rows => prepareData(rows))
        .then(words => groupedWords(words))
        .then(groupedWords => e.reply('process-subtitles', groupedWords)
    )
})