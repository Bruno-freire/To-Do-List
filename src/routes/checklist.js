const express = require('express')

const router = express.Router();

const Checklist = require('../models/checklist');
const task = require('../models/task');

router.get('/', async (req,res) => {
  try {
    let checklist = await Checklist.find({});
    res.status(200).render('checklists/index', {checklists: checklist})
  } catch (error) {
    res.status(500).render('pages/error', {error: 'Erro ao exibir as listas'})
  }
})

router.get('/new', async (req,res) => {
  try {
    let checklist = new Checklist();
    res.status(200).render('checklists/new', {checklist: checklist})
  } catch (error) {
    res.status(500).render('pages/error', {errors: 'Erro ao carregar o formulário'})
  }
})

router.get('/:id/edit', async (req,res) => {
  try {
    let checklist = await Checklist.findById(req.params.id);
    res.status(200).render('checklists/edit', {checklist: checklist})
  } catch (error) {
    res.status(500).render('pages/error', {error: 'Erro ao exibir a edição da lista de tarefa'})  
  }
})

router.post('/', async (req,res) => {
  let {name} = req.body.checklist
  let checklist = new Checklist({name})
  try {
    await checklist.save()
    res.redirect('/checklist')
  } catch (error) {
    res.status(422).render('checklists/new', {checklists: {...checklist,error}})
  }
})

router.get('/:id', async (req,res) => {
  try {
    let checklist = await Checklist.findById(req.params.id).populate('task');
    res.status(200).render('checklists/show', {checklist: checklist})
  } catch (error) {
    res.status(500).render('pages/error', {error: 'Erro ao exibir as listas'})  
  }
})

router.put('/:id', async (req,res) => {
  let {name} = req.body.checklist;
  let checklist = await Checklist.findById(req.params.id)
  try {
    await checklist.updateOne({name})
    res.redirect('/checklist')
  } catch (error) {
    let errors = error.errors
    res.status(422).render('checklists/edit', {checklist: {...checklist, errors}})
  }
})

router.delete('/:id', async (req,res) => {
  try {
    let checklist = await Checklist.findByIdAndRemove(req.params.id)
    res.redirect('/checklist')
  } catch (error) {
    res.status(500).render('pages/error', {error: 'Erro ao deletar a lista de tarefas'})  
  }
})

module.exports = router