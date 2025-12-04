import Link from "next/link";
import Image from "next/image";
import Container from "./spacing";
import SectionHeader from "./sectionHeader";
import Typography from "./typography";
import { Button } from "./button";
import FAQ from "./faq";

export default function FAQSection({
  label = "FAQ",
  title = "Frequently Asked Questions",
  subtitle = "Find answers to the most common questions.",
  items = [
    {
      question: "What is your refund policy?",
      answer:
        "We offer a 30-day no-questions-asked refund for all eligible plans.",
    },
    {
      question: "Can I upgrade my plan later?",
      answer:
        "Yes, you can upgrade to any higher plan any time without losing data.",
    },
    {
      question: "Do you provide customer support?",
      answer: "We offer 24×7 priority support for all premium customers.",
    },
  ],
  ctaTitle = "Got more questions?",
  ctaDescription = "Get in touch and we’ll take care of the rest.",
  ctaButtonText = "Contact Us",
  ctaButtonLink = "/contact-us",
}) {
  return (
    <Container className="page-faq-container">
      <div className="faq-header">
        <SectionHeader
          label={label}
          title={title}
          subtitle={subtitle}
          align="start"
        />

        <div className="faq-cta-section">
          <Typography variant="h3">{ctaTitle}</Typography>
          <Typography variant="body-4">{ctaDescription}</Typography>

          <Link href={ctaButtonLink} passHref>
            <Button
              variant="primary"
              size="smTwo"
              showIcon={true}
              icon={
                <Image
                  src="https://ik.imagekit.io/a9uxeuyhx/Arrow%20Right.png?updatedAt=1763619992791"
                  width={14}
                  height={12}
                  alt="Arrow Right"
                />
              }
            >
              {ctaButtonText}
            </Button>
          </Link>
        </div>
      </div>

      <div className="faq-content">
        <FAQ faqs={items} />
      </div>
    </Container>
  );
}
