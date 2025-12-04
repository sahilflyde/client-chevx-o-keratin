import Pricing from "./pricing";
import SectionHeader from "./sectionHeader";
import Container from "./spacing";

export default function PricingSection({
  label = "Pricing",
  title = "Simple, Transparent Pricing",
  subtitle = "Choose a plan that fits your needs.",
  items = [
    {
      planName: "Starter",
      description: "Perfect for individuals and small teams.",
      price: "19",
      tag: "Most Popular",
      iconSrc: "https://placehold.co/64x64",
      variant: "blue",
      features: [
        { text: "5 Team Members" },
        { text: "Basic Support" },
        { text: "All Core Features" },
      ],
    },
    {
      planName: "Pro",
      description: "For growing businesses looking for more power.",
      price: "49",
      tag: "",
      iconSrc: "https://placehold.co/64x64",
      variant: "purple",
      features: [
        { text: "Unlimited Members" },
        { text: "Priority Support" },
        { text: "Advanced Integrations" },
      ],
    },
    {
      planName: "Enterprise",
      description: "Custom solutions for large organizations.",
      price: "99",
      tag: "Best Value",
      iconSrc: "https://placehold.co/64x64",
      variant: "gold",
      features: [
        { text: "Dedicated Manager" },
        { text: "Custom Integrations" },
        { text: "SLA Support" },
      ],
    },
  ],
}) {
  return (
    <Container className="price-section">
      <div className="mainSec">
        <SectionHeader
          label={label}
          title={title}
          subtitle={subtitle}
          align="center"
        />

        <div className="price-container">
          {items.map((p, i) => (
            <Pricing
              key={i}
              planName={p.planName}
              description={p.description}
              features={p.features?.map((f) => f.text) || []}
              price={p.price}
              tag={p.tag}
              iconSrc={p.iconSrc}
              variant={p.variant}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}
