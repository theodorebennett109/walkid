"use client";

import React, { useState } from "react";

type AccessRole = "Police" | "Hospital" | "Airport" | "Public";

type Document = {
  id: number;
  type: string;
  access: Partial<Record<AccessRole, boolean>>;
};

const initialDocs: Document[] = [
  {
    id: 1,
    type: "Driver's License",
    access: { Police: true, Hospital: false, Airport: true, Public: false },
  },
  {
    id: 2,
    type: "Medical Card",
    access: { Police: false, Hospital: true, Airport: false, Public: false },
  },
  {
    id: 3,
    type: "CSEC Certificate",
    access: { Police: false, Hospital: false, Airport: false, Public: true },
  },
];

const roles: AccessRole[] = ["Police", "Hospital", "Airport", "Public"];

export default function ShareSettingsPage() {
  const [documents, setDocuments] = useState<Document[]>(initialDocs);

  const toggleAccess = (docId: number, role: AccessRole) => {
    setDocuments((prev) =>
      prev.map((doc) =>
        doc.id === docId
          ? {
              ...doc,
              access: {
                ...doc.access,
                [role]: !doc.access[role],
              },
            }
          : doc
      )
    );
  };

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-xl font-bold text-gray-800">Share Settings</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full border text-sm text-left text-gray-700">
          <thead>
            <tr className="bg-blue-100 border-b">
              <th className="p-2">Document</th>
              {roles.map((role) => (
                <th key={role} className="p-2 text-center">
                  {role}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {documents.map((doc) => (
              <tr key={doc.id} className="border-b hover:bg-gray-50">
                <td className="p-2 font-medium">{doc.type}</td>
                {roles.map((role) => (
                  <td key={role} className="text-center p-2">
                    <input
                      type="checkbox"
                      checked={!!doc.access[role]}
                      onChange={() => toggleAccess(doc.id, role)}
                      className="accent-blue-600 w-4 h-4"
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
