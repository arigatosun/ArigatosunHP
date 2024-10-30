import { Divider, Box, Typography, Container, Link } from '@mui/material'
import { React, useEffect } from 'react'
import tax3Img1 from "../../components/images/tax3_1.png"
import tax3Img2 from "../../components/images/tax3_2.png"
import tax3Img3 from "../../components/images/tax3_3.png"
import tax3Img4 from "../../components/images/tax3_4.png"
import tax3Gif from "../../components/images/tax3.gif"
import tax3logo from "../../components/images/tax3_logo.png"
import BackButton from '../../components/BackButton'
import useLocationChange from '../../components/useLocationChange.ts'

const Tax3 = () => {
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
        <Typography
          variant="p"
          sx={{
            fontFamily: "Inter",
            fontWeight: 600,
            fontSize: { xs: "12px", md: 16 },
            color: '#FFFFFF'
          }}
        >
          暗号資産専門税理士サービス/TAX3.0
        </Typography>
        <Link
          href="bubbic"
          sx={{
            fontFamily: "Kanit",
            fontWeight: 600,
            textDecoration: "none",
            color: '#FFFFFF',
            fontSize: { xs: "12px", md: 16 },
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
        {/* メイン画像のコンテナ */}
        <Box 
          sx={{
            '& > .main-image': {
              width: { xs: '100%', md: '820px' },
              height: { xs: 'auto', md: '506px' },
              transition: 'width 0.3s, height 0.3s'
            },
            '& > .logo-image': {
              width: 'auto',  // ロゴ画像は元のサイズを維持
              height: 'auto'
            }
          }}
        >
          <Box className="main-image" component="img" src={tax3Img1} />
          <Box className="main-image" sx={{ mt: 2 }} component="img" src={tax3Img2} />
          <Box className="main-image" sx={{ mt: 2 }} component="img" src={tax3Img3} />
          <Box className="main-image" sx={{ mt: 2 }} component="img" src={tax3Img4} />
          <Box className="main-image" sx={{ mt: 2 }} component="img" src={tax3Gif} />
          <Box className="logo-image" sx={{ mt: 2 }} component="img" src={tax3logo} />
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
          暗号資産専門税理士サービス/TAX3.0
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
          <br /><br />
          ・Logo design<br />
          ・Landing page design<br />
          ・mascot character 3D design
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
          <br />Link
        </Typography>
        <Link 
          href="https://tax-3.jp/" 
          sx={{
            color: '#FFFFFF',
            '&:hover': {
              opacity: 0.7
            }
          }}
        >
          https://tax-3.jp/
        </Link>
        <Box sx={{ mt: 3, textAlign: "center" }}>
          <BackButton />
        </Box>
      </Box>
    </Container>
  )
}

export default Tax3