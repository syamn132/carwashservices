import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsappIcon from "@mui/icons-material/WhatsApp";
import { Box, Typography } from "@mui/material";
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import EventIcon from '@mui/icons-material/Event';


const Footer = () => {
  return (
    <>
      <Box
        sx={{ textAlign: "center", bgcolor: "#1B204E", color: "white", p: 1 }}
      >

        <>
          <Box
            sx={{ textAlign: "center", bgcolor: "#1B204E", color: "white", p: 3 }}
          >
            <Box
              sx={{
                my: 3,
                "& svg": {
                  fontSize: "60px",
                  cursor: "pointer",
                  mr: 2,
                },
                "& svg:hover": {
                  color: "goldenrod",
                  transform: "translateX(5px)",
                  transition: "all 400ms",
                },
              }}
            >
              <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>

                <Box sx={{ textAlign: 'center', flex: 1 }}>
                  <div style={{ marginBottom: "20px" }}>
                    <h4 style={{ paddingBottom: "30px" }}>Car wash Services is a Revolution in Car detailing, Best for both Car Interiors and Exteriors</h4>

                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <span style={{ marginRight: '5px' }}><EventIcon style={{ width: "45px" }} /></span>
                      <span style={{ fontSize: '16px' }}>info@carwashservices.in</span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <MailIcon style={{ width: "45px", marginRight: '10px' }} />
                      <span style={{ fontSize: '18px' }}>booking@carwashservices.in</span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <PhoneIcon style={{ width: "45px", marginRight: '10px' }} />
                      <span style={{ fontSize: '18px' }}>+91-9234567801</span>
                    </div>
                  </div>


                  <Box style={{ display: 'flex' }}>
                    <InstagramIcon style={{ width: "45px" }} />
                    <TwitterIcon style={{ width: "45px" }} />
                    <FacebookIcon style={{ width: "45px" }} />
                    <WhatsappIcon style={{ width: "45px" }} />
                  </Box>
                </Box>

                <Box sx={{ textAlign: 'center', flex: 1 }}>
                  <h2 style={{ paddingBottom: "30px" }}>Information</h2>
                  <h4 style={{ paddingBottom: "10px" }}>Home</h4>
                  <h4 style={{ paddingBottom: "10px" }}>Packages</h4>
                  <h4 style={{ paddingBottom: "10px" }}>About</h4>
                  <h4 style={{ paddingBottom: "10px" }}>Contact</h4>
                  <h4 style={{ paddingBottom: "10px" }}>BookNow</h4>
                </Box>


                <Box style={{ width: '40%', height: '400px', marginBottom: '35px' }}>
                  <h3 style={{marginBottom: '20px'}}>LOCATE US</h3>
                  <iframe
                    title="Location Map"
                    width="90%"
                    height="90%"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.860534464791!2d77.59456331537127!3d12.97159899089266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c06e72cf%3A0xefade81b87297f67!2sBangalore%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1638538584447!5m2!1sen!2sin"
                    allowFullScreen
                  ></iframe>
                </Box>
              </Box>

              <Typography
                variant="h5"
                sx={{
                  "@media (max-width:500px)": {
                    fontSize: "1rem",
                  },
                }}
              >
                All Rights Reserved &copy; Car Wash Services
              </Typography>
            </Box>
          </Box>
        </>
      </Box>
    </>
  );
};

export default Footer;