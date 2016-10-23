import { Router } from 'express';
import Database from '../models';

const db = new Database();
const router = new Router();

router.get('/', async (req, res) => {
  const users = await db.models.User.findAll();
  return res.status(200).json(users);
});

router.get('/:id', async (req, res) => {
  const user = await db.models.User.find({
    where: {
      id: req.params.id,
    },
  });
  return res.status(200).json(user);
});

router.put('/:id', async (req, res) => {
  const user = db.models.User.update(req.body, {
    where: {
      id: req.params.id,
    },
    returning: true,
  });
  return res.status(200).json(user);
});

router.post('/', async (req, res) => {
  const user = await db.models.User.create(req.body, {
    returning: true,
  });
  return res.status(200).json(user);
});

router.delete('/:id', async (req, res) => {
  await db.models.User.delete({
    where: {
      id: req.params.id,
    },
  });
  return res.sendStatus(204);
});

export default router;
