import React, { useState } from "react";
import  SideBar  from "./components/SideBar";
import  Feed  from  "./components/Feed";
import  RightBar  from "./components/RightBar";
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import Navbar from "./components/Navbar";
import Add from "./components/Add";

function App() {

  const [mode,setMode] = useState(localStorage.getItem('mode'));

  const darkTheme = createTheme({
    palette: {
      mode:mode
    }
  });


  return (
  <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={'text.primary'}>
        <Navbar />
        <Stack  direction='row' spacing={2} justify-content ="space-between">
        <SideBar setMode={setMode} />
        <Feed />
        <RightBar />
        </Stack>
        <Add />
      </Box>
  </ThemeProvider>

  );
}

export default App;
