import React from "react";
import "../App.css";
import close from "../close.svg";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
const AnimePlot = ({ anime, onClose }) => {
  const { image, title, type, genres, episodes, synopsis, status, link } =
    anime;
  const theme = useTheme();
  return (
    // Brief plot about the anime
    <Box className="plot-card">
      <Typography sx={theme.typography.h3}>AnimePlot</Typography>
      <button className="btn" onClick={onClose}>
        <img src={close} alt="" className="btn-close" />
      </button>
      <Box className="plot-card-upper">
        <Box className="plot-img">
          <img src={image} alt={title} className="" />
          <Box className="plot-details-minor">
            <h3>Title:{title}</h3>
            <br />
            <h4>Type:{type}</h4>
            <h4>Episodes:{episodes}</h4>
          </Box>
        </Box>
        <Box>
          <Box className="plot-details-major">
            <h3>
              Plot/Synopsis: <span className="synopsis">{synopsis}</span>
            </h3>
          </Box>
          <Box className="plot-details-more">
            <h5>
              Status:<span className="span">{status}</span>
            </h5>
            <h5>
              Genres:<span className="span">{genres}</span>
            </h5>
            <h4>
              Get More Details Here:<a href={link}>LINK</a>
            </h4>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default AnimePlot;
