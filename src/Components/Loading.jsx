import { Center, Spinner,Text } from "@chakra-ui/react";

const Loading = () => {
  return (
    <Center minH="50vh" justifyContent="center">
      <Spinner size="lg" />
      <Text ms='4'>Loading</Text>
    </Center>
  );
};

export default Loading;
