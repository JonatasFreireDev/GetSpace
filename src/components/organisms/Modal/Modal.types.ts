interface ModalBase {
  id: string;
  header?: (props: {
    id: string;
    closeModal: (id: string) => void;
  }) => React.ReactNode;
  content: React.ReactNode;
  footer?: (props: {
    id: string;
    closeModal: (id: string) => void;
    onOk?: () => void;
    onCancel?: () => void;
  }) => React.ReactNode;
  type: "default" | "side" | "bottom";
  size?: "sm" | "md" | "lg";
  isDialog?: boolean;
}

type DefaultModal = ModalBase & {
  type: "default";
};

type SideModal = ModalBase & {
  type: "side";
  position: "left" | "right";
};

type BottomModal = ModalBase & {
  type: "bottom";
};

type DialogProps = {
  onOk?: () => void;
  onCancel?: () => void;
};

export type ModalProps = (DefaultModal | SideModal | BottomModal) & DialogProps;
