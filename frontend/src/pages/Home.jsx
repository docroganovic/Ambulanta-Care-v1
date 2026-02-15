import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle, Video, Home, Users, Heart, Calendar, ChevronDown, Menu, X } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const HomePage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showBooking, setShowBooking] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const services = [
    {
      icon: Users,
      title: 'Family Medicine',
      description: 'Comprehensive medical care for the whole family, with focus on continuity and a long‑term doctor–patient relationship.'
    },
    {
      icon: Heart,
      title: 'General Medicine',
      description: 'Diagnosis and treatment of acute and chronic conditions in adults, including infections, cardiovascular and metabolic diseases.'
    },
    {
      icon: Home,
      title: 'Home Visit Services',
      description: 'Private medical consultations and examinations in the patient\'s home for those with reduced mobility or who prefer care at home.'
    },
    {
      icon: Video,
      title: 'Video Consultations',
      description: 'Secure online consultations for follow‑up of chronic conditions, medical advice and prescription management when a physical visit is not necessary.'
    }
  ];

  const conditions = [
    'Acute infections (e.g. respiratory and urinary tract infections)',
    'Hypertension',
    'Diabetes mellitus type 2',
    'Hypothyroidism',
    'Obesity'
  ];

  const pricing = [
    {
      title: 'Home Visit',
      price: '2500 SEK',
      duration: 'per 60 minutes',
      description: 'Clinical assessment, diagnostics and treatment included',
      highlight: true
    },
    {
      title: 'Video Consultation',
      price: '2500 SEK',
      duration: 'per consultation',
      description: 'Up to 60 minutes',
      highlight: true
    },
    {
      title: 'Prescription Renewal',
      price: '50 SEK',
      duration: 'per medication',
      description: 'Quick and convenient',
      highlight: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <nav className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3">
              <img 
                src="https://customer-assets.emergentagent.com/job_a2998e18-8d13-4522-884d-9c3b415528d4/artifacts/fqhr8ebx_Logo%20ambulanta%20care%20navy.png" 
                alt="Ambulanta Care Logo" 
                className="h-12 w-auto"
              />
              <span className="text-xl font-semibold text-navy-900 hidden sm:inline">Ambulanta Care</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-navy-700 transition-colors font-medium">
                Home
              </button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-navy-700 transition-colors font-medium">
                Services
              </button>
              <button onClick={() => scrollToSection('pricing')} className="text-gray-700 hover:text-navy-700 transition-colors font-medium">
                Pricing
              </button>
              <button onClick={() => scrollToSection('booking')} className="text-gray-700 hover:text-navy-700 transition-colors font-medium">
                Booking
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-navy-700 transition-colors font-medium">
                Contact
              </button>
              <Button 
                onClick={() => scrollToSection('booking')} 
                className="bg-navy-800 hover:bg-navy-900 text-white px-6"
              >
                Book Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-navy-800"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100">
              <div className="flex flex-col space-y-4">
                <button onClick={() => scrollToSection('home')} className="text-left text-gray-700 hover:text-navy-700 transition-colors font-medium">
                  Home
                </button>
                <button onClick={() => scrollToSection('services')} className="text-left text-gray-700 hover:text-navy-700 transition-colors font-medium">
                  Services
                </button>
                <button onClick={() => scrollToSection('pricing')} className="text-left text-gray-700 hover:text-navy-700 transition-colors font-medium">
                  Pricing
                </button>
                <button onClick={() => scrollToSection('booking')} className="text-left text-gray-700 hover:text-navy-700 transition-colors font-medium">
                  Booking
                </button>
                <button onClick={() => scrollToSection('contact')} className="text-left text-gray-700 hover:text-navy-700 transition-colors font-medium">
                  Contact
                </button>
                <Button 
                  onClick={() => scrollToSection('booking')} 
                  className="bg-navy-800 hover:bg-navy-900 text-white w-full"
                >
                  Book Now
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
                Ambulanta Roganovic AB – Private Primary Care and Home Visit Medicine in Gothenburg
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed">
                Book a private home visit or video consultation directly with a specialist in family and general medicine. 
                Patients pay the full cost of the visit; no affiliation with the public regional healthcare system.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  onClick={() => scrollToSection('booking')} 
                  size="lg" 
                  className="bg-navy-800 hover:bg-navy-900 text-white px-8 py-6 text-lg"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Appointment
                </Button>
                <Button 
                  onClick={() => scrollToSection('services')} 
                  size="lg" 
                  variant="outline" 
                  className="border-navy-800 text-navy-800 hover:bg-navy-50 px-8 py-6 text-lg"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1645066928295-2506defde470" 
                alt="Professional Healthcare" 
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg hidden lg:block">
                <div className="flex items-center space-x-3">
                  <div className="bg-navy-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-navy-800" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Call us today</p>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive medical care tailored to your needs, available at your home or via secure video consultation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="bg-navy-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="h-8 w-8 text-navy-800" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy-900 mb-4">{service.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Conditions Management */}
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-navy-900 mb-6 text-center">Management of Common Conditions</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {conditions.map((condition, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                  <CheckCircle className="h-6 w-6 text-navy-700 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800">{condition}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-4">Transparent Pricing</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Clear, upfront pricing with no hidden fees
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricing.map((item, index) => (
              <Card 
                key={index} 
                className={`border-2 ${item.highlight ? 'border-navy-800 shadow-xl' : 'border-gray-200 shadow-lg'} hover:shadow-2xl transition-all duration-300`}
              >
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-bold text-navy-900 mb-4">{item.title}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-navy-800">{item.price}</span>
                    <p className="text-gray-600 mt-2">{item.duration}</p>
                  </div>
                  <p className="text-gray-700 mb-6">{item.description}</p>
                  {item.highlight && (
                    <Button 
                      onClick={() => scrollToSection('booking')} 
                      className="w-full bg-navy-800 hover:bg-navy-900 text-white"
                    >
                      Book Now
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
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-4">Book Your Appointment</h2>
            <p className="text-lg text-gray-600">
              Schedule a home visit or video consultation at your convenience
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
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-600">
              We're here to answer your questions and provide the care you need
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="border-none shadow-lg text-center">
              <CardContent className="p-8">
                <div className="bg-navy-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-navy-800" />
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">Phone</h3>
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
                <h3 className="text-lg font-bold text-navy-900 mb-2">Email</h3>
                <div className="space-y-1">
                  <a href="mailto:roganovic@dr.com" className="block text-gray-700 hover:text-navy-800 transition-colors">
                    roganovic@dr.com
                  </a>
                  <a href="mailto:ambulanta@dr.com" className="block text-gray-700 hover:text-navy-800 transition-colors">
                    ambulanta@dr.com
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg text-center">
              <CardContent className="p-8">
                <div className="bg-navy-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-navy-800" />
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">Address</h3>
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
                  src="https://customer-assets.emergentagent.com/job_a2998e18-8d13-4522-884d-9c3b415528d4/artifacts/fqhr8ebx_Logo%20ambulanta%20care%20navy.png" 
                  alt="Ambulanta Care Logo" 
                  className="h-10 w-auto brightness-0 invert"
                />
                <span className="text-xl font-semibold">Ambulanta Care</span>
              </div>
              <p className="text-gray-300">
                Private primary care and home visit medicine in Gothenburg
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('services')} className="block text-gray-300 hover:text-white transition-colors">
                  Services
                </button>
                <button onClick={() => scrollToSection('pricing')} className="block text-gray-300 hover:text-white transition-colors">
                  Pricing
                </button>
                <button onClick={() => scrollToSection('booking')} className="block text-gray-300 hover:text-white transition-colors">
                  Booking
                </button>
                <button onClick={() => scrollToSection('contact')} className="block text-gray-300 hover:text-white transition-colors">
                  Contact
                </button>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-gray-300" />
                  <span className="text-gray-300">+46 737 35 43 54</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-gray-300" />
                  <span className="text-gray-300">roganovic@dr.com</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-gray-300 mt-1" />
                  <span className="text-gray-300">Lindholmshamnen 23<br />417 56 Gothenburg</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Ambulanta Roganovic AB. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
