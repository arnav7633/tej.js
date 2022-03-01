"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextChannel = exports.BaseChannel = exports.Client = void 0;
const Client_1 = __importDefault(require("./Structures/Client"));
exports.Client = Client_1.default;
const BaseChannel_1 = __importDefault(require("./Structures/BaseChannel"));
exports.BaseChannel = BaseChannel_1.default;
const TextChannel_1 = __importDefault(require("./Structures/TextChannel"));
exports.TextChannel = TextChannel_1.default;
