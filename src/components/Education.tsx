import styles from "./Education.module.css";
import { LocationIcon } from "./icons";

type EducationItem = {
  institution: string;
  degree: string;
  location: string;
  period: string;
  details?: string[];
};

const education: EducationItem[] = [
  {
    institution: "Univerity of Windsor",
    degree: "Masters in Applied Computing",
    location: "Windsor, Canada",
    period: "Jan 2020 – Aug 2021",
  },
  {
    institution: "Dharmsinh Desai University",
    degree: "Bachelors in Computer Science",
    location: "India",
    period: "July 2013 – April 2017",
    /*details: [
      "Focus on software engineering, distributed systems, and applied AI",
      "Hands-on projects in full-stack development and system design",
    ],*/
  },
];

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        {/*<h2 className="sectionTitle">Education</h2>*/}

        <div className={styles.list}>
          {education.map((item) => (
            <div key={item.institution} className={styles.card}>
              <div className={styles.header}>
                <div>
                  <h3 className={styles.institution}>{item.institution}</h3>
                  <p className={styles.degree}>{item.degree}</p>
                </div>

                <div className={styles.meta}>
                  <span className={styles.location}>
                    <LocationIcon size={14} />
                    {item.location}
                  </span>
                  <span>{item.period}</span>
                </div>
              </div>

              {item.details && (
                <ul className={styles.details}>
                  {item.details.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
