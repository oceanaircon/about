"use client";

import { faDownload } from "@fortawesome/free-solid-svg-icons/faDownload";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DownloadButton() {
  const handleClick = async () => {
    const response = await fetch("/api/getfile");
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "public/theko_resume.pdf";
    link.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <button className="btn btn-xl btn-outline-light" onClick={handleClick}>
      <FontAwesomeIcon icon={faDownload} />
      &nbsp; Download Resume
    </button>
  );
}
