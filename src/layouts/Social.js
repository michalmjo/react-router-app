import "../styles/social.css";

const Social = () => {
  return (
    <>
      <div className="socials">
        <div className="socials_icon">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
        </div>
        <div className="scroll">
          <div className="scroll_drag">
            <i className="fas fa-chevron-up"></i>
          </div>
          <div className="scroll_text">
            <p>Scroll</p>
          </div>
          <div className="scroll_drag rotate">
            <i className="fas fa-chevron-up"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Social;
