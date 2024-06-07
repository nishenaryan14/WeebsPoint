export const getAnime = async (title) => {
  const url = `https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=${title}&genres=Fantasy%2CDrama&sortBy=ranking&sortOrder=asc`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "6ccf7c21dfmsh8f7a973ba6fe1d3p195e15jsn44ec9b937dba",
      "X-RapidAPI-Host": "anime-db.p.rapidapi.com",
    },
  };
  const response = await fetch(url, options);
  if (!response.ok) {
    console.log("error is there in fetching data!");
    return [];
  }
  try {
    const result = await response.json();
    console.log(result);
    return result.data || [];
  } catch (error) {
    console.error(error);
    return [];
  }
};
