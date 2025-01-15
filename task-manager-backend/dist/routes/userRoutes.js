"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const auth_1 = require("../middleware/auth");
const router = (0, express_1.Router)();
// Public routes
router.post('/auth/register', userController_1.register);
router.post('/auth/login', userController_1.login);
// Protected routes
router.get('/users/:id', auth_1.authenticateToken, userController_1.getUserById);
router.put('/users/:id/password', auth_1.authenticateToken, userController_1.updatePassword);
exports.default = router;
