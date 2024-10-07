const GoogleGenerativeAI = require("../config/googleai");
const inputPrompt = require("../models/imput-prompt")

module.exports = {
    async sendText(req, res) {
        const api = GoogleGenerativeAI.configuration()
        const model = api.getGenerativeModel({ model: "gemini-1.5-flash" })
        const inputModel = new inputPrompt(req.body)

        try {
            const response = await model.generateContent(
                GoogleGenerativeAI.textCompletion(inputModel).prompt
            )

            return res.status(200).json({
                sucess: true,
                data: response.response.text()
            })
        } catch (error) {
            return res.status(400).json({
                sucess: false,
                error: error.response ? error.response.data : "Erro no servidor"
            })
        }
    }
}