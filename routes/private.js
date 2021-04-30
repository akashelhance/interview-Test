const express = require("express");
const router = express.Router();

const requiredLoggin = require("../middleware/requiredLogin")


router.get('/',requiredLoggin, async(req,res)=>{
  
    return res.json({"Message": "Private Route"})
    
})

module.exports = router;
