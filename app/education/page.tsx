import { Badge } from "@/components/ui/badge"
import { GraduationCap, Calendar, MapPin, BookOpen } from "lucide-react"

const education = [
  {
    id: 1,
    institution: "Japan Digital University",
    degree: "IT Management",
    level: "4-kurs talabasi",
    period: "2021 - 2025",
    location: "Yaponiya (Masofaviy)",
    description:
      "Zamonaviy IT texnologiyalar, loyiha menejmenti, raqamli transformatsiya va biznes-analitika sohasida chuqur bilimlar olmoqdaman.",
    subjects: ["Project Management", "Digital Transformation", "Data Analytics", "IT Strategy", "Agile Methodology"],
    status: "active",
  },
  {
    id: 2,
    institution: "Sanno University",
    degree: "Tijorat fakulteti",
    level: "4-kurs talabasi",
    period: "2021 - 2025",
    location: "Yaponiya (Masofaviy)",
    description: "Biznes menejmenti, marketing, moliya va xalqaro tijorat sohasida fundamental bilimlar olish.",
    subjects: ["Business Management", "International Trade", "Marketing Strategy", "Financial Analysis", "Economics"],
    status: "active",
  },
  {
    id: 3,
    institution: "Jahon Tillari Universiteti",
    degree: "Kompyuter Lingvistikasi",
    level: "4-kurs talabasi",
    period: "2021 - 2025",
    location: "Toshkent, O'zbekiston",
    description: "Tabiiy tillarni qayta ishlash, sun'iy intellekt va til texnologiyalari sohasida ixtisoslashish.",
    subjects: [
      "Natural Language Processing",
      "Machine Learning",
      "Computational Linguistics",
      "AI Technologies",
      "Language Models",
    ],
    status: "active",
  },
]

const certifications = [
  {
    name: "JavaScript Fundamentals",
    issuer: "FreeCodeCamp",
    date: "2024",
    type: "Online Course",
  },
  {
    name: "React Development",
    issuer: "Udemy",
    date: "2024",
    type: "Certification",
  },
  {
    name: "Project Management Basics",
    issuer: "Coursera",
    date: "2023",
    type: "Certificate",
  },
  {
    name: "Database Design",
    issuer: "Khan Academy",
    date: "2023",
    type: "Course Completion",
  },
]

export default function EducationPage() {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="pt-32 pb-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-muted-foreground tracking-wide uppercase mb-6">Ta'lim</p>
            <h1 className="text-5xl lg:text-6xl font-light leading-tight mb-6">
              Mening <span className="font-medium">ta'limim</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Men hozirda uch xil universitetda turli yo'nalishlarda tahsil olmoqdaman. Har bir yo'nalish menga keng
              qamrovli bilim va ko'nikmalar bermoqda.
            </p>
          </div>
        </div>
      </section>

      {/* Current Education */}
      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <h2 className="text-3xl font-light mb-4 flex items-center gap-3">
                <GraduationCap className="w-8 h-8 text-foreground" />
                Hozirgi ta'lim
              </h2>
              <p className="text-muted-foreground">Faol ravishda tahsil olayotgan yo'nalishlarim</p>
            </div>
            <div className="lg:col-span-8">
              <div className="space-y-12">
                {education.map((edu) => (
                  <div key={edu.id} className="border-l-2 border-border pl-8 relative">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-foreground rounded-full"></div>
                    <div className="space-y-6">
                      <div>
                        <div className="flex flex-wrap gap-3 mb-4">
                          <Badge variant="secondary" className="gap-1 rounded-full">
                            <Calendar className="w-3 h-3" />
                            {edu.period}
                          </Badge>
                          <Badge variant="outline" className="gap-1 rounded-full">
                            <MapPin className="w-3 h-3" />
                            {edu.location}
                          </Badge>
                          {edu.status === "active" && (
                            <Badge className="gap-1 rounded-full">
                              <BookOpen className="w-3 h-3" />
                              Faol
                            </Badge>
                          )}
                        </div>
                        <h3 className="text-2xl font-medium mb-2">{edu.institution}</h3>
                        <p className="text-lg text-muted-foreground mb-2">{edu.degree}</p>
                        <p className="font-medium text-foreground mb-4">{edu.level}</p>
                        <p className="text-muted-foreground leading-relaxed mb-6">{edu.description}</p>
                      </div>

                      <div>
                        <h5 className="font-medium mb-4">Asosiy fanlar:</h5>
                        <div className="flex flex-wrap gap-2">
                          {edu.subjects.map((subject) => (
                            <Badge key={subject} variant="secondary" className="rounded-full">
                              {subject}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 px-6 lg:px-12 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <h2 className="text-3xl font-light mb-4">Sertifikatlar</h2>
              <p className="text-muted-foreground">Qo'shimcha kurslar va sertifikatlar</p>
            </div>
            <div className="lg:col-span-8">
              <div className="grid md:grid-cols-2 gap-6">
                {certifications.map((cert, index) => (
                  <div key={index} className="p-6 rounded-xl border border-border bg-background">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-medium">{cert.name}</h3>
                      <Badge variant="outline" className="rounded-full">
                        {cert.date}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground mb-3">{cert.issuer}</p>
                    <Badge variant="secondary" className="rounded-full">
                      {cert.type}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Goals */}
      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light mb-6">Akademik maqsadlar</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            2025 yilda barcha uch universitetdan muvaffaqiyatli bitirish va IT sohasida professional faoliyatni
            boshlash. Olgan bilimlarimni amaliy loyihalarda qo'llash va texnologiya sohasida o'z hissam qo'shish.
          </p>
        </div>
      </section>
    </div>
  )
}
