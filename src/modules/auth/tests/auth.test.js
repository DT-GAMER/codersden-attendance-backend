import request from 'supertest';
import express from 'express';
import authRoutes from '../routes/authRoutes.js';
import User from '../models/userModel.js';
import { generateToken } from '../../../utils/generateToken.js';

const app = express();
app.use(express.json());
app.use('/api/auth', authRoutes);

jest.mock('../models/userModel');
jest.mock('../../../utils/generateToken');

describe('Auth Module', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('POST /api/auth/signup/student', () => {
        it('should sign up a new student', async () => {
            User.findOne.mockResolvedValue(null);
            User.prototype.save.mockResolvedValue({});
            const response = await request(app)
                .post('/api/auth/signup/student')
                .send({
                    fullName: 'John Doe',
                    level: 'Beginner',
                    password: 'password123',
                    confirmPassword: 'password123'
                });

            expect(response.status).toBe(201);
            expect(response.body.message).toBe('Sign up successful');
        });

        it('should return error if user already exists', async () => {
            User.findOne.mockResolvedValue({});
            const response = await request(app)
                .post('/api/auth/signup/student')
                .send({
                    fullName: 'John Doe',
                    level: 'Beginner',
                    password: 'password123',
                    confirmPassword: 'password123'
                });

            expect(response.status).toBe(400);
            expect(response.body.message).toBe('User already exists');
        });
    });

    describe('POST /api/auth/signup/tutor', () => {
        it('should sign up a new tutor', async () => {
            User.findOne.mockResolvedValue(null);
            User.prototype.save.mockResolvedValue({});
            const response = await request(app)
                .post('/api/auth/signup/tutor')
                .send({
                    name: 'Jane Doe',
                    password: 'password123',
                    confirmPassword: 'password123'
                });

            expect(response.status).toBe(201);
            expect(response.body.message).toBe('Sign up successful');
        });

        it('should return error if user already exists', async () => {
            User.findOne.mockResolvedValue({});
            const response = await request(app)
                .post('/api/auth/signup/tutor')
                .send({
                    name: 'Jane Doe',
                    password: 'password123',
                    confirmPassword: 'password123'
                });

            expect(response.status).toBe(400);
            expect(response.body.message).toBe('User already exists');
        });
    });

    describe('POST /api/auth/login/student', () => {
        it('should log in a student', async () => {
            const user = {
                _id: '123',
                fullName: 'John Doe',
                password: 'hashedpassword',
                role: 'student'
            };
            User.findOne.mockResolvedValue(user);
            User.prototype.correctPassword = jest.fn().mockResolvedValue(true);
            generateToken.mockReturnValue('token123');

            const response = await request(app)
                .post('/api/auth/login/student')
                .send({
                    fullName: 'John Doe',
                    password: 'password123'
                });

            expect(response.status).toBe(200);
            expect(response.body.token).toBe('token123');
            expect(response.body.message).toBe('Login successful');
        });

        it('should return error if user not found', async () => {
            User.findOne.mockResolvedValue(null);
            const response = await request(app)
                .post('/api/auth/login/student')
                .send({
                    fullName: 'John Doe',
                    password: 'password123'
                });

            expect(response.status).toBe(400);
            expect(response.body.message).toBe('User not found');
        });

        it('should return error if password is incorrect', async () => {
            const user = {
                _id: '123',
                fullName: 'John Doe',
                password: 'hashedpassword',
                role: 'student'
            };
            User.findOne.mockResolvedValue(user);
            User.prototype.correctPassword = jest.fn().mockResolvedValue(false);

            const response = await request(app)
                .post('/api/auth/login/student')
                .send({
                    fullName: 'John Doe',
                    password: 'wrongpassword'
                });

            expect(response.status).toBe(400);
            expect(response.body.message).toBe('Invalid password');
        });
    });

    describe('POST /api/auth/login/tutor', () => {
        it('should log in a tutor', async () => {
            const user = {
                _id: '123',
                name: 'Jane Doe',
                password: 'hashedpassword',
                role: 'tutor'
            };
            User.findOne.mockResolvedValue(user);
            User.prototype.correctPassword = jest.fn().mockResolvedValue(true);
            generateToken.mockReturnValue('token123');

            const response = await request(app)
                .post('/api/auth/login/tutor')
                .send({
                    name: 'Jane Doe',
                    password: 'password123'
                });

            expect(response.status).toBe(200);
            expect(response.body.token).toBe('token123');
            expect(response.body.message).toBe('Login successful');
        });

        it('should return error if user not found', async () => {
            User.findOne.mockResolvedValue(null);
            const response = await request(app)
                .post('/api/auth/login/tutor')
                .send({
                    name: 'Jane Doe',
                    password: 'password123'
                });

            expect(response.status).toBe(400);
            expect(response.body.message).toBe('User not found');
        });

        it('should return error if password is incorrect', async () => {
            const user = {
                _id: '123',
                name: 'Jane Doe',
                password: 'hashedpassword',
                role: 'tutor'
            };
            User.findOne.mockResolvedValue(user);
            User.prototype.correctPassword = jest.fn().mockResolvedValue(false);

            const response = await request(app)
                .post('/api/auth/login/tutor')
                .send({
                    name: 'Jane Doe',
                    password: 'wrongpassword'
                });

            expect(response.status).toBe(400);
            expect(response.body.message).toBe('Invalid password');
        });
    });
});