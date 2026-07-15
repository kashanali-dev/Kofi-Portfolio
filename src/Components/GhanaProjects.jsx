import { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  MapPin,
  Trees,
  Leaf,
  Building2,
  BookOpen,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const ACCENT = "#C68A2B";

// Updated project data aligned with actual documents and book cover assets
const projects = [
  {
    id: 1,
    icon: Building2,
    image: "/Images/astina-pa-image.png",
    badge: "FLAGSHIP DEVELOPMENT",
    title: "Asitina Pa Agri-Venture",
    description:
      "Building corporate-managed agricultural towns in Ghana that integrate sustainable farming, modern housing, education, healthcare, and clean water into a scalable model.",
    highlights: [
      "Phase 1 investment over $1 million",
      "Targeting 10,000+ jobs",
      "Integrated housing, schools & healthcare",
    ],
    button: "Explore Project",
  },
  {
    id: 2,
    icon: Trees,
    image: "/Images/second.png",
    badge: "GREEN INFRASTRUCTURE",
    title: "City Forest Ghana",
    description:
      "A professional urban forestry initiative that designs and maintains green spaces and runs one of the largest nurseries in West Africa to supply regional restoration projects.",
    highlights: [
      "Large-scale nursery development",
      "Urban & horticultural forestry services",
      "Modelled on international best practices",
    ],
    button: "View Initiative",
  },
  {
    id: 3,
    icon: BookOpen,
    image: "/Images/asten.png",
    badge: "PUBLICATION",
    title: "The Invisible Users",
    description:
      "A research-backed book exploring how digital platforms and modern social algorithms shape belonging, mental health, and exclusion for neurodivergent minds.",
    highlights: [
      "Focuses on platform ethics",
      "Centered on UK adult experiences",
      "Translates research to practice",
    ],
    button: "Read Publication",
  },
  {
    id: 4,
    icon: BookOpen,
    image: "/Images/shatterd.png",
    badge: "PUBLICATION",
    title: "Shattered Bonds",
    description:
      "An in-depth analysis looking closely at family dynamics, diaspora parenting, and social development outcomes within the UK's Ghanaian community.",
    highlights: [
      "Diaspora youth outcome focus",
      "Sociological & cultural insights",
      "Practical communal recommendations",
    ],
    button: "Explore Book",
  },
  {
    id: 5,
    icon: BookOpen,
    image: "/Images/neurodigital.png",
    badge: "RESEARCH WORK",
    title: "Neurodiversity Beyond the West",
    description:
      "A study expanding the discourse around neurodivergent experiences, challenging westernized frameworks with global perspectives and research.",
    highlights: [
      "Global neurodiversity frameworks",
      "Intersectional social research",
      "Challenging traditional UX norms",
    ],
    button: "View Research",
  },
];

// ===================================
// REUSABLE PROJECT CARD
// ===================================

function ProjectCard({ project }) {
  const Icon = project.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[#EFE7D8] bg-white shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-lg"
    >
      {/* IMAGE */}
      <div className="relative overflow-hidden aspect-16/10 bg-[#FFF9EE]">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          onError={(e) => {
            e.target.src =
              "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&q=80&w=600";
          }}
        />

        {/* BADGE */}
        <div className="absolute left-5 top-5 rounded-full bg-[#C68A2B] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-white shadow-lg">
          {project.badge}
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex flex-1 flex-col p-6 lg:p-8">
        <div className="flex items-start gap-3.5">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FFF6E7]">
            <Icon size={22} color={ACCENT} />
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#1E1E1E] leading-snug line-clamp-1">
              {project.title}
            </h3>

            <div
              className="mt-1 flex items-center gap-1.5 text-xs font-semibold"
              style={{ color: ACCENT }}
            >
              <MapPin size={14} />
              Ghana / UK
            </div>
          </div>
        </div>

        {/* DESCRIPTION */}
        <p className="mt-5 text-[14px] leading-relaxed text-[#676767] line-clamp-3">
          {project.description}
        </p>

        {/* HIGHLIGHTS */}
        <div className="mt-6 space-y-3 mb-6">
          {project.highlights.map((item, index) => (
            <div key={index} className="flex items-start gap-2.5">
              <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#FFF6E7]">
                <Leaf size={11} color={ACCENT} />
              </div>

              <p className="text-[13.5px] leading-relaxed text-[#555] line-clamp-1">
                {item}
              </p>
            </div>
          ))}
        </div>

        {/* BUTTON */}
        <button className="mt-auto inline-flex w-fit cursor-pointer items-center gap-2.5 rounded-xl bg-[#C68A2B] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-[#B8771F]">
          {project.button}
          <ArrowUpRight size={16} />
        </button>
      </div>
    </motion.article>
  );
}

// ===================================
// MAIN COMPONENT EXPORT
// ===================================

export default function GhanaProjects() {
  const [swiperLoaded, setSwiperLoaded] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section
      id="projects"
      className="py-12 lg:py-16 bg-[#FCFBF8] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-10 max-w-3xl text-center"
        >
          <span
            className="inline-flex rounded-full border border-[#E6D2A3] bg-[#FFF9EE] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em]"
            style={{ color: ACCENT }}
          >
            Featured Initiatives
          </span>

          <h2 className="mt-3 text-3xl font-black leading-tight text-[#1E1E1E] lg:text-4xl">
            Projects & Publications
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-[14px] leading-relaxed text-[#6D6D6D]">
            Designing research-backed solutions and sustainable systems that
            bridge agriculture, forestry, environmental protection, and
            inclusive digital research.
          </p>
        </motion.div>

        {/* SLIDER WRAPPER WITH ONLY ARROW BUTTONS */}
        <div className="relative px-2 md:px-12">
          {/* Custom Prev Button (Visible on all screen sizes) */}
          <button
            ref={prevRef}
            className="prev-btn absolute -left-2 md:left-0 top-1/2 -translate-y-1/2 z-10 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-[#EFE7D8] bg-white text-[#1E1E1E] shadow-md transition-all duration-300 hover:bg-[#FFF6E7] hover:text-[#C68A2B] active:scale-95"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Custom Next Button (Visible on all screen sizes) */}
          <button
            ref={nextRef}
            className="next-btn absolute -right-2 md:right-0 top-1/2 -translate-y-1/2 z-10 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-[#EFE7D8] bg-white text-[#1E1E1E] shadow-md transition-all duration-300 hover:bg-[#FFF6E7] hover:text-[#C68A2B] active:scale-95"
          >
            <ChevronRight size={20} />
          </button>

          {/* Swiper Slider (Without Pagination Module) */}
          <Swiper
            modules={[Navigation, Autoplay]}
            loop={true}
            speed={900}
            spaceBetween={24}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            onInit={() => setSwiperLoaded(true)}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
            }}
            className="projectSwiper"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id} className="h-auto">
                <ProjectCard project={project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
