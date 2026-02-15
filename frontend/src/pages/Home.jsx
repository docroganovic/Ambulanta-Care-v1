import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle, Video, Home, Users, Heart, Calendar, ClipboardCheck, Stethoscope, FileText, FileCheck, Menu, X, Globe } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { translations } from '../translations';

const HomePage = () => {
  // Language detection function
  const detectLanguage = () => {
    const browserLang = navigator.language || navigator.userLanguage;
    const langCode = browserLang.toLowerCase().split('-')[0];
    
    // Map browser language codes to our supported languages
    if (langCode === 'sv') return 'sv';
    if (langCode === 'sr' || browserLang.toLowerCase().includes('sr')) return 'sr';
    return 'en'; // Default to English
  };

  const [language, setLanguage] = useState(detectLanguage);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[language];

  // Save language preference
  useEffect(() => {
    localStorage.setItem('preferredLanguage', language);
  }, [language]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const serviceIcons = [Users, Heart, Home, Video, ClipboardCheck];
  const extraServiceIcons = [Stethoscope, FileText, ClipboardCheck];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <nav className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo Only */}
            <div className="flex items-center">
              <img 
                src="https://customer-assets.emergentagent.com/job_home-visit-clinic/artifacts/pfzt3b7e_Logo%20ambulanta%20care%20navy%20crop.png" 
                alt="Ambulanta Care Logo" 
                className="h-12 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-navy-700 transition-colors font-medium">
                {t.nav.home}
              </button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-navy-700 transition-colors font-medium">
                {t.nav.services}
              </button>
              <button onClick={() => scrollToSection('pricing')} className="text-gray-700 hover:text-navy-700 transition-colors font-medium">
                {t.nav.pricing}
              </button>
              <button onClick={() => scrollToSection('booking')} className="text-gray-700 hover:text-navy-700 transition-colors font-medium">
                {t.nav.booking}
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-navy-700 transition-colors font-medium">
                {t.nav.contact}
              </button>
              
              {/* Language Switcher - Desktop */}
              <div className="flex items-center space-x-2 border-l border-gray-300 pl-6">
                <button 
                  onClick={() => setLanguage('sv')} 
                  className={`text-sm font-medium transition-colors ${language === 'sv' ? 'text-navy-800 font-bold' : 'text-gray-600 hover:text-navy-700'}`}
                >
                  Svenska
                </button>
                <span className="text-gray-400">|</span>
                <button 
                  onClick={() => setLanguage('en')} 
                  className={`text-sm font-medium transition-colors ${language === 'en' ? 'text-navy-800 font-bold' : 'text-gray-600 hover:text-navy-700'}`}
                >
                  English
                </button>
                <span className="text-gray-400">|</span>
                <button 
                  onClick={() => setLanguage('sr')} 
                  className={`text-sm font-medium transition-colors ${language === 'sr' ? 'text-navy-800 font-bold' : 'text-gray-600 hover:text-navy-700'}`}
                >
                  Serbian
                </button>
              </div>
              
              <Button 
                onClick={() => scrollToSection('booking')} 
                className="bg-navy-800 hover:bg-navy-900 text-white px-6"
              >
                {t.nav.bookNow}
              </Button>
            </div>

            {/* Mobile: Language Switcher + Menu Button */}
            <div className="lg:hidden flex items-center space-x-3">
              {/* Mobile Language Switcher - Always Visible */}
              <div className="flex items-center space-x-1 text-xs">
                <Globe className="h-4 w-4 text-navy-700" />
                <button 
                  onClick={() => setLanguage('sv')} 
                  className={`px-2 py-1 rounded transition-colors ${language === 'sv' ? 'bg-navy-800 text-white font-bold' : 'text-gray-600'}`}
                >
                  SV
                </button>
                <button 
                  onClick={() => setLanguage('en')} 
                  className={`px-2 py-1 rounded transition-colors ${language === 'en' ? 'bg-navy-800 text-white font-bold' : 'text-gray-600'}`}
                >
                  EN
                </button>
                <button 
                  onClick={() => setLanguage('sr')} 
                  className={`px-2 py-1 rounded transition-colors ${language === 'sr' ? 'bg-navy-800 text-white font-bold' : 'text-gray-600'}`}
                >
                  SR
                </button>
              </div>
              
              {/* Hamburger Menu Button */}
              <button 
                className="p-2 text-navy-800"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-100">
              <div className="flex flex-col space-y-4">
                <button onClick={() => scrollToSection('home')} className="text-left text-gray-700 hover:text-navy-700 transition-colors font-medium">
                  {t.nav.home}
                </button>
                <button onClick={() => scrollToSection('services')} className="text-left text-gray-700 hover:text-navy-700 transition-colors font-medium">
                  {t.nav.services}
                </button>
                <button onClick={() => scrollToSection('pricing')} className="text-left text-gray-700 hover:text-navy-700 transition-colors font-medium">
                  {t.nav.pricing}
                </button>
                <button onClick={() => scrollToSection('booking')} className="text-left text-gray-700 hover:text-navy-700 transition-colors font-medium">
                  {t.nav.booking}
                </button>
                <button onClick={() => scrollToSection('contact')} className="text-left text-gray-700 hover:text-navy-700 transition-colors font-medium">
                  {t.nav.contact}
                </button>
                
                {/* Mobile Language Switcher */}
                <div className="flex items-center space-x-2 pt-2 border-t border-gray-200">
                  <button 
                    onClick={() => setLanguage('sv')} 
                    className={`text-sm font-medium transition-colors ${language === 'sv' ? 'text-navy-800 font-bold' : 'text-gray-600'}`}
                  >
                    Svenska
                  </button>
                  <span className="text-gray-400">|</span>
                  <button 
                    onClick={() => setLanguage('en')} 
                    className={`text-sm font-medium transition-colors ${language === 'en' ? 'text-navy-800 font-bold' : 'text-gray-600'}`}
                  >
                    English
                  </button>
                  <span className="text-gray-400">|</span>
                  <button 
                    onClick={() => setLanguage('sr')} 
                    className={`text-sm font-medium transition-colors ${language === 'sr' ? 'text-navy-800 font-bold' : 'text-gray-600'}`}
                  >
                    Serbian
                  </button>
                </div>
                
                <Button 
                  onClick={() => scrollToSection('booking')} 
                  className="bg-navy-800 hover:bg-navy-900 text-white w-full"
                >
                  {t.nav.bookNow}
                </Button>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 lg:px-8">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-navy-900 leading-tight">
                {t.hero.title}
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t.hero.subtitle}
              </p>
              <p className="text-base text-gray-600 italic">
                {t.hero.languages}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  onClick={() => scrollToSection('booking')} 
                  size="lg" 
                  className="bg-navy-800 hover:bg-navy-900 text-white px-8 py-6 text-lg"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  {t.hero.bookAppointment}
                </Button>
                <Button 
                  onClick={() => scrollToSection('services')} 
                  size="lg" 
                  variant="outline" 
                  className="border-navy-800 text-navy-800 hover:bg-navy-50 px-8 py-6 text-lg"
                >
                  {t.hero.learnMore}
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://customer-assets.emergentagent.com/job_home-visit-clinic/artifacts/kgffjklj_home-photo.PNG" 
                alt="Family Healthcare Protection" 
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg hidden lg:block">
                <div className="flex items-center space-x-3">
                  <div className="bg-navy-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-navy-800" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">{t.hero.callUs}</p>
                    <p className="text-lg font-semibold text-navy-900">+46 737 35 43 54</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white px-4 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-4">{t.services.title}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t.services.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {t.services.items.map((service, index) => {
              const Icon = serviceIcons[index];
              return (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-8">
                    <div className="bg-navy-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                      <Icon className="h-8 w-8 text-navy-800" />
                    </div>
                    <h3 className="text-xl font-bold text-navy-900 mb-4">{service.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Medical Certificates Card - NEW */}
          <div className="mb-16">
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-navy-100 w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FileCheck className="h-8 w-8 text-navy-800" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-navy-900 mb-4">{t.services.medicalCertificates.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{t.services.medicalCertificates.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Conditions Management */}
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 mb-16">
            <h3 className="text-2xl font-bold text-navy-900 mb-6">{t.services.conditionsTitle}</h3>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">{t.services.conditionsDescription}</p>
              <p className="text-gray-700 leading-relaxed">{t.services.conditionsDescription2}</p>
            </div>
          </div>

          {/* Extra Services */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-4">{t.extraServices.title}</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {t.extraServices.subtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {t.extraServices.items.map((service, index) => {
                const Icon = extraServiceIcons[index];
                return (
                  <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-8">
                      <div className="bg-navy-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                        <Icon className="h-8 w-8 text-navy-800" />
                      </div>
                      <h3 className="text-xl font-bold text-navy-900 mb-4">{service.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{service.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Second Opinion Block - White Card Style */}
          <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8 lg:p-12">
              <div className="flex items-start space-x-4">
                <div className="bg-navy-100 p-4 rounded-xl flex-shrink-0">
                  <FileText className="h-8 w-8 text-navy-800" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-navy-900 mb-4">{t.secondOpinion.title}</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">{t.secondOpinion.description}</p>
                  <p className="text-gray-600 italic">{t.secondOpinion.languages}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-4">{t.pricing.title}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t.pricing.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {t.pricing.items.map((item, index) => (
              <Card 
                key={index} 
                className={`border-2 ${index < 2 ? 'border-navy-800 shadow-xl' : 'border-gray-200 shadow-lg'} hover:shadow-2xl transition-all duration-300`}
              >
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-bold text-navy-900 mb-4">{item.title}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-navy-800">{item.price}</span>
                    <p className="text-gray-600 mt-2">{item.duration}</p>
                  </div>
                  <p className="text-gray-700 mb-6">{item.description}</p>
                  {index < 2 && (
                    <Button 
                      onClick={() => scrollToSection('booking')} 
                      className="w-full bg-navy-800 hover:bg-navy-900 text-white"
                    >
                      {t.nav.bookNow}
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20 bg-gradient-to-b from-gray-50 to-white px-4 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-4">{t.booking.title}</h2>
            <p className="text-lg text-gray-600">
              {t.booking.subtitle}
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div style={{ display: 'grid', width: '100%', height: '700px', minWidth: '320px', minHeight: '600px' }}>
              <iframe 
                title="Carepatron Online Booking" 
                alt="Book appointments online via Carepatron" 
                width="100%" 
                height="100%" 
                src="https://book.carepatron.com/Ambulanta/All?p=uVYCKdn9Q1Kta8F9j2m.GA&e=i" 
                style={{ border: 0 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-4">{t.contact.title}</h2>
            <p className="text-lg text-gray-600">
              {t.contact.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="border-none shadow-lg text-center">
              <CardContent className="p-8">
                <div className="bg-navy-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-navy-800" />
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">{t.contact.phone}</h3>
                <a href="tel:+46737354354" className="text-gray-700 hover:text-navy-800 transition-colors">
                  +46 737 35 43 54
                </a>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg text-center">
              <CardContent className="p-8">
                <div className="bg-navy-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-navy-800" />
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">{t.contact.email}</h3>
                <a href="mailto:ambulanta@dr.com" className="text-gray-700 hover:text-navy-800 transition-colors">
                  ambulanta@dr.com
                </a>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg text-center">
              <CardContent className="p-8">
                <div className="bg-navy-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-navy-800" />
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">{t.contact.address}</h3>
                <p className="text-gray-700">
                  Lindholmshamnen 23<br />
                  417 56 Gothenburg<br />
                  Sweden
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-900 text-white py-12 px-4 lg:px-8">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="https://customer-assets.emergentagent.com/job_home-visit-clinic/artifacts/pfzt3b7e_Logo%20ambulanta%20care%20navy%20crop.png" 
                  alt="Ambulanta Care Logo" 
                  className="h-10 w-auto brightness-0 invert"
                />
              </div>
              <p className="text-gray-300">
                {t.footer.description}
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">{t.footer.quickLinks}</h4>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('services')} className="block text-gray-300 hover:text-white transition-colors">
                  {t.nav.services}
                </button>
                <button onClick={() => scrollToSection('pricing')} className="block text-gray-300 hover:text-white transition-colors">
                  {t.nav.pricing}
                </button>
                <button onClick={() => scrollToSection('booking')} className="block text-gray-300 hover:text-white transition-colors">
                  {t.nav.booking}
                </button>
                <button onClick={() => scrollToSection('contact')} className="block text-gray-300 hover:text-white transition-colors">
                  {t.nav.contact}
                </button>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">{t.footer.contactInfo}</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-gray-300" />
                  <span className="text-gray-300">+46 737 35 43 54</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-gray-300" />
                  <span className="text-gray-300">ambulanta@dr.com</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-gray-300 mt-1" />
                  <span className="text-gray-300">Lindholmshamnen 23<br />417 56 Gothenburg</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Ambulanta Roganovic AB. {t.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
