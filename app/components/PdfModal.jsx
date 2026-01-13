"use client";

const PdfModal = ({ link, onClose }) => {
  if (!link) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <div className="bg-gray-900 w-[90%] h-[90%] rounded-lg relative">
        
        <button
          onClick={onClose}
          className="absolute top-3 right-3 bg-black text-white text-3xl rounded-xl"
        >
          ✖
        </button>

        <iframe
          src={link.replace("view", "preview")}
          className="w-full h-full rounded"
          allow="autoplay"
        ></iframe>

      </div>
    </div>
  );
};

export default PdfModal;
