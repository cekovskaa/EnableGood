import styles from "./NavContent.module.css";

const featuredStory = {
  title:
    '"From Crisis to Classroom: Rebuilding Hope Through Education in Lebanon"',
  description:
    "After losing her school and her sense of safety during the crisis, 12-year-old Amira is now back in class thanks to a CARE-supported learning center. Her dream of becoming a teacher lives on.",
  image: "/src/assets/images-account/photo-showcase1.png",
  link: "#",
};

const latestStories = [
  {
    title: '"Small Farms, Big Impact: Women Leading the Way in Guatemala"',
    description:
      "Women farmers are transforming their communities by adopting climate-smart agricultural techniques and sharing them with future generations.",
    image: "/src/assets/images-account/photo-showcase4.png",
    link: "#",
  },
  {
    title:
      '"When Disaster Strikes: Inside CARE\'s Emergency Response in Sudan"',
    description:
      "A behind-the-scenes look at how CARE teams respond within hours to deliver food, water, and medical supplies where they're needed most.",
    image: "/src/assets/images-account/photo-showcase3.png",
    link: "#",
  },
  {
    title: '"Clean Water, Clear Future: A Village Transformed in Bangladesh"',
    description:
      "Access to clean water doesn't just improve health—it changes lives. Discover how a single well sparked a wave of opportunity.",
    image: "/src/assets/images-account/photo-showcase2.png",
    link: "#",
  },
];

const categories = [
  "Human Rights",
  "Climate Justice",
  "Education",
  "Food Security",
  "Environment",
];

export default function NewsStoriesContent() {
  return (
    <div className={styles["news-container"]}>
      <div className={styles["news-header"]}>
        <h2 className={styles["news-title"]}>Stay Informed, Stay Inspired</h2>
        <p className={styles["news-subtitle"]}>
          Discover how CARE is making a difference around the world—one story at
          a time. From frontline updates to personal journeys of resilience,
          this is where you'll find the voices, victories, and vital work
          shaping a more just future.
        </p>
      </div>

      {/* Featured Story */}
      <div className={styles["news-featured-card"]}>
        <div className={styles["news-featured-content"]}>
          <div className={styles["news-featured-badge"]}>Featured Story</div>
          <h3 className={styles["news-featured-title"]}>
            {featuredStory.title}
          </h3>
          <p className={styles["news-featured-desc"]}>
            {featuredStory.description}
          </p>
          <a href={featuredStory.link} className={styles["news-read-more"]}>
            Read More
          </a>
        </div>
        <div className={styles["news-featured-image"]}>
          <img src={featuredStory.image} alt="Featured Story" />
        </div>
      </div>

      {/* Category Filters */}
      <div className={styles["news-categories"]}>
        {categories.map((category, index) => (
          <button key={index} className={styles["news-category-btn"]}>
            {category}
          </button>
        ))}
      </div>

      {/* Latest Stories */}
      <h3 className={styles["news-section-title"]}>Latest Stories</h3>

      <div className={styles["news-stories-grid"]}>
        {latestStories.map((story, index) => (
          <div key={index} className={styles["news-story-card"]}>
            <div className={styles["news-story-image"]}>
              <img src={story.image} alt={story.title} />
            </div>
            <div className={styles["news-story-content"]}>
              <h4 className={styles["news-story-title"]}>{story.title}</h4>
              <p className={styles["news-story-desc"]}>{story.description}</p>
              <a href={story.link} className={styles["news-read-more"]}>
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
