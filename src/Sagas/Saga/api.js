export const fetchData = async () => {
  try {
    const response = await fetch("https://my-react-app-f0b0a.firebaseio.com/results.json");
    const data = await response.json();
    console.log(data);
    return data;
    
  } catch (e) {
    console.log(e);
  }
};
