"use client";
import Image from "next/image";
import Link from "next/link";

import { useEffect, useState } from "react";
import Container from "./spacing";
import Typography from "./typography";

export default function Footer({
  logo = "https://placehold.co/100x40",
  description = "This is a sample footer description for your brand.",
  socials = [
    { name: "Facebook", href: "#" },
    { name: "Twitter", href: "#" },
    { name: "LinkedIn", href: "#" },
  ],
  quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
  ],
  contacts = [
    {
      text: "+91 9876543210",
      icon: "https://ik.imagekit.io/75zj3bigp/Icon%20(7).png?updatedAt=1764071470889",
    },
    {
      text: "info@example.com",
      icon: "https://placehold.co/16x16",
    },
    {
      text: "123 Innovation Street, Yogyakarta, Indonesia",
      icon: "https://placehold.co/16x16",
    },
  ],
  subscribeTitle = "Subscribe to our newsletter",
  subscribeSubtitle = "Get the latest updates and offers.",
  copyright = "© 2025 Your Company. All rights reserved.",
}) {
  const [variant, setVariant] = useState("body-4");

  // Mobile handling for text variant
  useEffect(() => {
    const handleResize = () => {
      setVariant(window.innerWidth <= 450 ? "body-1" : "body-4");
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <footer className="footer">
      <Container className="primary-spacing">
        <div className="footer-container-one">
          <div className="footer__wrapper">
            {/* LEFT BRAND SECTION */}
            <div className="footer__brand">
              <div className="footer__brand-content">
                <Link href="/" className="footer__logo">
                  <Image
                    src={logo || "https://placehold.co/100x40"}
                    width={200}
                    height={100}
                    alt="logo"
                  />
                </Link>

                <Typography variant="body-4" className="footer__desc">
                  {description}
                </Typography>
              </div>

              <div className="footer__socials">
                {socials.map((item, i) => (
                  <Link key={i} href={item.href} className="footer__social-btn">
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* QUICK LINKS + CONTACTS */}
            <div className="footer-links-container">
              <div className="footer__links">
                <Typography variant="h5">Quick Links</Typography>
                <ul>
                  {quickLinks.map((link, i) => (
                    <li key={i}>
                      <Link href={link.href}>
                        <Typography variant="body-4">{link.name}</Typography>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="footer__contacts">
                <Typography variant="h5">Contacts</Typography>
                <ul>
                  {contacts.map((c, i) => (
                    <li key={i} className="footer__contact-item">
                      <Image
                        src={
                          c.icon ||
                          "https://ik.imagekit.io/a9uxeuyhx/Arrow%20Right.png?updatedAt=1763619992791"
                        }
                        width={16}
                        height={16}
                        alt="icon"
                        className="footer__icon"
                      />
                      <Typography variant="body-4">{c.text}</Typography>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* SUBSCRIBE BOX */}
          <div className="footer__subscribe">
            <div className="footer__subscribe-content">
              <Typography variant="h3">{subscribeTitle}</Typography>
              <Typography variant="body-4" className="footer__subscribe-desc">
                {subscribeSubtitle}
              </Typography>
            </div>

            <div className="footer__input">
              <input type="email" placeholder="Enter your email" />
              <button className="arrow-btn">
                <Image
                  src="https://ik.imagekit.io/a9uxeuyhx/Arrow%20Right.png?updatedAt=1763619992791"
                  width={14}
                  height={12}
                  alt="arrow"
                />
              </button>
            </div>
          </div>
        </div>
      </Container>

      <div className="footer__bottom">
        <Typography variant={variant}>{copyright}</Typography>
      </div>
    </footer>
  );
}
