"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Toast from "../Toast";
import { ContactForm, ContactSchema } from "@/app/schemas/contactSchema";

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
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        reset();
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
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
        <h2 id="contact-title" className="fs-1">Ready to Automate Your Business?</h2>
        <p className="lead ff-raleway">
          Contact us today to get a custom AI-powered WhatsApp bot and start transforming your customer engagement!
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
