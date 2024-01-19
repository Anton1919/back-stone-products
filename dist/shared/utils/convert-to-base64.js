"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertToBase64 = void 0;
const fs_1 = __importDefault(require("fs"));
function convertToBase64(pathImage) {
    const imageBuffer = fs_1.default.readFileSync(pathImage);
    return imageBuffer.toString('base64');
}
exports.convertToBase64 = convertToBase64;
