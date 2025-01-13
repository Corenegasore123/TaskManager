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
// src/routes/taskRoutes.ts
const express_1 = require("express");
const taskController_1 = require("../controllers/taskController");
const router = (0, express_1.Router)();
// Post to create a new task
router.post('/tasks', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, taskController_1.createTask)(req, res);
    }
    catch (err) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}));
// Get all tasks
router.get('/tasks', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, taskController_1.getTasks)(req, res);
    }
    catch (err) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}));
exports.default = router;
