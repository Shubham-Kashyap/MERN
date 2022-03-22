class Response {
    async returnErrorResponse(res, message, data = []) {
        return res.send({
            status: false,
            message: message,
            data: data
        })
    }
    async returnSuccessResponse(res, message, data = []) {
        return res.send({
            status: true,
            message: message,
            data: data
        })
    }
}

module.exports = new Response();