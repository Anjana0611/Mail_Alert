const Cal = require('../models/cal.models');

exports.add = (req, res) => {
    // Validate request
    if(!req.body.a) {
        return res.status(400).send({
            message: "result not found"
        });
    }

    const a = req.body.a
    const b = req.body.b
    const c = req.body.c
    // Addition
    const sum = new Cal({
        a:a , 
        b: b,
        c : a + b
    });

    // Save result in the database
    sum.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while calculation."
        });
    });
};

exports.sub = (req, res) => {
    // Validate request 
    if(!req.body.a) {
        return res.status(400).send({
            message: "result not found"
        });
    }

    const a = req.body.a
    const b = req.body.b
    const c = req.body.c
    // Subtraction
    const sub = new Cal({
        a:a , 
        b: b,
        c : a - b
    });

    // Save Result in the database
    sub.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while calculation."
        });
    });
};

exports.multiply = (req, res) => {
    // Validate request
    if(!req.body.a) {
        return res.status(400).send({
            message: "result not found"
        });
    }

    const a = req.body.a
    const b = req.body.b
    const c = req.body.c
    // Multiplication
    const multiply = new Cal({
        a:a , 
        b: b,
        c : a * b
    });

    // Save Result in the database
    multiply.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while calculation."
        });
    });
};
exports.divide = (req, res) => {
    // Validate request
    if(!req.body.a) {
        return res.status(400).send({
            message: "result not found"
        });
    }

    const a = req.body.a
    const b = req.body.b
    const c = req.body.c
    // Division
    const divide = new Cal({
        a:a , 
        b: b,
        c : a / b
    });

    // Save result in the database
    divide.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while calculation."
        });
    });
};
