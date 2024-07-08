import { Request, Response, NextFunction } from 'express';
import { CreateVandorInput } from '../dto';
import { Vandor } from '../models';
import { GeneratePassword, GenerateSalt } from '../utility';

export const CreateVandor = async (req: Request, res: Response, next: NextFunction) => {
    const { name, ownerName, foodType, pinCode, address, phone, email, password } = <CreateVandorInput>req.body;

    const existingVandor = await Vandor.findOne({ email });

    if (existingVandor !== null) {
        return res.json({
            "message": `A vandor exists with this email: ${email}`
        });
    }

    const salt  = await GenerateSalt();
    const secret = await GeneratePassword(password, salt)

    const createdVandor = await Vandor.create({
        name,
        ownerName,
        foodType,
        pinCode,
        address,
        email,
        phone,
        password: secret,
        salt,
        rating: 0,
        coverImages: [],
        serviceAvailability: false
    })

    res.json(createdVandor);
};

export const getVandors = async (req: Request, res: Response, next: NextFunction) => { };
export const getVandorByID = async (req: Request, res: Response, next: NextFunction) => { };