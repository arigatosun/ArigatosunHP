import * as React from 'react';
import { Button } from '@mui/material';
import { Link, useHistory, useLocation } from "react-router-dom";
import { PageTransition } from '@steveeeie/react-page-transition';

const BackButton = () => {
  const history = useHistory();
  const location = useLocation();
  
  const handleBack = (e) => {
    e.preventDefault();
    // アニメーション後に遷移
    setTimeout(() => {
      history.push('/home');
    }, 300); // アニメーション時間
  };

  return (
    <PageTransition
      preset="moveToLeftFromRight"
      transitionKey={location.pathname}
      enterAnimation={{
        name: "moveFromRight",
        duration: 300,
        delay: 0,
        timing: "ease-in-out"
      }}
      exitAnimation={{
        name: "moveToLeft",
        duration: 300,
        delay: 0,
        timing: "ease-in-out"
      }}
    >
      <Link to="/home" onClick={handleBack}>
        <Button
          variant="outlined"
          sx={{
            borderColor: "#FFFFFF !important",
            color: "#FFFFFF !important",
            minWidth: {xs: 200, md: 150},
            mb: {xs: 5, md: 0}
          }}
        >
          back
        </Button>
      </Link>
    </PageTransition>
  );
};

export default BackButton;