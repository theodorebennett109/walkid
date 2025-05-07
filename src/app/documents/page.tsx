"use client";

import React, { JSX, useState } from "react";
import CustomCard from "@/components/ui/card";
import Badge from "@/components/ui/badge";
import Link from "next/link";
import { FaIdCard, FaShieldAlt, FaFileMedical, FaEye, FaMoneyCheckAlt, FaBaby, FaCertificate, FaUniversity, FaBriefcase } from "react-icons/fa";
import DocumentViewerModal from "@/components/DocumentViewerModal";

type Document = {
  id: number;
  type: string;
  icon: JSX.Element;
  category: string;
  status: "verified" | "unverified";
  expires: string;
  fileUrl: string;
};

const documents: Document[] = [
    {
      id: 1,
      type: "Driver's License",
      category: "Legal",
      icon: <FaIdCard className="text-blue-500 text-xl" />,
      status: "verified",
      expires: "2026-08-31",
      fileUrl: "/dummy/license.pdf",
    },
    {
      id: 2,
      type: "Car Insurance",
      category: "Legal",
      icon: <FaShieldAlt className="text-blue-500 text-xl" />,
      status: "unverified",
      expires: "2025-03-15",
      fileUrl: "/dummy/insurance.pdf",
    },
    {
      id: 3,
      type: "Medical Card",
      category: "Medical",
      icon: <FaFileMedical className="text-blue-500 text-xl" />,
      status: "verified",
      expires: "2026-01-01",
      fileUrl: "/dummy/medcard.pdf",
    },
    {
      id: 4,
      type: "CSEC Certificate",
      category: "Education",
      icon: <FaCertificate className="text-blue-500 text-xl" />,
      status: "verified",
      expires: "2030-12-31",
      fileUrl: "/dummy/csec.pdf",
    },
    {
      id: 5,
      type: "Bachelor’s Degree",
      category: "Education",
      icon: <FaUniversity className="text-blue-500 text-xl" />,
      status: "verified",
      expires: "2035-01-01",
      fileUrl: "/dummy/degree.pdf",
    },
    {
      id: 6,
      type: "NIS Card",
      category: "Financial",
      icon: <FaMoneyCheckAlt className="text-blue-500 text-xl" />,
      status: "verified",
      expires: "2030-05-01",
      fileUrl: "/dummy/nis.pdf",
    },
    {
      id: 7,
      type: "Birth Certificate",
      category: "Legal",
      icon: <FaBaby className="text-blue-500 text-xl" />,
      status: "verified",
      expires: "2090-01-01",
      fileUrl: "/dummy/birthcert.pdf",
    },
    {
      id: 8,
      type: "Employment Letter",
      category: "Work",
      icon: <FaBriefcase className="text-blue-500 text-xl" />,
      status: "unverified",
      expires: "2024-10-01",
      fileUrl: "/dummy/employment.pdf",
    },
  ];

export default function DocumentsPage() {
    const [openDoc, setOpenDoc] = useState<Document | null>(null);
  return (
    <>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {documents.map((doc) => (
        <CustomCard key={doc.id}>
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-2">
              {doc.icon}
              <h2 className="text-lg font-semibold">{doc.type}</h2>
            </div>
            <Badge
              label={doc.status === "verified" ? "Verified" : "Unverified"}
              color={doc.status === "verified" ? "green" : "red"}
              size="small"
              pill
            />
          </div>
          <p className="text-sm text-gray-500 mb-3">Expires on: {doc.expires}</p>
          <div className="flex gap-3">
              <button
                onClick={() => setOpenDoc(doc)}
                className="inline-flex items-center gap-1 text-blue-500 hover:underline text-sm"
              >
                <FaEye /> Preview
              </button>
              <a
                href={doc.fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-blue-500 hover:underline text-sm"
              >
                Download
              </a>
            </div>
        </CustomCard>
      ))}
    </div>

     {/* Modal Viewer */}
     <DocumentViewerModal
     isOpen={!!openDoc}
     onClose={() => setOpenDoc(null)}
     fileUrl={openDoc?.fileUrl || ""}
     fileName={openDoc?.type || ""}
   /></>
  );
}
