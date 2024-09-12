"use client";
import React, { useState } from "react";
import { FAQItem, PricingCard } from "@/components/landing-page/landing-page";
import { faqs } from "../dummyData";

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState("monthly");

  return (
    <div className="min-h-screen bg-white font-sans">
      <section className="bg-gradient-to-r from-purple-700 to-indigo-800 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Choose the Right Plan for Your Career
              </h1>
              <p className="text-xl mb-8">
                revolutionize your job search. Automate applications,
                Unlock the power of AI to supercharge your job search
              </p>
              <div className="flex justify-center">
          <div className="bg-white rounded-full p-1 shadow-md">
            <button
              className={`px-6 py-2 rounded-full ${
                billingCycle === "monthly"
                  ? "bg-indigo-800 text-white"
                  : "text-gray-700"
              }`}
              onClick={() => setBillingCycle("monthly")}
            >
              Monthly
            </button>
            <button
              className={`px-6 py-2 rounded-full ${
                billingCycle === "yearly"
                  ? "bg-indigo-800 text-white"
                  : "text-gray-700"
              }`}
              onClick={() => setBillingCycle("yearly")}
            >
              Yearly (Save 15%)
            </button>
          </div>
        </div>
            </div>
          </div>
        </section>

      <div className="w-full bg-white flex flex-wrap justify-center gap-5 py-[70px]">
        <PricingCard
          title="Basic"
          price="$9.99"
          features={[
            "50 automated job applications per month",
            "5 custom CV generations",
            "Basic AI matching",
            "Application tracking",
          ]}
        />
        <PricingCard
          title="Pro"
          price="$19.99"
          features={[
            "150 automated job applications per month",
            "15 custom CV generations",
            "Advanced AI matching",
            "Application tracking",
            "Interview preparation assistance",
            "Priority support",
          ]}
          highlighted={true}
        />
        <PricingCard
          title="Enterprise"
          price="$49.99"
          features={[
            "Unlimited automated job applications",
            "Unlimited custom CV generations",
            "Premium AI matching",
            "Application tracking",
            "Interview preparation assistance",
            "Dedicated account manager",
            "API access for integration",
            "Custom career insights reports",
          ]}
        />
      </div>

      <section
        id="pricing"
        className="w-full bg-gray-100 py-[20px] flex items-center justify-center"
      >
        <button className="text-white bg-indigo-800 px-8 py-3 rounded-full text-lg font-semibold transition duration-300">
          Start Your Free 14-Day Trial
        </button>
      </section>
      <section id="faq" className="bg-white py-[70px]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-gray-800 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
