const express = require("express");
const verifyToken = require("../middlewares/authMiddleware");
const authorizeRoles = require("../middlewares/roleMiddleware.js")
const router = express.Router();

//only admin can access this router
router.get("/admin", verifyToken,authorizeRoles("admin"),  (req,res) => {
    res.json({message:"Welcome Admin"});
})

//both manager and admin can access this router
router.get("/manager",verifyToken,authorizeRoles("admin","manager"),(req,res) => {
    res.json({message:"Welcome Manager"});
})

//all can access this router
router.get("/user",verifyToken,authorizeRoles("admin","manager","user"),(req,res) => {
    res.json({message:"Welcome User"});
})

module.exports = router;

