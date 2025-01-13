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
exports.getTasks = exports.createTask = void 0;
const responseFormatter_1 = require("../utils/responseFormatter");
const validator_1 = require("../utils/validator");
const db_1 = __importDefault(require("../config/db"));
const createTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description, deadline, priority, status, assigned_to } = req.body;
    if (!(0, validator_1.isValidPriority)(priority)) {
        return res.status(400).json((0, responseFormatter_1.errorResponse)('Invalid priority value'));
    }
    if (!(0, validator_1.isValidStatus)(status)) {
        return res.status(400).json((0, responseFormatter_1.errorResponse)('Invalid status value'));
    }
    try {
        const result = yield db_1.default.query('INSERT INTO tasks (title, description, deadline, priority, status, assigned_to) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *', [title, description, deadline, priority, status, assigned_to]);
        return res.status(201).json((0, responseFormatter_1.successResponse)('Task created successfully', result.rows[0]));
    }
    catch (err) {
        return res.status(500).json((0, responseFormatter_1.errorResponse)('Error creating task', err));
    }
});
exports.createTask = createTask;
const getTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield db_1.default.query('SELECT * FROM tasks');
        return res.status(200).json((0, responseFormatter_1.successResponse)('Tasks fetched successfully', result.rows));
    }
    catch (err) {
        return res.status(500).json((0, responseFormatter_1.errorResponse)('Error fetching tasks', err));
    }
});
exports.getTasks = getTasks;
