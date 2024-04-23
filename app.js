const express = require("express");
const generateMD5 = require("./GenerateMD5");

const dbPath = "./public/coordinatePublic.db";
const app = express();
const port = 5000;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

//TimeStamp function
const timeStamp = () => {
    const now = new Date();
    const formattedDateTime = now.toLocaleString("en-CA", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
    });
    return formattedDateTime;
};

//Return generated MD5 value endpoint
app.get("/", (req, res) => {
    generateMD5()
        .then((md5Hash) => {
            res.send(md5Hash);
            console.log(timeStamp() + "\n" + "MD5Hash:", md5Hash);
        })
        .catch((error) => {
            res.send("error");
            console.error(timeStamp() + "\n" + "Error:", error);
        });
});

//Database file download endpoint
app.get("/download", (req, res) => {
    res.download(dbPath);
    console.log(timeStamp() + "\n" + "coordinatePublic.db file downloaded by user");
});
