"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
let users = [];
router.get("/", (req, res) => {
    res.json(users);
});
router.post("/users", (req, res) => {
    const { name, email } = req.body;
    const newUser = { name, email };
    users.push(newUser);
    res.status(201).json({ message: "User successfully added" });
});
router.get('/users', (req, res) => {
    res.status(200).json({ users });
});
router.get('/hello', (req, res) => {
    res.json({ msg: "Hello world!" });
});
router.get('/echo/:id', (req, res) => {
    let id = req.params.id;
    res.json({ id: `${id}` });
});
router.post('/sum', (req, res) => {
    const nums = req.body.numbers;
    let sum = 0;
    for (const num of nums) {
        sum += num;
    }
    res.json({ sum });
});
exports.default = router;
