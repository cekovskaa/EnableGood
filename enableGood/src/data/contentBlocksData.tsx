// data/contentBlocksData.ts
import type { ContentBlockProps } from "../types/types";

export const problemSolveBlock: Omit<ContentBlockProps, "className"> = {
  heading: "The Problem We Solve",
  content: (
    <>
      <p>
        Today, companies are under growing pressure to show real progress on ESG
        goals. At the same time, NGOs are working tirelessly to create social
        and environmental change — but often struggle to connect with the right
        partners and secure lasting support.
        <br /> Despite shared intentions, the connection between businesses and
        NGOs is often broken:
      </p>
      <ul>
        <li>
          Companies don't know where to start or how to find aligned,
          trustworthy partners.
        </li>
        <li>
          NGOs lack the visibility and tools to present their work in ways
          companies can easily engage with.
        </li>
        <li>
          Partnerships are often slow, one-sided, or lack long-term alignment.
        </li>
        <li>
          Reporting and impact tracking are manual, inconsistent, and confusing.
        </li>
      </ul>
      <p>
        These challenges create missed opportunities, wasted time, and
        partnerships that never reach their full potential.
        <br /> That's why Enable Good exists:
        <br /> To make partnerships between companies and NGOs easier, smarter,
        and more impactful so both sides can focus on what really matters: doing
        good.
      </p>
    </>
  ),
  imageSrc: "/images/problem-solve.png",
  imageAlt: "Problem solving image",
  imageClassName: "about-us-image",
  imageOnRight: true,
};

export const ourSolution: Omit<ContentBlockProps, "className"> = {
  heading: "What We Offer",
  content: (
    <>
      <p>
        At Enable Good, we make it simple for companies and NGOs to find each
        other, work together, and create real, measurable impact. Our platform
        is designed to remove barriers, streamline communication, and foster
        partnerships rooted in shared purpose.
      </p>

      <ul className="our-solution">
        <li>Curated Matchmaking</li>
        <li>Transparent Impact Tracking</li>
        <li>Collaboration Tools</li>
        <li>A Growing Network of Good</li>
        <li>Aligned and Accountable</li>
      </ul>
      <p>
        Whether you're a company looking to lead with action, or an NGO ready to
        scale your impact we're here to enable good, together.
      </p>
    </>
  ),
  imageSrc: "/images/our-solution.png",
  imageAlt: "Our solutions image",
  imageClassName: "about-us-image",
  imageOnRight: false,
};

export const founderCeo: Omit<ContentBlockProps, "className"> = {
  heading: "Elpida Vasiliadis - Founder & CEO",
  content: (
    <>
      <div className="container-85">
        <p className="mb-5">
          Purpose-driven strategist. Community builder. Believer in better
          systems. Elpida leads with vision and keeps us grounded in our
          mission: making impact scalable and human.
        </p>

        <h3>Where we work</h3>

        <p>
          We're proud to call Athens, Attiki, Greece our home base a city where
          ancient ideas meet bold new visions.
          <br /> While our impact reaches across borders, our roots are here, in
          a place full of culture, resilience, and creativity.
          <br /> From the heart of Athens, we collaborate with people and
          organizations across the globe, proving that good ideas and good
          intentions can start anywhere and grow everywhere. Enable Good is
          built in Greece. Made for the world.
        </p>
      </div>
    </>
  ),
  imageSrc: "/images/founder-ceo.png",
  imageAlt: "CEO image",
  imageClassName: "",
  imageOnRight: true,
};
