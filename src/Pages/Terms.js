import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BiSearchAlt, BiBookBookmark } from "react-icons/bi";

export default function Terms() {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const styles = {
    container: {
      direction: "rtl",
      fontFamily: "Segoe UI, Tahoma, sans-serif",
      backgroundColor: "#F1F5F9",
      minHeight: "100vh",
      overflowX: "hidden",
    },
    headerSection: {
      background: "linear-gradient(135deg, #183A66 0%, #1e4d8a 100%)",
      color: "white",
      padding: "120px 40px",
      textAlign: "center",
      marginTop: "100px",
      marginRight: "20px",
      marginLeft: "20px",
      borderRadius: "40px",
      boxShadow: "0 25px 50px -12px rgba(24, 58, 102, 0.4)",
      position: "relative",
      overflow: "hidden",
    },
    title: { fontSize: "3.2rem", fontWeight: "900", marginBottom: "15px" },

    searchContainer: {
      maxWidth: "700px",
      margin: "-45px auto 60px auto",
      padding: "0 20px",
      position: "relative",
      zIndex: 10,
    },
    searchInput: {
      width: "100%",
      padding: "22px 60px 22px 30px",
      borderRadius: "25px",
      border: "2px solid white",
      boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
      fontSize: "1.2rem",
      outline: "none",
      textAlign: "right",
      transition: "all 0.4s ease",
      backgroundColor: "rgba(255, 255, 255, 0.95)",
      backdropFilter: "blur(10px)",
    },

    termsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
      gap: "30px",
      maxWidth: "1250px",
      margin: "0 auto",
      padding: "20px",
    },
    termCard: {
      backgroundColor: "white",
      padding: "35px",
      borderRadius: "30px",
      borderBottom: "6px solid #183A66", // خط سفلي بدلاً من جانبي لشكل مودرن
      boxShadow: "0 10px 20px rgba(0,0,0,0.02)",
      transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      position: "relative",
      overflow: "hidden",
      cursor: "pointer",
    },
  };

  const allTerms = [
    {
      en: "HSE",
      ar: "الصحة، السلامة، والبيئة",
      def: "القسم المسؤول عن حماية الموظفين والجمهور والبيئة من الأضرار.",
    },
    {
      en: "OSHA",
      ar: "أوشا",
      def: "إدارة السلامة والصحة المهنية الأمريكية، تضع المعايير العالمية لسلامة مواقع العمل.",
    },
    {
      en: "PPE",
      ar: "معدات الوقاية الشخصية",
      def: "الأدوات المصممة لحماية الموظف من الإصابات مثل الخوذة والقفازات.",
    },
    {
      en: "Risk Assessment",
      ar: "تقييم المخاطر",
      def: "عملية تحديد المخاطر المحتملة وتحليلها لتقليل احتمالية وقوع الحوادث.",
    },
    {
      en: "Hazard",
      ar: "مصدر خطر",
      def: "أي شيء يمكن أن يسبب ضرراً، مثل الأسلاك المكشوفة أو المواد الكيميائية.",
    },
    {
      en: "Near Miss",
      ar: "حادث كاد أن يقع",
      def: "واقعة لم تؤدِ إلى إصابة، ولكن كانت لديها القدرة على القيام بذلك.",
    },
    {
      en: "LOTO",
      ar: "عزل الطاقة",
      def: "Lock Out, Tag Out: إجراءات وقائية لإيقاف تشغيل الآلات أثناء الصيانة.",
    },
    {
      en: "MSDS",
      ar: "نشرة بيانات السلامة",
      def: "وثيقة تحتوي على معلومات كيميائية وكيفية التعامل معها بأمان.",
    },
    {
      en: "Ergonomics",
      ar: "هندسة العوامل البشرية",
      def: "تصميم بيئة العمل لتناسب قدرات الموظف وتقليل التعب.",
    },
    {
      en: "Work at Height",
      ar: "العمل على المرتفعات",
      def: "أي عمل يتم في مكان يمكن أن يسقط فيه الشخص مسبباً إصابة.",
    },
    {
      en: "Confined Space",
      ar: "الأماكن المغلقة",
      def: "أماكن ذات مداخل محدودة مثل الخزانات والأنفاق.",
    },
    {
      en: "Fire Triangle",
      ar: "مثلث الحريق",
      def: "العناصر الثلاثة للاشتعال: الحرارة، الوقود، والأكسجين.",
    },
    {
      en: "Incident Report",
      ar: "تقرير الحوادث",
      def: "وثيقة تصف حادثة أو موقف خطير وقع في مكان العمل.",
    },
    {
      en: "Safety Officer",
      ar: "مسؤول السلامة",
      def: "الشخص المسؤول عن تنفيذ ومتابعة إجراءات السلامة في المنشأة.",
    },

    // --- الإنشاءات ---
    {
      en: "Scaffold",
      ar: "سقالة",
      def: "هيكل مؤقت لدعم العمال والمعدات في مواقع البناء.",
    },
    {
      en: "Excavation",
      ar: "الحفر",
      def: "عملية إزالة التربة لإنشاء أساسات أو أنفاق.",
    },
    {
      en: "Swing Radius",
      ar: "نطاق دوران الونش",
      def: "المنطقة التي يمكن أن يصل إليها ذراع الرافعة أثناء الدوران.",
    },
    {
      en: "Anti-Two Block",
      ar: "جهاز منع الاصطدام المزدوج",
      def: "جهاز أمان في الرافعات يمنع اصطدام البكرة العلوية بالحمولة.",
    },
    {
      en: "Life Line",
      ar: "حبل الإنقاذ",
      def: "حبل أمان يربط فيه العامل أثناء العمل على ارتفاع.",
    },
    {
      en: "Hard Hat",
      ar: "خوذة حماية",
      def: "خوذة مصممة لحماية الرأس من السقوط والصدمات.",
    },
    {
      en: "Fall Arrest System",
      ar: "نظام إيقاف السقوط",
      def: "معدات تمنع العامل من السقوط من ارتفاع كبير.",
    },
    {
      en: "Excavation Hazard",
      ar: "مخاطر الحفر",
      def: "المخاطر المرتبطة بالحفر مثل الانهيار أو نقص الأكسجين.",
    },
    {
      en: "Permit to Work",
      ar: "تصريح العمل",
      def: "إذن رسمي يسمح بالقيام بأعمال خطرة بعد تقييم المخاطر.",
    },

    // --- المصانع الكيميائية ---
    {
      en: "Flash Point",
      ar: "درجة الاشتعال",
      def: "أقل درجة حرارة تنتج عندها الأبخرة القابلة للاشتعال شرارة.",
    },
    {
      en: "Hot Work Permit",
      ar: "تصريح الأعمال الساخنة",
      def: "إذن لأعمال تتضمن شرر أو لهب في مناطق تحتوي على مواد قابلة للاشتعال.",
    },
    {
      en: "SCBA",
      ar: "جهاز التنفس الذاتي",
      def: "جهاز تنفس مستقل يستخدم في حالات تسرب الغازات السامة.",
    },
    {
      en: "HAZOP",
      ar: "تحليل المخاطر",
      def: "دراسة المخاطر التشغيلية والعمليات الكيميائية لتحديد نقاط الخطر.",
    },
    {
      en: "Emergency Shower",
      ar: "الدش الطارئ",
      def: "استخدامه لغسل الجسم عند التعرض للمواد الكيميائية.",
    },
    {
      en: "Chemical Spill",
      ar: "انسكاب كيميائي",
      def: "تسرب مادة كيميائية ويستلزم إجراءات احتواء وتنظيف.",
    },
    {
      en: "NFPA Diamond",
      ar: "رمز نفا",
      def: "رمز يوضح المخاطر الكيميائية للمواد: حريق، صحة، تفاعل، خاصية.",
    },
    {
      en: "Oxidizer",
      ar: "مؤكسد",
      def: "مادة تزيد من احتمالية اشتعال المواد الأخرى.",
    },
    {
      en: "Static Electricity",
      ar: "الكهرباء الساكنة",
      def: "قد تسبب شرارة تؤدي لانفجار الأبخرة القابلة للاشتعال.",
    },

    // --- الأدوية ---
    {
      en: "Air Lock",
      ar: "غرفة هوائية مزدوجة",
      def: "غرفة تمنع انتقال التلوث بين مناطق المعمل المختلفة.",
    },
    {
      en: "Negative Pressure",
      ar: "ضغط سلبي",
      def: "استخدام ضغط منخفض لمنع خروج المواد الملوثة إلى الخارج.",
    },
    {
      en: "Autoclave",
      ar: "جهاز التعقيم بالبخار",
      def: "لتعقيم المعدات والنفايات البيولوجية بالبخار والضغط العالي.",
    },
    {
      en: "Biohazard",
      ar: "خطر بيولوجي",
      def: "مادة أو عامل قد يسبب أضرار صحية أو بيئية.",
    },
    {
      en: "Laminar Flow Hood",
      ar: "غطاء التدفق الصفحي",
      def: "معدات تمنع تلوث العينات أثناء العمل.",
    },
    {
      en: "PPE for Biologicals",
      ar: "معدات الوقاية للأحياء الدقيقة",
      def: "قفازات، نظارات، معاطف واقية للحماية من البكتيريا والفيروسات.",
    },
    {
      en: "Sharps Container",
      ar: "حاوية أدوات حادة",
      def: "لجمع الإبر والأدوات الحادة بطريقة آمنة.",
    },
    {
      en: "Decontamination",
      ar: "إزالة التلوث",
      def: "إجراءات لتطهير الأسطح أو المعدات من المواد الضارة.",
    },

    // --- المنسوجات ---
    {
      en: "Trip Wire",
      ar: "سلك الطوارئ",
      def: "سلك ينبه أو يوقف الماكينة عند حدوث أي حادث.",
    },
    {
      en: "Dust Collector",
      ar: "جامع الغبار",
      def: "نظام لإزالة الغبار من الهواء في مصانع النسيج.",
    },
    {
      en: "Fire Retardant Fabric",
      ar: "نسيج مقاوم للاشتعال",
      def: "أقمشة تقلل سرعة انتشار النار.",
    },
    {
      en: "Noise Level",
      ar: "مستوى الضوضاء",
      def: "القياس المسموح به لحماية العمال من الصمم.",
    },
    {
      en: "Lockout/Tagout",
      ar: "عزل/وسم الطاقة",
      def: "إجراءات لمنع تشغيل الماكينات أثناء الصيانة.",
    },
    {
      en: "Ergonomic Workstation",
      ar: "محطة عمل مريحة",
      def: "تصميم لتقليل الإجهاد والإصابات.",
    },
    {
      en: "Machine Guard",
      ar: "حاجز الماكينة",
      def: "حاجز يمنع ملامسة الأجزاء المتحركة.",
    },
    {
      en: "Cotton Dust",
      ar: "غبار القطن",
      def: "جزيئات صغيرة تسبب مشاكل تنفسية إذا لم يتم التحكم بها.",
    },
    {
      en: "Safety Signage",
      ar: "لوحات التحذير",
      def: "علامات تشير إلى المخاطر والتعليمات الواجب اتباعها.",
    },
  ];

  const filteredTerms = allTerms.filter(
    (t) =>
      t.en.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.ar.includes(searchTerm),
  );

  return (
    <div style={styles.container}>
      <style>{`
        @keyframes flow {
          0% { transform: scale(1) rotate(0deg); opacity: 0.2; }
          50% { transform: scale(1.5) rotate(180deg); opacity: 0.1; }
          100% { transform: scale(1) rotate(360deg); opacity: 0.2; }
        }
        
        .header-bg-circle {
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: white;
          top: -200px;
          left: -100px;
          animation: flow 20s infinite linear;
        }

        .search-input:focus {
          transform: scale(1.02);
          box-shadow: 0 20px 40px rgba(249, 115, 22, 0.2) !important;
          border-color: #F97316 !important;
        }

        .term-card:hover {
          transform: translateY(-15px) rotate(1deg);
          box-shadow: 0 30px 60px rgba(0,0,0,0.1) !important;
          border-bottom-color: #F97316 !important;
        }

        .term-card:hover .icon-anim {
          transform: scale(1.2) rotate(-10deg);
          color: #F97316;
        }

        .floating-tip {
          animation: floating 3s infinite ease-in-out;
        }
        @keyframes floating {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>

      <section style={styles.headerSection} data-aos="fade-down">
        <div className="header-bg-circle"></div>
        <h1 style={styles.title} data-aos="zoom-in" data-aos-delay="200">
          قاموس السلامة الذكي
        </h1>
        <p
          style={{ fontSize: "1.3rem", color: "#cbd5e1", position: "relative" }}
          data-aos="fade-up"
          data-aos-delay="400"
        >
          ابحث عن أي مصطلح تقني لتعزيز معرفتك المهنية
        </p>
      </section>

      <div
        style={styles.searchContainer}
        data-aos="zoom-in-up"
        data-aos-delay="500"
      >
        <BiSearchAlt
          style={{
            position: "absolute",
            right: "45px",
            top: "25px",
            fontSize: "1.8rem",
            color: "#183A66",
            zIndex: 11,
          }}
        />
        <input
          className="search-input"
          type="text"
          placeholder="ابحث عن مصطلح..."
          style={styles.searchInput}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div style={styles.termsGrid}>
        {filteredTerms.length > 0 ? (
          filteredTerms.map((item, index) => (
            <div
              className="term-card"
              key={index}
              style={styles.termCard}
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <BiBookBookmark
                className="icon-anim"
                style={{
                  fontSize: "2rem",
                  color: "#183A66",
                  transition: "0.3s",
                  marginBottom: "15px",
                }}
              />
              <span
                style={{
                  fontSize: "1.5rem",
                  color: "#183A66",
                  fontWeight: "900",
                  display: "block",
                }}
              >
                {item.en}
              </span>
              <span
                style={{
                  fontSize: "1.2rem",
                  color: "#F97316",
                  fontWeight: "700",
                  marginBottom: "15px",
                  display: "block",
                }}
              >
                {item.ar}
              </span>
              <p
                style={{
                  fontSize: "1rem",
                  color: "#64748B",
                  lineHeight: "1.7",
                  borderTop: "1px solid #f0f0f0",
                  paddingTop: "15px",
                }}
              >
                {item.def}
              </p>
            </div>
          ))
        ) : (
          <div
            style={{ gridColumn: "1/-1", textAlign: "center", padding: "50px" }}
            data-aos="zoom-in"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/6134/6134065.png"
              alt="no results"
              style={{ width: "100px", opacity: 0.5 }}
            />
            <p
              style={{
                marginTop: "20px",
                color: "#64748B",
                fontSize: "1.2rem",
              }}
            >
              عذراً، لم نجد ما تبحث عنه..
            </p>
          </div>
        )}
      </div>

      <div
        style={{ textAlign: "center", padding: "80px 20px" }}
        className="floating-tip"
      >
        <div
          style={{
            backgroundColor: "#183A66",
            display: "inline-block",
            padding: "15px 40px",
            borderRadius: "50px",
            color: "white",
            boxShadow: "0 10px 25px rgba(24, 58, 102, 0.2)",
          }}
        >
          <span style={{ fontWeight: "bold" }}>💡 نصيحة:</span> حفظ المصطلحات
          بالإنجليزية يمنحك أفضلية كبرى في الشركات الدولية.
        </div>
      </div>
    </div>
  );
}
