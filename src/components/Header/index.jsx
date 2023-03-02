import React from "react";
import { Box } from "@mui/material";
import "./index.css";

const Header = () => {
  return (
    <Box>
      <Box className="homePageHeader">
        <img
          src={require("../../assets/icons/appleLogo.png")}
          alt=""
          srcset=""
        />
      </Box>
    </Box>
  );
};

export default Header;
