const express = require('express');
const router = express.Router();
const Mongo = require('../database/mongoose');
const contactSchema = require('../schemas/Pages');

router.post('/contact', async (req, res) => {
    try {
        const mongo = await Mongo();
        const Contact = await mongo.model("contact", contactSchema);
        const record = new Contact({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            subject: req.body.subject,
            message: req.body.message,
        });
        await record.save();

        res.status(201).send({ "status": "success", "result": "Record saved successfully" });
    } catch (err) {
        res.status(500).send({ "status": "failed", "result": err });
    }
});

module.exports = router;