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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = exports.createUser = void 0;
const responseFormatter_1 = require("../utils/responseFormatter");
const validator_1 = require("../utils/validator");
const db_1 = __importDefault(require("../config/db"));
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password } = req.body;
    if (!(0, validator_1.isValidEmail)(email)) {
        return res.status(400).json((0, responseFormatter_1.errorResponse)('Invalid email format'));
    }
    try {
        const result = yield db_1.default.query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *', [name, email, password]);
        return res.status(201).json((0, responseFormatter_1.successResponse)('User created successfully', result.rows[0]));
    }
    catch (err) {
        return res.status(500).json((0, responseFormatter_1.errorResponse)('Error creating user', err));
    }
});
exports.createUser = createUser;
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield db_1.default.query('SELECT * FROM users');
        return res.status(200).json((0, responseFormatter_1.successResponse)('Users fetched successfully', result.rows));
    }
    catch (err) {
        return res.status(500).json((0, responseFormatter_1.errorResponse)('Error fetching users', err));
    }
});
exports.getUsers = getUsers;
