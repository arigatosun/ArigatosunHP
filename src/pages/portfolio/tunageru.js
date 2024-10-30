import { Divider, Box, Typography, Container, Link } from '@mui/material'
import React from 'react'
import tunageruLp from "../../components/images/tunageru_logo.png"
import tunageruone from "../../components/images/tunageru_1.png"
import tunagerusecond from "../../components/images/tunageru_2.png"
import BackButton from '../../components/BackButton'

const Tunageru = () => {
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
           AIによる自動インタビューシステム「TUNAGERU CHAT」
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
      '& img': {  // すべての画像に適用される基本スタイル
        width: { xs: '100%', md: '820px' },
        height: { xs: 'auto', md: '506px' },
        transition: 'width 0.3s, height 0.3s',
        display: 'block',
        margin: '0 auto',
        objectFit: { xs: 'contain', md: 'cover' },
        objectPosition: 'top center'
      },
      '& img + img': {  // 2番目以降の画像に適用される余白
        marginTop: '16px'
      }
    }}
  >
    <Box 
      component="img" 
      src={tunageruLp} 
      alt="tunageru logo" 
    />
    <Box 
      component="img" 
      src={tunageruone} 
      alt="tunageru one"
    />
    <Box 
      component="img" 
      src={tunagerusecond} 
      alt="tunageru second"
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
          AIによる自動インタビューシステム「TUNAGERU CHAT」
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
          ・AIエンジンによる自動質問生成システム<br/>
          ・音声認識・AI機能開発<br/>
          ・ユーザー管理システム開発
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
          href="https://www.tu-na-ge-ru.com/chat" 
          sx={{
            color: '#FFFFFF',
            '&:hover': {
              opacity: 0.7
            }
          }}
        >
          https://www.tu-na-ge-ru.com/chat
        </Link>
        <Box sx={{ mt: 3, textAlign: "center" }}>
          <BackButton/>
        </Box>
      </Box>
    </Container>
  )
}

export default Tunageru