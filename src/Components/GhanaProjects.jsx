import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, Trees, Leaf, Building2 } from "lucide-react";

const ACCENT = "#C68A2B";

const projects = [
  {
    id: 1,
    image: "/Images/astina-pa-image.png", // Replace with your image
    badge: "FLAGSHIP DEVELOPMENT",
    title: "Asitina Pa Agricultural Venture",
    description:
      "Building corporate-managed agricultural communities in Ghana that combine sustainable farming, green infrastructure, housing, education and economic opportunity into one integrated ecosystem.",

    highlights: [
      "Phase 1 investment exceeding $1 million",
      "10,000+ direct & indirect jobs targeted",
      "Designed to strengthen Ghana's food security",
      "Housing, schools, healthcare & community services",
      "Financial inclusion through agricultural innovation",
    ],

    button: "Explore Project",
  },

  {
    id: 2,
    image: "/Images/second.png", // Replace with your image
    badge: "GREEN INFRASTRUCTURE",
    title: "City Forest Ghana",
    description:
      "An urban forestry initiative delivering sustainable green infrastructure, tree planting, environmental restoration and long-term ecological planning across Ghana.",

    highlights: [
      "Urban & horticultural forestry services",
      "Large-scale nursery development",
      "Environmental restoration projects",
      "Sustainable landscape management",
      "Modelled on international best practices",
    ],

    button: "View Initiative",
  },
];

export default function GhanaProjects() {
  return (
    <section id="projects" className="py-8 lg:py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mb-10 max-w-3xl text-center"
        >
          <span
            className="inline-flex rounded-full border border-[#E6D2A3] bg-[#FFF9EE] px-5 py-2 text-xs font-bold uppercase tracking-[0.18em]"
            style={{ color: ACCENT }}
          >
            Featured Projects
          </span>

          <h2 className="mt-4 text-4xl font-black leading-tight text-[#1E1E1E] lg:text-5xl">
            Projects in Ghana
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-6 text-[#6D6D6D]">
            Designing research-backed systems that combine agriculture,
            sustainability, environmental protection and inclusive economic
            development across Ghana.
          </p>
        </motion.div>

        {/* Cards Start */}

        <div className="grid gap-8 lg:grid-cols-2">
          {/* ---------- Card 1 ---------- */}

          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="group overflow-hidden rounded-3xl border border-[#EFE7D8] bg-white shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
          >
            {/* Image */}

            <div className="relative overflow-hidden">
              <img
                src={projects[0].image}
                alt={projects[0].title}
                className="h-70 w-full object-cover transition duration-700 group-hover:scale-105"
              />

              {/* Badge */}

              <div className="absolute left-6 top-6 rounded-full bg-[#C68A2B] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-white shadow-lg">
                {projects[0].badge}
              </div>
            </div>

            {/* Content */}

            <div className="p-8">
              <div className="flex items-center gap-3">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ backgroundColor: "#FFF6E7" }}
                >
                  <Building2 size={24} color={ACCENT} />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#1E1E1E]">
                    {projects[0].title}
                  </h3>

                  <div
                    className="mt-1 flex items-center gap-2 text-sm font-medium"
                    style={{ color: ACCENT }}
                  >
                    <MapPin size={16} />
                    Ghana
                  </div>
                </div>
              </div>

              {/* Description */}

              <p className="mt-6 leading-8 text-[#676767]">
                {projects[0].description}
              </p>

              {/* Highlights */}

              <div className="mt-8 space-y-4">
                {projects[0].highlights.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div
                      className="mt-1 flex h-6 w-6 items-center justify-center rounded-full"
                      style={{ backgroundColor: "#FFF6E7" }}
                    >
                      <Leaf size={13} color={ACCENT} />
                    </div>

                    <p className="text-[15px] leading-7 text-[#555]">{item}</p>
                  </div>
                ))}
              </div>

              {/* Button */}

              <button
                className="mt-10 inline-flex items-center gap-3 rounded-xl px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: ACCENT }}
              >
                {projects[0].button}

                <ArrowUpRight size={18} />
              </button>
            </div>
          </motion.article>
          {/* ---------- Card 2 ---------- */}

          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            viewport={{ once: true }}
            className="group overflow-hidden rounded-3xl border border-[#EFE7D8] bg-white shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
          >
            {/* Image */}

            <div className="relative overflow-hidden">
              <img
                src={projects[1].image}
                alt={projects[1].title}
                className="h-70 w-full object-cover transition duration-700 group-hover:scale-105"
              />

              {/* Badge */}

              <div className="absolute left-6 top-6 rounded-full bg-[#C68A2B] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-white shadow-lg">
                {projects[1].badge}
              </div>
            </div>

            {/* Content */}

            <div className="p-8">
              <div className="flex items-center gap-3">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ backgroundColor: "#FFF6E7" }}
                >
                  <Trees size={24} color={ACCENT} />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#1E1E1E]">
                    {projects[1].title}
                  </h3>

                  <div
                    className="mt-1 flex items-center gap-2 text-sm font-medium"
                    style={{ color: ACCENT }}
                  >
                    <MapPin size={16} />
                    Ghana
                  </div>
                </div>
              </div>

              {/* Description */}

              <p className="mt-6 leading-8 text-[#676767]">
                {projects[1].description}
              </p>

              {/* Highlights */}

              <div className="mt-8 space-y-4">
                {projects[1].highlights.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div
                      className="mt-1 flex h-6 w-6 items-center justify-center rounded-full"
                      style={{ backgroundColor: "#FFF6E7" }}
                    >
                      <Leaf size={13} color={ACCENT} />
                    </div>

                    <p className="text-[15px] leading-7 text-[#555]">{item}</p>
                  </div>
                ))}
              </div>

              {/* Button */}

              <button
                className="mt-10 inline-flex items-center gap-3 rounded-xl px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: ACCENT }}
              >
                {projects[1].button}

                <ArrowUpRight size={18} />
              </button>
            </div>
          </motion.article>
        </div>
      </div>{" "}
      {/* grid */}
    </section>
  );
}
