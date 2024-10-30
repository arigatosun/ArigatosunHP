import { Divider, Box, Typography, Container, Link, Grid } from "@mui/material";
import { React, useEffect } from "react";
import bubbicImg1 from "../../components/images/bubbic_1.png";
import bubbicImg2 from "../../components/images/bubbic_2.png";
import bubbicImg3 from "../../components/images/bubbic_3.png";
import bubbicImg4 from "../../components/images/bubbic_4.png";
import bubbiclogo from "../../components/images/bubbic_logo.png";
import BackButton from "../../components/BackButton";
import useLocationChange from "../../components/useLocationChange.ts";

const Bubbic = () => {
  useEffect(() => {
    const htmlElement = document.documentElement;
    const bodyElement = document.body;
    const rootElement = document.getElementById("root");

    const prevHtmlOverflow = htmlElement.style.overflow;
    const prevBodyOverflow = bodyElement.style.overflow;
    const prevRootOverflow = rootElement ? rootElement.style.overflow : null;

    htmlElement.style.overflow = "visible";
    bodyElement.style.overflow = "visible";
    if (rootElement) {
      rootElement.style.overflow = "visible";
    }

    return () => {
      htmlElement.style.overflow = prevHtmlOverflow;
      bodyElement.style.overflow = prevBodyOverflow;
      if (rootElement) {
        rootElement.style.overflow = prevRootOverflow;
      }
    };
  }, []);
  
  useLocationChange((location) => {
    const removeOverflowHidden = (className) => {
      const elements = document.getElementsByClassName(className);
      
      for (let i = 0; i < elements.length; i++) {
        elements[i].style.overflow = 'visible';
      }
    };
    
    removeOverflowHidden('sc-beqWaB hPGFqH');
    removeOverflowHidden('sc-gueYoa xAJSw');
  });

  return (
    <Container
      sx={{
        maxWidth: "820px !important",
        margin: "auto",
        alignItems: "flex-end",
        letterSpacing: "0.18em",
        mt: 5,
        p: { xs: "16px", md: "24px" },
        pr: { xs: "16px", md: "0 !important" },
        pl: { xs: "16px", md: "0 !important" }
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1.5rem"
        }}
      >
        <Link
          href="tax3"
          sx={{
            fontFamily: "Kanit",
            fontWeight: 600,
            textDecoration: "none",
            color: "#FFFFFF",
            fontSize: { xs: "12px", md: 16 },
            whiteSpace: { xs: "nowrap" },
            '&:hover': {
              opacity: 0.7
            }
          }}
        >
          {"<"} Prev
        </Link>
        <Typography
          variant="p"
          sx={{ 
            fontFamily: "Inter", 
            fontWeight: 600,  
            fontSize: { xs: "12px", md: 16 }, 
            textAlign: { xs: "center" },
            color: '#FFFFFF'
          }}
        >
          オリジナルシャンパンブランド<br/>Bubbic
        </Typography>
        <Link
          href="nasty"
          sx={{
            fontFamily: "Kanit",
            fontWeight: 600,
            textDecoration: "none",
            color: "#FFFFFF",
            fontSize: { xs: "12px", md: 16 },
            whiteSpace: { xs: "nowrap" },
            '&:hover': {
              opacity: 0.7
            }
          }}
        >
          Next {">"}
        </Link>
      </div>

      <Box 
        sx={{ 
          textAlign: "center",
          overflowX: { xs: 'hidden', md: 'visible' }
        }}
      >
        <Box 
          sx={{
            '& > .main-image': {
              width: { xs: '100%', md: '820px' },
              height: { xs: 'auto', md: '506px' },
              transition: 'width 0.3s, height 0.3s'
            },
            '& > .logo-image': {
              width: 'auto',
              height: 'auto'
            }
          }}
        >
          <Box className="main-image" component="img" src={bubbicImg1} />
          <Box className="main-image" sx={{ mt: 2 }} component="img" src={bubbicImg2} />
          <Box className="main-image" sx={{ mt: 2 }} component="img" src={bubbicImg3} />
          <Box className="main-image" sx={{ mt: 2 }} component="img" src={bubbicImg4} />
          <Box className="logo-image" sx={{ mt: 2 }} component="img" src={bubbiclogo} />
        </Box>
      </Box>

      <Divider sx={{ mt: 5, mb: 5, backgroundColor: "#FFFFFF" }} />
      
      <Box sx={{ 
        margin: { 
          xs: "0 4px",
          md: "0 20px"
        } 
      }}>        
        <Typography
          variant="p"
          sx={{
            display: "block",
            fontFamily: "Inter",
            fontWeight: 400,
            fontSize: "14px",
            color: '#FFFFFF'
          }}
        >
          オリジナルシャンパンブランド/Bubbic
        </Typography>
        <Typography
          variant="p"
          sx={{
            display: "block",
            fontFamily: "Inter",
            fontWeight: 400,
            fontSize: "14px",
            color: '#FFFFFF'
          }}
        >
          <br />
          <br />
          ・Logo design
          <br />
          ・Landing page design
          <br />
          ・label design
          <br />
          ・Instagram feed design
          <br />
          ・LINE@ design
        </Typography>
        <Typography
          variant="p"
          sx={{
            display: "block",
            fontFamily: "Inter",
            fontWeight: 400,
            fontSize: "14px",
            color: '#FFFFFF'
          }}
        >
          <br />
          Link
        </Typography>
        <Link 
          href="https://bubbic.com/" 
          sx={{ 
            color: '#FFFFFF',
            '&:hover': {
              opacity: 0.7
            }
          }}
        >
          https://bubbic.com/
        </Link>
        <Box sx={{ mt: 3, textAlign: "center" }}>
          <BackButton />
        </Box>
      </Box>
    </Container>
  );
};

export default Bubbic;