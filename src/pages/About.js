import React from "react";
import Layout from "../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box sx={{
        my: 15,
        textAlign: "center",
        p: 2,
        "& h4": {
          fontWeight: "bold",
          my: 2,
          fontSize: "2rem"

        },
        "& p": {
          textAlign: "justify",
        },
        "@media (max-width:600px)":{
          mt: 0,
          "& h4": {
            fontSize: "1.5rem",
          }
        }
      }}>
        <Typography variant="h4">Welcome To My Resturant</Typography>
        <p>
          Paragraphs are the building blocks of papers. Many students define
          paragraphs in terms of length: a paragraph is a group of at least five
          sentences, a paragraph is half a page long, etc. In reality, though,
          the unity and coherence of ideas among sentences is what constitutes a
          paragraph. Paragraphs are the building blocks of papers. Many students define
          paragraphs in terms of length: a paragraph is a group of at least five
          sentences, a paragraph is half a page long, etc. In reality, though,
          the unity and coherence of ideas among sentences is what constitutes a
          paragraph.
        </p>
        <br />
        <p>
          Paragraphs are the building blocks of papers. Many students define
          paragraphs in terms of length: a paragraph is a group of at least five
          sentences, a paragraph is half a page long, etc. In reality, though,
          the unity and coherence of ideas among sentences is what constitutes a
          paragraph. Paragraphs are the building blocks of papers. Many students define
          paragraphs in terms of length: a paragraph is a group of at least five
          sentences, a paragraph is half a page long, etc. In reality, though,
          the unity and coherence of ideas among sentences is what constitutes a
          paragraph.
        </p>
      </Box>
    </Layout>
  );
};

export default About;
