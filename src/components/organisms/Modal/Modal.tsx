import ReactDOM from "react-dom";
import { useModal } from "./store";

function Modal() {
  const { modals, closeModal } = useModal();

  if (modals.length === 0) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex bg-black bg-opacity-70">
      {modals.map((modal) => {
        let containerClasses = "";
        let contentClasses = "relative";

        // Definir classes de contêiner e conteúdo com base no tipo
        switch (modal.type) {
          case "side":
            containerClasses = `grid grid-rows-[auto_1fr_auto] fixed top-0 h-full  ${
              modal.position === "right"
                ? "right-0 rounded-l-lg"
                : "left-0 rounded-r-lg"
            } w-1/3`;
            break;

          case "bottom":
            containerClasses = `grid grid-rows-[auto_1fr_auto] fixed bottom-0 left-0 w-full h-1/3 flex rounded-t-xl`;
            break;

          default:
            containerClasses =
              "fixed inset-0 flex w-2/3 items-center justify-center flex-col justify-self-center self-center rounded-xl w-96";
            contentClasses += " w-full"; // Bordas arredondadas para modais padrão
            break;
        }

        return (
          <div
            key={modal.id}
            className={`gap-5 bg-gray-200 shadow-black drop-shadow-2xl ${containerClasses} p-5`}
          >
            {/* Header */}
            {modal.header ? (
              modal.header({
                id: modal.id,
                closeModal,
              })
            ) : (
              <div className={`${contentClasses}`}>
                <h3>title</h3>
                <button
                  onClick={() => closeModal(modal.id)}
                  className="absolute right-0 top-0 text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
            )}

            {/* Content */}
            <div>{modal.content}</div>

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
          </div>
        );
      })}
    </div>,
    document.getElementById("modal-root")!,
  );
}

export default Modal;
