import * as React from 'react';
import { Button } from '@mui/material';
import { Link } from "react-router-dom";

const BackButton = () => {
  
    return (
        <Link to="/home">
        <Button
            variant="outlined"
            sx={{
              borderColor: "#FFFFFF !important",
              color: "#FFFFFF !important",
              minWidth: {xs: 200, md: 150},
              mb: {xs: 5, md: 0}
            }}
            
            className="moveToLeftFromRight"
          >
            back
          </Button>
          </Link>
  )
}

export default BackButton

        