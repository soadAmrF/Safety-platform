import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import img from "../Assets/IMG/hse-hero.png";
import {
  FaBriefcase,
  FaArrowLeft,
  FaAward,
  FaChevronLeft,
} from "react-icons/fa";
import { MdQuiz, MdMenuBook } from "react-icons/md";

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div
      style={{
        direction: "rtl",
        backgroundColor: "#0F172A",
        minHeight: "100vh",
        overflowX: "hidden",
        fontFamily: "Cairo, sans-serif",
      }}
    >
      <style>{`
        .hero-and-cards {
          background: radial-gradient(circle at top right, #1e3a8a 0%, #0f172a 50%),
                      radial-gradient(circle at bottom left, #1e40af 0%, #0f172a 50%);
          padding: 120px 20px 80px 20px;
          position: relative;
        }

        .cards-grid-fixed {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 25px;
          width: 100%;
          padding: 20px 0;
        }

        .modern-card {
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 24px;
          padding: 35px;
          transition: 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          cursor: pointer;
          height: 100%; /* لتوحيد ارتفاع الكروت */
        }

        .modern-card:hover {
          transform: translateY(-10px);
          border-color: #f97316;
          background: rgba(255, 255, 255, 0.05);
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
        }

        .hero-layout {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 60px;
          margin-bottom: 60px;
        }

        .image-container {
          max-width: 450px;
          padding: 10px;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 30px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          animation: float 5s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }

        @media (max-width: 992px) {
          .hero-layout { flex-direction: column; text-align: center; }
          .hero-text h1 { font-size: 2.5rem !important; }
        }
      `}</style>

      <div className="hero-and-cards">
        <div
          className="container-box"
          style={{ maxWidth: "1250px", margin: "0 auto" }}
        >
          <div className="hero-layout">
            <div className="hero-text" data-aos="fade-left">
              <div
                style={{
                  background: "rgba(249, 115, 22, 0.1)",
                  color: "#F97316",
                  padding: "8px 20px",
                  borderRadius: "100px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "20px",
                  fontWeight: "700",
                }}
              >
                <FaAward /> منصة مهندس السلامة 2026
              </div>
              <h1
                style={{
                  color: "white",
                  fontSize: "3.5rem",
                  fontWeight: "900",
                  lineHeight: "1.2",
                  marginBottom: "20px",
                }}
              >
                مستقبلك المهني <br />{" "}
                <span style={{ color: "#F97316" }}>يبدأ من هنا</span>
              </h1>
              <p
                style={{
                  color: "#94A3B8",
                  fontSize: "1.1rem",
                  marginBottom: "35px",
                  maxWidth: "550px",
                }}
              >
                استعرض أقسامنا التعليمية المتقدمة المصممة خصيصاً لرفع كفاءة
                الكوادر الفنية.
              </p>
              <button
                className="main-btn"
                style={{
                  padding: "15px 35px",
                  borderRadius: "12px",
                  background: "#F97316",
                  color: "#fff",
                  border: "none",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/questions")}
              >
                ابدأ الآن <FaArrowLeft style={{ marginRight: "8px" }} />
              </button>
            </div>

            <div className="hero-image" data-aos="zoom-in">
              <div className="image-container">
                <img
                  src={img}
                  alt="HSE"
                  style={{ width: "100%", borderRadius: "20px" }}
                />
              </div>
            </div>
          </div>

          <div className="cards-grid-fixed">
            {[
              {
                title: "بنك الأسئلة",
                desc: "أكثر من 2000 سؤال فني متطور لمحاكاة اختبارات الأوائل.",
                icon: <MdQuiz />,
                path: "/questions",
              },
              {
                title: "القاموس التقني",
                desc: "ترجمة فورية لأكثر من 5000 مصطلح هندسي متخصص.",
                icon: <MdMenuBook />,
                path: "/terms",
              },
              {
                title: "مركز المقابلات",
                desc: "أسرار اجتياز مقابلات كبرى شركات البترول والطاقة.",
                icon: <FaBriefcase />,
                path: "/interview-prep",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="modern-card"
                data-aos="fade-up"
                data-aos-delay={i * 100}
                onClick={() => navigate(item.path)}
              >
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    background: "#1e3a8a",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.5rem",
                    color: "#fff",
                    marginBottom: "20px",
                  }}
                >
                  {item.icon}
                </div>
                <h3 style={{ color: "#fff", marginBottom: "10px" }}>
                  {item.title}
                </h3>
                <p
                  style={{
                    color: "#94A3B8",
                    fontSize: "0.9rem",
                    lineHeight: "1.6",
                  }}
                >
                  {item.desc}
                </p>
                <div
                  style={{
                    marginTop: "20px",
                    color: "#F97316",
                    fontWeight: "bold",
                    fontSize: "0.8rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  استكشف <FaChevronLeft />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
