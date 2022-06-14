import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo-1.png";

function Footer() {
  return (
    <Stack
      direction="row"
      gap="40px"
      alignItems="center"
      justifyContent="space-between"
      px="40px"
      pt="24px"
      mt="80px"
      bgcolor="#fff3f4"
    >
      <Typography variant="h5" pb="40px" mt="30px" sx={{ opacity: "0.4" }}>
        Made by Ignacio Gimenez
      </Typography>
      <img src={Logo} alt="logo" width="200px" height="40px" />
    </Stack>
  );
}

export default Footer;
