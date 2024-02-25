import { Box, Container, VStack, HStack, Text, Input, IconButton, StackDivider, Avatar, Heading, Spacer, Flex, Textarea, Button } from "@chakra-ui/react";
import { FaTwitter, FaRegComment, FaRetweet, FaHeart, FaShareSquare } from "react-icons/fa";

const TweetBox = () => {
  return (
    <HStack spacing={3} p={4} borderBottom="1px" borderColor="gray.200">
      <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx1c2VyJTIwYXZhdGFyfGVufDB8fHx8MTcwODg0OTgzMnww&ixlib=rb-4.0.3&q=80&w=1080" />
      <Textarea placeholder="What's happening?" resize="none" border="none" _focus={{ boxShadow: "none" }} />
      <IconButton icon={<FaTwitter />} colorScheme="twitter" borderRadius="full" size="lg" aria-label="Tweet" />
    </HStack>
  );
};

const Tweet = ({ avatar, username, handle, content }) => {
  return (
    <HStack spacing={3} p={4} borderBottom="1px" borderColor="gray.200">
      <Avatar src={avatar} />
      <VStack align="start" spacing={1}>
        <HStack>
          <Heading size="sm">{username}</Heading>
          <Text color="gray.500">@{handle}</Text>
          <Spacer />
          <Text color="gray.500">2h</Text>
        </HStack>
        <Text>{content}</Text>
        <HStack spacing={5} color="gray.500">
          <HStack spacing={1}>
            <FaRegComment />
            <Text>3</Text>
          </HStack>
          <HStack spacing={1}>
            <FaRetweet />
            <Text>1</Text>
          </HStack>
          <HStack spacing={1}>
            <FaHeart />
            <Text>5</Text>
          </HStack>
          <FaShareSquare />
        </HStack>
      </VStack>
    </HStack>
  );
};

const Index = () => {
  return (
    <Container maxW="xl" p={0}>
      <VStack divider={<StackDivider />} spacing={0}>
        <Box bg="twitter.500" p={3} color="white">
          <HStack spacing={3}>
            <FaTwitter size="1.5em" />
            <Heading size="md">Home</Heading>
          </HStack>
        </Box>
        <TweetBox />
        <Tweet avatar="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHx1c2VyJTIwYXZhdGFyfGVufDB8fHx8MTcwODg0OTgzMnww&ixlib=rb-4.0.3&q=80&w=1080" username="Jane Doe" handle="janedoe" content="Just attended an awesome React conference! #reactjs #frontend" />
        <Tweet avatar="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwzfHx1c2VyJTIwYXZhdGFyfGVufDB8fHx8MTcwODg0OTgzMnww&ixlib=rb-4.0.3&q=80&w=1080" username="John Smith" handle="johnsmith" content="Exploring hook patterns in functional components #react #hooks" />
        {/* More tweets can be added here */}
      </VStack>
    </Container>
  );
};

export default Index;
