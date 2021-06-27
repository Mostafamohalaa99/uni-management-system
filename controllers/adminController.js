const Course = require('../model/Course');

exports.addCourse = (req, res, next) => {
    let name = req.body.name;
    let semester = req.body.semester;
    let TA = req.body.TA;
    let time = req.body.time;
    let difficulty = req.body.difficulty;
    let location = req.body.location;

    var course = new Course({
        name:name,
        semester:semester,
        TA:TA,
        time:time,
        difficulty:difficulty,
        location:location

    })
    course.save()
        .then(Obj => {
            if (!Obj) {
                return res.status(400).json({
                    message: 'fail',
                });
            } else {
  
                        return res.status(200).json({
                            message: 'success',
                            course: Obj
                        });
            }
        }).catch(err => console.log(err))
}