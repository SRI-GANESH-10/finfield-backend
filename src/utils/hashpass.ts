import bcrypt from 'bcrypt'

const SALT_ROUNDS = 10

export const useHashPassword = () => {
    const hashPassword = async (password: string) => {
        return bcrypt.hash(password, SALT_ROUNDS)
    }

    const comparePassword = async (password: string, hashedPassword: string): Promise<boolean> => {
        return bcrypt.compare(password, hashedPassword);
    }

    return { hashPassword, comparePassword }
}
