"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, Clock, MessageCircle } from "lucide-react"
import Navbar from "@/components/navbar"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log("Form submitted:", formData)
    setIsSubmitting(false)

    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" })

    // You would typically send this data to your backend here
    alert("Thank you for your message! I'll get back to you soon.")
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "hello@yourname.com",
      description: "Send me an email anytime",
      href: "mailto:hello@yourname.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      description: "Call me during business hours",
      href: "tel:+15551234567",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "San Francisco, CA",
      description: "Available for local meetings",
      href: "https://maps.google.com/?q=San+Francisco,CA",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-background via-primary/5 to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Get In <span className="text-primary">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Have a project in mind or just want to chat? I'd love to hear from you. Let's discuss how we can work
            together to bring your ideas to life.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground flex items-center gap-2">
                    <MessageCircle className="h-6 w-6 text-primary" />
                    Send a Message
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and I'll get back to you as soon as possible.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-foreground">
                          Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="border-border focus:border-primary focus:ring-primary"
                          placeholder="Your full name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-foreground">
                          Email *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="border-border focus:border-primary focus:ring-primary"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-foreground">
                        Subject *
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="border-border focus:border-primary focus:ring-primary"
                        placeholder="What's this about?"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-foreground">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="border-border focus:border-primary focus:ring-primary resize-none"
                        placeholder="Tell me about your project or what you'd like to discuss..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-primary/90 text-lg py-6"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Let's Connect</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  I'm always open to discussing new opportunities, creative projects, or just having a friendly chat
                  about technology and design. Choose the method that works best for you.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-border hover:border-secondary/50 transition-colors duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <info.icon className="h-6 w-6 text-secondary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                          <a
                            href={info.href}
                            className="text-primary hover:text-primary/80 font-medium transition-colors duration-200"
                          >
                            {info.value}
                          </a>
                          <p className="text-muted-foreground text-sm mt-1">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Availability */}
              <Card className="border-border bg-gradient-to-br from-primary/5 to-secondary/5">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Availability</h3>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                        <p>Weekend: Available for urgent projects</p>
                        <p className="text-primary font-medium mt-2">Currently accepting new projects</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-card/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">Quick answers to common questions</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-border">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3">What's your typical response time?</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  I usually respond to emails within 24 hours during business days. For urgent matters, feel free to
                  call directly.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3">Do you work with international clients?</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  I work with clients worldwide and am comfortable with different time zones and communication
                  preferences.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3">What information should I include?</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Please include your project timeline, budget range, and any specific requirements or technologies you
                  prefer.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3">Do you offer free consultations?</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Yes! I offer a free 30-minute consultation to discuss your project and see if we're a good fit to work
                  together.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Don't hesitate to reach out. I'm here to help bring your ideas to life and create something amazing
            together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90">
              <a href="mailto:hello@yourname.com">
                Send Email <Mail className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              <a href="tel:+15551234567">Call Now</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
