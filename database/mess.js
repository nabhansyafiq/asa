require("./global")

const mess = {
   wait: "*[ ✵ ] Please wait...",
   success: "*[ ✵ ] success",
   on: "*[ On Feature ] - already active", 
   off: "*[ Off Feature ] - already offline",
   query: {
       text: "*[ ✵ ] Where is the text?*",
       link: "*[ ✵ ] Where is the link?*",
   },
   error: {
       fitur: "*[ ✵ ] Sorry, there is an error in the feature. Please chat with the Bot Developer so it can be fixed immediately*",
   },
   only: {
       group: "*[ ✵ ] This feature can only be accessed within a group*",
       private: "[ ✵ ] This feature can only be accessed in private chat",
       owner: "*[ ✵ ] Sorry can not*",
       admin: "*[ ✵ ] This feature can only be accessed Admin*",
       badmin: "*[ ✵ ] bot must be admin*",
       premium: "*[ ✵ ] You have not been premium*",
   }
}

global.mess = mess

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})