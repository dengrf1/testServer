const fs = require("fs");
const crypto = require("crypto");

const dbPath = "./public/DiveSite.db";

// Function to generate MD5 hash for DiveSite.db
function generateMD5() {
    return new Promise((resolve, reject) => {
        fs.readFile(dbPath, { encoding: "base64" }, (err, fileContents) => {
            if (err) {
                reject(err);
                return;
            }

            const hash = crypto.createHash("md5");
            hash.update(fileContents);
            const md5Hash = hash.digest("hex");
            resolve(md5Hash);
        });
    });
}

module.exports = generateMD5;
