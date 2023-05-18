import "../style/Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="container">
      <footer className="footer">
        <p className="footer-text">
          &copy; {year} - Designed and Developed with{" "}
          <span className="heart">&hearts;</span> by Alice Marchi
        </p>
      </footer>
    </div>
  );
};

export default Footer;
