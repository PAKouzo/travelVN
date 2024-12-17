const checkFormatPhoneNumber = (phoneNumber: string) => {
  const regexPhoneNumber = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
  return regexPhoneNumber.test(phoneNumber);
};
export default checkFormatPhoneNumber;
