const Response = require('../../utils/Response');


class AdminController {
    async AdminLogin(request, response) {
        Response.returnSuccessResponse(res, "First api is built successfully");
    }
}

module.exports = new AdminController();