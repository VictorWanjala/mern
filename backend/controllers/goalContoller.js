const asyncHandler = require('express-async-handler')

const Goal = require('../models/goalModel')
//@desc Get goals
//@route GET/api/goals
//@access private

const getGoals = asyncHandler(async (req,res) => {
    const goals = await Goal.find()
    res.status(200).json(goals)
})

//@desc set goal
//@route POST/api/goals
//@access private

const setGoal = asyncHandler(async (req,res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('please add atext field')
    }
    const goal = await Goal.create({
        text: req.body.text
    })
    res.status(200).json(goal)
})

//@desc update goal
//@route PUT/api/goals/:id
//@access private

const updateGoal = asyncHandler(async (req,res) => {
    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body,{new:true})
    res.status(200).json(updatedGoal)
})

//@desc delete goals
//@route DELETE/api/goals
//@access private

const deleteGoal = asyncHandler(async (req,res) => {
    const goal = await Goal.findById(req.params.id)

    const deletedGoal = await Goal.findByIdAndDelete(req.params.id)
    res.status(200).json({message: `Deleted goal ${req.params.id}`})
})


module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
}