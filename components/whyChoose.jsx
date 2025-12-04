import { Button } from "./button";
import Label from "./lable";
import Container from "./spacing";
import Typography from "./typography";
import { motion, useInView } from "framer-motion";
import Card from "./value";

export default function WhyChoose({
  open,
  setOpen,
  title = "",
  label = "",
  description = "",
  buttonText = "",
  features = [],
}) {  
  console.log(features);

  return (
    <section className="why-choose">
      <Container variant="secondary">
        <div className="why-choose-grid">
          {/* LEFT SIDE */}
          <div className="why-left">
            <div className="why-left-content">
              <Label className="lable" text={label} />
              <Typography variant="h2" className="why-title">
                {title}
              </Typography>

              <Typography variant="body-4" className="why-desc">
                {description}
              </Typography>
            </div>

            <Button
              variant="primary"
              size="xl"
              showIcon={false}
              onClick={() => setOpen?.(true)}
              className="why-btn"
            >
              <Typography variant="h4">{buttonText}</Typography>
            </Button>
          </div>

          {/* RIGHT SIDE — FEATURES */}
          <div className="why-right">
            {features.map((feature, index) => (
              //   <FlipCard key={index} feature={feature} delay={index * 0.2} />
              <Card
                iconSrc={feature?.icon}
                iconAlt={feature?.title}
                title={feature?.title}
                description={feature?.desc}
                className="why-card"
                key={index}
              />
            ))}
          </div>
        </div>

        {/* MOBILE BUTTON */}
        <div className="mobile-button-container">
          <Button
            variant="primary"
            size="xl"
            showIcon={false}
            onClick={() => setOpen?.(true)}
          >
            <Typography variant="h4">{buttonText}</Typography>
          </Button>
        </div>
      </Container>
    </section>
  );
}

function FlipCard({ feature, delay = 0 }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  console.log(feature);

  return (
    <motion.div
      ref={ref}
      initial={{ rotateX: 90, opacity: 0, y: 80 }}
      animate={inView ? { rotateX: 0, opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.13, 0.1, 0.12, 1],
      }}
      style={{ perspective: 1000 }}
    >
      <Card
        iconSrc={feature?.icon}
        iconAlt={feature?.title}
        title={feature?.title}
        description={feature?.desc}
        className="why-card"
      />
    </motion.div>
  );
}
