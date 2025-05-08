"use client";

import Badge from "@/components/ui/badge";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

import { FaEye, FaFilePdf } from "react-icons/fa";

// Mock data
const mockDocuments = [
  {
    id: "1",
    type: "Driver's License",
    fileName: "license.pdf",
    fileUrl: "/dummy/old_res.pdf",
    category: "Legal",
    status: "verified",
    expires: "2026-08-31",
    uploadedAt: "2024-02-10",
    verifiedAt: "2024-03-01",
    verifiedBy: "admin@walkid.com",
  },
  {
    id: "2",
    type: "Medical Card",
    fileName: "medcard.pdf",
    fileUrl: "/dummy/medcard.pdf",
    category: "Medical",
    status: "unverified",
    expires: "2025-01-01",
    uploadedAt: "2024-04-01",
    verifiedAt: null,
    verifiedBy: null,
  },
];

export default function DocumentDetailPage() {
  const { id } = useParams();
  const [document, setDocument] = useState<any>(null);

  useEffect(() => {
    const found = mockDocuments.find((doc) => doc.id === id);
    setDocument(found || null);
  }, [id]);

  if (!document) {
    return <div className="p-6 text-red-500">Document not found.</div>;
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">
          {document.type}
        </h1>
        <Badge
          label={document.status === "verified" ? "Verified" : "Unverified"}
          color={document.status === "verified" ? "green" : "red"}
          size="small"
          pill
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
        <p><strong>Category:</strong> {document.category}</p>
        <p><strong>Expires:</strong> {document.expires}</p>
        <p><strong>Uploaded At:</strong> {document.uploadedAt}</p>
        {document.status === "verified" && (
          <>
            <p><strong>Verified By:</strong> {document.verifiedBy}</p>
            <p><strong>Verified At:</strong> {document.verifiedAt}</p>
          </>
        )}
      </div>

      <div className="border rounded-md overflow-hidden shadow-md">
        <iframe
          src={document.fileUrl}
          className="w-full h-[600px]"
          title={document.fileName}
        />
      </div>

      <div className="flex gap-4 mt-4">
        <a
          href={document.fileUrl}
          target="_blank"
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
        >
          <FaEye /> Open in New Tab
        </a>

        {document.status === "unverified" && (
          <button className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 text-sm">
            Request Verification
          </button>
        )}

        <button className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400 text-sm">
          Re-upload
        </button>
      </div>
    </div>
  );
}
