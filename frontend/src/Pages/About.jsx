import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            We are a clothing brand driven by a passion for style, comfort, and
            quality. Our collections are designed to blend modern trends with
            timeless fashion, ensuring every piece feels as good as it looks.
            From everyday wear to standout styles, we focus on using carefully
            selected fabrics and thoughtful designs that fit seamlessly into
            your lifestyle.
          </p>
          <p>
            At the heart of our brand is a commitment to individuality and
            confidence. We believe clothing should express who you are, not
            limit you. That’s why we continuously innovate, listen to our
            community, and create apparel that empowers you to look and feel
            your best—every single day.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Our mission is to design and deliver high-quality clothing that
            combines style, comfort, and durability. We are committed to using
            thoughtful design, reliable materials, and responsible practices to
            create apparel that meets the evolving needs of our customers.
            Through continuous innovation and attention to detail, we aim to
            provide fashion that inspires confidence and adds lasting value to
            everyday wear.
          </p>
        </div>
      </div>
      <div className=" text-4xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assuarance:</b>
          <p className="text-gray-600 ">
            We stand out through our commitment to quality, consistency, and
            customer satisfaction. Every product is crafted with attention to
            detail, from fabric selection to final finishing, ensuring comfort,
            durability, and style. By combining modern design with reliable
            service, we aim to build lasting relationships with our customers
            and provide an experience they can trust.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600 ">
            We prioritize convenience to make your shopping experience simple
            and stress-free. Our user-friendly platform allows you to browse,
            select, and purchase products with ease, supported by secure payment
            options and reliable delivery services. With clear product
            information and responsive customer support, we ensure a smooth and
            efficient experience from start to finish.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service</b>
          <p className="text-gray-600 ">
            We are dedicated to providing exceptional customer service at every
            step of your journey. Our team is always ready to assist with
            inquiries, provide guidance, and resolve issues promptly, ensuring a
            seamless and satisfying shopping experience. By prioritizing your
            needs and feedback, we strive to build trust and long-lasting
            relationships with every customer.
          </p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default About;
