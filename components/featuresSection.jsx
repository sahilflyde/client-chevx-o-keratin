import { useEffect, useState } from "react";
import Container from "./spacing";
import GridSection from "./GridWrapperAdvance";
import ImageCard from "./card";
import { motion } from "framer-motion";
import SectionHeader from "./sectionHeader";

export default function FeaturesSection({
  label = "",
  title = "",
  subtitle = "",
  minColWidth = 280,
  gap = 24,
  columns = 3,
  centerTitle = false,
  items = [], 
  desktopOrder = [], 
}) {
  const [isMobile, setIsMobile] = useState(false);
  const [isIpad, setIsIpad] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const checkDevice = () => {
    const width = window.innerWidth;
    setIsMobile(width <= 600);
    setIsIpad(width > 600 && width <= 1100);
    setIsDesktop(width > 1024);
  };

  useEffect(() => {
    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  return (
    <>
      {isMobile || isIpad ? (
        <Container variant="primary">
          <GridSection
            label={label}
            title={title}
            subtitle={subtitle}
            minColWidth={minColWidth}
            gap={gap}
            columns={columns}
            centerTitle={centerTitle}
            items={items.map((card) => ({
              component: (
                <ImageCard
                  heading={card.heading}
                  description={card.description}
                  imageLink={card.imageLink}
                  textPosition={card.textPosition}
                  className={card.className || ""}
                />
              ),
              rowSpan: card.rowSpan || 1,
              colSpan: card.colSpan || 1,
            }))}
          />
        </Container>
      ) : isDesktop ? (
        <Container variant="section" className="flex flex-col gap-[56px]">
          <motion.div
            initial={{ y: 50, opacity: 0, filter: "blur(10px)" }}
            whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <SectionHeader label={label} title={title} subtitle={subtitle} />
          </motion.div>

          {/* Desktop Cards */}
          <motion.div
            className="columns-3 !gap-[32px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-30px" }}
            variants={{
              visible: {
                transition: { staggerChildren: 0.6 },
              },
            }}
          >
            {(desktopOrder.length ? desktopOrder : items.map((_, i) => i)).map(
              (idx) => {
                const f = items[idx];
                if (!f) return null;
                return (
                  <motion.div
                    key={idx}
                    variants={{
                      hidden: {
                        y: 80,
                        opacity: 0,
                        filter: "blur(15px)",
                        scale: 0.9,
                      },
                      visible: {
                        y: 0,
                        opacity: 1,
                        filter: "blur(0px)",
                        scale: 1,
                        transition: {
                          type: "spring",
                          damping: 15,
                          stiffness: 100,
                          bounce: 0.4,
                          duration: 0.8,
                        },
                      },
                    }}
                    className={
                      idx == 0
                        ? "break-inside-avoid"
                        : "break-inside-avoid mt-[32px]"
                    }
                  >
                    <ImageCard
                      heading={f.heading}
                      description={f.description}
                      imageLink={f.imageLink}
                      textPosition={f.textPosition}
                    />
                  </motion.div>
                );
              }
            )}
          </motion.div>
        </Container>
      ) : null}
    </>
  );
}
