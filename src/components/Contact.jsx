import React from 'react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // เพิ่ม Logic การส่งฟอร์ม (เช่น ใช้ Formspree, Netlify Forms, หรือ API)
    alert('ขอบคุณสำหรับการติดต่อ!');
  };

  return (
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
        Contact Me
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
        สนใจร่วมงานหรือมีคำถาม? สามารถติดต่อฉันได้ผ่านฟอร์มด้านล่าง
      </p>

      <form onSubmit={handleSubmit} className="space-y-6 text-left">
        <div>
          <label htmlFor="name" className="block text-sm font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm dark:bg-gray-700 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm dark:bg-gray-700 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm dark:bg-gray-700 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500"
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;