import React, { useContext, useState } from "react";
import { EventValues } from "../context/context";
import { Container} from "./styles";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

function ThemeMode() {
  const { toggleTheme, mode } = useContext(EventValues);
  return (
    <Container>
      <IconButton
        sx={{ ml: 1 }}
        onClick={(e) => {
          toggleTheme(mode);
        }}
        color="inherit"
      >
        {mode === false || mode === "false" ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
    </Container>
  );
}

export default ThemeMode;
