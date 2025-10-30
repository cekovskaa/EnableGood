export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-12 col-md-3 text-center text-md-start mb-5 mb-md-0">
            <img src="/images/Logo.png" alt="Logo image" />
          </div>
          <div className="col-12 col-md-6">
            <p className="text-center copyright-text mb-5 mb-md-0">
              © 2025 Enable Good - All Rights Reserved
            </p>
            <div className="footer-terms mb-4 mb-md-0">
              <p>Terms</p>
              <p>Privacy</p>
              <p>Cookies</p>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="social-media-links">
              <a href="#">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
