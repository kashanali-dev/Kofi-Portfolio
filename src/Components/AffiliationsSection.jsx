import React from "react";

// Client ke logos aur links ka data array
const affiliations = [
  {
    name: "University of Roehampton London",
    logoUrl: "/Images/unique.jpeg", // Image 1 (Roehampton Logo)
    link: "https://www.roehampton.ac.uk", // Relevant Link
    description: "MSc Digital Marketing Research & Project Coordination",
  },
  {
    name: "Business Insider Africa",
    logoUrl: "/Images/community.jpeg", // Image 2 (Business Insider Africa Logo)
    link: "https://africa.businessinsider.com", // Relevant Link
    description: "Featured Commentary & Media Coverage",
  },
];

export default function AffiliationsSection() {
  return (
    <section className="bg-slate-50 py-16 px-8 md:px-10 border-t border-b border-slate-100">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Header */}
        <p className="text-xs font-semibold text-emerald-600 tracking-widest uppercase mb-2">
          Academic Affiliations & Media
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          Trusted By & Featured In
        </h2>
        <p className="text-sm md:text-base text-slate-500 max-w-xl mx-auto mb-12">
          Bridging academic research with industry-leading digital marketing and
          ethics discussion.
        </p>

        {/* Logos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center justify-center max-w-4xl mx-auto">
          {affiliations.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-between p-8 bg-white rounded-2xl shadow-sm border border-slate-100 hover:border-emerald-500/30 hover:shadow-md transition-all duration-300 ease-in-out h-full min-h-[220px]"
            >
              {/* Logo Container */}
              <div className="w-full flex items-center justify-center h-24 mb-6">
                <img
                  src={item.logoUrl}
                  alt={`${item.name} logo`}
                  className="max-h-full max-w-[80%] object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
                />
              </div>

              {/* Description & Link Text */}
              <div className="text-center">
                <p className="text-xs text-slate-400 font-medium mb-1 uppercase tracking-wider">
                  {item.name}
                </p>
                <span className="inline-flex items-center text-sm font-semibold text-slate-700 group-hover:text-emerald-600 transition-colors duration-200">
                  View Profile
                  <svg
                    className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
