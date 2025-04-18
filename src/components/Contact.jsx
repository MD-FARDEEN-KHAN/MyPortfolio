import React, { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("access_key", "7faad6a4-2c85-4743-a2d9-ca1226d03db2");
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("message", form.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
        alert("Thank you! I will get back to you soon.");
        setForm({ name: "", email: "", message: "" });
      } else {
        alert("Submission failed, please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <div className="xl:mt-12 flex flex-col gap-10 overflow-hidden">
      {/* Earth Canvas First */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>

      {/* Contact Section Second */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        {submitted ? (
          <p className="text-green-500 font-medium mt-4">Your message has been sent successfully!</p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
            <input type="hidden" name="botcheck" style={{ display: "none" }} />

            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                required
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                required
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Enter your message"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                required
              />
            </label>

            <button
              type="submit"
              className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        )}

        {/* Larger Social Media Icons */}
        <div className="mt-10 flex justify-center gap-8">
          <a href="https://www.linkedin.com/in/md-fardeen-ismail-khan/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-white text-5xl hover:text-blue-500 transition duration-300 bg-gray-800 p-4 rounded-full" />
          </a>
          <a href="https://github.com/md-fardeen-khan" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-white text-5xl hover:text-gray-400 transition duration-300 bg-gray-800 p-4 rounded-full" />
          </a>
          <a href="https://instagram.com/your-instagram" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-white text-5xl hover:text-pink-500 transition duration-300 bg-gray-800 p-4 rounded-full" />
          </a>
        </div>
      </motion.div>

      {/* Footer */}
      <footer className="text-center text-gray-400 text-sm mt-8">
        &copy; {new Date().getFullYear()} Fardeen Khan. All rights reserved.
      </footer>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");

