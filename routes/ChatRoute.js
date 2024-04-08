const express = require('express');
const {createChatNew, createChat, findChat, userChats } = require('../controllers/ChatController.js');
const router = express.Router()

router.post('/', createChat);
router.post('/newChat', createChatNew);
router.get('/:userId', userChats);
router.get('/find/:firstId/:secondId', findChat);

module.exports = router; 