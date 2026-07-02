/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Work from "./components/Work";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-white text-zinc-900 selection:bg-zinc-900 selection:text-white min-h-screen font-sans antialiased overflow-x-hidden">
      <Navbar />
      <Hero />
      <AboutMe />
      <Testimonials />
      <Work />
      <CTA />
      <Footer />
    </div>
  );
}
