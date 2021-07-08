const express = require('express')
const router = express.Router()
const Course = require('../models/course')

// Getting all
router.get('/', async (req, res) => {
  try {
    const courses = await Course.find()
    res.json(courses)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Getting One
router.get('/:id', getCourse, (req, res) => {
  res.json(res.course)
})

// Creating one
router.post('/', async (req, res) => {
  const course = new Course({
    title: req.body.title,
    description: req.body.description
  })
  try {
    const newCourse = await course.save()
    res.status(201).json(newCourse)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Updating One
router.patch('/:id', getCourse, async (req, res) => {
  if (req.body.title != null) {
    res.course.title = req.body.title
  }
  
  try {
    const updatedCourse = await res.course.save()
    res.json(updatedCourse)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Deleting One
router.delete('/:id', getCourse, async (req, res) => {
  try {
    await res.course.remove()
    res.json({ message: 'Deleted course' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

async function getCourse(req, res, next) {
  let course
  try {
    course = await Course.findById(req.params.id)
    if (course == null) {
      return res.status(404).json({ message: 'Cannot find course' })
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }

  res.course = course
  next()
}

module.exports = router