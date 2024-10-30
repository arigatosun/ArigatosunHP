import React from "react";
import { Grid, Typography, Button, Box, Link, useTheme, useMediaQuery, styled } from "@mui/material";
import phone from "../components/images/phone.png";
import BackButton from "../components/BackButton";
import useLocationChange from '../components/useLocationChange.ts';

// カスタムスタイルコンポーネントの作成
const CustomButton = styled(Button)(({ theme }) => ({
  '&.MuiButtonBase-root': {
    textTransform: "uppercase !important",
    minWidth: '150px',
    backgroundColor: "transparent",
    color: "#FFFFFF !important",
    border: "1px solid #FFFFFF !important",
    borderRadius: "30px !important",  // グローバルスタイルに合わせる
    padding: "5px 35px !important",   // グローバルスタイルに合わせる
    fontSize: "14px",
    letterSpacing: "0.5px",
    fontWeight: "400",
    boxShadow: "none",
    transition: "all 0.3s ease",
  },
  '&.MuiButtonBase-root:hover': {
    backgroundColor: "#FFFFFF !important",
    color: "#000000 !important",
    border: "1px solid #FFFFFF !important",
  }
}));

function Contact() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const emailAddress = "t.ryosuke@arigatosun.com";
  const contactText = `依頼に関しまして、メールにてご相談を承っております。
                      下記のメールアドレスまで、ご相談内容をお送りください。
                      1~2営業日で担当者からご返信させていただきます。`;

  return (
    <div>
      <Grid
        container
        spacing={2}
        sx={{ maxWidth: "1536px", margin: "auto", alignItems: "flex-end", padding: "0px 24px", width: "100%" }}
      >
        <Grid item md={6} xs={12} className="pr-16-md center-sm">
          <Typography
            variant="h1"
            sx={{
              fontSize: "64px",
              fontWeight: "600",
              color: "#FFFFFF",
              fontFamily: "Lexend",
            }}
            className="title"
          >
            contact
          </Typography>
          <p style={{ fontSize: "16px", lineHeight: "31px" }} className="display-md">
            {contactText}
            <br />
            <span style={{ fontWeight: "500" }}>Email: {emailAddress}</span>
          </p>
        </Grid>
        <Grid item md={6} xs={12} sx={{ textAlign: "right" }} className="center-sm">
          <img 
            id="phone" 
            src={phone} 
            width={280} 
            alt="phone" 
            style={{ 
              maxWidth: "100%",
              height: "auto"
            }}
          />
        </Grid>
      </Grid>
      <div className="display-sm">
        <p style={{ fontSize: "16px", lineHeight: "31px", textAlign: "left" }} className="descrption-mobile">
          {contactText}
          <br />
          <span style={{ fontWeight: "500" }}>Email: {emailAddress}</span>
        </p>
      </div>
      
      <Grid container sx={{mt:3, mb: 5, flexDirection:{md:"row",sm:"column-reverse", xs:"column-reverse"}}} spacing={3}>
        <Grid item md={6} xs={12}>
          <Box sx={{ textTransform: "uppercase !important", textAlign: {md:"end", xs:"center"} }}>
            <BackButton />
          </Box>
        </Grid>
        <Grid item sx={{ textAlign: {md:"start", xs:"center"}}} md={6} xs={12}>
          <Link href={`mailto:${emailAddress}`} style={{ textDecoration: 'none' }}>
            <CustomButton variant="outlined">
              Send Email
            </CustomButton>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}

export default Contact;