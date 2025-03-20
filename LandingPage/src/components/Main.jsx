import React from "react";
import Navbar from "./navbar";
import Hero from "./Hero";
import Features from "./Feature";
import Testimonials from "./Testimonials";
import Pricing from "./Pricing";
import Footer from "./Footer";
import FAQ from "./Faq's";

export default function Main() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
    </>
  );
}
