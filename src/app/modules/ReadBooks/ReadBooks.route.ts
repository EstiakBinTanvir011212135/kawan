import express from 'express';
import { ReadBookController } from './ReadBooks.controller';

const route = express.Router();
route.post('/create-readBook', ReadBookController.createReadBook);

export const ReadBookRoute = route;
