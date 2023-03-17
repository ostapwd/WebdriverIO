"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var globals_1 = require("@jest/globals");
var math_1 = require("../math");
var apiControllerJest_1 = __importDefault(require("../api/apiControllerJest"));
var getCommentsSchema_json_1 = __importDefault(require("../jsonSchemas/getCommentsSchema.json"));
var addCommentSchema_json_1 = __importDefault(require("../jsonSchemas/addCommentSchema.json"));
var editCommentSchema_json_1 = __importDefault(require("../../cypress/jsonSchemas/editCommentSchema.json"));
var jsonschema_1 = require("jsonschema");
(0, globals_1.describe)("Comments API tests", function () {
    it("GET comments test", function () { return __awaiter(void 0, void 0, void 0, function () {
        var response, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, apiControllerJest_1.default.getComments()];
                case 1:
                    response = _a.sent();
                    (0, globals_1.expect)(response.statusCode).toEqual(200);
                    result = (0, jsonschema_1.validate)(response.body, getCommentsSchema_json_1.default);
                    console.log(result.errors.toString());
                    (0, globals_1.expect)(result.valid).toBeTruthy();
                    return [2 /*return*/];
            }
        });
    }); });
    (0, globals_1.describe)("POST comment API tests", function () {
        var newComment = {
            "postId": 1,
            "name": "Test comment name",
            "email": "testemail@gmail.com",
            "body": "Test comment body"
        };
        it("POST a new comment", function () { return __awaiter(void 0, void 0, void 0, function () {
            var response, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, apiControllerJest_1.default.addComment(newComment)];
                    case 1:
                        response = _a.sent();
                        (0, globals_1.expect)(response.statusCode).toEqual(201);
                        result = (0, jsonschema_1.validate)(response.body, addCommentSchema_json_1.default);
                        console.log(result.errors.toString());
                        (0, globals_1.expect)(result.valid).toBeTruthy();
                        newComment["id"] = response.body.id;
                        (0, globals_1.expect)(response.body).toMatchObject(newComment);
                        return [2 /*return*/];
                }
            });
        }); });
        it("Verify a new comment exists in the application", function () { return __awaiter(void 0, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, apiControllerJest_1.default.getComments()];
                    case 1:
                        response = _a.sent();
                        (0, globals_1.expect)(response.statusCode).toEqual(200);
                        return [2 /*return*/];
                }
            });
        }); });
    });
    it("PUT comment test", function () { return __awaiter(void 0, void 0, void 0, function () {
        var updatedComment, response, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    updatedComment = {
                        "postId": 1,
                        "name": "Test updated comment name",
                        "email": "testemail@gmail.com",
                        "body": "Test updated comment body"
                    };
                    return [4 /*yield*/, apiControllerJest_1.default.editComment(1, updatedComment)];
                case 1:
                    response = _a.sent();
                    (0, globals_1.expect)(response.statusCode).toEqual(200);
                    result = (0, jsonschema_1.validate)(response.body, editCommentSchema_json_1.default);
                    console.log(result.errors.toString());
                    (0, globals_1.expect)(result.valid).toBeTruthy();
                    updatedComment["id"] = response.body.id;
                    (0, globals_1.expect)(response.body).toMatchObject(updatedComment);
                    return [2 /*return*/];
            }
        });
    }); });
    it("DELETE comment test", function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, apiControllerJest_1.default.deleteComment(1)];
                case 1:
                    response = _a.sent();
                    (0, globals_1.expect)(response.statusCode).toEqual(200);
                    return [2 /*return*/];
            }
        });
    }); });
});
(0, globals_1.describe)("Unit tests", function () {
    globals_1.test.concurrent.each([
        [1, 1, 2],
        [1, 2, 3],
        [2, 1, 3],
        [2, 2, 4],
        [2, 3, 5],
    ])(".add(%i, %i)", function (a, b, expected) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            (0, globals_1.expect)((0, math_1.sum)(a, b)).toBe(expected);
            return [2 /*return*/];
        });
    }); });
});
