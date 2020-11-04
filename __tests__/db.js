const request = require('supertest');
const fs = require('fs');
const path = require('path');
// const db = require('../server/db/markets.js');
const server = 'http://localhost:3000';

//create test json file
// const testJsonFile = path.resolve(__dirname, '../server/db/markets.test.json');

const mongoose = require('mongoose');
const UserModel = require('../server/models/usermodel');
const userData = { username: 'mark', email: 'mark@mark', password:'mark' };




describe('User Model Test', () => {
    beforeAll(async () => {
        await mongoose.connect(global.__MONGO_URI__, { useNewUrlParser: true, useCreateIndex: true }, (err) => {
            if (err) {
                console.error(err);
                process.exit(1);
            }
        });
    });

    it('create & save user succesfully', async () => {
        const validUser = new UserModel(userData);
        try {
            const savedUser = await validUser.save();
            expect(savedUser.username).toBe(userData.username);
            expect(savedUser.email).toBe(userData.email);
            expect(savedUser.password).toBe(userData.password);
        } catch (error) {
            err= error
        }

    })

    it('if not all required elements of user are input, dont add user to database', async () => {
        let badUserData = { username: 'asd', password:'asdfasdf'};
        const userWithInvalidField = new UserModel(badUserData);
        let err;
        try{
            const savedUserWithMissingField = await userWithInvalidField.save();
            error = savedUserWithMissingField
        }catch(error){
            err = error;
        }
        expect(err).toBeInstanceOf(mongoose.Error.ValidationError)
    });
    
});

























// describe('test of test',()=>{
//     it('tests tests',()=>{
//         expect(1).toEqual(1);
//     })
// })