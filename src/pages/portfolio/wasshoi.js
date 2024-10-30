import { Divider, Box, Typography, Container, Link } from '@mui/material'
import { React, useEffect } from 'react'
import wasshoiImg1 from "../../components/images/wasshoi_1.png"
import wasshoiImg2 from "../../components/images/wasshoi_2.png"
import wasshoiImg3 from "../../components/images/wasshoi_3.png"
import BackButton from '../../components/BackButton'
import useLocationChange from '../../components/useLocationChange.ts'

const Wasshoi = () => {
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
          href="luchia"
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
            color: '#FFFFFF'
          }}
        >
          OFFICE WASSHOI
        </Typography>
        <Link
          href="thoot"
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
            }
          }}
        >
          <Box className="main-image" component="img" src={wasshoiImg1} />
          <Box className="main-image" sx={{ mt: 2 }} component="img" src={wasshoiImg2} />
          <Box className="main-image" sx={{ mt: 2 }} component="img" src={wasshoiImg3} />
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
          OFFICE WASSHOI
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
          DESIGN CONSULTING
          <br /><br />
          ・product design
          <br />
          ・logo design
        </Typography>
        <Box sx={{ mt: 3, textAlign: "center" }}>
          <BackButton />
        </Box>
      </Box>
    </Container>
  )
}

export default Wasshoi