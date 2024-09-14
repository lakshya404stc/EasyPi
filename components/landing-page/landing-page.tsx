"use client";
import React, { useState } from "react";
import { Activity, ChevronDown, LucideIcon, SquareChevronRight } from "lucide-react";
import { CardSubtitle, CardTitle } from "../shorts/Card";

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md sm:min-w-[380px] max-w-[380px] text-center">
      <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
        <Activity className="text-2xl font-bold text-purple-600" />
      </div>
      <CardTitle value={title} className="text-center"/>
      <CardSubtitle value={description} className="text-center"/>
    </div>
  );
};

export default FeatureCard;

// PricingCard
interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  highlighted?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  features,
  highlighted = false,
}) => {
  return (
    <div
      className={`bg-white flex flex-col justify-between sm:min-w-[350px] max-w-[380px] px-8 py-5 rounded-lg shadow-md mx-5 ${
        highlighted ? "border-2 border-indigo-500 relative" : ""
      }`}
    >
      <div>
        {highlighted && (
          <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-indigo-500 text-white px-4 py-1 rounded-full text-sm">
            Most Popular
          </span>
        )}
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h3>
        <p className="text-3xl font-bold text-indigo-600 mb-6">
          {price}
          <span className="text-lg font-normal text-gray-600">/month</span>
        </p>
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex gap-3 items-center text-gray-700 item-center">
              <SquareChevronRight size={15} className="text-indigo-600"/>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <button className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300">
        Choose Plan
      </button>
    </div>
  );
};

// TestimonialCard
interface TestimonialCardProps {
  quote: string;
  author: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author }) => {
  return (
    <div className="bg-white min-w-[300px] max-w-[400px] p-6 rounded-lg shadow-md flex flex-col justify-between">
      <p className="text-gray-700 mb-4">&quot;{quote}&quot;</p>
      <p className="font-semibold text-gray-800 text-right">- {author}</p>
    </div>
  );
};

// FAQItem
interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold text-gray-800">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-gray-500 transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && <p className="mt-2 text-gray-700">{answer}</p>}
    </div>
  );
};

interface StepsComponentProps {
  title:string,
  key:any,
  description:string
  step:number
}

const StepsComponent: React.FC<StepsComponentProps> = ({ title, key, description, step }) => {
  return (
    <div key={key} className="text-center min-w-[300px] max-w-[400px]">
      <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
        <span className="text-2xl font-bold text-purple-600">{step}</span>
      </div>
      <CardTitle value={title} className="text-center" />
      <CardSubtitle value={description} className="text-center"/>
    </div>
  );
};

export { FeatureCard, PricingCard, TestimonialCard, FAQItem, StepsComponent };
