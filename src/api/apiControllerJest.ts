import request from "request-promise";
import urls from "../../data/urls";
 class ApiCommentsController {

    async getComments() {
        let options = {
            method: "GET",
            uri: urls.apiUrl + "/comments",
            strictSSL: false,
            resolveWithFullResponse: true,
            simple: false,
            json: true
        };

        let response = await request(options);
        console.log(response.statusCode);
        console.log(response.body);

        return response;
    }

    async addComment(comment: object) {
        let options = {
            method: "POST",
            uri: urls.apiUrl + "/comments",
            body: comment,
            headers: {
                "content-type": "application/json"
            },
            strictSSL: false,
            resolveWithFullResponse: true,
            simple: false,
            json: true
        };

        let response = await request(options);
        console.log(response.statusCode);
        console.log(response.body);

        return response;
    }

    async editComment(commentId: number, comment: object) {
        let options = {
            method: "PUT",
            uri: urls.apiUrl + "/comments/" + commentId,
            body: comment,
            headers: {
                "content-type": "application/json"
            },
            strictSSL: false,
            resolveWithFullResponse: true,
            simple: false,
            json: true
        };

        let response = await request(options);
        console.log(response.statusCode);
        console.log(response.body);

        return response;
    }

    async deleteComment(commentId: number) {
        let options = {
            method: "DELETE",
            uri: urls.apiUrl + "/comments/" + commentId,
            strictSSL: false,
            resolveWithFullResponse: true,
            simple: false
        };

        let response = await request(options);
        console.log(response.statusCode);
        console.log(response.body);

        return response;
    }

}
export default new ApiCommentsController();