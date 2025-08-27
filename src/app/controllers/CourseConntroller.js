const Course = require("../models/Course")


class CourseController {



    //[Get] /courses/:slug

    show(req, res, next) {
        Course.findOne({ slug: req.params.slug }).lean()
            .then(course =>
                res.render('courses/show',{course})
            )
            .catch(next)

    }

    //[Get] /courses/create
    create(req, res, next) {
        res.render('courses/create')
    }

    //[Post] /courses/store
    store(req, res, next) {
        const formData = req.body;
        formData.image = `https://i.ytimg.com/vi/${req.body.videoId}/maxresdefault.jpg`
        const course = new Course(formData)
        course.save()
        .then(()=>res.redirect('/'))
        .catch()

    }

    //[GET] /course/:id/edit
    edit(req, res, next) {
        Course.findById(req.params.id).lean()
        .then(
           
            (course ) => {
                console.log("khoa hoc", course)
                res.render('courses/edit',{course})}

        )
        .catch(next)
        
    }


}

module.exports = new CourseController
