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
exports.updatePassword = exports.getUserById = exports.login = exports.register = void 0;
const responseFormatter_1 = require("../utils/responseFormatter");
const validator_1 = require("../utils/validator");
const prisma_1 = __importDefault(require("../lib/prisma"));
const library_1 = require("@prisma/client/runtime/library");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const JWT_SECRET = process.env.JWT_SECRET || 'taskManager';
const SALT_ROUNDS = 10;
// Register new user
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password } = req.body;
    if (!(name === null || name === void 0 ? void 0 : name.trim()) || !(email === null || email === void 0 ? void 0 : email.trim()) || !(password === null || password === void 0 ? void 0 : password.trim())) {
        res.status(400).json((0, responseFormatter_1.errorResponse)('Name, email and password are required'));
        return;
    }
    if (!(0, validator_1.isValidEmail)(email)) {
        res.status(400).json((0, responseFormatter_1.errorResponse)('Invalid email format'));
        return;
    }
    try {
        const hashedPassword = yield bcrypt_1.default.hash(password, SALT_ROUNDS);
        const user = yield prisma_1.default.user.create({
            data: {
                name: name.trim(),
                email: email.toLowerCase(),
                password: hashedPassword
            },
            select: {
                id: true,
                name: true,
                email: true,
                createdAt: true
            }
        });
        const token = jsonwebtoken_1.default.sign({
            userId: user.id,
            email: user.email
        }, JWT_SECRET, { expiresIn: '24h' });
        res.status(201).json((0, responseFormatter_1.successResponse)('Registration successful', { token, user }));
    }
    catch (error) {
        if (error instanceof library_1.PrismaClientKnownRequestError && error.code === 'P2002') {
            res.status(409).json((0, responseFormatter_1.errorResponse)('Email already exists'));
            return;
        }
        console.error('Error in register:', error);
        res.status(500).json((0, responseFormatter_1.errorResponse)('Error during registration'));
    }
});
exports.register = register;
// Login user
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    if (!(email === null || email === void 0 ? void 0 : email.trim()) || !(password === null || password === void 0 ? void 0 : password.trim())) {
        res.status(400).json((0, responseFormatter_1.errorResponse)('Email and password are required'));
        return;
    }
    try {
        const user = yield prisma_1.default.user.findUnique({
            where: { email: email.toLowerCase() },
            select: {
                id: true,
                email: true,
                password: true,
                name: true
            }
        });
        if (!user) {
            res.status(401).json((0, responseFormatter_1.errorResponse)('Invalid credentials'));
            return;
        }
        const isValidPassword = yield bcrypt_1.default.compare(password, user.password);
        if (!isValidPassword) {
            res.status(401).json((0, responseFormatter_1.errorResponse)('Invalid credentials'));
            return;
        }
        const token = jsonwebtoken_1.default.sign({
            userId: user.id,
            email: user.email
        }, JWT_SECRET, { expiresIn: '24h' });
        res.status(200).json((0, responseFormatter_1.successResponse)('Login successful', {
            token,
            user: {
                id: user.id,
                email: user.email,
                name: user.name
            }
        }));
    }
    catch (error) {
        console.error('Error in login:', error);
        res.status(500).json((0, responseFormatter_1.errorResponse)('Error during login'));
    }
});
exports.login = login;
// Get user by ID
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const numId = parseInt(id);
    if (isNaN(numId) || numId <= 0) {
        res.status(400).json((0, responseFormatter_1.errorResponse)('Invalid ID format'));
        return;
    }
    try {
        const user = yield prisma_1.default.user.findUnique({
            where: { id: numId },
            select: {
                id: true,
                name: true,
                email: true,
                createdAt: true,
                updatedAt: true,
            }
        });
        if (!user) {
            res.status(404).json((0, responseFormatter_1.errorResponse)('User not found'));
            return;
        }
        res.status(200).json((0, responseFormatter_1.successResponse)('User fetched successfully', user));
    }
    catch (error) {
        console.error('Error in getUserById:', error);
        res.status(500).json((0, responseFormatter_1.errorResponse)('Error fetching user'));
    }
});
exports.getUserById = getUserById;
// Update password
const updatePassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { currentPassword, newPassword } = req.body;
    const numId = parseInt(id);
    if (isNaN(numId) || numId <= 0) {
        res.status(400).json((0, responseFormatter_1.errorResponse)('Invalid ID format'));
        return;
    }
    if (!(currentPassword === null || currentPassword === void 0 ? void 0 : currentPassword.trim()) || !(newPassword === null || newPassword === void 0 ? void 0 : newPassword.trim())) {
        res.status(400).json((0, responseFormatter_1.errorResponse)('Current password and new password are required'));
        return;
    }
    try {
        const user = yield prisma_1.default.user.findUnique({
            where: { id: numId },
            select: { password: true }
        });
        if (!user) {
            res.status(404).json((0, responseFormatter_1.errorResponse)('User not found'));
            return;
        }
        const isValidPassword = yield bcrypt_1.default.compare(currentPassword, user.password);
        if (!isValidPassword) {
            res.status(401).json((0, responseFormatter_1.errorResponse)('Current password is incorrect'));
            return;
        }
        const hashedNewPassword = yield bcrypt_1.default.hash(newPassword, SALT_ROUNDS);
        yield prisma_1.default.user.update({
            where: { id: numId },
            data: {
                password: hashedNewPassword
            }
        });
        res.status(200).json((0, responseFormatter_1.successResponse)('Password updated successfully'));
    }
    catch (error) {
        console.error('Error in updatePassword:', error);
        res.status(500).json((0, responseFormatter_1.errorResponse)('Error updating password'));
    }
});
exports.updatePassword = updatePassword;
