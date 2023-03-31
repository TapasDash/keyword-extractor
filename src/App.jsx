import { Box, Container } from "@chakra-ui/react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TextInput from "./components/TextInput";
import { useState } from "react";

const App = () => {
  console.log(import.meta.env.VITE_OPEN_API_KEY);
  const [keywords, setKeywords] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const extractKeywords = async (text) => {
    setLoading(true);
    setIsOpen(true);

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_OPEN_API_KEY}`,
      },
      body: JSON.stringify({
        model: "text-davinci-003",
        prompt:
          "Extract keywords from this text. Make the first letter of each word uppercase and sepearte it with commas\n\n" +
          text +
          "",
        temperature: 0.5, //degree of randomness
        max_tokens: 60,
        frequently_penalty: 0.8,
      }),
    };

    const response = await fetch(import.meta.env.VITE_OPEN_API_URL, options);
    const json = response.json();
    const data = json.choices[0].text.trim();
    console.log({ data });
    setKeywords(data);
    setLoading(false);
  };
  return (
    <>
      <Box bg="blue.600" color="whitesmoke" height="100vh" paddingTop="9rem">
        <Container maxW="3xl" centerContent>
          {/* Container is used for centering and centerContent will center it more*/}
          <Header />
          <TextInput extractKeywords={extractKeywords} />
          <Footer />
        </Container>
      </Box>
    </>
  );
};

export default App;
