"use client";

import { useState } from "react";
import { pdfData } from "@/lib/data";
import SearchBar from "./SearchBar";
import PdfModal from "./PdfModal";

const normalize = (text) => text.toLowerCase().trim();

const AllPdf = () => {
  const [query, setQuery] = useState("");
  const [selectedPdf, setSelectedPdf] = useState(null);

  const results = pdfData.filter((pdf) => {
    const searchableText = normalize(
      `${pdf.subject} ${pdf.exam} ${pdf.year} ${pdf.keywords}`
    );

    return normalize(query)
      .split(" ")
      .every((word) => searchableText.includes(word));
  });

  return (
    <div className="max-w-4xl mx-auto mt-14  text-white pb-10">

      <SearchBar value={query} onChange={setQuery} />

      <div>
              <hr className="my-6 border-gray-600" />
      </div>


      <div className="mt-4 space-y-3">
        {results.map((pdf, index) => (
          <div
            key={index}
            onClick={() => setSelectedPdf(pdf.link)}
            className="cursor-pointer p-4 bg-gray-800 rounded-xl hover:bg-gray-700"
          >
            {pdf.subject} | Sem {pdf.sem} | {pdf.exam} {pdf.year}
          </div>
        ))}
      </div>

      {/* PDF Preview Modal */}
      <PdfModal link={selectedPdf} onClose={() => setSelectedPdf(null)} />

    </div>
  );
};

export default AllPdf;
