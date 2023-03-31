import { Button, Textarea, useToast } from "@chakra-ui/react";
import React, { useState } from "react";

const TextInput = ({ extractKeywords }) => {
  const [text, setText] = useState("");
  const toast = useToast();
  const submitText = () => {
    // console.log({ text });
    if (!text)
      toast({
        title: "Text field is empty!",
        description: "Please enter some text to extract keywords",
        status: "error",
        duration: 5000, //5 seconds
        isClosable: false,
      });
    else extractKeywords(text);
  };
  return (
    <>
      <Textarea
        bg="blue.400"
        color="whitesmoke"
        padding={4}
        marginTop={6}
        height="12rem"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button
        bg="blue.500"
        color="whitesmoke"
        marginTop={4}
        width="100%"
        _hover={{ bg: "blue.700" }}
        onClick={submitText}
      >
        Extract Keywords
      </Button>
    </>
  );
};

export default TextInput;
