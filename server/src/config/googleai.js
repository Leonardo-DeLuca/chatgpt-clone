const { GoogleGenerativeAI } = require("@google/generative-ai");


module.exports = class googleai {
    static configuration() {
        const configuration = process.env.API_KEY

        return new GoogleGenerativeAI(configuration);
    }

    static textCompletion({ prompt }) {
        return {
            prompt: `${prompt}`
        }
    }
}

