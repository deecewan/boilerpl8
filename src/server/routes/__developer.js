import fs from 'fs';
import path from 'path';
import { Router } from 'express';

const router = new Router();

router.get('/', (req, res) => {
  const developerDetails = {};
  developerDetails.branch = fs.readFileSync(path.resolve('.git', 'HEAD'))
    .toString().replace('ref: refs/heads/', '').trim();
  res.status(200).json(developerDetails);
});

export default router;
