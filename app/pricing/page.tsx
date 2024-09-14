"use client";
import React, { useState } from "react";
import { FAQItem, PricingCard } from "@/components/landing-page/landing-page";
import { faqs, pricingPlans } from "../dummyData";
import { BannerWrapper } from "@/components/wrappers/BannerWrapper";
import { BannerSubtitle, BannerTitle } from "@/components/shorts/Banner";
import { Title } from "@/components/shorts/Title";

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState("monthly");

  return (
    <div className="min-h-screen bg-white font-sans">
      <BannerWrapper>
        <BannerTitle value="Choose the Right Plan for Your Career" />
        <BannerSubtitle
          value="revolutionize your job search. Automate applications, Unlock the power
          of AI to supercharge your job search"
        />
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
      </BannerWrapper>

      <div className="w-full bg-gray-100 flex flex-wrap justify-center pt-[70px] pb-[40px] md:gap-0 gap-5">
        {pricingPlans.map((plan, index) => (
          <PricingCard
            key={index}
            title={plan.title}
            price={plan.price}
            features={plan.features}
            highlighted={plan.highlighted}
          />
        ))}
      </div>

      <section
        id="pricing"
        className="w-full bg-gray-100 py-[20px] flex items-center justify-center"
      >
      </section>
      <section id="faq" className="bg-white py-[70px]">
        <div className="container mx-auto px-4">
          <Title value="Frequently Asked Questions" />
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
