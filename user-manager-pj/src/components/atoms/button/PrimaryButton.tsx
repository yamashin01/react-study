import { Button } from "@chakra-ui/react";
import { FC, memo, ReactNode } from "react";

type Props = {
  children: ReactNode;
  onClick: () => void;
  loading: boolean;
  disabled: boolean;
};
export const PrimaryButton: FC<Props> = memo((props) => {
  const { children, onClick, loading, disabled } = props;
  return (
    <Button
      bg="teal.400"
      color="white"
      isLoading={loading}
      isDisabled={disabled || loading}
      _hover={{ opacity: 0.8 }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
});
