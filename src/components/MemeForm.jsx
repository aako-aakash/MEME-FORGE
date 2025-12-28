import { useRef, useEffect } from "react";

export default function MemeForm({
  meme,
  onChange,
  onGenerate,
  disabled
}) {
  // Ref for auto-focus
  const inputRef = useRef(null);

  // Auto-focus top text input on mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Handle Enter key to generate meme
  function handleKeyDown(event) {
    if (event.key === "Enter" && !disabled) {
      onGenerate();
    }
  }

  return (
    <div className="meme-form">

      {/* Top Text Input */}
      <div className="input-group">
        <input
          ref={inputRef}
          type="text"
          name="topText"
          value={meme.topText}
          onChange={onChange}
          onKeyDown={handleKeyDown}
          required
        />
        <label>Top text</label>
      </div>

      {/* Bottom Text Input */}
      <div className="input-group">
        <input
          type="text"
          name="bottomText"
          value={meme.bottomText}
          onChange={onChange}
          onKeyDown={handleKeyDown}
          required
        />
        <label>Bottom text</label>
      </div>

      {/* Generate Button */}
      <button
        className="meme-btn"
        onClick={onGenerate}
        disabled={disabled}
      >
        Get a new meme image 🖼
      </button>

    </div>
  );
}
