import Head from "next/head";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div className="mainBody">
      <Navbar />

      <section className="bg-bannerImg bg-no-repeat bg-cover bg-bottom">
        <div className="w-full h-screen flex items-end bg-blackOverlay">
          <div className={styles.hero}>
            <div className={styles.heroText}>
              <h1>Grow Big With Musicol Business</h1>
              <p>
                Nam libero tempore, cum soluta nobis est eligendi optio cumque
                nihil impedit quo minus.
              </p>
              <div className={styles.heroButtons}>
                <button className={styles.servicesButton}>Our Services</button>
                <button className={styles.videoButton}>See How It Works</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
