const { jwt } = require('../exports/library')

class auth {

    generateToken = async (id, expiresIn = "") => {
        if (expiresIn = "") {
            expiresIn = '1y';
        }
        let token = jwt.sign({ id: id }, process.env.AUTH_TOKEN, { expiresIn: expiresIn });
        return token;
    }
    verifyToken = async (token) => {
        try {
            let decoded = jwt.verify(token, process.env.AUTH_TOKEN);
            return decoded;
        } catch (err) {
            // err
            throw new error(err.message);
        }

    }
}

const obj = new auth();

exports.generateToken = obj.generateToken;
exports.verifyToken = obj.verifyToken;