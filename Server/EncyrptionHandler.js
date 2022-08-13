const crypto = require("crypto");
const secret = "y7c8cs9Hy7c8cs9Hy7c8cs9Hy7c8cs9H";

const encrypt = (password) => {
    const iv = Buffer.from(crypto.randomBytes(16));
    const cipher = crypto.createCipheriv('crypto-js/sha256',Buffer.from(secret),iv);
    const encryptedPassword = Buffer.concat([cipher.update(password),cipher.final()
    ]);

    return {iv: iv, password: encryptedPassword.toString("hex")};
};

const decrypt = (encryption) => {
    const decipher = crypto.Decipheriv('crypto-js/sha256',Buffer.from(secret),Buffer.from(encryption.iv, "hex"));

    const decryptedPassword = Buffer.concat([decipher.update(Buffer.from(encryption.password, "hex")),decipher.final()
    ]);
    return decryptedPassword.toString();
};

module.exports = {encrypt, decrypt};