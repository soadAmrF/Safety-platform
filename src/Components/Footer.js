import React from "react";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  const goToPage = (path) => {
    navigate(path);
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };

  const socialLinks = [
    { name: "Facebook", icon: "bi-facebook", color: "#1877F2", url: "#" },
    { name: "LinkedIn", icon: "bi-linkedin", color: "#0A66C2", url: "#" },
    { name: "Instagram", icon: "bi-instagram", color: "#E4405F", url: "#" },
    { name: "Whatsapp", icon: "bi-whatsapp", color: "#25D366", url: "#" },
  ];

  return (
    <>
      <style>{`
        .premium-footer {
          background: #183A66;
          color: white;
          padding: 100px 0 30px 0;
          border-top: 10px solid #F97316;
          position: relative;
          overflow: hidden;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .premium-footer::before {
          content: "";
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          background-image: radial-gradient(rgba(249, 115, 22, 0.05) 1px, transparent 1px);
          background-size: 40px 40px;
          pointer-events: none;
        }

        .footer-link {
          transition: all 0.3s ease;
          cursor: pointer;
          opacity: 0.7;
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 15px;
        }
        .footer-link:hover {
          opacity: 1;
          color: #F97316 !important;
          transform: translateX(-8px);
        }

        .social-circle {
          width: 45px; height: 45px;
          display: flex; align-items: center; justify-content: center;
          border-radius: 50%;
          background: rgba(255,255,255,0.05);
          color: white;
          transition: 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          text-decoration: none;
          border: 1px solid rgba(255,255,255,0.1);
        }
        .social-circle:hover {
          transform: translateY(-10px) rotate(360deg);
          background: #F97316;
          border-color: #F97316;
          box-shadow: 0 10px 20px rgba(249, 115, 22, 0.3);
        }

        .footer-heading {
          font-size: 1.5rem;
          font-weight: 900;
          margin-bottom: 30px;
          position: relative;
          display: inline-block;
        }
        .footer-heading::after {
          content: "";
          position: absolute;
          bottom: -8px; right: 0;
          width: 40px; height: 3px;
          background: #F97316;
        }

        .signature-text {
          color: #F97316;
          font-weight: bold;
          text-decoration: none;
          border-bottom: 1px solid transparent;
          transition: 0.3s;
        }
        .signature-text:hover {
          border-bottom-color: #F97316;
        }
      `}</style>

      <footer className="premium-footer">
        <div
          className="container"
          style={{ maxWidth: "1300px", margin: "0 auto", padding: "0 20px" }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "60px",
              direction: "rtl",
            }}
          >
            <div data-aos="fade-up">
              <h3 className="footer-heading">بوابة السلامة</h3>
              <p
                style={{ opacity: 0.7, lineHeight: "1.8", fontSize: "1.1rem" }}
              >
                الوجهة الأولى للمهندس العربي الباحث عن التميز في مجال السلامة
                والصحة المهنية (HSE). منصة تعليمية مفتوحة تهدف لنشر ثقافة الأمان
                عالمياً.
              </p>
              <div style={{ display: "flex", gap: "15px", marginTop: "30px" }}>
                {socialLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    className="social-circle"
                    title={link.name}
                  >
                    <i className={`bi ${link.icon}`}></i>
                  </a>
                ))}
              </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="100">
              <h4 className="footer-heading">روابط سريعة</h4>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li
                  className="footer-link"
                  onClick={() => goToPage("/questions")}
                >
                  <i
                    className="bi bi-chevron-left"
                    style={{ fontSize: "0.8rem" }}
                  ></i>{" "}
                  الأسئلة التقنية
                </li>
                <li className="footer-link" onClick={() => goToPage("/terms")}>
                  <i
                    className="bi bi-chevron-left"
                    style={{ fontSize: "0.8rem" }}
                  ></i>{" "}
                  قاموس المصطلحات
                </li>
                <li
                  className="footer-link"
                  onClick={() => goToPage("/interview-prep")}
                >
                  <i
                    className="bi bi-chevron-left"
                    style={{ fontSize: "0.8rem" }}
                  ></i>{" "}
                  أسئلة المقابلات
                </li>
              </ul>
            </div>
          </div>

          <div
            style={{
              marginTop: "80px",
              paddingTop: "30px",
              borderTop: "1px solid rgba(255,255,255,0.1)",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
              direction: "rtl",
            }}
          >
            <p style={{ opacity: 0.6, fontSize: "0.9rem", margin: "5px 0" }}>
              © {currentYear} جميع الحقوق محفوظة لمهندسي السلامة - المنصة
              التعليمية المفتوحة.
            </p>
            <p style={{ opacity: 0.9, fontSize: "0.9rem", margin: "5px 0" }}>
              Crafted with passion by{" "}
              <span className="signature-text">Soad Amr</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
