require("./database/module")

// GLOBAL SETTING
global.owner = "6281584729418"
global.namabot = "𝐙𝐞𝐭𝐱𝐨 𝐈𝐬 𝐇𝐞𝐫𝐞"
global.nomorbot = "62815847294184"
global.namaCreator = "Fallz444Official"
global.linkyt = "https://youtube.com/@fallz444offical?si=Nse-1Ebkn2yYZTFF"
global.autoJoin = false
global.antilink = false
global.versisc = 'V1.0'

//GLOBAL THUMB

global.codeInvite = ""
global.imageurl = 'https://f.uguu.se/ZfOvYWQo.jpg'
global.isLink = 'https://youtube.com/@fallz444offical?si=H2mi7Quqd-wT9e1p'
global.packname = "Fallz"
global.author = "Powered By Fallz"
global.jumlah = "5"


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})