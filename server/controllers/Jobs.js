const fetch = require('cross-fetch');

async function safeParseJSON(response) {
    const body = await response.text();
    console.log("body", body);
    try {
        return await JSON.parse(body);
    } catch (err) {
        console.error("Error:", err);
        console.error("Response body:", body);
        // throw err;
        return ReE(response, err.message, 500)
    }
}

module.exports.externalJobs = async (req, res) => {
    try{
       const response = await fetch("https://jobs.github.com/api,").then(safeParseJSON);
        //console.log("response naya wala aaya!", JSON.parse(response));
    }catch(err){
        console.log("error while fetching external jobs!", err);
        return res.status(200).json({
            message:"error while fetching external jobs!",
        })
    }
}