import * as bcrypt from 'bcrypt';

export const passwordHashing = async (password: string) => {
  return await bcrypt.hash(password, 10);
};

export const comparePassword = async (
  plainPassword: string,
  hashPassword: string,
) => {
  try {
    return await bcrypt.compare(plainPassword, hashPassword);
  } catch (errors) {
    console.log(errors);
  }
};