import { Divider, Box, Typography, Container, Link } from '@mui/material'
import React from 'react'
import movanage1 from "../../components/images/movanage1.png"
import movanage2 from "../../components/images/movanage2.png"
import movanage3 from "../../components/images/movanage3.png"
import BackButton from '../../components/BackButton'

const Mobanage = () => {
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
          href="keio"
          sx={{
            fontFamily: "Kanit",
            fontWeight: 600,
            textDecoration: "none",
            color: '#FFFFFF',
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
            textAlign: "right",
            color: '#FFFFFF',
            marginLeft: "auto",
            paddingRight: "20px"
          }}
        >
          Mobanage LP Design & Coding
        </Typography>
      </div>

      <Box 
        sx={{ 
          textAlign: "center",
          overflowX: { xs: 'hidden', md: 'visible' }
        }}
      >
        <Box 
          sx={{
            '& img': {
              width: { xs: '100%', md: '820px' },
              height: { xs: 'auto', md: '506px' },
              transition: 'width 0.3s, height 0.3s',
              display: 'block',
              margin: '0 auto',
              objectFit: { xs: 'contain', md: 'cover' },
              objectPosition: 'top center'
            },
            '& img + img': {
              marginTop: '16px'
            }
          }}
        >
          <Box 
            component="img" 
            src={movanage1} 
            alt="mobanage service overview" 
          />
          <Box 
            component="img" 
            src={movanage2} 
            alt="mobanage service features"
          />
          <Box 
            component="img" 
            src={movanage3} 
            alt="mobanage service details"
          />
        </Box>
      </Box>

      <Divider sx={{ mt: 5, mb: 5, backgroundColor: "#FFFFFF" }}/>
      
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
          Mobanage LP Design & Coding
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
          <br/><br/>
          ・Wearable Digital Signage Service LP<br/>
          ・Responsive Design Implementation<br/>
          ・Visual Content Optimization<br/>
          ・User Experience Enhancement<br/>
          ・Service Feature Showcase
        </Typography>
        
        <Box sx={{ mt: 3, textAlign: "center" }}>
          <BackButton/>
        </Box>
      </Box>
    </Container>
  )
}

export default Mobanage