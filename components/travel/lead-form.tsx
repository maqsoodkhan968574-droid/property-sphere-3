"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

type LeadFormProps = {
  type: "partner" | "contact";
};

export function LeadForm({ type }: LeadFormProps) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  }

  if (submitted) {
    return (
      <div className="rounded-lg border border-green-200 bg-green-50 p-6 text-green-900">
        <CheckCircle2 className="mb-3" size={28} />
        <h3 className="text-xl font-black">Request received</h3>
        <p className="mt-2 text-sm leading-6">
          Thanks. Our team will review your details and contact you with the next steps.
        </p>
      </div>
    );
  }

  if (type === "partner") {
    return (
      <form onSubmit={handleSubmit} className="grid gap-4 rounded-lg border border-slate-200 bg-white p-5 shadow-soft">
        <FormField label="Agency name" name="agency" required />
        <FormField label="Owner name" name="owner" required />
        <FormField label="Phone number" name="phone" type="tel" required pattern="[0-9+\-\s]{8,}" />
        <FormField label="City" name="city" required />
        <label className="grid gap-2 text-sm font-bold text-navy">
          Services
          <select required name="services" className="min-h-12 rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-700">
            <option value="">Select service</option>
            <option>Taxi</option>
            <option>Hotel</option>
            <option>Guide</option>
            <option>Full Package</option>
            <option>Adventure Activity</option>
          </select>
        </label>
        <FormField label="Message" name="message" textarea required />
        <Button type="submit" className="w-full">Submit partner request</Button>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 rounded-lg border border-slate-200 bg-white p-5 shadow-soft">
      <FormField label="Full name" name="name" required />
      <FormField label="Phone number" name="phone" type="tel" required pattern="[0-9+\-\s]{8,}" />
      <FormField label="Email" name="email" type="email" required />
      <FormField label="Travel plan or question" name="message" textarea required />
      <Button type="submit" className="w-full">Send message</Button>
    </form>
  );
}

type FormFieldProps = {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  pattern?: string;
  textarea?: boolean;
};

function FormField({ label, name, type = "text", required, pattern, textarea }: FormFieldProps) {
  const className = "min-h-12 rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-700 placeholder:text-slate-400";
  return (
    <label className="grid gap-2 text-sm font-bold text-navy">
      {label}
      {textarea ? (
        <textarea name={name} required={required} rows={4} className={`${className} py-3`} />
      ) : (
        <input name={name} type={type} required={required} pattern={pattern} className={className} />
      )}
    </label>
  );
}
