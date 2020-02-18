const queries = require("./queries") 
const sendIt = require("./sendIt");
const {getMetaData} = require("./metaData")

const stdin = process.stdin;
const stdout = process.stdout;

//You can only use one flag for each query
const [cmd, file, ...args] = process.argv

//find all requested queries
const selectedQueries = args.map( (arg) => queries.find( (record)=> record.flag===arg ) )

//error check
selectedQueries.forEach(query => { if (!query) throw "You entered an Invalid Flag" })

stdin.on('readable', function(){

    let chunk;

    while ((chunk = process.stdin.read()) !== null) {

        chunkString = chunk.toString();

        selectedQueries.forEach((query)=>{
            
            if (chunkString.match(query.regex)){

                const capturedLineDataArray = query.customExtract(chunkString);

                capturedLineDataArray.forEach((capturedLineData)=>{
                    const metaData = getMetaData(capturedLineData)
                    sendIt(metaData)
                })
            }
        })

        stdout.write(chunk.toString())

    }
});

stdin.on("error", function(error){
    console.log(error)
})