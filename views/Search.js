const router = require("express").Router();
const Events = require("../models/Events.js")


router.get("/", async (req, res)=>{
    try{
        let filt = req.query
        let events = await Events.find({})


        let filterData = events.filter((evnt)=>{
            let d = evnt.name + evnt.description
            console.log(d,filt.q)
            if(d.toLowerCase().indexOf(filt.q.toLowerCase()) !== -1){
                return true
            }
            else{
                return false
            }
        })


        res.json(filterData)
    }
    catch(err){
        res.json(err)
    }
})


module.exports = router