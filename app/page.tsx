import {
  FAQItem,
  FeatureCard,
  TestimonialCard,
} from "@/components/landing-page/landing-page";
import { faqs, features, testimonials } from "./dummyData";
import Image from "next/image";
import image from "../public/assets/img/image.png";

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <main>
        <section className="bg-gradient-to-r from-purple-700 to-indigo-800 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Tired of Endless Job Applications ?
              </h1>
              <p className="text-xl mb-8">
                Let AI revolutionize your job search. Automate applications,
                create custom CVs, and land your dream job faster.
              </p>
              <button className="bg-white text-indigo-800 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300">
                Start Your Free Trial
              </button>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-[70px]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold tracking-normal text-gray-800 mb-12 text-center">
              How Easy Pi Works ?
            </h2>
            <div className="flex flex-wrap items-center justify-center flex gap-10">
              {[
                "Create Your Profile",
                "AI-Powered Job Matching",
                "Automated Applications",
              ].map((title, index) => (
                <div
                  key={index}
                  className="text-center min-w-[300px] max-w-[400px]"
                >
                  <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-purple-600">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{title}</h3>
                  <p className="text-gray-600">
                    {index === 0
                      ? "Input your skills, experience, and preferences to create a comprehensive profile."
                      : index === 1
                      ? "Our AI scans job boards and matches you with suitable positions based on your profile."
                      : "Easy Pi applies to matched positions on your behalf, saving you time and effort."}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-[30px]">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center flex items-center justify-center flex-wrap md:gap-40 ">
              <div className="sm:flex-1 w-full">
                <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                  We&apos;re Here for You
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Job hunting doesn&apos;t have to be a full-time job. Let Easy Pi
                  handle the tedious parts while you focus on preparing for
                  interviews and advancing your career.
                </p>
              </div>
              <div className="">
                <Image
                  className="md:h-[340px] sm:shadow rounded-lg sm:flex-1 w-full"
                  src={image}
                  alt="ai"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-[70px]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold text-gray-800 mb-12 text-center">
              Key Features
            </h2>
            <div className="flex flex-wrap items-center justify-center flex gap-10">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  title={feature.title}
                  description={feature.description}
                  // icon={feature.icon}
                />
              ))}
            </div>
          </div>
        </section>

        <section
          id="pricing"
          className="w-full bg-gray-100 py-[20px] flex items-center justify-center"
        >
          <a
            className="text-white bg-indigo-800 px-8 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition duration-300"
            href="pricing"
          >
            Choose Your Plan
          </a>
        </section>

        <section id="testimonials" className="py-[70px]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold text-gray-800 mb-12 text-center">
              What Our Users Say
            </h2>
            <div className="w-full flex flex-wrap items-center justify-center gap-5">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  quote={testimonial.quote}
                  author={testimonial.author}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="bg-gray-100 py-[70px]">
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

        <section className="bg-indigo-800 text-white py-[50px]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-semibold mb-6">
              Ready to Transform Your Job Search?
            </h2>
            <p className="text-xl mb-8">
              Join thousands of job seekers who have already found success with
              Easy Pi.
            </p>
            <button className="bg-white text-indigo-800 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300">
              Start Your Free 14-Day Trial
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
