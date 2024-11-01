import { Divider, Box, Typography, Container, Link } from '@mui/material'
import React from 'react'
import keio1 from "../../components/images/keio1.png"
import keio2 from "../../components/images/keio2.png"
import keio3 from "../../components/images/keio3.png"
import BackButton from '../../components/BackButton'

const Keio = () => {
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
          href="tunageru"
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
            textAlign: { xs: "center" },
            color: '#FFFFFF'
          }}
        >
          Keio LP Design & Coding
        </Typography>
        <Link
          href="movanage"
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
            src={keio1} 
            alt="keio first" 
          />
          <Box 
            component="img" 
            src={keio2} 
            alt="keio second"
          />
          <Box 
            component="img" 
            src={keio3} 
            alt="keio third"
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
          Keio LP Design & Coding
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
          ・Responsive Design Development<br/>
          ・Modern UI Implementation<br/>
          ・Animation Development<br/>
          ・Cross-browser Compatibility
        </Typography>
        
        <Box sx={{ mt: 3, textAlign: "center" }}>
          <BackButton/>
        </Box>
      </Box>
    </Container>
  )
}

export default Keio