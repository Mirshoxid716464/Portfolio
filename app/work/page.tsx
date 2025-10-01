import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowUpRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "E-commerce Web Application",
    description:
      "Zamonaviy e-commerce platformasi React va Node.js yordamida yaratilgan. To'liq funksional onlayn do'kon imkoniyatlari bilan.",
    image: "/image-removebg-preview - 2025-10-01T140627.236.png",
    date: "2024 yil Dekabr",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    githubUrl: "https://www.figma.com/proto/jZCgYTlwrwW3qMVsDRNwlf/Untitled?page-id=0%3A1&node-id=10-65&viewport=551%2C-262%2C0.22&t=fiGxFZ8AmS4cLVRr-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=10%3A65&show-proto-sidebar=1",
    featured: true,
  },
  {
    id: 2,
    title: "Task Management System",
    description:
      "Jamoaviy ishlash uchun vazifalarni boshqarish tizimi. Real-time yangilanishlar va foydalanuvchi rollarini boshqarish.",
    image: "/photo_2025-10-01_14-10-52.jpg",
    date: "2024 yil Noyabr",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    githubUrl: "https://github.com/username/task-management",
    featured: true,
  },
  // {
  //   id: 3,
  //   title: "Weather App",
  //   description:
  //     "Ob-havo ma'lumotlarini ko'rsatuvchi mobil-friendly ilova. Geolokatsiya va 7 kunlik prognoz imkoniyatlari.",
  //   image: "/weather-app-interface.png",
  //   date: "2024 yil Oktabr",
  //   technologies: ["React", "API Integration", "CSS3"],
  //   githubUrl: "https://github.com/username/weather-app",
  //   featured: false,
  // },
  // {
  //   id: 4,
  //   title: "Portfolio Website",
  //   description:
  //     "Shaxsiy portfolio veb-sayti zamonaviy dizayn va responsive layout bilan. Animatsiyalar va interaktiv elementlar.",
  //   image: "/portfolio-website-design.png",
  //   date: "2024 yil Sentyabr",
  //   technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
  //   githubUrl: "https://github.com/username/portfolio",
  //   featured: false,
  // },
  // {
  //   id: 5,
  //   title: "Chat Application",
  //   description:
  //     "Real-time chat ilovasi Socket.io yordamida. Guruh chatlari, fayl yuborish va emoji qo'llab-quvvatlash.",
  //   image: "/chat-application-interface.png",
  //   date: "2024 yil Avgust",
  //   technologies: ["React", "Socket.io", "Express", "MongoDB"],
  //   githubUrl: "https://github.com/username/chat-app",
  //   featured: false,
  // },
  // {
  //   id: 6,
  //   title: "Blog Platform",
  //   description:
  //     "Shaxsiy blog platformasi CMS imkoniyatlari bilan. Maqolalar yozish, tahrirlash va nashr qilish tizimi.",
  //   image: "/blog-platform-cms-interface.jpg",
  //   date: "2024 yil Iyul",
  //   technologies: ["Next.js", "Markdown", "Vercel", "Git"],
  //   githubUrl: "https://github.com/username/blog-platform",
  //   featured: false,
  // },
]

export default function WorkPage() {
  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="pt-32 pb-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-muted-foreground tracking-wide uppercase mb-6">Loyihalar</p>
            <h1 className="text-5xl lg:text-6xl font-light leading-tight mb-6">
              Mening <span className="font-medium">ishlarim</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Men yaratgan loyihalar va texnologik yechimlar. Har bir loyiha yangi ko'nikmalar o'rganish va amaliy
              tajriba olish uchun yaratilgan.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 mb-16">
            <div className="lg:col-span-4">
              <h2 className="text-3xl font-light mb-4">Asosiy loyihalar</h2>
              <p className="text-muted-foreground">Eng muhim va katta loyihalarim</p>
            </div>
            <div className="lg:col-span-8">
              <div className="space-y-12">
                {featuredProjects.map((project, index) => (
                  <div key={project.id} className="group">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                      <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      </div>
                      <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          {project.date}
                        </div>
                        <div>
                          <h3 className="text-2xl font-medium mb-4">{project.title}</h3>
                          <p className="text-muted-foreground leading-relaxed mb-6">{project.description}</p>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="rounded-full">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        <Button asChild variant="ghost" className="gap-2 p-0 h-auto">
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            Loyihani ko'rish
                            <ArrowUpRight className="w-4 h-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Projects
      <section className="py-16 px-6 lg:px-12 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <h2 className="text-3xl font-light mb-4">Boshqa loyihalar</h2>
              <p className="text-muted-foreground">Qo'shimcha loyihalar va eksperimentlar</p>
            </div>
            <div className="lg:col-span-8">
              <div className="grid md:grid-cols-2 gap-8">
                {otherProjects.map((project) => (
                  <div key={project.id} className="group">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-xl mb-6">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {project.date}
                      </div>
                      <h3 className="text-xl font-medium">{project.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <Badge key={tech} variant="secondary" className="rounded-full text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="secondary" className="rounded-full text-xs">
                            +{project.technologies.length - 3}
                          </Badge>
                        )}
                      </div>
                      <Button asChild variant="ghost" className="gap-2 p-0 h-auto">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          Ko'rish
                          <ArrowUpRight className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  )
}
