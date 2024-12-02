import React from "react";
import { Link, Container, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="http://lanunion.cqu.edu.cn/">
        重庆大学蓝盟
      </Link>{" "}
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  const { pathname } = useLocation();

  if (pathname.includes("admin")) {
    return null;
  }

  return (
    <footer
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        backgroundColor: '#f8f8f8', // 背景色可根据需要调整
        padding: '10px 0',
        boxShadow: '0 -1px 5px rgba(0, 0, 0, 0.1)', // 可选，添加阴影
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="body1" align="center" color="textPrimary">
          页脚
        </Typography>
        <Copyright />
      </Container>
    </footer>
  );
}
