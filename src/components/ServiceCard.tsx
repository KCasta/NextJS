import styles from "../styles/ServiceCard.module.css";
import React from "react";

interface ServiceCardProps {
  title: string;
  description: string;
}

const ServiceCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ServiceCard;
