import React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@emotion/react";
import { Typography } from "@mui/material";

const AnimeCard = ({ anime, onClick }) => {
  const { _id, image, title, genres } = anime;
  const placeholderImage = "https://via.placeholder.com/400";
  const theme = useTheme();

  return (
    <Box key={_id} onClick={() => onClick(anime)} sx={cardStyles.container}>
      <Box
        component="img"
        src={image !== "N/A" ? image : placeholderImage}
        alt={`Cover of ${title}`}
        sx={cardStyles.image}
      />
      <Box sx={cardStyles.details}>
        <Typography sx={theme.typography.span}>{genres}</Typography>
        <Typography sx={theme.typography.h3}>{title}</Typography>
      </Box>
    </Box>
  );
};

const cardStyles = {
  container: {
    width: "310px",
    height: "420px",
    margin: "1.5rem",
    position: "relative",
    borderRadius: "12px",
    overflow: "hidden",
    border: "none",
    transition: "all 0.4s cubic-bezier(0.175, 0.885, 0, 1)",
    boxShadow: "0px 13px 10px -7px rgba(0, 0, 0, 0.1)",
    filter: "saturate(150%)",
    cursor: "pointer",
    "&:hover": {
      boxShadow: "0px 30px 18px -8px rgba(0, 0, 0, 0.1)",
      transform: "scale(1.05)",
    },
  },
  image: {
    width: "100%",
    height: "70%",
    objectPosition: "center",
    objectFit: "cover",
  },
  details: {
    padding: "1rem",
    background: "#001427",
    height: "30%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
};

export default AnimeCard;
