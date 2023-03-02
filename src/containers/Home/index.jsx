import React, { useState } from "react";
import {
  Box,
  TextField,
  Checkbox,
  Divider,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import ExternalLinkIcon from "../../assets/icons/externalLink.png";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import "./index.css";

const Home = () => {
  const [showPasswordInput, setShowPasswordInput] = React.useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleLoading = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowPasswordInput(true);
    }, 5000);
  };

  return (
    <Box className="homePage">
      <Box className="signInHeader">Sign in to Apple Developer</Box>
      <Box className="signInInputFields">
        <TextField
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleLoading();
            }
          }}
          InputProps={{
            style: {
              borderRadius: !showPasswordInput
                ? "12px 12px 12px 12px"
                : "12px 12px 0 0",
            },
            disableUnderline: true,
            endAdornment: (
              <InputAdornment
                sx={{
                  position: "absolute",
                  right: "30px",
                  top: isFocused ? "40px" : null,
                }}
                position="end"
              >
                <IconButton
                  onClick={handleLoading}
                  aria-label="toggle password visibility"
                  // onClick={handleClickShowPassword}
                  // onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPasswordInput ? null : isLoading ? (
                    <img
                      width={"35px"}
                      src={require("../../assets/icons/loading.gif")}
                      alt=""
                      srcset=""
                    />
                  ) : (
                    <ArrowCircleRightOutlinedIcon />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
          inputProps={{
            type: "email",
            style: {
              borderRadius: !showPasswordInput
                ? "12px 12px 12px 12px"
                : "12px 12px 0 0",
            },
          }}
          disableUnderline={true}
          id="filled-basic"
          label="Apple ID"
          variant="filled"
        />
        {showPasswordInput && (
          <TextField
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleLoading();
              }
            }}
            InputProps={{
              style: { borderRadius: "0 0 12px 12px" },
              disableUnderline: true,
              endAdornment: (
                <InputAdornment
                  sx={{
                    position: "absolute",
                    right: "30px",
                    top: isFocused ? "40px" : null,
                  }}
                  position="end"
                >
                  <IconButton
                    onClick={handleLoading}
                    aria-label="toggle password visibility"
                    // onClick={handleClickShowPassword}
                    // onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {!showPasswordInput ? null : isLoading ? (
                      <img
                        width={"35px"}
                        src={require("../../assets/icons/loading.gif")}
                        alt=""
                        srcset=""
                      />
                    ) : (
                      <ArrowCircleRightOutlinedIcon />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            inputProps={{
              type: "password",
              style: { borderRadius: "0 0 12px 12px" },
            }}
            disableUnderline={true}
            id="filled-basic"
            label="password"
            variant="filled"
          />
        )}
      </Box>
      <br />
      <Box className="rememberMeCheck">
        <Checkbox /> Remember me
      </Box>
      <Divider
        sx={{
          width: "328px",
        }}
        light
      />
      <Box className="forgotPasswordLink">
        <Link> Forgotten your Apple ID or password? </Link>
        <img src={ExternalLinkIcon} alt="" srcset="" />
      </Box>
      <Box>
        Do not have an Apple ID? <Link>Create yours now.</Link>
        <img src={ExternalLinkIcon} alt="" srcset="" />
      </Box>
    </Box>
  );
};

export default Home;
