import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import ImageCollage from "../components/ImageCollage";
import CustomizedAccordions from "../components/Accordian";
import Paper from "@mui/material/Paper"
import BottomNavigation from "@mui/material/BottomNavigation"
import BasicModal from "../components/Model";

const Tour = () => {
  return (
    <Container sx={{ width: 900 }}>
      <Typography variant="h3" component="h1" marginTop={3}>
        Explore the World in Vegas
      </Typography>
      <Box marginTop={3} sx={{ display: "flex", alignItems: "center" }}>
        <img
          src="https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2948&q=80"
          alt=""
          width={500}
          height={325}
        />
        <ImageCollage />
      </Box>
      <Box>
        <Typography variant="h6" component="h4" marginTop={3}>
          About this ticket
        </Typography>
        <Typography variant="paragraph" component="p" marginTop={3}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe iusto
          praesentium similique ipsam? Laborum aspernatur voluptate
          reprehenderit ea! Maiores ut hic officiis placeat aperiam, praesentium
          fuga aliquid ipsa. Voluptatibus, eveniet omnis impedit dolor quibusdam
          aperiam! Voluptatum fuga et reprehenderit ipsa.
        </Typography>
      </Box>
      <Box marginBottom={10}>
        <Typography variant="h6" component="h4" marginTop={3} marginBottom={2}>
          Frequently Asked Questions
        </Typography>
        <CustomizedAccordions />
      </Box>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation showLabels>
            <BasicModal />
        </BottomNavigation>
      </Paper>
    </Container>
  );
};

export default Tour;
