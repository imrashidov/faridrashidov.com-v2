import React, { useState, useEffect } from "react";
import pdf from "../assets/Farid Rashidov - CV.pdf";
import { Document, Page, pdfjs } from "react-pdf";
import { IoMdDownload } from "react-icons/io";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function Resume() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div className="resume-section py-32 max-lg:py-28 ">
      <div className="resume-body  mb-auto">
        <div className="btn-body flex justify-center">
          <a
            href={pdf}
            download
            className="btn-download flex justify-center items-center  p-1 gap-1 bg-violet-600 max-w-[200px] rounded-md"
          >
            <IoMdDownload /> Download CV
          </a>
        </div>
        <div className="pdf-body">
          <Document
            file={pdf}
            className="w-full flex justify-center p-20 max-sm:p-7"
          >
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </div>
      </div>
    </div>
  );
}
