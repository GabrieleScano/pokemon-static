import type { NextPage } from "next";
import { Button } from "@nextui-org/react";
import { Layout } from "../components/layouts/Layout";

const HomePage: NextPage = () => {
  return (
    <Layout title="List of Pokemons">
      <Button color="gradient">Ciao</Button>
    </Layout>
  );
};

export default HomePage;
