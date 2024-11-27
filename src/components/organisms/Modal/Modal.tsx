import ReactDOM from "react-dom";
import { useModal } from "./store";
import { motion, AnimatePresence } from "framer-motion";
import { getModalAnimation } from "./utils/functions/getModalAnimation/getModalAnimation";
import { getCorrectContainerClass } from "./utils/functions/getCorrectContainerClass/getCorrectContainerClass";
import { Title } from "@/components/atoms";

function Modal() {
  const { modals, closeModal } = useModal();

  if (modals.length === 0) return null;

  return ReactDOM.createPortal(
    <AnimatePresence>
      {modals.map((modal) => {
        const containerClasses = getCorrectContainerClass({
          type: modal.type,
          size: modal.size,
          position: modal.position,
        });

        const animationProps = getModalAnimation({
          type: modal.type,
          position: modal.position,
        });

        return (
          <motion.div
            key={modal.id}
            className={`fixed inset-0 z-50 flex bg-black bg-opacity-70 ${modal.type === "default" ? "items-center justify-center" : ""}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className={`gap-5 bg-gray-200 p-5 ${containerClasses}`}
              {...animationProps}
            >
              {/* Header */}
              {modal.header ? (
                modal.header({
                  id: modal.id,
                  closeModal,
                })
              ) : (
                <div className={`relative w-full`}>
                  <Title text="Title" />
                  <button
                    onClick={() => closeModal(modal.id)}
                    className="absolute right-0 top-0 text-gray-500 hover:text-gray-700"
                  >
                    ✕
                  </button>
                </div>
              )}

              {/* Content */}
              <div className="overflow-auto">{modal.content}</div>

              {/* Footer */}
              {modal.footer
                ? modal.footer({
                    id: modal.id,
                    closeModal,
                    onOk: modal.onOk,
                    onCancel: modal.onCancel,
                  })
                : modal.isDialog && (
                    <div className="flex justify-end self-end">
                      <button
                        onClick={() => {
                          modal.onCancel?.();
                          closeModal(modal.id);
                        }}
                        className="mr-2 rounded bg-gray-300 px-4 py-2 text-gray-800 hover:bg-gray-400"
                      >
                        Cancelar
                      </button>
                      <button
                        onClick={() => {
                          modal.onOk?.();
                          closeModal(modal.id);
                        }}
                        className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
                      >
                        Ok
                      </button>
                    </div>
                  )}
            </motion.div>
          </motion.div>
        );
      })}
    </AnimatePresence>,
    document.getElementById("modal-root")!,
  );
}

export default Modal;
