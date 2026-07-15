import React from "react";
import { useForm } from "react-hook-form";
import { CheckCircle2 } from "lucide-react";

/**
 * Contact Section — "Let's Talk." (Kofi Ofori-Mensah)
 * Color scheme — requested accent: oklch(87.9% 0.169 91.605)  (a warm gold/yellow)
 *   --color-accent:       oklch(87.9% 0.169 91.605)   buttons, focus rings, bullet dots
 *   --color-accent-dark:  oklch(79% 0.17 85)           hover state (slightly deeper gold)
 *   --color-panel:        #F7F5F0                      soft cream card background
 *   --color-heading:      #111827                      near-black headings
 *   --color-body:         #4B5563                      muted body text
 *   --color-border:       #EAE6DA                       warm neutral border
 *   --color-on-accent:    #111827                      text sitting on the gold buttons (dark, for contrast)
 *
 * Both forms (newsletter + send-a-message) use react-hook-form for validation.
 * Run: npm install react-hook-form lucide-react
 *
 * NOTE: the "Company Name" field previously shared id="name" with the
 * "Your Name" field — react-hook-form registers fields by name, so two
 * fields with the same id/name overwrite each other. Fixed to id="company".
 */

const TOPICS = [
  "Speaking invitation",
  "Media / interview request",
  "Research collaboration",
  "NeuroDigital Support",
  "Asitina Pa",
  "Other",
];

function TextField({
  id,
  label,
  type = "text",
  register,
  rules,
  error,
  as = "input",
  placeholder,
}) {
  const Tag = as;
  const baseClasses = `w-full rounded-lg border bg-white px-4 py-2.5 text-sm text-[#111827] placeholder-gray-400 outline-none transition focus:ring-2 focus:ring-[oklch(87.9%_0.169_91.605)]/60 ${
    error ? "border-red-400" : "border-[#EAE6DA]"
  }`;

  return (
    <div>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <Tag
        id={id}
        type={as === "input" ? type : undefined}
        placeholder={placeholder}
        rows={as === "textarea" ? 5 : undefined}
        className={`${baseClasses} ${as === "textarea" ? "resize-none" : ""}`}
        {...register(id, rules)}
      />
      {error && <p className="mt-1 text-xs text-red-500">{error.message}</p>}
    </div>
  );
}

function NewsletterForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({ mode: "onBlur" });

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 600));
    console.log("Subscribed:", data.email);
    reset();
  };

  return (
    <div className="rounded-xl bg-[#F7F5F0] p-6">
      <h3 className="text-base font-semibold text-[#111827]">Newsletter</h3>
      <p className="mt-2 text-sm leading-relaxed text-[#4B5563]">
        Get the research before it's published elsewhere. Occasional notes on
        neurodivergent digital wellbeing research, NeuroDigital Support's
        progress, and what I'm reading. No noise — just what's genuinely worth
        your time.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="mt-4 flex flex-col gap-2 sm:flex-row"
      >
        <div className="flex-1">
          <TextField
            id="email"
            label="Your email"
            type="email"
            placeholder="Your email"
            register={register}
            error={errors.email}
            rules={{
              required: "Email is required.",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email address.",
              },
            }}
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="whitespace-nowrap cursor-pointer rounded-lg bg-[oklch(87.9%_0.169_91.605)] px-5 py-2.5 text-sm font-semibold text-[#111827] transition hover:bg-[oklch(79%_0.17_85)] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "Subscribing…" : "Subscribe"}
        </button>
      </form>

      {isSubmitSuccessful && (
        <p className="mt-3 flex items-center gap-1.5 text-sm font-medium text-[#8a6d00]">
          <CheckCircle2 className="h-4 w-4" /> You're subscribed — thank you.
        </p>
      )}
    </div>
  );
}

function SendMessageForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({ mode: "onBlur" });

  const onSubmit = async (data) => {
    // Replace with your actual send-message API call.
    await new Promise((resolve) => setTimeout(resolve, 800));
    console.log("Message submitted:", data);
    reset();
  };

  return (
    <div className="rounded-2xl bg-[#F7F5F0] p-5 sm:p-6">
      <h3 className="text-xl font-bold text-[#111827]">Send a Message</h3>
      <p className="mt-1 text-sm text-[#4B5563]">
        Fields marked with * are required.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="mt-6 space-y-4"
      >
        <TextField
          id="name"
          label="Your Name"
          placeholder="Your Name *"
          register={register}
          error={errors.name}
          rules={{ required: "Please enter your name." }}
        />

        <TextField
          id="email"
          label="Your Email"
          type="email"
          placeholder="Your Email *"
          register={register}
          error={errors.email}
          rules={{
            required: "Please enter your email.",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Enter a valid email address.",
            },
          }}
        />

        <TextField
          id="company"
          label="Company Name"
          placeholder="Enter your Company Name *"
          register={register}
          error={errors.company}
          rules={{ required: "Please enter your company name." }}
        />

        <div>
          <label htmlFor="topic" className="sr-only">
            Select a Topic
          </label>
          <select
            id="topic"
            defaultValue=""
            className={`w-full rounded-lg border bg-white px-4 py-2.5 text-sm outline-none transition focus:ring-2 focus:ring-[oklch(87.9%_0.169_91.605)]/60 ${
              errors.topic
                ? "border-red-400 text-[#111827]"
                : "border-[#EAE6DA] text-gray-400"
            }`}
            {...register("topic")}
          >
            <option value="" disabled>
              Select a Topic
            </option>
            {TOPICS.map((topic) => (
              <option key={topic} value={topic} className="text-[#111827]">
                {topic}
              </option>
            ))}
          </select>
        </div>

        <TextField
          id="message"
          label="Your Message"
          as="textarea"
          placeholder="Your Message *"
          register={register}
          error={errors.message}
          rules={{
            required: "Please enter a message.",
            minLength: {
              value: 10,
              message: "Message should be at least 10 characters.",
            },
          }}
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full cursor-pointer rounded-lg bg-[oklch(87.9%_0.169_91.605)] py-3 text-sm font-bold uppercase tracking-wide text-[#111827] transition hover:bg-[oklch(79%_0.17_85)] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "Sending…" : "Send Message"}
        </button>

        {isSubmitSuccessful && (
          <p className="flex items-center gap-1.5 text-sm font-medium text-[#8a6d00]">
            <CheckCircle2 className="h-4 w-4" /> Message sent — thank you, I'll
            get back to you soon.
          </p>
        )}
      </form>
    </div>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-18 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20">
        {/* Left column */}
        <div>
          <h2 className="text-4xl font-extrabold text-[#111827]">
            Let's Talk.
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-[#4B5563]">
            Whether you're a researcher, a platform, a journalist, or an
            organisation working on digital inclusion — there's likely a reason
            to connect.
          </p>

          <div className="mt-3">
            <h3 className="text-base font-semibold text-[#111827]">
              Speaking Invitation
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-[#4B5563]">
              Kofi speaks on neurodivergent digital experience, algorithmic
              exclusion, and building inclusive digital marketing practice.
            </p>
          </div>

          <div className="mt-3">
            <h3 className="text-base font-semibold text-[#111827]">
              Media Invitation
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-[#4B5563]">
              Available for interviews and commentary on neurodivergent digital
              wellbeing, social media and mental health, and inclusive design.
              For media inquiries, interview requests, or press coverage, please
              contact our media relations team.
            </p>
          </div>

          <div className="mt-8">
            <NewsletterForm />
          </div>
        </div>

        {/* Right column */}
        <div>
          <SendMessageForm />
        </div>
      </div>
    </section>
  );
}
