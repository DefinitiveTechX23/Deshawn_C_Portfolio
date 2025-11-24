"use client"

import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-orange-300 via-cyan-200 to-orange-400">
      <section className="w-full px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send me a message</h2>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              className="space-y-6"
            >
              {/* Required hidden input for Netlify */}
              <input type="hidden" name="form-name" value="contact" />

              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                             focus:ring-2 focus:ring-orange-500 focus:border-transparent 
                             text-black bg-white placeholder-gray-500"
                  placeholder="Enter your name"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                             focus:ring-2 focus:ring-orange-500 focus:border-transparent 
                             text-black bg-white placeholder-gray-500"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                             focus:ring-2 focus:ring-orange-500 focus:border-transparent 
                             text-black bg-white placeholder-gray-500"
                  placeholder="Write your message here..."
                  required
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-orange-500 text-white font-semibold py-3 rounded-lg 
                           hover:bg-orange-600 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
            <p className="text-gray-700 mb-4">Feel free to reach out to me directly:</p>
            <ul className="space-y-2 text-gray-600">
              <li>📧 Email: yourname@example.com</li>
              <li>📱 Phone: (555) 123-4567</li>
              <li>🌐 Portfolio: yourportfolio.com</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}