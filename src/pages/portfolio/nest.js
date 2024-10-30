import { Divider, Box, Typography, Container, Link } from '@mui/material'
import React from 'react'
import NestMain from "../../components/images/nest_1.png"
import NestSecond from "../../components/images/nest_2.png"
import NestThird from "../../components/images/nest_3.png"
import BackButton from '../../components/BackButton'

const Nest = () => {
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
          href="thoot"
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
          「NEST琵琶湖」ホームページリニューアル＆アフィリエイトシステム開発
        </Typography>
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
        objectPosition: 'top center',
        marginTop: '16px'  // すべての画像に適用される基本的な余白
      },
      '& > .main-image:first-of-type': {
        marginTop: 0  // 最初の画像の余白をリセット
      }
    }}
  >
    <Box 
      className="main-image" 
      component="img" 
      src={NestMain} 
      alt="Nest Main" 
    />
    <Box 
      className="main-image" 
      component="img" 
      src={NestSecond} 
      alt="Nest Second"
      sx={{ mt: 2 }}  // 8px の余白を追加
    />
    <Box 
      className="main-image" 
      component="img" 
      src={NestThird} 
      alt="Nest Third"
      sx={{ mt: 2 }}  // 8px の余白を追加
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
           「NEST琵琶湖」ホームページリニューアル＆アフィリエイトシステム開発
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
          ・ホームページ制作（フロントエンド・バックエンド）<br/>
          ・アフィリエイトシステム開発<br/>
          ・UI/UXデザイン<br/>
          ・予約管理機能開発
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
          href="https://www.nest-biwako.com/" 
          sx={{
            color: '#FFFFFF',
            '&:hover': {
              opacity: 0.7
            }
          }}
        >
          https://www.nest-biwako.com/
        </Link>
        <Box sx={{ mt: 3, textAlign: "center" }}>
          <BackButton/>
        </Box>
      </Box>
    </Container>
  )
}

export default Nest