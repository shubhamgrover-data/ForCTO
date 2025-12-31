import { Router } from 'express';

const router = Router();

router.get('/:id', (req, res) => {
  res.json({ message: `Company metadata for ${req.params.id}` });
});

export default router;
