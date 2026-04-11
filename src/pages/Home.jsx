/**
 * Layout F — "Organic Rounded"
 * Inspired by: Echofy, GardenView, Cleannes
 * Rounded shapes, organic decorations, about-forward hero,
 * process steps, image+text alternating, warm feel
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Star,
  Phone,
  WhatsappLogo,
  Quotes,
  CheckCircle,
  ShieldCheck,
  UsersThree,
  Trophy,
} from '@phosphor-icons/react';
import PageTransition from '../components/PageTransition';
import SectionReveal from '../components/SectionReveal';
import HeroCarousel from '../components/HeroCarousel';
import siteData from '../data/siteData';
import iconMap from '../data/iconMap';

const statIcons = [Trophy, Star, ShieldCheck, UsersThree];

function Home() {
  const { business, hero, stats, servicesPreview, featuredProjects, whyChooseUs, homeTestimonials, homeCta } = siteData;

  return (
    <PageTransition>
      {/* Hero — full-width with left-aligned text, organic shapes */}
      <HeroCarousel
        images={hero.backgroundImages}
        backgroundImage={hero.backgroundImage}
        backgroundAlt={hero.backgroundAlt}
        overlay="subtle"
        className="pt-28 sm:pt-32 pb-20 lg:pt-0 lg:pb-0"
      >
        {/* Decorative circles */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-gold-500/10 rounded-full hidden lg:block" />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-gold-500/10 rounded-full hidden lg:block" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:py-32">
          <div className="max-w-2xl overflow-hidden">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/10 text-gold-400 rounded-full px-4 sm:px-5 py-1.5 sm:py-2 mb-4 sm:mb-6 text-xs sm:text-sm font-medium backdrop-blur-sm"
            >
              <Star size={14} weight="fill" className="text-gold-500" />
              {hero.badge}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-4 sm:mb-6"
            >
              {hero.titleParts.map((part, i) =>
                part.highlight ? (
                  <span key={i} className="text-gold-400 relative">
                    {part.text}
                    <svg className="absolute -bottom-1 left-0 w-full h-3 text-gold-400/20" viewBox="0 0 200 12" preserveAspectRatio="none">
                      <path d="M0 8 Q50 0 100 6 Q150 12 200 4" stroke="currentColor" strokeWidth="4" fill="none" />
                    </svg>
                  </span>
                ) : (
                  <React.Fragment key={i}>{part.text}</React.Fragment>
                )
              )}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-sm sm:text-lg text-white/60 leading-relaxed mb-6 sm:mb-8 max-w-lg"
            >
              {hero.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="flex flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8"
            >
              <Link to="/contact" className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-navy-900 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full font-semibold text-sm sm:text-base transition-all hover:-translate-y-0.5 shadow-lg">
                {hero.ctaPrimary} <ArrowRight size={18} />
              </Link>
              <Link to="/projects" className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-6 sm:px-7 py-3 sm:py-3.5 rounded-full font-semibold text-sm sm:text-base hover:bg-white/10 transition-all">
                {hero.ctaSecondary}
              </Link>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-4"
            >
              <div className="flex -space-x-2">
                {homeTestimonials.slice(0, 3).map((t, i) => (
                  <div key={i} className="w-7 sm:w-8 h-7 sm:h-8 bg-gold-500 border-2 border-navy-950/30 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    {t.name.charAt(0)}
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} weight="fill" className={i < business.ratingRounded ? 'text-gold-500' : 'text-gold-500/30'} />
                  ))}
                </div>
                <span className="text-white/50 text-xs">{business.reviewCount}+ happy clients</span>
              </div>
            </motion.div>
          </div>
        </div>
      </HeroCarousel>

      {/* Process steps */}
      <section className="py-16 bg-white border-y border-earth-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {['Consultation', 'Planning', 'Execution', 'Delivery'].map((step, i) => (
              <SectionReveal key={step} delay={i * 0.1}>
                <div className="text-center">
                  <div className="w-14 h-14 bg-gold-500/10 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                    <span className="text-gold-600 font-bold text-lg">{i + 1}</span>
                    {i < 3 && (
                      <div className="absolute -right-8 top-1/2 w-8 h-px bg-gold-500/20 hidden lg:block" />
                    )}
                  </div>
                  <h4 className="font-bold text-navy-900 text-sm">{step}</h4>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services — rounded cards with image peek */}
      <section className="section-padding bg-white" id="services">
        <div className="max-w-7xl mx-auto">
          <SectionReveal>
            <div className="text-center mb-16">
              <span className="text-gold-600 text-sm font-semibold uppercase tracking-wider">Our Services</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mt-3 mb-4">What we specialize in</h2>
              <p className="text-steel-500 max-w-xl mx-auto">Expert solutions delivered with care and precision</p>
            </div>
          </SectionReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesPreview.map((service, index) => {
              const IconComp = iconMap[service.iconName] || iconMap.Buildings;
              return (
                <SectionReveal key={service.title} delay={index * 0.08}>
                  <Link to="/services" className="group block h-full">
                    <div className="bg-earth-50 group-hover:bg-gold-50 rounded-3xl p-7 transition-all duration-300 h-full border border-transparent group-hover:border-gold-200">
                      <div className="flex items-start justify-between mb-5">
                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                          <IconComp size={24} className="text-gold-600" />
                        </div>
                        <ArrowRight size={18} className="text-steel-300 group-hover:text-gold-600 group-hover:translate-x-1 transition-all mt-2" />
                      </div>
                      <h3 className="text-lg font-bold text-navy-900 mb-2">{service.title}</h3>
                      <p className="text-steel-500 text-sm leading-relaxed">{service.desc}</p>
                    </div>
                  </Link>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects — rounded grid */}
      <section className="section-padding bg-earth-50">
        <div className="max-w-7xl mx-auto">
          <SectionReveal>
            <div className="flex items-end justify-between gap-6 mb-12">
              <div>
                <span className="text-gold-600 text-sm font-semibold uppercase tracking-wider">Portfolio</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mt-3">Our recent work</h2>
              </div>
              <Link to="/projects" className="inline-flex items-center gap-2 bg-white text-navy-900 px-5 py-2.5 rounded-full font-semibold shadow-sm hover:shadow-md transition-all text-sm">
                View All <ArrowRight size={16} />
              </Link>
            </div>
          </SectionReveal>

          <div className="grid md:grid-cols-3 gap-5">
            {featuredProjects.map((project, index) => (
              <SectionReveal key={project.title} delay={index * 0.12}>
                <Link to="/projects" className="group block">
                  <div className="rounded-3xl overflow-hidden aspect-[4/3] mb-4">
                    <img src={project.image} alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="bg-gold-500/10 text-gold-700 text-xs font-semibold px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 group-hover:text-gold-600 transition-colors">
                    {project.title}
                  </h3>
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us — image left, checklist right */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <SectionReveal direction="right">
              <div className="relative">
                <div className="rounded-[2rem] overflow-hidden">
                  <img src={whyChooseUs.image} alt={whyChooseUs.imageAlt} className="w-full object-cover aspect-[4/5]" />
                </div>
                {/* Decorative circle */}
                <div className="absolute -z-10 -bottom-8 -right-8 w-48 h-48 bg-gold-500/10 rounded-full" />
              </div>
            </SectionReveal>

            <SectionReveal direction="left">
              <div>
                <span className="text-gold-600 text-sm font-semibold uppercase tracking-wider">Why Choose Us</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mt-3 mb-3">
                  {whyChooseUs.titleParts.map((part, i) =>
                    part.highlight ? (
                      <span key={i} className="text-gold-600">{part.text}</span>
                    ) : (
                      <React.Fragment key={i}>{part.text}</React.Fragment>
                    )
                  )}
                </h2>
                <div className="inline-flex items-center gap-2 bg-gold-500/10 rounded-full px-4 py-1.5 mb-8">
                  <span className="text-gold-700 font-bold">{whyChooseUs.experienceYears}</span>
                  <span className="text-steel-500 text-sm">{whyChooseUs.experienceLabel}</span>
                </div>

                <div className="space-y-5">
                  {whyChooseUs.points.map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="w-6 h-6 bg-gold-500 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle size={14} weight="fill" className="text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-navy-900 mb-1">{item.title}</h4>
                        <p className="text-steel-500 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Testimonials — large cards */}
      <section className="section-padding bg-earth-50">
        <div className="max-w-7xl mx-auto">
          <SectionReveal>
            <div className="text-center mb-16">
              <span className="text-gold-600 text-sm font-semibold uppercase tracking-wider">Reviews</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mt-3">Trusted by our clients</h2>
            </div>
          </SectionReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {homeTestimonials.map((item, index) => (
              <SectionReveal key={item.name} delay={index * 0.12}>
                <div className="bg-white rounded-3xl p-7 h-full flex flex-col shadow-sm border border-earth-100">
                  <div className="flex gap-1 mb-4">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={16} weight="fill" className="text-gold-500" />
                    ))}
                  </div>
                  <Quotes size={24} weight="fill" className="text-gold-500/20 mb-2" />
                  <p className="text-steel-600 text-sm leading-relaxed flex-1 mb-6">{item.text}</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-navy-900 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {item.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-navy-900 font-semibold text-sm">{item.name}</p>
                      <p className="text-steel-400 text-xs">{item.role}</p>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — rounded, warm */}
      <section className="px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-navy-900 rounded-[2rem] py-20 px-8 sm:px-16 overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-gold-500/5 rounded-full" />
            <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-gold-500/5 rounded-full" />

            <div className="relative text-center max-w-3xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                  {homeCta.titleParts.map((part, i) =>
                    part.highlight ? (
                      <span key={i} className="text-gold-400">{part.text}</span>
                    ) : (
                      <React.Fragment key={i}>{part.text}</React.Fragment>
                    )
                  )}
                </h2>
                <p className="text-white/60 text-lg mb-10">{homeCta.subtitle}</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link to="/contact" className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-navy-900 px-8 py-3.5 rounded-full font-semibold transition-all hover:-translate-y-0.5">
                    <Phone size={20} />
                    {homeCta.ctaPrimary}
                  </Link>
                  <a href={`https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(homeCta.whatsappText)}`}
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-8 py-3.5 rounded-full font-semibold transition-all hover:-translate-y-0.5">
                    <WhatsappLogo size={20} weight="fill" />
                    WhatsApp
                  </a>
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

export default Home;
