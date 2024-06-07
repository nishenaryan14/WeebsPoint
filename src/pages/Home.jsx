import { useEffect, useState } from "react";
import "../App.css";
import AnimeCard from "../components/AnimeCard";
import AnimePlot from "../components/AnimePlot";
import search from "../search.svg";
import { getAnime } from "../apiCalls";
import { Box, Container, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";

//styling for home page
const homeStyles = {
  layout: {
    padding: "4.4rem 3rem 3rem",
    display: "flex",
    justifyContent: " center",
    alignItems: "center",
    flexDirection: "column",
  },
  container: {
    width: "100%",
    marginTop: "3rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
  search: {
    width: "71%",
    minWidth: "375px",
    margin: "4rem 0 2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "1.5rem 1.75rem",
    borderRadius: "3rem",
    background: "#1f2123",
    WebkitBoxShadow: "5px 5px 7px #1c1d1f, -5px -5px 7px #222527",
    boxShadow: "5px 5px 7px #1c1d1f, -5px -5px 7px #222527",
  },
};

const Home = () => {
  const [animes, setAnimes] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedAnime, setSelectedAnime] = useState(null);
  const theme = useTheme();

  // mounting the initial search
  useEffect(() => {
    (async () => {
      const initialAnimes = await getAnime("");
      setAnimes(initialAnimes);
    })();
  }, []);

  // search logic
  const handleSearch = async () => {
    const searchedAnimes = await getAnime(searchTerm);
    setAnimes(searchedAnimes);
  };

  const handleCardClick = (anime) => {
    setSelectedAnime(anime);
    console.log(anime);
  };

  const handleCloseAnime = () => {
    setSelectedAnime(null);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <Container sx={homeStyles.layout}>
      <Typography variant="h1" sx={theme.typography.h1}>
        WeebsPoint
      </Typography>

      {/* for displaying the plot on card click  */}

      {selectedAnime ? (
        <AnimePlot anime={selectedAnime} onClose={handleCloseAnime} />
      ) : (
        <>
          {/* search bar */}
          <Box sx={homeStyles.search}>
            <input
              type="text"
              className="searchInput"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for Animes"
              onKeyDown={handleKeyDown}
            />
            <button type="submit" onClick={handleSearch}>
              <img src={search} alt="search-icon" />
            </button>
          </Box>
          {animes?.length > 0 ? (
            // card container

            <Box sx={homeStyles.container}>
              {animes.map((anime) => (
                <div key={anime._id}>
                  {/* card component */}

                  <AnimeCard
                    anime={anime}
                    onClick={() => handleCardClick(anime)}
                  />
                </div>
              ))}
            </Box>
          ) : (
            <div>
              <Typography sx={theme.typography.h3}>No anime found</Typography>
            </div>
          )}
        </>
      )}
    </Container>
  );
};

export default Home;
