const checkFormatEmail = (email: string) => {
  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regexEmail.test(email);
};
export default checkFormatEmail;
