import User from '../../models/auth.model'
import { SignUpInputType } from './auth.type'
import { useHashPassword } from '@/utils/hashpass'

const { hashPassword } = useHashPassword();
export const signUp = async (data: SignUpInputType) => {

    const findTheUser = await User.findOne({email:data.email})

    if (findTheUser) {
        throw new Error("User already exists");
    }
    const hashedPass = await hashPassword(data.password as string);

    const userCreated = await User.create({
        name: data.name,
        password: hashedPass,
        email:data.email
    })

    return userCreated;
}