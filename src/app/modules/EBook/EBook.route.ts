import express from 'express';
import { EBookController } from './EBook.controller';

const route = express.Router();

route.post('/create-ebook', EBookController.createEbook);

export const EBookRouters = route;
