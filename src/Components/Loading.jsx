import { Center, Spinner } from "@chakra-ui/react";

const Loading = () => {
  return (
    <Center minH="300px" justifyContent="center">
      <Spinner size="md" />
    </Center>
  );
};

export default Loading;
