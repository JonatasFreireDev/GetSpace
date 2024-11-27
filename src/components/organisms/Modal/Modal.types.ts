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
  type: ModalType;
  size?: ModalSize;
  isDialog?: boolean;
}

export type ModalType = "default" | "side" | "bottom";
export type ModalSize = "sm" | "md" | "lg";
export type Position = "left" | "right";

type DefaultModal = ModalBase & {
  type: "default";
};

type SideModal = ModalBase & {
  type: "side";
  position: Position;
};

type BottomModal = ModalBase & {
  type: "bottom";
};

type DialogProps = {
  onOk?: () => void;
  onCancel?: () => void;
};

export type ModalProps = (DefaultModal | SideModal | BottomModal) & DialogProps;
