import { useRef, useState } from "react";
import * as htmlToImage from "html-to-image";

export default function MemePreview({ meme }) {
  const memeRef = useRef(null);
  const [downloaded, setDownloaded] = useState(false);

  function downloadMeme() {
    if (!memeRef.current) return;
    if (!meme.imageUrl) return;

    htmlToImage.toPng(memeRef.current).then((url) => {
      const link = document.createElement("a");
      link.download = "memeforge-meme.png";
      link.href = url;
      link.click();

      setDownloaded(true);
      setTimeout(() => setDownloaded(false), 1500);
    });
  }

  return (
    <div className="meme-preview">

      <div className="meme-canvas" ref={memeRef}>
         <span className="meme-text top">
          {meme.topText || "Enter top text"}
        </span>

        {meme.imageUrl && (
          <img src={meme.imageUrl} alt="Generated meme" />
        )}

        <span className="meme-text bottom">
          {meme.bottomText || "Enter bottom text"}
        </span>
      </div>

      <button
        className="meme-btn meme-btn--secondary"
        onClick={downloadMeme}
        disabled={!meme.imageUrl}
      >
        Download Meme
      </button>

      {downloaded && (
        <span style={{ color: "#22c55e", fontSize: "0.85rem" }}>
          ✔ Downloaded
        </span>
      )}

    </div>
  );
}
