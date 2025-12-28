export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">
        © {new Date().getFullYear()}{" "}
        <span>Meme Forge</span> · Crafted by{" "}
        <a
          href="https://github.com/aako-aakash"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          AAKASH
        </a>{" "}
        ·{" "}
        <a
          href="https://www.linkedin.com/in/akash-kumar-saw-bb1630258/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          LinkedIn
        </a>
      </p>
    </footer>
  );
}
