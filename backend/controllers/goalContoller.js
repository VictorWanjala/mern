const asyncHandler = require('express-async-handler')

//@desc Get goals
//@route GET/api/goals
//@access private

const getGoals = asyncHandler(async (req,res) => {
    res.status(200).json({message: 'Get goals'})
})

//@desc set goal
//@route POST/api/goals
//@access private

const setGoal = asyncHandler(async (req,res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('please add atext field')
    }
    res.status(200).json({message: 'Set Goals'})
})

//@desc update goal
//@route PUT/api/goals/:id
//@access private

const updateGoal = asyncHandler(async (req,res) => {
    res.status(200).json({message: `Update goal ${req.params.id}`})
})

//@desc delete goals
//@route DELETE/api/goals
//@access private

const deleteGoal = asyncHandler(async (req,res) => {
    res.status(200).json({message: `Delete goal ${req.params.id}`})
})


module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
}