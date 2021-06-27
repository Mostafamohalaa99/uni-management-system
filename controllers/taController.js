const course = require('../model/Course');

exports.viewClasses = (req, res, next) => {

course.find({}).then(Obj => {
            if (!Obj) {
                return res.status(400).json({
                    message: 'fail',
                });
            } else {
  
                        return res.status(200).json({
                            message: 'success',
                            courses: Obj
                        });
            }
        }).catch(err => console.log(err))
}