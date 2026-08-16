import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function LogoIcon({ className = "" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="14" x="2" y="3" rx="2" />
      <line x1="8" x2="16" y1="21" y2="21" />
      <line x1="12" x2="12" y1="17" y2="21" />
    </svg>
  );
}

function Home() {
  return (
    <div className="min-h-screen bg-[#f8faff] font-sans text-[#333]">
      {/* Hero Section */}
      <header className="bg-gradient-to-b from-[#1e56a0] to-[#003366] text-white py-[60px] px-5 rounded-b-[50%_20px]">
        <div className="container mx-auto max-w-[900px] text-center">
          <div className="flex justify-center mb-8">
            <div className="group relative w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.15)] rotate-45 hover:rotate-0 transition-all duration-500 cursor-pointer">
              <LogoIcon className="w-10 h-10 text-white -rotate-45 group-hover:rotate-0 transition-all duration-500" />
            </div>
          </div>
          <h1 className="text-[2.8rem] font-bold mb-[10px] drop-shadow-md">إبداع برو</h1>
          <p className="text-[1.1rem] opacity-90 font-light tracking-wide">IBDA3 PRO • نصمم حلمك بإتقان</p>
        </div>
      </header>

      {/* Services Section */}
      <section className="services">
        <div className="container mx-auto max-w-[900px] px-5 text-center">
          <h2 className="text-[1.5rem] text-[#003366] font-bold mt-[40px] mb-[25px]">
            <span>🛠️</span> خدمات مشروعك
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {/* Service 1 */}
            <Link to="/web-design" className="block bg-white border-2 border-[#d1e3f8] rounded-[15px] py-[30px] px-[15px] transition-transform duration-300 hover:-translate-y-[5px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.05)] text-inherit no-underline">
              <div className="text-[2.5rem] mb-[15px]">🌐</div>
              <h3 className="text-[#003366] font-bold mb-[10px] text-[1.17em]">تصميم المواقع</h3>
              <p className="text-[0.9rem] text-[#777]">HTML • WordPress • متاجر إلكترونية</p>
            </Link>

            {/* Service 2 */}
            <Link to="/image-design" className="block bg-white border-2 border-[#d1e3f8] rounded-[15px] py-[30px] px-[15px] transition-transform duration-300 hover:-translate-y-[5px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.05)] text-inherit no-underline">
              <div className="text-[2.5rem] mb-[15px]">🖼️</div>
              <h3 className="text-[#003366] font-bold mb-[10px] text-[1.17em]">تصميم الصور</h3>
              <p className="text-[0.9rem] text-[#777]">بوستات • إعلانات • فلايرات • بانرات</p>
            </Link>

            {/* Service 3 */}
            <Link to="/visual-identity" className="block bg-white border-2 border-[#d1e3f8] rounded-[15px] py-[30px] px-[15px] transition-transform duration-300 hover:-translate-y-[5px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.05)] text-inherit no-underline">
              <div className="text-[2.5rem] mb-[15px]">🎯</div>
              <h3 className="text-[#003366] font-bold mb-[10px] text-[1.17em]">الهوية البصرية</h3>
              <p className="text-[0.9rem] text-[#777]">لوغو • بطاقات أعمال • تصاميم</p>
            </Link>

            {/* Service 4 */}
            <Link to="/resume-design" className="block bg-white border-2 border-[#d1e3f8] rounded-[15px] py-[30px] px-[15px] transition-transform duration-300 hover:-translate-y-[5px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.05)] text-inherit no-underline">
              <div className="text-[2.5rem] mb-[15px]">📄</div>
              <h3 className="text-[#003366] font-bold mb-[10px] text-[1.17em]">السيرة الذاتية</h3>
              <p className="text-[0.9rem] text-[#777]">CV احترافي بتصميم عصري</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact pb-20">
        <div className="container mx-auto max-w-[900px] px-5 text-center">
          <h2 className="text-[1.5rem] text-[#003366] font-bold mt-[40px] mb-[25px]">
            <span>📞</span> أزرار التواصل
          </h2>
          
          <a 
            href="#" 
            className="flex justify-between items-center bg-[#1877f2] text-white font-bold text-[1.2rem] py-[15px] px-[30px] mx-auto my-[15px] max-w-[500px] rounded-[10px] transition-opacity hover:opacity-90"
          >
            Facebook <span className="text-2xl leading-none font-serif">f</span>
          </a>
          
          <a 
            href="https://wa.me/22244254269?text=مرحباً، أريد الاستفسار عن خدمات إبداع برو" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-between items-center bg-[#25d366] text-white font-bold text-[1.2rem] py-[15px] px-[30px] mx-auto my-[15px] max-w-[500px] rounded-[10px] transition-opacity hover:opacity-90"
          >
            WhatsApp <span>💬</span>
          </a>
          
          <div className="bg-[#003366] text-white p-[25px] rounded-[15px] mt-[30px] max-w-[500px] mx-auto">
            <p>📲 للتواصل عبر واتساب</p>
            <div className="text-[2.2rem] tracking-[5px] my-[10px] font-bold font-mono" dir="ltr">
              44254269
            </div>
            <small>متاح على واتساب وفيسبوك</small>
          </div>
        </div>
      </section>
    </div>
  );
}

function WebDesignService() {
  return (
    <div className="min-h-screen bg-[#f8faff] font-sans text-[#333]">
      <div className="py-[60px] px-5 text-center">
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-tr from-[#1e56a0] to-[#003366] rounded-2xl flex items-center justify-center shadow-lg rotate-45">
            <LogoIcon className="w-8 h-8 text-white -rotate-45" />
          </div>
        </div>
        <h1 className="text-[2em] font-bold mb-[0.67em]">خدمة تصميم المواقع الاحترافية 🌐</h1>
        <p className="mt-[20px] text-[1.2rem] text-[#555] mb-8">
          نقدم لك مواقع سريعة، متجاوبة مع الجوال، وبتصاميم عصرية تناسب مشروعك.
        </p>

        <div className="mt-8 text-right max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-slate-100 mb-8">
          <h2 className="text-2xl font-bold text-[#003366] mb-6 border-b border-slate-100 pb-4">ما يمكننا القيام به:</h2>
          <ul className="space-y-4 text-slate-700 text-lg">
            <li className="flex items-center gap-3"><span className="text-green-500 text-xl">✅</span> تصميم متاجر إلكترونية متكاملة</li>
            <li className="flex items-center gap-3"><span className="text-green-500 text-xl">✅</span> مواقع تعريفية للشركات والمؤسسات</li>
            <li className="flex items-center gap-3"><span className="text-green-500 text-xl">✅</span> مدونات شخصية ومواقع إخبارية</li>
            <li className="flex items-center gap-3"><span className="text-green-500 text-xl">✅</span> واجهات متجاوبة مع جميع الشاشات (Responsive)</li>
          </ul>
        </div>
        
        <a 
          href="https://wa.me/22244254269?text=مرحباً، أريد الاستفسار عن خدمة تصميم المواقع" 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25d366] text-white py-[20px] px-[40px] text-[1.5rem] no-underline rounded-[50px] inline-block mt-[30px] shadow-[0_4px_15px_rgba(37,211,102,0.3)] transition-transform hover:-translate-y-1"
        >
          ✅ اطلب الآن عبر واتساب
        </a>

        <Link to="/" className="block mt-[20px] text-[#1e56a0] hover:underline">
          ← العودة للرئيسية
        </Link>
      </div>
    </div>
  );
}

function ImageDesignService() {
  return (
    <div className="min-h-screen bg-[#f8faff] font-sans text-[#333]">
      <div className="py-[60px] px-5 text-center">
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-tr from-[#1e56a0] to-[#003366] rounded-2xl flex items-center justify-center shadow-lg rotate-45">
            <LogoIcon className="w-8 h-8 text-white -rotate-45" />
          </div>
        </div>
        <h1 className="text-[2em] font-bold mb-[0.67em]">خدمة تصميم الصور الإبداعية 🖼️</h1>
        <p className="mt-[20px] text-[1.2rem] text-[#555] mb-8">
          بوستات سوشيال ميديا، إعلانات، وفلايرات تجذب الانتباه.
        </p>

        <div className="mt-8 text-right max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-slate-100 mb-8">
          <h2 className="text-2xl font-bold text-[#003366] mb-6 border-b border-slate-100 pb-4">أعمالنا وما نقدمه:</h2>
          <ul className="space-y-4 text-slate-700 text-lg">
            <li className="flex items-center gap-3"><span className="text-blue-500 text-xl">🎨</span> تصاميم بوستات سوشيال ميديا (انستغرام، فيسبوك)</li>
            <li className="flex items-center gap-3"><span className="text-blue-500 text-xl">🎨</span> بانرات إعلانية جذابة للحملات التسويقية</li>
            <li className="flex items-center gap-3"><span className="text-blue-500 text-xl">🎨</span> فلايرات وبروشورات جاهزة للطباعة</li>
            <li className="flex items-center gap-3"><span className="text-blue-500 text-xl">🎨</span> تعديل وتحسين الصور باحترافية عالية</li>
          </ul>
        </div>
        
        <a 
          href="https://wa.me/22244254269?text=مرحباً، أريد الاستفسار عن خدمة تصميم الصور" 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25d366] text-white py-[15px] px-[30px] text-[1.2rem] no-underline rounded-[30px] inline-block mt-[20px] shadow-[0_4px_15px_rgba(37,211,102,0.3)] transition-transform hover:-translate-y-1"
        >
          ✅ اطلب الآن عبر واتساب
        </a>

        <br /><br />
        <Link to="/" className="text-[#1e56a0] hover:underline">
          العودة للرئيسية
        </Link>
      </div>
    </div>
  );
}

function VisualIdentityService() {
  return (
    <div className="min-h-screen bg-[#f8faff] font-sans text-[#333]">
      <div className="py-[60px] px-5 text-center">
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-tr from-[#1e56a0] to-[#003366] rounded-2xl flex items-center justify-center shadow-lg rotate-45">
            <LogoIcon className="w-8 h-8 text-white -rotate-45" />
          </div>
        </div>
        <h1 className="text-[2em] font-bold mb-[0.67em]">خدمة تصميم الهوية البصرية 🎯</h1>
        <p className="mt-[20px] text-[1.2rem] text-[#555] mb-8">
          تصميم لوجو احترافي وبطاقات أعمال تعكس قوة مشروعك.
        </p>

        <div className="mt-8 text-right max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-slate-100 mb-8">
          <h2 className="text-2xl font-bold text-[#003366] mb-6 border-b border-slate-100 pb-4">عناصر الهوية التي نصممها:</h2>
          <ul className="space-y-4 text-slate-700 text-lg">
            <li className="flex items-center gap-3"><span className="text-amber-500 text-xl">✨</span> تصميم شعار (Logo) مبتكر يعبر عن نشاطك</li>
            <li className="flex items-center gap-3"><span className="text-amber-500 text-xl">✨</span> بطاقات أعمال (Business Cards) احترافية</li>
            <li className="flex items-center gap-3"><span className="text-amber-500 text-xl">✨</span> أوراق رسمية ومراسلات (Letterheads & Envelopes)</li>
            <li className="flex items-center gap-3"><span className="text-amber-500 text-xl">✨</span> دليل الهوية البصرية (Brand Guidelines)</li>
          </ul>
        </div>
        
        <a 
          href="https://wa.me/22244254269?text=مرحباً، أريد الاستفسار عن خدمة تصميم الهوية البصرية" 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25d366] text-white py-[15px] px-[30px] text-[1.2rem] no-underline rounded-[30px] inline-block mt-[20px] shadow-[0_4px_15px_rgba(37,211,102,0.3)] transition-transform hover:-translate-y-1"
        >
          ✅ اطلب الآن عبر واتساب
        </a>

        <br /><br />
        <Link to="/" className="text-[#1e56a0] hover:underline">
          العودة للرئيسية
        </Link>
      </div>
    </div>
  );
}

function ResumeDesignService() {
  return (
    <div className="min-h-screen bg-[#f8faff] font-sans text-[#333]">
      <div className="py-[60px] px-5 text-center">
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-tr from-[#1e56a0] to-[#003366] rounded-2xl flex items-center justify-center shadow-lg rotate-45">
            <LogoIcon className="w-8 h-8 text-white -rotate-45" />
          </div>
        </div>
        <h1 className="text-[2em] font-bold mb-[0.67em]">خدمة تصميم السيرة الذاتية 📄</h1>
        <p className="mt-[20px] text-[1.2rem] text-[#555] mb-8">
          تنسيق CV عصري بنظام ATS لضمان قبولك في الوظائف.
        </p>

        <div className="mt-8 text-right max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-slate-100 mb-8">
          <h2 className="text-2xl font-bold text-[#003366] mb-6 border-b border-slate-100 pb-4">مميزات السيرة الذاتية لدينا:</h2>
          <ul className="space-y-4 text-slate-700 text-lg">
            <li className="flex items-center gap-3"><span className="text-purple-500 text-xl">⭐</span> قوالب احترافية متوافقة مع أنظمة الفحص (ATS)</li>
            <li className="flex items-center gap-3"><span className="text-purple-500 text-xl">⭐</span> تصميم عصري وجذاب يلفت انتباه مسؤولي التوظيف</li>
            <li className="flex items-center gap-3"><span className="text-purple-500 text-xl">⭐</span> ترتيب وتنسيق المحتوى لإبراز مهاراتك وخبراتك</li>
            <li className="flex items-center gap-3"><span className="text-purple-500 text-xl">⭐</span> تسليم بصيغة PDF عالية الجودة وجاهزة للطباعة</li>
          </ul>
        </div>
        
        <a 
          href="https://wa.me/22244254269?text=مرحباً، أريد الاستفسار عن خدمة تصميم السيرة الذاتية" 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25d366] text-white py-[15px] px-[30px] text-[1.2rem] no-underline rounded-[30px] inline-block mt-[20px] shadow-[0_4px_15px_rgba(37,211,102,0.3)] transition-transform hover:-translate-y-1"
        >
          ✅ اطلب الآن عبر واتساب
        </a>

        <br /><br />
        <Link to="/" className="text-[#1e56a0] hover:underline">
          العودة للرئيسية
        </Link>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/web-design" element={<WebDesignService />} />
        <Route path="/image-design" element={<ImageDesignService />} />
        <Route path="/visual-identity" element={<VisualIdentityService />} />
        <Route path="/resume-design" element={<ResumeDesignService />} />
      </Routes>
    </Router>
  );
}
