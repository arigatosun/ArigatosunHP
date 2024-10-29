import { Divider, Box, Typography, Container, Link } from '@mui/material'
import React from 'react'
import thootLp from "../../components/images/thoot_lp.png"
import thootMatching from "../../components/images/thoot_matching.png"
import thootShift from "../../components/images/thoot_shift.png"
import BackButton from '../../components/BackButton'

const Tax3 = () => {
  // 基本の画像スタイル
  const baseImageStyle = {
    maxWidth: '100%',
    display: 'block',
    margin: '0 auto',
    width: '820px'
  }

  // thoot_lp用のスタイル
  const lpImageStyle = {
    ...baseImageStyle,
    height: '506px',
    objectFit: 'cover',
    '@media (max-width: 820px)': {
      height: 'auto',
      aspectRatio: '820/506'
    }
  }

  // thoot_matching と thoot_shift 用のスタイル
  const largeImageStyle = {
    ...baseImageStyle,
    height: '506px',
    objectFit: 'cover',
    objectPosition: 'top center',
    mt: 2,
    '@media (max-width: 820px)': {
      height: 'auto',
      aspectRatio: '820/506'
    }
  }

  return (
    <Container 
      sx={{ 
        maxWidth: "820px !important", 
        margin: "auto", 
        alignItems: "flex-end", 
        letterSpacing: "0.18em", 
        mt: 5, 
        p: "24px",
        pr: "0 !important", 
        pl: "0 !important" 
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
          歯科医&歯科衛生士マッチングサービス「Thoot」スート
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

      <Box sx={{textAlign: "center"}}>
        <Box 
          component="img" 
          src={thootLp} 
          alt="Thoot LP" 
          sx={lpImageStyle}
        />
        <Box 
          component="img" 
          src={thootMatching} 
          alt="Thoot Matching" 
          sx={largeImageStyle}
        />
        <Box 
          component="img" 
          src={thootShift} 
          alt="Thoot Shift" 
          sx={largeImageStyle}
        />
      </Box>

      <Divider sx={{mt: 5, mb: 5, backgroundColor: "black"}}/>
      
      <Box sx={{margin: {xs: "0 20px"}}}>        
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
        <Box sx={{mt: 3, textAlign: "center"}}>
          <BackButton/>
        </Box>
      </Box>
    </Container>
  )
}

export default Tax3