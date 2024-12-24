import express from 'express';
import { ChatController } from './chat.controller';

const route = express.Router();

route.post('/create-chat', ChatController.createChat);

// route.get('/', ChatController);

// route.get('/:id', ChatController);

// route.patch('/:id', ChatController);

// route.put('/:id/:habitId', ChatController);

export const ChatRoutes = route;
