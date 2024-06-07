import express, { Router, Request, Response } from 'express';

const router: Router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.send('Hello World api route' + req.__({ key: req.__key.general_fail }));
});

export default router;