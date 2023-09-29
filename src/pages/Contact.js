import React from "react";
import Layout from "../components/Layout/Layout";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import EmailIcon from "@mui/icons-material/Email";
import { Mail } from "@mui/icons-material";
import CallIcon from '@mui/icons-material/Call';
const Contact = () => {
  return (
    <Layout>
      <Box sx={{ my: 5, ml: 10, "& h4": { fontWeight: "bold", mb: 2 } }}>
        <Typography variant="h4">Contact My Resturant</Typography>
        <p>
          My favorite restaurant essay ,The places we prefer vary according to
          our taste, culture and mood, along with our experience and our first
          impression of the place. Today I will talk about my favorite
          restaurant that I went to one day and leave me feeling calm and happy
          as well as the quality of the food and its tasty taste. All this will
          be found here in My favorite restaurant essay
        </p>
      </Box>
      <Box sx={{m: 3, width:'600px', ml: 10, "@media (max-width:600px)":{
        width: '300px',
      } }}>
        <TableContainer component={Paper}>
          <Table aria-label="contact-table">
            <TableHead>
              <TableRow>
                <TableCell sx={{bgcolor:'black', color:'white', }} align="center">Contact Detail</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: "red", pt: 1 }} /> 18000-00-0000
                  (tollfree)
                </TableCell>
               </TableRow>
               <TableRow>
                <TableCell>
                <EmailIcon sx={{color:'skyblue', pt: 1}}/> help@myrest.com
                </TableCell>
               </TableRow>
                <TableRow>
                  <TableCell>
                  <CallIcon sx={{color:'green', pt: 1}}/> 1234567890
                  </TableCell>
                </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Contact;
