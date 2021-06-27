const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const taController = require('../controllers/taController')
const adminController = require('../controllers/adminController');
const studentController = require('../controllers/studentController');

router.post('/', userController.Login);
router.post('/changePassword', userController.changePassword);
router.post('/admin/addCourse', adminController.addCourse);
router.get('/ta/getCourses', taController.viewClasses);
router.get('/student/getGrades', studentController.viewGrades);
router.post('/applications', userController.submitApplication);

module.exports = router;