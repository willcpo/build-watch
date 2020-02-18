//Note: queries should be respricted to one log line.... although it could be many as it is bundled into a chunk

const simpleTimeExtract = (line) => 
    Array.from(line.matchAll(/([0-9]+\.[0-9]+)([a-zA-z]+)/g), (match)=>{
        const [fullText, time, timeUnits] = match;
        return {time, timeUnits}
    })

const scriptExtract = (line) => 
    Array.from(line.matchAll(/script '(.+)'.*([0-9]+\.[0-9]+)([a-zA-z]+)/g), (match)=>{
        const [fullText, script, time, timeUnits] = match;
        return {script, time, timeUnits}
    })

module.exports = [
    {
        flag: "-bs",
        regex:/Done in/,
        customExtract: simpleTimeExtract
    },
    {
        flag: "-testTotal",
        regex: /lerna success run Ran npm script/,
        customExtract: simpleTimeExtract
    },
    {
        flag: "-build",
        regex: /lerna success run Ran npm script/,
        customExtract: scriptExtract
    },
    {
        flag: "-testPerPackage",
        regex: /Time: /,
        customExtract: (line)=>
            Array.from(line.matchAll(/@(.+)\/(.+): Time.*([0-9]+\.[0-9]+)([a-zA-z]+)/g), (match)=>{
                const [fulltext, repo, package, time, timeUnits] = match;
                return {repo, package, time, timeUnits}
            })
    },
]