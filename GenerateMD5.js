const fs = require("fs");
const crypto = require("crypto");

const dbPath = "./public/coordinatePublic.db";

// Function to generate MD5 hash for a file
function generateMD5() {
  return new Promise((resolve, reject) => {
    const hash = crypto.createHash("md5");
    const stream = fs.createReadStream(dbPath);

    stream.on("data", (data) => {
      hash.update(data);
    });

    stream.on("end", () => {
      const md5Hash = hash.digest("hex");
      resolve(md5Hash);
    });

    stream.on("error", (error) => {
      reject(error);
    });
  });
}

module.exports = generateMD5;
