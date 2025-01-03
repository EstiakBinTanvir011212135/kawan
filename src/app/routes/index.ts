import { Router } from 'express';
import { UserRouters } from '../modules/user/user.route';
import { HealthRouters } from '../modules/healthAndNutrition/healthAndNutrition.route';
import { HabitRoutes } from '../modules/habit/habit.route';
import { ChatRoutes } from '../modules/chats/chat.route';
import path from 'path';
import { EBookRouters } from '../modules/EBook/EBook.route';
import { ReadBookRoute } from '../modules/ReadBooks/ReadBooks.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/user',
    route: UserRouters,
  },

  {
    path: '/health',
    route: HealthRouters,
  },

  {
    path: '/habit',
    route: HabitRoutes,
  },

  {
    path: '/chat',
    route: ChatRoutes,
  },
  {
    path: '/ebook',
    route: EBookRouters,
  },
  {
    path: '/readBook',
    route: ReadBookRoute,
  },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
