"use client";

import Image from "next/image";
import Typography from "@/componentsForm/ui-kit/typography";
import { Container } from "@/componentsForm/ui-kit/spacing";

const OurServices = ({
  imageSrc,
  eyebrow,
  title,
  cardIcon,
  cardHeading,
  cardShortDesc,
  cardLongDesc,
}) => {
  return (
    <Container variant="primary">
      <section className="our-services">
        <div className="our-services__inner">
          {/* LEFT STATIC LAYOUT (Only image dynamic) */}
          <div className="our-services__media">
            <div className="our-services__image-wrapper">
              <Image
                src={imageSrc}
                alt="services image"
                width={643}
                height={500}
                className="our-services__image"
              />
            </div>
          </div>

          {/* RIGHT SIDE CONTENT */}
          <div className="our-services__content">
            <div className="gap-[var(--sp-32)] flex flex-col">
              <Typography variant="h6" className="our-services__eyebrow">
                {eyebrow}
              </Typography>

              <Typography variant="h2" as="h2" className="our-services__title">
                {title}
              </Typography>
            </div>

            <div className="flex flex-col gap-[var(--sp-24)] mt-[var(--sp-8)]">
              <div className="our-services__card">
                <Image
                  src={cardIcon}
                  alt="service icon"
                  width={56}
                  height={56}
                />

                <div className="our-services__card-body">
                  <Typography variant="h3">{cardHeading}</Typography>

                  <Typography
                    variant="body-4"
                    className="our-services__card-text"
                  >
                    {cardShortDesc}
                  </Typography>
                </div>
              </div>

              <Typography
                variant="body-3"
                className="our-services__description"
                colorVariant="gray"
              >
                {cardLongDesc}
              </Typography>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default OurServices;

{
  /* <OurServices
  imageSrc="https://ik.imagekit.io/75zj3bigp/ImageWithFallback%20(1).png"
  eyebrow="OUR SERVICES"
  title="Your Success, Our Priority"
  cardIcon="https://ik.imagekit.io/75zj3bigp/Container.png"
  cardHeading="Applicant Tracking"
  cardShortDesc="A sophisticated platform with intuitive job posting tools and AI matching."
  cardLongDesc="A sophisticated platform with intuitive job posting tools, dynamic resume filtering, and AI-powered candidate matching to save time and improve hiring quality."
/> */
}
