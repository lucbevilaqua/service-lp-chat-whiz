"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Toast from "../Toast";

const ContactSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  companyName: z.string().min(1, "Company name is required"),
  contact: z
    .string()
    .regex(/^\+\d{1,3}\s?\d{4,}$/, "Enter a valid phone number with country code")
    .optional()
    .or(z.literal("")),
  email: z.string().email("Enter a valid email"),
  message: z.string().optional(),
});

type ContactForm = z.infer<typeof ContactSchema>;

export default function ContactUs() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(ContactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    // TODO: enviar dados para o form
    console.log("Form submitted:", data);
    reset();
  };

  const handleHideToast = () => {
    reset(undefined, { keepIsSubmitSuccessful: false });
  }

  return (
    <section
      className="row p-5"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="col-12 col-md">
        <h2 id="contact-title" className="fs-1">Contact us</h2>
        <p className="lead ff-raleway">
          Want to work together? Fill out the form and we&apos;ll be in touch soon! We&apos;ll be happy to talk to you.
        </p>
      </div>
      <div className="col-12 col-md">
        <form className="text-start" onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="mb-3">
            <label htmlFor="fullName" className="form-label">
              Full Name *
            </label>
            <input
              id="fullName"
              type="text"
              className={`form-control${errors.fullName ? " is-invalid" : ""}`}
              {...register("fullName")}
              aria-required="true"
              required
            />
            {errors.fullName && (
              <div className="invalid-feedback" aria-live="polite">{errors.fullName.message}</div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="companyName" className="form-label">
              Company Name *
            </label>
            <input
              id="companyName"
              type="text"
              className={`form-control${errors.companyName ? " is-invalid" : ""}`}
              {...register("companyName")}
              aria-required="true"
              required
            />
            {errors.companyName && (
              <div className="invalid-feedback" aria-live="polite">{errors.companyName.message}</div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="contact" className="form-label">
              Contact (Phone with country code)
            </label>
            <input
              id="contact"
              type="tel"
              className={`form-control${errors.contact ? " is-invalid" : ""}`}
              placeholder="+55 11999999999"
              {...register("contact")}
            />
            {errors.contact && (
              <div className="invalid-feedback" aria-live="polite">{errors.contact.message}</div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email *
            </label>
            <input
              id="email"
              type="email"
              className={`form-control${errors.email ? " is-invalid" : ""}`}
              {...register("email")}
              aria-required="true"
              required
            />
            {errors.email && (
              <div className="invalid-feedback" aria-live="polite">{errors.email.message}</div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              id="message"
              className="form-control"
              rows={3}
              {...register("message")}
            />
          </div>
          <button type="submit" className="btn btn-black" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                Sending...
              </>
            ) : (
              "Send"
            )}
          </button>
        </form>
      </div>
      {/* Toast de sucesso */}
      <Toast
        show={isSubmitSuccessful}
        message="Your message has been sent successfully! We'll get back to you soon."
        onHide={handleHideToast}
      />
    </section>
  );
}
