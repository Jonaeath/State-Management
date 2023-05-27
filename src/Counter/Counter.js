import { Box, Button, Container, Typography } from "@mui/material";
import React, { useState } from "react";

const class01 = {
    backgroundColor:'gray', border: 1 ,height:'10rem',width:'20rem', marginTop:'10rem'
};

const class02 = {
    backgroundColor: "blue", color: "white"
};

const Counter = () => {
    const [count, setCount] = useState(0)

  return (
    <Box>
      <Container sx={{...class01}}>
        <Typography sx = {{mt:'2rem',paddingLeft:'8rem'}} >
             {count}
        </Typography>
        <Box sx={{marginTop:'2rem'}}>
          <Button onClick={()=> setCount(count + 1 ) }
            sx={{
              ...class02,
              marginRight: "3rem",
            }}
          >
            Increment
          </Button>
          <Button
          onClick={()=> setCount(count - 1 ) } 
          sx={{ ...class02 }}>
            Decrement
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Counter;
