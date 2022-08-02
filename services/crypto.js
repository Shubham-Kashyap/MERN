const bcrypt = require('bcrypt');

class crypto {
    generateHash = async (password) => {
        hash = bcrypt.hashSync(password, 11);
        return hash;
    };
    compareHash = async (text, password) => {
        result = bcrypt.compareSync(text, password);
        return result;
    };
}

const obj = new crypto();

exports.generateHash = obj.generateHash;
exports.compareHash = obj.compareHash;