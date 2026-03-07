import { Modal, View, Text, Pressable } from "react-native";
import NavButton from "../onboarding/NavButton";

type AppModalProps = {
  visible: boolean;
  title?: string;
  children?: React.ReactNode;
  onClose: () => void;
  buttonLabel: string;
};

export default function AppModal({
  visible,
  title,
  children,
  onClose,
  buttonLabel,
}: AppModalProps) {
  return (
    <Modal
      transparent
      animationType="fade"
      visible={visible}
      onRequestClose={onClose}
    >
      <Pressable
        className="flex-1 items-center justify-center bg-black/40"
        onPress={onClose}
      >
        <Pressable
          className="w-[90%] rounded-2xl bg-white p-5"
          onPress={(e) => e.stopPropagation()}
        >
          {title && (
            <Text className="text-lg font-bold mb-3">{title}</Text>
          )}

          <View className="mb-4">{children}</View>

          <NavButton
            title={buttonLabel}
            active
            rounded={"full"}
            onPress={onClose}
          />
        </Pressable>
      </Pressable>
    </Modal>
  );
}