const express = require('express')

const router = express.Router();

const Checklist = require('../models/checklist');

router.get('/', async (req,res) => {
  try {
    let checklist = await Checklist.find({});
    console.log(checklist)
    res.status(200).render('checklists/index', {checklists: checklist})
  } catch (error) {
    res.status(500).render('pages/error', {error: 'Erro ao exibir as listas'})
  }
})

router.post('/', async (req,res) => {
  let {name} = req.body

  try {
    let checklist = await Checklist.create({name})
    res.status(200).json(checklist)
  } catch (error) {
    console.log(error.message)
    res.status(422).json(error.message)
  }

})

router.get('/:id', async (req,res) => {
  try {
    let checklist = await Checklist.findById(req.params.id);
    console.log(checklist)
    res.status(200).render('checklists/show', {checklist: checklist})
  } catch (error) {
    res.status(500).render('pages/error', {error: 'Erro ao exibir as listas de tarefas'})
  }
})

router.put('/:id', async (req,res) => {
  let {name} = req.body
  try {
    let checklist = await Checklist.findByIdAndUpdate(req.params.id, {name}, {new: true})
    res.status(200).json(checklist)
  } catch (error) {
    res.status(422).json(error.message)
  }
})

router.delete('/:id', async (req,res) => {
  try {
    let checklist = await Checklist.findByIdAndRemove(req.params.id)
    res.status(200).json(checklist)
  } catch (error) {
    res.status(422).json(error.message)
  }
})

module.exports = router