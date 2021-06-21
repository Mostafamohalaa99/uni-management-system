const User = require('../model/user');
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
    let email;
    let oldPassword = req.body.password;
    let newPassword = req.body.newPassword;
    if (req.body.email) {
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