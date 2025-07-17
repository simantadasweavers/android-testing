const express = require('express');
const router = express.Router();
const Mongo = require('../database/mongoose');
const userSchema = require('../schemas/User');
const bcrypt = require('bcrypt');
const saltRounds = parseInt(process.env.BYCRYPT_SALT_ROUNDS);
const jwt = require('jsonwebtoken');
const { mongo } = require('mongoose');


/** pre-defined admin auth */
async function createAdmin(first_name, last_name, email, password, phone1, phone2) {
    const mongo = await Mongo();
    const User = await mongo.model("User", userSchema);
    let result = await User.findOne({ email: email }).exec();
    if (!email) {
        if (!result && !email && !password) {
            bcrypt.hash(password, saltRounds, function (err, hashedPassword) {
                try {
                    const user = new User({
                        first_name: first_name,
                        last_name: last_name,
                        email: email,
                        password: hashedPassword,
                        pri_phone: phone1,
                        sec_phone: phone2,
                        role: "admin",
                        active: true,
                    });
                    user.save();

                    console.log("Admin User Created: ", user);
                } catch (err) {
                    res.status(400).send({ "status": "failed", "result": err });
                }
            });
        }
    }
}
createAdmin("Deep", "Dutta", "deep@gmail.com", "deep@gmail.com");


router.post('/admin/tester/register', async (req, res) => {
    try {
        const mongo = await Mongo();
        const User = await mongo.model("User", userSchema);
        const result = await User.findOne({ "email": req.body.email }).exec();

        if (result == null) {
            bcrypt.hash(req.body.password, saltRounds, function (err, hashedPassword) {
                try {
                    const user = new User({
                        first_name: req.body.first_name,
                        last_name: req.body.last_name,
                        email: req.body.email,
                        password: hashedPassword,
                        pri_phone: req.body.pri_phone,
                        sec_phone: req.body.sec_phone,
                        role: "tester",
                        active: true
                    });
                    user.save();

                    let access_token = jwt.sign({ email: user.email, id: user._id }, process.env.ACCESS_TOKEN_PRIVATE_KEY, { expiresIn: process.env.ACCESS_TOKEN_EXPIRATION });
                    let refresh_token = jwt.sign({ email: user.email, id: user._id }, process.env.REFRESH_TOKEN_PRIVATE_KEY, { expiresIn: process.env.REFRESH_TOKEN_EXPIRATION });
                    res.status(201).send({ "status": "success", "result": user, "access_token": access_token, "refresh_token": refresh_token });
                } catch (err) {
                    res.status(400).send({ "status": "failed", "result": err });
                }
            });
        } else {
            res.status(409).send({ "status": "failed", "result": "email already exist" });
        }

    } catch (err) {
        res.status(500).send({ "status": "failed", "result": err });
    }
});


router.post('/admin/tester/login', async (req, res) => {
    try {
        const mongo = await Mongo();
        const User = await mongo.model("User", userSchema);
        let result = await User.findOne({ "email": req.body.email }).exec();

        if (result) {
            bcrypt.compare(req.body.password, result.password, function (err, isPasswordMatched) {
                if (isPasswordMatched) {
                    let access_token = jwt.sign({ email: result.email, id: result._id }, process.env.ACCESS_TOKEN_PRIVATE_KEY, { expiresIn: process.env.ACCESS_TOKEN_EXPIRATION });
                    let refresh_token = jwt.sign({ email: result.email, id: result._id }, process.env.REFRESH_TOKEN_PRIVATE_KEY, { expiresIn: process.env.REFRESH_TOKEN_EXPIRATION });
                    let user = User.findById(result._id).exec();
                    res.status(201).send({ "status": "success", "result": result, "access_token": access_token, "refresh_token": refresh_token, "user": user });
                } else {
                    res.status(401).send({ "status": "failed", "result": "password not match" });
                }
            });
        } else {
            res.status(409).send({ "status": "failed", "result": "email not exist" });
        }

    } catch (err) {
        res.status(500).send({ "status": "failed", "result": err });
    }
});


router.post('/admin/dashboard', async (req, res) => {
    try {
        const mongo = await Mongo();
        const User = await mongo.model("User", userSchema);
        let result = await User.findOne({ "email": req.body.email }).exec();

        if (result) {
            bcrypt.compare(req.body.password, result.password, function (err, isPasswordMatched) {
                if (isPasswordMatched) {
                    let access_token = jwt.sign({ email: result.email, id: result._id }, process.env.ACCESS_TOKEN_PRIVATE_KEY, { expiresIn: process.env.ACCESS_TOKEN_EXPIRATION });
                    let refresh_token = jwt.sign({ email: result.email, id: result._id }, process.env.REFRESH_TOKEN_PRIVATE_KEY, { expiresIn: process.env.REFRESH_TOKEN_EXPIRATION });
                    let user = User.findById(result._id).exec();
                    res.status(201).send({ "status": "success", "result": result, "access_token": access_token, "refresh_token": refresh_token, "user": user });
                } else {
                    res.status(401).send({ "status": "failed", "result": "password not match" });
                }
            });
        } else {
            res.status(409).send({ "status": "failed", "result": "email not exist" });
        }

    } catch (err) {
        res.status(500).send({ "status": "failed", "result": err });
    }
});


module.exports = router;