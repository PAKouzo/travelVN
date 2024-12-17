import * as bcrypt from 'bcrypt';

const passwordHashing = async (password: string) => {
  return await bcrypt.hash(password, 10);
};

export default passwordHashing;
