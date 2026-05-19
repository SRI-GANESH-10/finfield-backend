import User from '../../models/auth.model'
import { loginInputType, SignUpInputType } from './auth.type'
import { useHashPassword } from '../../utils/hashpass'
import { ERROR } from '@/constants/constants';
import  jwt  from 'jsonwebtoken';

const { hashPassword , comparePassword} = useHashPassword();
export const signUp = async (data: SignUpInputType) => {

    const findTheUser = await User.findOne({email:data.email})

    if (findTheUser) {
        throw new Error("User already exists");
    }
    const hashedPass = await hashPassword(data.password);

    const userCreated = await User.create({
        name: data.name,
        password: hashedPass,
        email:data.email
    })

    return userCreated;
}

export const login = async (data:loginInputType) =>{

    const findTheUser = await User.findOne({email:data.email})

    const isMatch = await comparePassword(data?.password , findTheUser?.password || '')

    if(!isMatch){
        throw new Error(ERROR.INVALID_CREDS)
    }
    
    const token = jwt.sign(
        { email : data?.email , name: findTheUser?.name},
        process.env.JWT_SECRET!,
        { expiresIn : '7d'}
    )

    return { user:findTheUser , token}


}