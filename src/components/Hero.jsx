import React from "react";
import ProfileImage from "../assets/images/profile-pic.png"; // Import รูป
import MyResume from "../assets/resume/MyResume.pdf"; // Import Resume

const Hero = () => {
  return (
    // ใช้ Flexbox ของ Tailwind เพื่อจัดเลย์เอาต์
    <div className="flex flex-col md:flex-row items-center justify-between min-h-screen">
      {/* ส่วนข้อความ */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold text-blue-600 dark:text-blue-400">
          Arifeen Kundee
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mt-2">
          Web Developer (Laravel & React)
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          a Full-Stack Web Developer specializing in Laravel and React. I am passionate about building modern, high-performance web applications that deliver efficient, scalable solutions and exceptional user experiences.
        </p>

        {/* ส่วนปุ่ม (Call to Action) */}
        <div className="mt-8 space-x-4">
          <a
            href={MyResume}
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
