import React from "react";

const AboutSection = () => {
  return (
    <section className="bg-[#FBFCFC] py-16 border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          About AI Models
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          AI models are the backbone of modern machine learning systems. From neural networks that
          power image recognition to transformers that enable chatbots and language translation,
          these models learn patterns from data and make intelligent predictions. Whether you're
          building recommendation engines, fraud detection systems, or autonomous agents, managing
          your models effectively is key to deploying reliable AI solutions.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
