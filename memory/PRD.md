# Ambulanta Care Medical Website - Product Requirements Document

## Project Overview
**Company:** Ambulanta Roganovic AB (Brand: Ambulanta Care)
**Type:** Medical Services Website
**Location:** Gothenburg, Sweden
**Last Updated:** 2025-12-15

## Original Problem Statement
Build a professional website for a medical company specializing in family medicine and general medicine with home visit services. The website should feature:
- Navy blue branding (matching logo)
- Embedded Carepatron booking system
- Clear service descriptions
- Transparent pricing
- Contact information

## User Personas
1. **Patients Seeking Home Care**
   - Need: Convenient medical care at home
   - Age: 45-80+
   - Pain Point: Reduced mobility or preference for home-based care

2. **Busy Professionals**
   - Need: Flexible video consultations
   - Age: 25-55
   - Pain Point: No time for traditional clinic visits

3. **Families with Children**
   - Need: Family doctor for comprehensive care
   - Age: 30-50
   - Pain Point: Looking for continuity in family healthcare

## Core Requirements

### Design
- ✅ Navy blue color scheme (#1B3A60 / hsl(218, 100%, 20%))
- ✅ Professional medical aesthetic
- ✅ Responsive design
- ✅ Smooth scroll navigation
- ✅ Company logo integration

### Content Sections
- ✅ Header with navigation
- ✅ Hero section with value proposition
- ✅ Services section (4 services)
- ✅ Conditions management section
- ✅ Transparent pricing section
- ✅ Booking section with iframe
- ✅ Contact section
- ✅ Footer with company info

### Services Offered
1. Family Medicine
2. General Medicine
3. Home Visit Services
4. Video Consultations

### Pricing
- Home Visit: 2500 SEK per 60 minutes
- Video Consultation: 2500 SEK per consultation
- Prescription Renewal: 50 SEK per medication

### Contact Information
- Phone: +46 737 35 43 54
- Email: roganovic@dr.com / ambulanta@dr.com
- Address: Lindholmshamnen 23, 417 56 Gothenburg, Sweden

## What's Been Implemented

### Frontend (Completed - 2025-12-15)
- ✅ Single-page application with smooth scroll navigation
- ✅ Responsive header with mobile menu
- ✅ Hero section with professional imagery
- ✅ Services showcase with icon cards
- ✅ Common conditions management section
- ✅ Transparent pricing cards
- ✅ Embedded Carepatron booking iframe
- ✅ Contact information cards
- ✅ Professional footer
- ✅ Navy blue color system with CSS variables
- ✅ Lucide React icons integration
- ✅ Smooth transitions and hover effects

### Technology Stack
- **Frontend:** React 19, Tailwind CSS, Shadcn UI components
- **Routing:** React Router DOM
- **Icons:** Lucide React
- **Styling:** Custom navy blue color palette

### Files Created/Modified
- `/app/frontend/src/pages/Home.jsx` - Main homepage component
- `/app/frontend/src/App.js` - Updated routing
- `/app/frontend/src/index.css` - Navy blue color system
- `/app/memory/PRD.md` - This file

## Next Tasks

### Phase 2: Backend Development (Optional)
- [ ] Contact form API endpoint
- [ ] Email notification system for inquiries
- [ ] Analytics tracking for booking conversions
- [ ] Newsletter subscription system

### Phase 3: Enhancements (Optional)
- [ ] Multi-language support (Swedish/English)
- [ ] Patient testimonials section
- [ ] Doctor profile/credentials page
- [ ] FAQ section
- [ ] Blog for medical information
- [ ] SEO optimization with meta tags
- [ ] Google Analytics integration
- [ ] Cookie consent banner (GDPR compliance)

### Phase 4: Advanced Features (Future)
- [ ] Patient portal integration
- [ ] Online prescription management
- [ ] Medical records access
- [ ] Insurance information section
- [ ] Appointment reminder system

## Success Metrics
- Clear call-to-action for booking
- Mobile-friendly interface
- Fast load times
- Professional medical aesthetic
- Easy navigation
- Trust-building elements (credentials, transparent pricing)

## Notes
- Website is frontend-only at this stage
- Booking system is handled by external Carepatron platform
- No backend required for current MVP
- All content is static and can be easily updated

