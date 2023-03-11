import { Box, Image, Stack, Text } from "@chakra-ui/react";
import { FC, memo } from "react";

type Props = {
  id: number;
  imageUrl: string;
  userName: string;
  fullName: string;
  onClick: (id: number) => void;
};
export const UserCard: FC<Props> = memo((props) => {
  const { id, imageUrl, userName, fullName, onClick } = props;
  return (
    <Box
      w="260px"
      h="260px"
      bg="white"
      borderRadius="lg"
      shadow="lg"
      p="4"
      onClick={() => onClick(id)}
      _hover={{ cursor: "pointer", opacity: 0.8 }}
    >
      <Stack textAlign="center">
        <Image
          boxSize="160px"
          borderRadius="full"
          src={imageUrl}
          alt="プロフィール"
          m="auto"
        />
        <Text fontSize="lg" fontWeight="bold" textAlign="center">
          {userName}
        </Text>
        <Text fontSize="md" textAlign="center" color="gray.500">
          {fullName}
        </Text>
      </Stack>
    </Box>
  );
});
