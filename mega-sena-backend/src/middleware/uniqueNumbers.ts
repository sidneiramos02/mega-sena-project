import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

const uniqueNumbers = (req: Request, res: Response, next: NextFunction) => {
    const { numeros } = req.body;

    const schema = Joi.array()
        .items(Joi.number().required())
        .unique()
        .messages({
            'array.unique': 'Os números devem ser únicos.'
        });

    const { error } = schema.validate(numeros);

    if (error) {
        return res.status(400).json({ error: error.message });
    }

    next();
};

export default uniqueNumbers;
