"use client";

export default function DownloadButton() {
  const handleClick = async () => {
    const response = await fetch("/api/getfile");
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "public/ot_resume2024.pdf";
    link.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <button className="btn btn-xl btn-outline-light" onClick={handleClick}>
      <i className="fas fa-download me-2"></i>
      Download Resume
    </button>
  );
}
