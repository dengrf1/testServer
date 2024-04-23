const fs = require("fs");
const crypto = require("crypto");

const dbPath = "./public/coordinatePublic.db";

// Function to generate MD5 hash for a file
function generateMD5() {
    return new Promise((resolve, reject) => {
        // Read the file as a buffer
        fs.readFile(dbPath, { encoding: "base64" }, (err, fileContents) => {
            if (err) {
                reject(err);
                return;
            }

            // Create MD5 hash
            const hash = crypto.createHash("md5");
            hash.update(fileContents); // Update hash with file data buffer
            const md5Hash = hash.digest("hex");
            resolve(md5Hash);
        });
    });
}

module.exports = generateMD5;
