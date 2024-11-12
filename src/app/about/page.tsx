import Header from "../../components/Header";
import styles from "../../styles/About.module.css";
import ServiceCard from "../../components/ServiceCard";

const About = () => {
  return (
    <div>
      <Header />
      <section className={styles.heroSection}>
        <div className={styles.heroText}>
          <h1>About Us</h1>
        </div>
      </section>

      <section className={styles.servicesSection}>
        <ServiceCard
          title="Unlimited Control"
          description="lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit amet."
        />
        <ServiceCard
          title="Rapid Growth"
          description="lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <ServiceCard
          title="Problem Solving"
          description="These cases are perfectly simple and easy to
          distinguish."
        />
      </section>
    </div>
  );
};

export default About;
