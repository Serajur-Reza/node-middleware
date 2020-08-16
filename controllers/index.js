module.exports.showUser= function(req, res, next) {
    if(!req.body.name){
        return res.json({message: "user must have a name"})
    }
    console.log("Hello user")
};

module.exports.showName= function(req, res, next) {
    //res.json({message: "Hello World"}) if this line is uncommented it says "Cannot set headers after they are sent to the client"
    console.log("Hello World")
};

module.exports.showHello= function(req,res,next){
    res.json({message: "Hello Raphael"})
    next()
}

// module.exports.passName= function(req,res, next){
//     if(req.name){
//         console.log(req.name)
//     }
// }