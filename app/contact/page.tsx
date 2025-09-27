"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Github, Instagram, Linkedin, Mail, Send, ArrowUpRight } from "lucide-react"

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/username",
    username: "@username",
    description: "Loyihalarim va kodlarim",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com/in/username",
    username: "@username",
    description: "Professional tarmoq",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://instagram.com/username",
    username: "@username",
    description: "Shaxsiy hayot va qiziqishlar",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:your.email@example.com",
    username: "your.email@example.com",
    description: "To'g'ridan-to'g'ri bog'lanish",
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" })
    setIsSubmitting(false)

    // Show success message (you can implement toast notification here)
    alert("Xabaringiz muvaffaqiyatli yuborildi!")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="pt-32 pb-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-muted-foreground tracking-wide uppercase mb-6">Bog'lanish</p>
            <h1 className="text-5xl lg:text-6xl font-light leading-tight mb-6">
              Keling <span className="font-medium">gaplashamiz</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Hamkorlik takliflari, loyiha g'oyalari yoki shunchaki salomlashish uchun menga murojaat qiling. Har doim
              yangi imkoniyatlarga ochiqman!
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-7">
              <div className="max-w-2xl">
                <h2 className="text-2xl font-light mb-8">Xabar yuborish</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-3">
                        Ism
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Ismingizni kiriting"
                        className="rounded-xl"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-3">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="email@example.com"
                        className="rounded-xl"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-3">
                      Mavzu
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Xabar mavzusi"
                      className="rounded-xl"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-3">
                      Xabar
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Xabaringizni yozing..."
                      rows={6}
                      className="rounded-xl"
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="gap-2 rounded-full px-8" disabled={isSubmitting}>
                    <Send className="w-4 h-4" />
                    {isSubmitting ? "Yuborilmoqda..." : "Xabar yuborish"}
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-5">
              <div className="space-y-12">
                {/* Social Links */}
                <div>
                  <h2 className="text-2xl font-light mb-8">Ijtimoiy tarmoqlar</h2>
                  <div className="space-y-4">
                    {socialLinks.map((social) => {
                      const Icon = social.icon
                      return (
                        <a
                          key={social.name}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-6 rounded-xl border border-border hover:border-foreground/20 transition-colors group"
                        >
                          <div className="flex items-center gap-4">
                            <div className="p-3 rounded-xl bg-muted group-hover:bg-foreground/10 transition-colors">
                              <Icon className="w-5 h-5" />
                            </div>
                            <div>
                              <h3 className="font-medium">{social.name}</h3>
                              <p className="text-sm text-muted-foreground">{social.description}</p>
                            </div>
                          </div>
                          <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                        </a>
                      )
                    })}
                  </div>
                </div>

                {/* Quick Info */}
                <div className="p-8 rounded-2xl bg-muted/50">
                  <h3 className="text-xl font-medium mb-6">Tezkor ma'lumot</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium mb-2">Javob berish vaqti</h4>
                      <p className="text-sm text-muted-foreground">Odatda 24 soat ichida javob beraman</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Eng yaxshi vaqt</h4>
                      <p className="text-sm text-muted-foreground">Dushanba - Juma, 09:00 - 18:00 (GMT+5)</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-3">Tillar</h4>
                      <div className="flex gap-2">
                        <Badge variant="secondary" className="rounded-full">
                          O'zbek
                        </Badge>
                        <Badge variant="secondary" className="rounded-full">
                          Ingliz
                        </Badge>
                        <Badge variant="secondary" className="rounded-full">
                          Rus
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
