export const fetchAvatars = async () => {
  const response = await fetch("http://localhost:4000/account");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
