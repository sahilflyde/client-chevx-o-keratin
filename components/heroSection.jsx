"use client";
import Container from "./spacing";
import { motion } from "framer-motion";
import Typography from "./typography";
import { Button } from "./button";
import HeroImageSection from "./heroImageSection";

export default function HeroSection(props) {
  const {
    heading = "Default Heading",
    description = "Default description",
    primaryBtnText = "Get Started",
    primaryBtnLink = "#",
    secondaryBtnText = "Learn More",
    secondaryBtnLink = "#",

    // Images
    mainImage = "",
    leftImage = "",
    rightImage = "",

    // NEW → variant support ("default" OR "full")
    variant = "default",
  } = props;

  return (
    <Container variant="heroSpacing">
      {/* TEXT BLOCK */}
      <div className="hero-container">
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1],
            delay: 0.1,
          }}
        >
          <Typography variant="h1" style={{ whiteSpace: "pre-line" }}>
            {heading}
          </Typography>
        </motion.div>

        <motion.div
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.9,
            ease: [0.25, 0.1, 0.25, 1],
            delay: 0.25,
          }}
        >
          <div className="hero-right">
            <Typography variant="body-4" style={{ whiteSpace: "pre-line" }}>
              {description}
            </Typography>

            <div className="hero-buttons">
              <Button
                variant="primary"
                icon={
                  <img
                    src="https://ik.imagekit.io/flyde/Hirezy/Arrow%20Right.png"
                    width={14}
                    height={12}
                    alt="arrow"
                    className="arrow-img"
                  />
                }
                iconPosition="right"
                onClick={() => (window.location.href = primaryBtnLink)}
              >
                {primaryBtnText}
              </Button>

              <Button
                variant="black-outline"
                size="xl"
                onClick={() => (window.location.href = secondaryBtnLink)}
              >
                {secondaryBtnText}
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* IMAGE SECTION */}
      <motion.div
        initial={{ y: 80, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{
          duration: 1.2,
          ease: [0.33, 1, 0.68, 1],
          delay: 0.5,
        }}
      >
        <HeroImageSection
          mainImage={mainImage}
          leftImage={leftImage}
          rightImage={rightImage}
          variant={variant} // NEW IMPORTANT LINE
        />
      </motion.div>
    </Container>
  );
}
