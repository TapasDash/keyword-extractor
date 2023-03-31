import { Heading, Image, Text } from "@chakra-ui/react";
import bulb from "../assets/light-bulb.svg";

const Header = () => {
  return (
    <>
      <Image src={bulb} width="8rem" marginBottom="1rem" />
      <Heading color="whitesmoke" marginBottom="1rem">
        AI Keyword Extractor
      </Heading>
      <Text fontSize="1.5rem" textAlign="center">
        Paste in your text below and we will extract the keyword for you
      </Text>
    </>
  );
};

export default Header;
