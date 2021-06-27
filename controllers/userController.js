const User = require('../model/user');
const Application = require('../model/Application');

exports.submitApplication = (req,res,next)=>{
    let name;
    let email;
    let faculty;
    let age;
    if(req.body.name && req.body.email && req.body.age&& req.body.faculty){
        name = req.body.name;
        email = req.body.email;
        age = req.body.age;
        faculty = req.body.faculty;
        const application = new Application({
            name:name,
            email:email,
            faculty:faculty,
            age:age
        })
        application.save()
        .then(data=>{
            if (!data) {
                return res.status(400).json({
                    message: 'fail',
                });
            } else {
  
                        return res.status(200).json({
                            message: 'success',
                            application: data
                        });
            }
        }).catch(err =>console.log(err))
    }
}
exports.Login = (req, res, next) => {
    
    let email;
    let password;
    if (req.body.email && req.body.password) {
        email = req.body.email;
        password = req.body.password;
    } else {
        return res.status(400).json({
            message: 'fail',
        });
    }
    User.findOne({
            email: email
        })
        .then(user => {
            if (!user) {
                return res.status(400).json({
                    message: 'fail',
                });
            } else {
                if (password == user.password) {
                    return res.status(200).json({
                        message: 'success',
                        user: user
                    });
                } else {
                    return res.status(400).json({
                        message: 'fail',

                    })
                }
            }
        }).catch(err => console.log(err))
};
exports.changePassword = (req, res, next) => {
    console.log('aa')
    let email;
    let oldPassword = req.body.password;
    let newPassword = req.body.newPassword;
    if (req.body.email && oldPassword &&newPassword ) {
        email = req.body.email;
    } else {
        return res.status(400).json({
            message: 'fail',
        });
    }
    User.findOne({
            email: email
        })
        .then(user => {
            if (!user) {
                return res.status(400).json({
                    message: 'fail',
                });
            } else {
                if (oldPassword == user.password) {
                    if (req.body.newPassword) {
                        user.password = newPassword;
                        user.save();
                        return res.status(200).json({
                            message: 'success',
                            user: user
                        });
                    }
                } else {
                    return res.status(400).json({
                        message: 'fail',

                    })
                }
            }
        }).catch(err => console.log(err))
}