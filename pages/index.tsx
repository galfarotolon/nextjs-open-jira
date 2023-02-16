import { Typography } from "@mui/material";
import type { NextPage } from "next";
import { Layout } from "../components/layouts";

const HomePage: NextPage = () => {
  return (
    <Layout title="Hello World">
      <Typography variant="h1" color="primary">
        Hello
      </Typography>
    </Layout>
  );
};

export default HomePage;
