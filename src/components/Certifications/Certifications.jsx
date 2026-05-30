import React from "react";
import { certifications } from "../../constants";
import { FaAward } from "react-icons/fa";

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-[#0d1026] clip-path-custom-2">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CERTIFICATIONS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Certifications that highlight my commitment to learning and professional growth.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className="p-8 rounded-3xl border border-white/10 bg-gray-900/85 shadow-2xl shadow-purple-500/10 backdrop-blur-md transition-transform duration-300 hover:-translate-y-2"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-300">
                <FaAward size={24} />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-4">
                  {cert.img && (
                    <img
                      src={cert.img}
                      alt={`${cert.title} logo`}
                      className="w-12 h-12 object-contain rounded-xl bg-white/10 p-2"
                    />
                  )}
                  <div>
                    <h3 className="text-xl font-semibold text-white">{cert.title}</h3>
                    <p className="text-sm font-bold text-purple-400">{cert.issuer}</p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-500 uppercase tracking-[0.2em] mb-4">
              {cert.date}
            </p>
            <p className="text-gray-400 leading-7">{cert.description}</p>
            {cert.link && (
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 text-purple-400 hover:text-white font-semibold"
              >
                View Certificate
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
