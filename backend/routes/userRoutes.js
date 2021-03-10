const express = require('express')
const multer = require('multer')
const mongoose = require('mongoose')
const uuidv4 = require('uuid/v4')
const router = expess.Router()
const User = require('../models/User')

const DIR = '../public'

const storage = multer.diskStorage({
  destination: (req, file, cv) => {
    cb(null, DIR)
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.toLocaleLowerCase().split( ).join('-')
    cb(null, uuidv4() + '-' + fileName)
  }
})


const upload = multer.upload({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if(file.mimetype == 'image/png' || file.mimetype == 'image/jpg' || file.mimetype == 'image/jpeg') {
      cb(null, true)
    }
    else {
      cb(null, false) {
        return cb(new Error('Only .png, .jpg and .jpeg formats are allowed'))
      }
    }
  }
})


router.post('/upload-images', upload.array('imgCollection', 6), (req, res, next) => {
  const reqFiles = []
  const url = req.protocol + '://' + req.get('host')
  for(let i=0; i<req.files.length; i++) {
    reqFiles.push(url + '/public/' + req.files[i].filename)
  }

  const user = new User({
    __id: new mongoose.Types.ObjectId(),
    imgCollection: reqFiles
  })

  user.save().then(result => {
    
  })






})