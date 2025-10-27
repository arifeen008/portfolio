import React from "react";
import ProfileImage from "../assets/images/profile-pic.jpg"; // Import รูป
import ResumePDF from "../assets/resume/YourName_CV.pdf"; // Import Resume

const Hero = () => {
  return (
    // ใช้ Flexbox ของ Tailwind เพื่อจัดเลย์เอาต์
    <div className="flex flex-col md:flex-row items-center justify-between min-h-screen">
      {/* ส่วนข้อความ */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold text-blue-600 dark:text-blue-400">
          สวัสดีครับ, ผม นายอารีฟีน กุลดี
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mt-2">
          Web Developer (Laravel & React)
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          นักพัฒนาที่มุ่งเน้นการสร้างเว็บแอปพลิเคชันที่มีประสิทธิภาพและประสบการณ์ผู้ใช้ที่ดี
        </p>

        {/* ส่วนปุ่ม (Call to Action) */}
        <div className="mt-8 space-x-4">
          <a
            href="#contact"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            ติดต่อฉัน
          </a>
          <a
            href={ResumePDF}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white font-semibold rounded-lg shadow-md hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-300"
          >
            ดาวน์โหลด CV
          </a>
        </div>
      </div>

      {/* ส่วนรูปภาพ */}
      <div className="md:w-1/3 mt-10 md:mt-0">
        <img
          src={ProfileImage}
          alt="Your Name"
          className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover mx-auto shadow-xl"
        />
      </div>
    </div>
  );
};

export default Hero;
