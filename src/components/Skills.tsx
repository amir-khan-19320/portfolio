import { profile } from "@/content/profile";
import { FadeIn } from "./FadeIn";
import { Section } from "./Section";

const services = [
  {
    title: "Magento / Adobe Commerce",
    body: "Magento 2.4, GraphQL, marketplace modules, EE/CE storefronts, and production debugging.",
  },
  {
    title: "Laravel backends",
    body: "Laravel 10/12 APIs, OMS, queues, JWT, PostgreSQL/MySQL, and healthcare platforms.",
  },
  {
    title: "Search & performance",
    body: "Elasticsearch, Algolia, Redis, Nginx, and GraphQL/homepage caching under load.",
  },
  {
    title: "Payments & logistics",
    body: "Razorpay, TalyPay BNPL, ShipRocket, OMS APIs, and order-lifecycle integrations.",
  },
];

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="What I do">
      <div className="grid gap-6 sm:grid-cols-2">
        {services.map((service, index) => (
          <FadeIn key={service.title} delay={index * 0.05}>
            <article className="glow-card h-full rounded-xl p-8">
              <p className="font-serif text-2xl tracking-tight text-foreground">
                {service.title}
              </p>
              <p className="mt-4 text-muted">{service.body}</p>
            </article>
          </FadeIn>
        ))}
      </div>
      <div className="mt-12 flex flex-wrap justify-center gap-3">
        {[...profile.accentLine, "PHP", "React 19", "MySQL", "Docker"].map((item) => (
          <span
            key={item}
            className="rounded-md border border-border px-4 py-2 text-sm text-foreground"
          >
            {item}
          </span>
        ))}
      </div>
    </Section>
  );
}
