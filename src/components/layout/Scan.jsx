import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import clsx from "clsx";
import Image from "next/image";

export default function Scan() {
  const [active, setActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleActive = () => {
    setActive(!active);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!selectedFile) return;
    console.log("Uploading file:", selectedFile);
    // Upload logic here...
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    // Validasi apakah file adalah gambar
    if (!file.type.startsWith("image/")) {
      setErrorMessage("File yang diunggah harus berupa gambar (jpg, png, webp, dll).");
      setSelectedFile(null);
      setPreviewUrl((prevUrl) => {
        if (prevUrl) URL.revokeObjectURL(prevUrl);
        return null;
      });
      return;
    }

    setSelectedFile(file);
    setErrorMessage(""); // Bersihkan error
  };

  const handleClearFile = () => {
    setSelectedFile(null);
    setErrorMessage("");
    setPreviewUrl((prevUrl) => {
      if (prevUrl) URL.revokeObjectURL(prevUrl);
      return null;
    });
  };

  useEffect(() => {
    if (!selectedFile) return;

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreviewUrl(objectUrl);

    return () => {
      URL.revokeObjectURL(objectUrl);
    };
  }, [selectedFile]);

  return (
    <>
      <main
        className="mx-auto flex flex-col justify-center items-center max-w-[700px] mb-10 max-h-[calc(100vh-80px)] w-full mt-5 gap-8 p-8 lg:p-0 overflow-y-auto"
        style={{ maxHeight: "calc(100vh - 225px)" }}
      >
        <div className="text-center text-gray-700 mt-20">
          <Image src="/images/scan.png" alt="Welcome" width={200} height={200} quality={30} className="w-44 h-44 mx-auto mb-4" />
          <p className="text-lg">
            Hai, aku <strong>SortiBot</strong>! 🌱
          </p>
          <p className="text-sm text-gray-600 max-w-[400px]">
            Yuk, bantu bumi dengan mengenali sampahmu. Scan sekarang dan temukan cara mengelolanya!
          </p>
        </div>
      </main>

      <form
        onSubmit={handleSubmit}
        className="md:max-w-[700px] md:w-full fixed flex flex-col gap-2 bottom-6 left-5 py-3 px-3 right-5 md:left-1/2 md:-translate-x-1/2 transform rounded-2xl transition-all duration-100 bg-white border border-green-300 shadow-lg"
      >
        {/* Tampilkan error message */}
        {errorMessage && (
          <div className="text-red-600 text-sm mb-2 px-2">
            <Icon icon="material-symbols:warning" className="inline mr-1" />
            {errorMessage}
          </div>
        )}

        <div className="flex items-center justify-between gap-2">
          <div className="relative flex gap-5 items-center">
            <div
              onClick={handleActive}
              className="p-2 rounded-full h-fit bg-white border border-gray-300 shadow hover:cursor-pointer"
            >
              <Icon icon="ic:round-add" className="h-6 w-6 text-gray-800" />
            </div>

            {selectedFile && (
              <div className="relative flex items-center gap-3 border border-gray-300 p-2 rounded-xl bg-gray-50 max-w-xs">
                <button
                  type="button"
                  onClick={handleClearFile}
                  className="absolute top-1 right-2 text-lg text-gray-500 hover:text-red-500"
                >
                  ✕
                </button>
                {previewUrl ? (
                  <img src={previewUrl} alt="Preview" className="w-20 h-20 object-cover rounded" />
                ) : (
                  <p className="text-sm text-gray-800 truncate max-w-[150px]">{selectedFile.name}</p>
                )}
              </div>
            )}

            {/* Dropdown menu */}
            <div
              className={clsx(
                "flex flex-col absolute transition-all duration-100 bottom-full mb-6 p-2 min-w-[200px] rounded-2xl border border-gray-300 shadow bg-white",
                active ? "opacity-100 z-20" : "-z-20 opacity-0 pointer-events-none"
              )}
            >
              <label className="flex flex-row gap-3 py-3 px-4 hover:cursor-pointer text-sm w-full hover:bg-gray-100 rounded-lg">
                <Icon icon="ep:upload-filled" className="h-5 w-5 text-gray-700" />
                <span>Upload File</span>
                <input type="file" onChange={handleFileChange} className="hidden" />
              </label>
              <div className="flex flex-row gap-3 py-3 px-4 hover:cursor-pointer text-sm w-full hover:bg-gray-100 rounded-lg">
                <Icon icon="material-symbols:camera-rounded" className="h-5 w-5 text-gray-700" />
                <p>Open Camera</p>
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={!selectedFile}
            className="p-2 z-1 bg-green-700 rounded-full hover:cursor-pointer disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            <Icon icon="majesticons:arrow-up-line" className="text-white w-6 h-6" />
          </button>
        </div>
      </form>
    </>
  );
}
