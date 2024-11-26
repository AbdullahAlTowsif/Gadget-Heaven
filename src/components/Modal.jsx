const Modal = ({ children, onClose }) => {
    return (
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full text-center">
          {children}
        </div>
      </div>
    );
  };
  
  export default Modal;
  