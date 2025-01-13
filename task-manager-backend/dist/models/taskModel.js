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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
// src/models/taskModel.ts
const pg_1 = require("pg");
const client = new pg_1.Client();
class Task {
    static create(title, description, deadline, priority, status, assigned_to) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield client.query('INSERT INTO tasks (title, description, deadline, priority, status, assigned_to) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *', [title, description, deadline, priority, status, assigned_to]);
            return result.rows[0];
        });
    }
    static getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield client.query('SELECT * FROM tasks');
            return result.rows;
        });
    }
}
exports.Task = Task;
