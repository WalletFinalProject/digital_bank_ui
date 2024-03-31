export const getAccountbyId = async (userId) => {
  const response = await fetch("http://localhost:4000/account/" + userId);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
