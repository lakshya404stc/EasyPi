import {
  FAQItem,
  FeatureCard,
  StepsComponent,
  TestimonialCard,
} from "@/components/landing-page/landing-page";
import { faqs, features, stepsData, testimonials } from "./dummyData";
import Image from "next/image";
import image from "../public/assets/img/image.png";
import { BannerSubtitle, BannerTitle } from "@/components/shorts/Banner";
import { BannerWrapper } from "@/components/wrappers/BannerWrapper";
import { Button } from "@/components/fields/Button";
import { Title, TitleContent } from "@/components/shorts/Title";
import { FooterBannerWrapper } from "@/components/wrappers/FooterBannerWrapper";
import { BannerPolygon } from "@/components/landing-page/BannerPolygon";

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <main>
        <BannerWrapper>
          <BannerTitle value="Tired of Endless Job Applications ?" />
          <BannerSubtitle
            value="Let AI revolutionize your job search. Automate applications,
                create custom CVs, and land your dream job faster."
          />
          <Button inverted text="Go To Dashboard" />
        </BannerWrapper>

        <section id="features" className="pb-[70px] pt-[50px] bg-gray-100">
          <div className="container mx-auto px-4">
            <Title value="Features" />
            <div className="flex flex-wrap items-center justify-center flex gap-10">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-[30px]">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center flex items-center justify-center flex-wrap md:gap-40 ">
              <div className="sm:flex-1 w-full">
                <Title value="We're Here for You" />
                <TitleContent
                  className="text-gray-700"
                  value="Job hunting doesn't have to be a full-time job. Let Easy
                  Pi handle the tedious parts while you focus on preparing for
                  interviews and advancing your career."
                />
              </div>
              <div>
                <Image
                  className="md:h-[340px] sm:shadow rounded-lg sm:flex-1 w-full"
                  src={image}
                  alt="ai"
                />
              </div>
            </div>
          </div>
        </section>


        <section id="how-it-works" className="pb-[70px] pt-[40px]  bg-white">
          <div className="container mx-auto px-4">
            {/* <Title value="How Easy Pi Works ?" /> */}
            <BannerPolygon className="mb-20 mt-0 px-0"/>
            <div className="flex flex-wrap items-center justify-center flex gap-10">
              {stepsData.map((step, index) => (
                <StepsComponent
                  title={step.title}
                  description={step.description}
                  key={index}
                  step={index + 1}
                />
              ))}
            </div>
          </div>
        </section>




        <section id="testimonials" className="pb-[80px] pt-[60px] bg-gray-100">
          <div className="container mx-auto px-4">
            <Title value="What Our Users Say ?" />
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

        {/* <section
          id="pricing"
          className="w-full bg-gray-100 py-[20px] flex items-center justify-center"
        >
          <Button text="Choose Your Plan" />
        </section> */}

        <FooterBannerWrapper>
          <Title
            className="text-white"
            value="Ready to Transform Your Job Search ?"
          />
          <TitleContent
            className="text-white"
            value="Join thousands of job seekers who have already found success with
              Easy Pi."
          />
          <Button text="Start Your Free Trial" inverted />
        </FooterBannerWrapper>
      </main>
    </div>
  );
}
