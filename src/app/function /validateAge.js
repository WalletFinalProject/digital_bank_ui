export const validateAge = () => {
  const selectedDate = new Date(formData.birthDate);
  const today = new Date();
  const age = today.getFullYear() - selectedDate.getFullYear();

  if (age < 21) {
    return "Vous devez avoir au moins 21 ans pour ouvrir un compte.";
  }

  return true;
};
