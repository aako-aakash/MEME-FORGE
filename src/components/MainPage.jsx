import { useState } from "react";
import useMemes from "../hooks/useMemes";
import MemeForm from "./MemeForm";
import MemePreview from "./MemePreview";

export default function Main() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    imageUrl: ""
  });

  const { memes, loading, error } = useMemes();

  function handleChange(event) {
    const { name, value } = event.currentTarget;
    setMeme(prev => ({
      ...prev,
      [name]: value
    }));
  }

  function generateMeme() {
    if (memes.length === 0) return;

    const randomIndex = Math.floor(Math.random() * memes.length);
    const randomMeme = memes[randomIndex];

    setMeme(prev => ({
      ...prev,
      imageUrl: randomMeme.url
    }));
  }

  /* ===== UX STATES ===== */

  if (loading) {
    return (
      <main className="meme-wrapper">
        <div className="meme-card">
          <div className="skeleton" />
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="meme-wrapper">
        <div className="meme-card">
          <p style={{ color: "#f87171", textAlign: "center" }}>
            🚨 Failed to load memes
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="meme-wrapper">
      <div className="meme-card">

        <MemeForm
          meme={meme}
          onChange={handleChange}
          onGenerate={generateMeme}
          disabled={memes.length === 0}
        />

        <MemePreview meme={meme} />

      </div>
    </main>
  );
}
