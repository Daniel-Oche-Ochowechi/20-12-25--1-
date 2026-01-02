import { Badge } from "@/components/ui/badge"

const teamMembers = [
  {
    name: "Annie Baron-Benjamin",
    title: "Strategic Advisor",
    image: "/images/annie.png",
    expertise: "Investment Migration",
  },
  {
    name: "Dr. Gloria Chindah",
    title: "Lead Expert",
    image: "/images/gloriachindah.png",
    expertise: "Citizenship Strategy",
  },
]

export function TeamSection() {
  return (
    <section className="py-28 bg-gradient-to-b from-background via-card/15 to-background relative overflow-hidden">
      <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-primary/6 to-accent/4 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div
        className="absolute bottom-20 left-0 w-96 h-96 bg-gradient-to-tr from-primary/6 to-accent/4 rounded-full blur-3xl -z-10 animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-24">
          <Badge className="glass-card bg-slate-700/80 text-white hover:bg-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-8 border border-primary/30">
            Expert Team
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-balance leading-tight text-white">
            Meet the Experts Behind <span className="text-primary">OrientHeight</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-pretty text-lg leading-relaxed">
            A network of dedicated professionals, each bringing unique expertise in law, finance, and immigration
            strategies to serve your global ambitions with excellence and integrity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group glass-card overflow-hidden border border-white/20 bg-slate-800/60 backdrop-blur-xl hover:bg-slate-800/80 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-2xl"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden bg-gradient-to-br from-primary/12 to-accent/8 h-96">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-300"></div>
              </div>

              <div className="relative p-10 text-center bg-gradient-to-b from-slate-800/60 to-slate-800/40">
                <h3 className="text-2xl font-bold mb-3 text-white">{member.name}</h3>
                <p className="text-primary font-semibold mb-6">{member.title}</p>
                <Badge
                  variant="outline"
                  className="glass-card border-primary/40 text-white bg-primary/20 text-xs font-medium px-3 py-1 backdrop-blur-sm hover:bg-primary/30 transition-colors"
                >
                  {member.expertise}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
