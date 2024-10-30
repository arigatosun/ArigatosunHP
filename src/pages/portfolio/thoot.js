import { Divider, Box, Typography, Container, Link } from '@mui/material'
import React from 'react'
import thootLp from "../../components/images/thoot_lp.png"
import thootMatching from "../../components/images/thoot_matching.png"
import thootShift from "../../components/images/thoot_shift.png"
import BackButton from '../../components/BackButton'

const Thoot = () => {
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
          href="wasshoi"
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
    textAlign: { xs: "center" }, // 中央揃えを追加
    color: '#FFFFFF'
  }}
>
          歯科医&歯科衛生士マッチングサービス「Thoot」スート
        </Typography>
        <Link
          href="nest"
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
            '& > .main-image': {
              width: { xs: '100%', md: '820px' },
              height: { xs: 'auto', md: '506px' },
              transition: 'width 0.3s, height 0.3s',
              display: 'block',
              margin: '0 auto',
              objectFit: { xs: 'contain', md: 'cover' },
              objectPosition: 'top center'
            }
          }}
        >
          <Box 
            className="main-image" 
            component="img" 
            src={thootLp} 
            alt="Thoot LP" 
          />
          <Box 
            className="main-image" 
            component="img" 
            src={thootMatching} 
            alt="Thoot Matching"
            sx={{ mt: 2 }}
          />
          <Box 
            className="main-image" 
            component="img" 
            src={thootShift} 
            alt="Thoot Shift"
            sx={{ mt: 2 }}
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
          歯科医&歯科衛生士マッチングサービス「Thoot」スート
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
          ・Webサービス開発（フロントエンド・バックエンド）<br/>
          ・UIデザイン<br/>
          ・UXデザイン<br/>
          ・Landing page design
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
          <br/>Link
        </Typography>
        <Link 
          href="https://www.thoot.jp/" 
          sx={{
            color: '#FFFFFF',
            '&:hover': {
              opacity: 0.7
            }
          }}
        >
          https://www.thoot.jp/
        </Link>
        <Box sx={{ mt: 3, textAlign: "center" }}>
          <BackButton/>
        </Box>
      </Box>
    </Container>
  )
}

export default Thoot