'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardFeature } from '@/components/ui/card';
import { contactFormSchema, ContactFormData } from '@/lib/validations';

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      // Here you would typically send the data to your backend
      console.log('Form submitted:', data);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSubmitted(true);
      reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white via-gray-50/50 to-gray-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-tvec-navy/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-tvec-green/10 rounded-full blur-2xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-tvec-navy mb-4">
            Contactez-<span className="text-tvec-green relative">
              nous
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-accent transform scale-x-0 animate-scale-in" style={{animationDelay: '600ms'}}></span>
            </span>
          </h2>
          <div className="w-24 h-1 bg-tvec-yellow mx-auto mb-6 animate-scale-in" style={{animationDelay: '400ms'}}></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Prêt à transformer votre infrastructure électrique ? 
            Contactez nos experts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 scroll-reveal">
            <h3 className="text-3xl font-bold text-tvec-navy mb-8 relative">
              Informations de Contact
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-tvec-green rounded-full"></span>
            </h3>

            {/* Office Address */}
            <Card className="p-6 border-2 border-gray-100 hover:border-tvec-green transition-colors duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-tvec-green/10 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-tvec-green" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-tvec-navy mb-2">
                    Adresse du Bureau
                  </h4>
                  <p className="text-gray-600">
                    05 rue Louis-Trechot, Poto-Poto<br />
                    Brazzaville<br />
                    République du Congo
                  </p>
                </div>
              </div>
            </Card>

            {/* Phone */}
            <Card className="p-6 border-2 border-gray-100 hover:border-tvec-green transition-colors duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-tvec-navy/10 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-tvec-navy" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-tvec-navy mb-2">
                    Téléphone
                  </h4>
                  <p className="text-gray-600">
                    +242 XXX XXX XXX<br />
                  </p>
                </div>
              </div>
            </Card>

            {/* Email */}
            <Card className="p-6 border-2 border-gray-100 hover:border-tvec-green transition-colors duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-tvec-yellow/10 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-tvec-yellow" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-tvec-navy mb-2">
                    Email
                  </h4>
                  <p className="text-gray-600">
                    contact@tvec.cg<br />
                    commercial@tvec.cg
                  </p>
                </div>
              </div>
            </Card>

            {/* Hours */}
            <Card className="p-6 border-2 border-gray-100 hover:border-tvec-green transition-colors duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-tvec-green/10 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-tvec-green" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-tvec-navy mb-2">
                    Heures d&apos;Ouverture
                  </h4>
                  <p className="text-gray-600">
                    Lundi - Vendredi: 8h00 - 17h00<br />
                    Samedi: 8h00 - 12h00<br />
                    Support Urgence: 24h/7j
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="scroll-reveal">
            <h3 className="text-3xl font-bold text-tvec-navy mb-8 relative">
              Demande de Consultation
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-tvec-green rounded-full"></span>
            </h3>

            <CardFeature className="p-8">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nom Complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      {...register('name')}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-tvec-green focus:border-transparent transition-colors ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Votre nom complet"
                    />
                    {errors.name && (
                      <div className="mt-1 flex items-center text-red-600 text-sm">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.name.message}
                      </div>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      {...register('email')}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-tvec-green focus:border-transparent transition-colors ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="votre.email@exemple.com"
                    />
                    {errors.email && (
                      <div className="mt-1 flex items-center text-red-600 text-sm">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.email.message}
                      </div>
                    )}
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Entreprise *
                    </label>
                    <input
                      type="text"
                      id="company"
                      {...register('company')}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-tvec-green focus:border-transparent transition-colors ${
                        errors.company ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Nom de votre entreprise"
                    />
                    {errors.company && (
                      <div className="mt-1 flex items-center text-red-600 text-sm">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.company.message}
                      </div>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Téléphone (optionnel)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      {...register('phone')}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-tvec-green focus:border-transparent transition-colors ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="+243 XXX XXX XXX"
                    />
                    {errors.phone && (
                      <div className="mt-1 flex items-center text-red-600 text-sm">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.phone.message}
                      </div>
                    )}
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Sujet *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      {...register('subject')}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-tvec-green focus:border-transparent transition-colors ${
                        errors.subject ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Consultation, Projet, Partenariat..."
                    />
                    {errors.subject && (
                      <div className="mt-1 flex items-center text-red-600 text-sm">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.subject.message}
                      </div>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      {...register('message')}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-tvec-green focus:border-transparent transition-colors resize-none ${
                        errors.message ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Décrivez votre projet ou vos besoins..."
                    />
                    {errors.message && (
                      <div className="mt-1 flex items-center text-red-600 text-sm">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.message.message}
                      </div>
                    )}
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Envoyer la Demande
                      </>
                    )}
                  </Button>

                  <p className="text-sm text-gray-500 text-center">
                    Nous vous répondrons dans les 24 heures
                  </p>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="bg-tvec-green/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-tvec-green" />
                  </div>
                  <h4 className="text-2xl font-bold text-tvec-green mb-4">
                    Message Envoyé !
                  </h4>
                  <p className="text-gray-600">
                    Merci pour votre message. Notre équipe vous contactera 
                    dans les plus brefs délais pour discuter de votre projet.
                  </p>
                </div>
              )}
            </CardFeature>
          </div>
        </div>
      </div>
    </section>
  );
}