import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function WorkTogetherButton() {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <Button
        asChild
        size="lg"
        className="shadow-xl rounded-full px-6 gap-2 bg-foreground text-background hover:bg-foreground/90"
      >
        <Link href="/contact">
          Birga ishlaymizmi?
          <ArrowRight className="w-4 h-4" />
        </Link>
      </Button>
    </div>
  )
}
