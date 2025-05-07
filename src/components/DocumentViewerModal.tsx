"use client";

import React from "react";

type DocumentViewerModalProps = {
  isOpen: boolean;
  onClose: () => void;
  fileUrl: string;
  fileName: string;
};

export default function DocumentViewerModal({
  isOpen,
  onClose,
  fileUrl,
  fileName,
}: DocumentViewerModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-[90%] md:w-[80%] lg:w-[60%] h-[80%] rounded-lg shadow-xl overflow-hidden flex flex-col">
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-700 truncate">{fileName}</h2>
          <button onClick={onClose} className="text-red-500 font-bold text-lg">✕</button>
        </div>

        <div className="flex-1 overflow-hidden">
          <iframe
            src={fileUrl}
            title={fileName}
            className="w-full h-full"
          ></iframe>
        </div>

        <div className="p-4 border-t flex justify-end gap-3">
          <a
            href={fileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
          >
            Open in New Tab
          </a>
          <button
            onClick={onClose}
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 text-sm"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
