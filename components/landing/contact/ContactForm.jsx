"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Send, Sparkles, Stars } from "lucide-react";
import { useActionState } from "react";
import { sendContactEmail } from "@/actions/sendContactEmail";
import FormInput from "@/components/form-utils/form-input";
import FormTextarea from "@/components/form-utils/form-textarea";
import SelectInput from "@/components/form-utils/select-input";

const serviceTypes = [
  { value: "", label: "Select a service" },
  { value: "Cloud Solutions", label: "Cloud Solutions" },
  { value: "Digital Transformation", label: "Digital Transformation" },
  { value: "Cybersecurity", label: "Cybersecurity" },
  { value: "Data & Analytics", label: "Data & Analytics" },
  { value: "Software Development", label: "Software Development" },
  { value: "IT Support", label: "IT Support" },
  { value: "Consulting", label: "Consulting" },
  { value: "Other", label: "Other" }
];

// Submit Button Component with Loading State
function SubmitButton({ isPending }) {
  return (
    <Button
      type="submit"
      variant="accent" 
      size="lg" 
      className="w-full"
      disabled={isPending}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {isPending ? "Sending..." : "Send Message"}
        <Send />
      </span>
    </Button>
  );
}

export const ContactForm = () => {
  // Initialize form state
  const initialState = {
    message: "",
    success: false,
    error: false,
  };

  const [state, formAction, isPending] = useActionState(
    sendContactEmail,
    initialState
  );

  return (
    <section id="contact" className="">
      {/* Show success/error messages */}
      {state?.message && (
        <div
          className={`mb-4 p-4 rounded-lg ${
            state.success
              ? "bg-green-500/10 text-green-500 border border-green-500/20"
              : "bg-red-500/10 text-red-500 border border-red-500/20"
          }`}
          role="alert"
        >
          {state.message}
        </div>
      )}

      <form action={formAction} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormInput
            name="name"
            label="Full Name"
            placeholder="Enter your full name"
            required
            disabled={isPending}
            inputClassName=""
          />
          <FormInput
            name="email"
            type="email"
            label="Email Address"
            placeholder="Enter your email address"
            required
            disabled={isPending}
            inputClassName=""
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormInput
            name="company"
            label="Company Name"
            placeholder="Enter your company name"
            disabled={isPending}
            inputClassName=""
          />
          <FormInput
            name="phone"
            type="tel"
            label="Phone Number"
            placeholder="Enter your phone number"
            disabled={isPending}
            inputClassName=""
          />
        </div>

        <SelectInput
          name="service"
          label="Service Interest"
          placeholder="Select a service"
          items={serviceTypes.slice(1)} // Remove the first empty option since placeholder handles it
          disabled={isPending}
          triggerClassName=""
        />

        <FormTextarea
          name="message"
          label="Message"
          placeholder="Tell us about your project or requirements..."
          required
          rows={8}
          disabled={isPending}
          textareaClassName=""
        />

        <SubmitButton isPending={isPending} />
      </form>
    </section>
  );
};
