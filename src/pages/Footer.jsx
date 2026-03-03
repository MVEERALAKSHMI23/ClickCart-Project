import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <div
      style={{
        backgroundColor: "#111",
        color: "white",
        padding: "30px 20px",
        marginTop: "40px"
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap"
        }}
      >
        
        <div>
          <h2 style={{ marginBottom: "10px" }}>ClickCart</h2>
          <p style={{ maxWidth: "250px", fontSize: "14px" }}>
            Your one-stop shop for quality products at the best prices.
          </p>
        </div>

        <div>
          <h3>Quick Links</h3>
          <p style={{ cursor: "pointer" }}>Home</p>
          <p style={{ cursor: "pointer" }}>Products</p>
          <p style={{ cursor: "pointer" }}>Cart</p>
          <p style={{ cursor: "pointer" }}>Login</p>
        </div>

        
        <div>
          <h3>Follow Us</h3>

          <div style={{ display: "flex", gap: "15px", marginTop: "10px" }}>
            <FaFacebookF size={20} style={{ cursor: "pointer" }} />
            <FaInstagram size={20} style={{ cursor: "pointer" }} />
            <FaTwitter size={20} style={{ cursor: "pointer" }} />
            <FaLinkedinIn size={20} style={{ cursor: "pointer" }} />
          </div>
        </div>
      </div>

      <hr style={{ margin: "20px 0", borderColor: "#444" }} />

      <p style={{ textAlign: "center", fontSize: "14px" }}>
        © {new Date().getFullYear()} ClickCart. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
