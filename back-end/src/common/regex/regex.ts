export const checkFormatEmail = (email: string) => {
  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regexEmail.test(email);
};

export const checkFormatPhoneNumber = (phoneNumber: string) => {
  const regexPhoneNumber = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
  return regexPhoneNumber.test(phoneNumber);
};

