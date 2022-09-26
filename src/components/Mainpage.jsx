import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./mainpage.css";
import {Link} from "react-router-dom"

const Mainpage = () => {

 
  return (
    <>
      <h1 className="inputhead">WE PROVIDE STORY</h1>
      <h1 className="inputhead">BY KEYWORDS</h1>
      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
          display: "flex",
        }}
      >
        <TextField
          fullWidth
          id="fullWidth"
          placeholder="Search By Keywords"
          className="feild"
        />
        <Button
          variant="contained"
          color="primary"
          className="btn"
          // onClick={display()}
        >
        <Link to={"/second"} className="styled" >SEARCH</Link>
          
        </Button>
      </Box>
    </>
  );
};

export default Mainpage;
