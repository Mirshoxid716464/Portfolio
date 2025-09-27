import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download, ArrowRight } from "lucide-react"

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "Java",
  "SQL",
  "MongoDB",
  "Git",
  "Docker",
  "AWS",
]

export default function OverviewPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-6">
                <p className="text-sm font-medium text-muted-foreground tracking-wide uppercase">Salom, </p>
                <h1 className="text-5xl lg:text-7xl font-light leading-[0.9] tracking-tight">
                  IT Management <span className="font-medium">talabasi</span>
                </h1>
                <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
                  Men zamonaviy texnologiyalar va IT menejment sohasida bilim olayotgan talabaman. Loyihalar yaratish va
                  texnologik yechimlar ishlab chiqishga qiziqaman.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="gap-2 rounded-full px-8">
                  <Download className="w-4 h-4" />
                  CV Yuklab olish
                </Button>
                <Button variant="ghost" size="lg" className="gap-2 rounded-full px-8">
                  Bog'lanish
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] max-w-md mx-auto">
                <Image
                  src="/professional-headshot-of-it-student.jpg"
                  alt="Profile"
                  fill
                  className="object-cover rounded-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 lg:px-12 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <h2 className="text-3xl font-light mb-6">Men haqimda</h2>
            </div>
            <div className="lg:col-span-8 space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Men IT Management sohasida tahsil olayotgan 4-kurs talabasi. Zamonaviy texnologiyalar va dasturlash
                tillarini o'rganishga katta qiziqish bildiraman.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Hozirda uch xil universitetda tahsil olmoqdaman: Japan Digital Universitetida IT Management, Sanno
                Universitetida Tijorat fakulteti va Jahon Tillari Universitetida Kompyuter Lingvistikasi yo'nalishlarida
                bilim olmoqdaman.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Maqsadim - zamonaviy IT yechimlar yaratish va texnologiya sohasida professional mutaxassis bo'lish.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <h2 className="text-3xl font-light mb-6">Ko'nikmalar</h2>
              <p className="text-muted-foreground">Men ishlagan texnologiyalar va vositalar</p>
            </div>
            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="p-4 rounded-xl border border-border hover:border-foreground/20 transition-colors"
                  >
                    <span className="text-sm font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
