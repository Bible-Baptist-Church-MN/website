import kidsImg from "@assets/generated_images/happy_kids_in_church_classroom.png";
import youthImg from "@assets/generated_images/youth_group_social_gathering.png";
import adultsImg from "@assets/generated_images/adults_coffee_fellowship.png";
import { Button } from "@/components/ui/button";

const ministries = [
  {
    title: "Kids Ministry",
    description: "A fun, safe environment for children to learn about God's love.",
    image: kidsImg,
    age: "Infants - 5th Grade",
  },
  {
    title: "Youth Group",
    description: "Building a community of teenagers passionate about their faith.",
    image: youthImg,
    age: "Grades 6-12",
  },
  {
    title: "Adult Groups",
    description: "Connect with others and grow in your walk with Christ.",
    image: adultsImg,
    age: "All Ages",
  },
];

export function Ministries() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <span className="mb-2 block text-sm font-bold uppercase tracking-widest text-secondary-foreground">Connect</span>
          <h2 className="font-serif text-4xl font-bold text-primary md:text-5xl">Ministries for Everyone</h2>
          <div className="mx-auto mt-4 h-1 w-20 bg-secondary" />
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {ministries.map((item, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:shadow-xl">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="mb-3 text-xs font-bold uppercase tracking-wide text-secondary-foreground">
                  {item.age}
                </div>
                <h3 className="mb-2 font-serif text-2xl font-bold text-primary">{item.title}</h3>
                <p className="mb-6 text-muted-foreground">{item.description}</p>
                <Button variant="link" className="h-auto p-0 font-semibold text-primary decoration-2 underline-offset-4 hover:text-secondary">
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
