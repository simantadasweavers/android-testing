const express = require('express');
const router = express.Router();
require('dotenv').config();
const Mongo = require('../database/mongoose');
const appSchema = require('../schemas/App');
const userSchema = require('../schemas/User');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    },
});
const upload = multer({ storage: storage });


router.post('/app/submit_app', upload.fields([{ name: 'apk_file', maxCount: 1 }, { name: 'apk_icon', maxCount: 1 }]), async (req, res) => {
    try {
        const mongo = await Mongo();
        const App = await mongo.model("App", appSchema);
        const User = await mongo.model("User", userSchema);
        const token = req.headers.authorization.split(' ')[1];
        if (token) {
            let decoded = jwt.verify(token, process.env.ACCESS_TOKEN_PRIVATE_KEY);
            if (decoded['id']) {
                const user = await User.findById(decoded['id']).exec();
               
                if (user.credits >=  process.env.USER_CREDIT_PER_APP) {
                    const app = new App({
                        app_name: req.body.app_name,
                        google_play_url: req.body.google_play_url,
                        apk_file: req.files['apk_file'][0].filename,
                        apk_image: req.files['apk_icon'][0].filename,
                        additional_info: req.body.additional_info,
                        date: req.body.date,
                        status: 'approval',
                        user_id: decoded['id'],
                    });
                    await app.save();

                    await User.findOneAndUpdate({ _id: decoded['id'] }, {
                        credits: user.credits - (process.env.USER_CREDIT_PER_APP)
                    }, { new: true })
                    .then(updatedApp => {
                        if (!updatedApp) {
                            res.status(301).send({ "status": "failed", "result": 'Please again upload the app' })
                        }
                    })
                    .catch(error => {
                        res.status(501).send({ "status": "failed", "result": error })
                    });

                    res.status(201).send({ "status": "success", "result": "App record saved successfully", "app": app });
                }else{
                    res.status(301).send({ "status": "failed", "result": "You need to buy more credits"});
                }
            }

        } else {
            res.status(401).send({ "status": "failed", "result": "provide the token" });
        }
    } catch (err) {
        res.status(500).send({ "status": "failed", "result": err });
    }
});


router.put('/app/update', upload.fields([{ name: 'apk_file', maxCount: 1 }, { name: 'apk_image', maxCount: 1 }]), async (req, res) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        if (token) {
            const mongo = await Mongo();
            const App = await mongo.model("App", appSchema);
            let decoded = jwt.verify(token, process.env.ACCESS_TOKEN_PRIVATE_KEY);
            if (decoded['id']) {
                const result = await App.find({ _id: req.body.app_id, user_id: decoded['id'] }).exec();

                await App.findOneAndUpdate({ _id: req.body.app_id, user_id: decoded['id'] }, {
                    app_name: req.body.app_name ? req.body.app_name : result.app_name,
                    google_play_url: req.body.google_play_url ? req.body.google_play_url : result.google_play_url,
                    apk_file: req.files['apk_file'] ? req.files['apk_file'][0].filename : result.apk_file,
                    apk_image: req.files['apk_image'] ? req.files['apk_image'][0].filename : result.apk_image,
                    additional_info: req.body.additional_info ? req.body.additional_info : result.additional_info,
                    date: req.body.date ? req.body.date : result.date
                }, { new: true })
                    .then(updatedApp => {
                        if (!updatedApp) {
                            res.status(301).send({ "status": "failed", "result": 'App not found' })
                        }
                    })
                    .catch(error => {
                        res.status(501).send({ "status": "failed", "result": error })
                    });

                let app = await App.find({ _id: req.body.app_id, user_id: decoded['id'] }).exec();
                res.status(201).send({ "status": "success", "result": "App record updated successfully", "app": app });
            }
        } else {
            res.status(401).send({ "status": "failed", "result": "provide the token" });
        }
    } catch (err) {
        res.status(500).send({ "status": "failed", "result": err });
    }
});


router.delete('/app/delete', async (req, res) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        if (token) {
            const mongo = await Mongo();
            const App = await mongo.model("App", appSchema);
            let decoded = jwt.verify(token, process.env.ACCESS_TOKEN_PRIVATE_KEY);
            if (decoded['id']) {
                const result = await App.findByIdAndDelete(req.body.app_id).exec();
                res.status(201).send({ "status": "success", "result": "App record deleted successfully", "app": result });
            }
        } else {
            res.status(401).send({ "status": "failed", "result": "provide the token" });
        }
    } catch (err) {
        res.status(500).send({ "status": "failed", "result": err });
    }
});


router.post('/app/details', async (req, res) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        if (token) {
            const mongo = await Mongo();
            const App = await mongo.model("App", appSchema);
            let decoded = jwt.verify(token, process.env.ACCESS_TOKEN_PRIVATE_KEY);
            if (decoded['id']) {
                const app = await App.find({ _id: req.body.app_id, user_id: decoded['id'] }).exec();
                res.status(200).send({ "status": "success", "app": app });
            }
        } else {
            res.status(401).send({ "status": "failed", "result": "provide the token" });
        }

    } catch (err) {
        res.status(500).send({ "status": "failed", "result": err });
    }
});


module.exports = router;