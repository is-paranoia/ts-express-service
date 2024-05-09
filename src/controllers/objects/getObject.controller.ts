import { Request, Response } from 'express';

const getObject = (req: Request, res: Response) => {
  res.send('Hello World!');
};

export default getObject;