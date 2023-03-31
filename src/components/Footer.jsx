import { Box, Flex, Image, Text } from "@chakra-ui/react";
import openai from "../assets/openai.png";

const Footer = () => {
  return (
    <Box marginTop="4rem">
      <Flex justifyContent="center" align="center"></Flex>
      <Image src={openai} marginRight={1} />
      <Text>Powered by Open AI</Text>
    </Box>
  );
};

export default Footer;
