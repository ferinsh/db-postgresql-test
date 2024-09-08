const {Router} = require("express");
const { body, validationResult } = require("express-validator");
const userRouter = Router();

const validateUserInput = [
    body('username').trim().isLength({ min: 1 }).withMessage('Username is required')
];

userRouter.get("/", (req, res) => {
    res.render("formSaveUser")
})

userRouter.post("/", validateUserInput, (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).render("formSaveUser", { errors: errors.array() });
    }
    console.log("username to be saved: ", req.body.username);
    res.redirect("/");
});


module.exports = userRouter;