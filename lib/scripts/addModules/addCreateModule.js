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
exports.__esModule = true;
var axios_1 = __importDefault(require("axios"));
var synchronizeWithIntegromat_1 = require("../synchronizeWithIntegromat");
function addCreateModule(models, modelName, attributes, token, appName) {
    return __awaiter(this, void 0, void 0, function () {
        var variable, returnAttrinutes, data, config, response, queryString, configApi, response_1, error_1, parameters, configExpect, response_2, error_2, error_3;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    variable = {};
                    returnAttrinutes = '';
                    attributes.forEach(function (attribute) {
                        if (!['createdAt', 'updatedAt', 'deletedAt', 'id'].includes(attribute) &&
                            models[modelName].rawAttributes[attribute].type.constructor.key !==
                                'VIRTUAL') {
                            variable[attribute] = "{{" + attribute + "}}";
                        }
                        returnAttrinutes += attribute + "\n    ";
                    });
                    data = JSON.stringify({
                        name: "create" + synchronizeWithIntegromat_1.capitalize(modelName),
                        label: "Create " + synchronizeWithIntegromat_1.capitalize(modelName),
                        type_id: 4,
                        crud: 'create',
                        description: "The create endpoint for the " + synchronizeWithIntegromat_1.capitalize(modelName)
                    });
                    config = {
                        method: 'post',
                        url: "https://api.integromat.com/v1/app/" + appName + "/1/module",
                        headers: {
                            Authorization: "Token " + token,
                            'Content-Type': 'application/json',
                            'x-imt-apps-sdk-version': '1.0.0'
                        },
                        data: data
                    };
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 11, , 12]);
                    return [4 /*yield*/, axios_1["default"](config)];
                case 2:
                    response = _b.sent();
                    console.log(JSON.stringify(response));
                    queryString = JSON.stringify({
                        url: '/platform/graphql',
                        method: 'POST',
                        qs: {},
                        body: {
                            operationName: "create" + synchronizeWithIntegromat_1.capitalize(modelName),
                            variables: (_a = {},
                                _a[modelName] = variable,
                                _a),
                            query: "mutation create" + synchronizeWithIntegromat_1.capitalize(modelName) + "($" + modelName + ": " + modelName + "Input!) {\n  " + modelName + "Create(" + modelName + ": $" + modelName + ") {\n    " + returnAttrinutes + "__typename\n  }\n}\n"
                        },
                        headers: {
                            authorization: '{{connection.token}}'
                        },
                        response: {
                            output: '{{body}}'
                        }
                    });
                    configApi = {
                        method: 'put',
                        url: "https://api.integromat.com/v1/app/" + appName + "/1/module/create" + synchronizeWithIntegromat_1.capitalize(modelName) + "/api",
                        headers: {
                            Authorization: "Token " + token,
                            'x-imt-apps-sdk-version': '1.0.0',
                            'Content-Type': 'application/jsonc'
                        },
                        data: queryString
                    };
                    _b.label = 3;
                case 3:
                    _b.trys.push([3, 5, , 6]);
                    return [4 /*yield*/, axios_1["default"](configApi)];
                case 4:
                    response_1 = _b.sent();
                    console.log(JSON.stringify(response_1));
                    return [3 /*break*/, 6];
                case 5:
                    error_1 = _b.sent();
                    console.log(JSON.stringify(error_1));
                    return [3 /*break*/, 6];
                case 6:
                    parameters = Object.keys(variable).map(function (attribute) {
                        var attributeObject = models[modelName].rawAttributes[attribute];
                        var parameter = {
                            name: attribute,
                            type: models[modelName].rawAttributes[attribute].type.constructor.key,
                            label: synchronizeWithIntegromat_1.capitalize(attribute),
                            required: !models[modelName].rawAttributes[attribute].allowNull
                        };
                        if (attributeObject.validate && attributeObject.validate.isIn) {
                            parameter['type'] = 'select';
                            parameter['options'] = attributeObject.validate.isIn[0].map(function (valid) { return ({
                                label: String(valid),
                                value: valid
                            }); });
                        }
                        return parameter;
                    });
                    configExpect = {
                        method: 'put',
                        url: "https://api.integromat.com/v1/app/" + appName + "/1/module/create" + synchronizeWithIntegromat_1.capitalize(modelName) + "/expect",
                        headers: {
                            Authorization: "Token " + token,
                            'x-imt-apps-sdk-version': '1.0.0',
                            'Content-Type': 'application/jsonc'
                        },
                        data: JSON.stringify(parameters)
                    };
                    _b.label = 7;
                case 7:
                    _b.trys.push([7, 9, , 10]);
                    return [4 /*yield*/, axios_1["default"](configExpect)];
                case 8:
                    response_2 = _b.sent();
                    console.log(JSON.stringify(response_2));
                    return [3 /*break*/, 10];
                case 9:
                    error_2 = _b.sent();
                    console.log(JSON.stringify(error_2));
                    return [3 /*break*/, 10];
                case 10: return [3 /*break*/, 12];
                case 11:
                    error_3 = _b.sent();
                    console.log(JSON.stringify(error_3));
                    return [3 /*break*/, 12];
                case 12: return [2 /*return*/];
            }
        });
    });
}
exports["default"] = addCreateModule;
