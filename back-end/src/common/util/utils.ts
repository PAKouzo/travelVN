import * as bcrypt from 'bcrypt';

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
