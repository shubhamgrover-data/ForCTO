import { Router } from 'express';

const router = Router();

router.get('/search', (req, res) => {
  res.json({ message: 'Stock search' });
});

router.get('/:id', (req, res) => {
  res.json({ message: `Stock detail for ${req.params.id}` });
});

export default router;
