import React from 'react';
import { Section } from '../layout/Section';
import './Experience.css';

export const Experience = () => {
  const experiences = [
    {
      company: 'GFT Deutschland',
      roles: [
        {
          id: 'gft-l3',
          title: 'L3 Software Engineer (Expert)',
          duration: 'Mar 2026 - Present',
          location: 'Sant Cugat del Vallès, Catalonia, Spain (Remote)',
          description: [
            'Recently promoted to L3 (Expert). Continuing development of high-impact cloud-native architectures and backend modernizations.'
          ],
          technologies: []
        },
        {
          id: 'gft-l2-3',
          title: 'L2 Software Engineer',
          duration: 'May 2024 - Mar 2026',
          location: 'Sant Cugat del Vallès, Catalonia, Spain',
          description: [
            'Led the reporting migration of DART, contributing to the decommissioning of the legacy platform and its transition to Palace through a cloud-native architecture on GCP.',
            'Designed and implemented Java-based microservices for complex banking recalculations and data transformation processes (Oracle to BigQuery), deployed on GCP.',
            'Built and integrated ETL pipelines using Dataflow, Data Fusion, and Composer. Implemented event-driven architectures with Pub/Sub.',
            'Led CI/CD and DevOps processes for the reporting area using GitHub Actions and Jenkins.',
            'Contributed as an analyst and solution architect applying DDD principles and Hexagonal Architecture.',
            'Took ownership of frontend modernization, developing a React-based UI to adapt the accounting interface into a new reporting platform.'
          ],
          technologies: ['GCP', 'Java', 'Spring Boot', 'React', 'Oracle', 'BigQuery', 'GitHub Actions']
        },
        {
          id: 'gft-l2-2',
          title: 'L2 Software Engineer',
          duration: 'Jan 2024 - May 2024',
          location: 'Sant Cugat del Vallès, Catalonia, Spain',
          description: [
            'Deutsche Bank project: Carried out the entire Computron decommissioning.',
            'Migrated new messaging for banking reports via a new component (ACS).'
          ],
          technologies: ['Java 8', 'Spark', 'Hadoop', 'SQL', 'Fabrik']
        },
        {
          id: 'gft-l2-1',
          title: 'L2 Software Engineer',
          duration: 'Apr 2023 - May 2024',
          location: 'Sant Cugat del Vallès, Catalonia, Spain',
          description: [
            'Deutsche Bank project: Development and business logic for CRES, Computron, and FxRates applications.',
            'Decommissioning and migration of Jobs. Developed new applications to optimize processes and solve non-functional Jobs.'
          ],
          technologies: ['Java', 'Spring Boot', 'Spring Batch', 'Oracle DB', 'PL/SQL', 'JUnit']
        }
      ]
    },
    {
      company: 'Grupo GFT',
      roles: [
        {
          id: 'gft-l1-2',
          title: 'L1 Junior Development',
          duration: 'Jan 2023 - May 2024',
          location: 'Sant Cugat del Vallès, Catalonia, Spain (Remote)',
          description: [
            'Microservices development and maintenance.',
            'Migrated SOAP microservices to REST API with Spring Boot.',
            'Integrated services, developed new capabilities, and handled testing.'
          ],
          technologies: ['Java', 'Spring Boot', 'REST API', 'Testing']
        },
        {
          id: 'gft-l1-1',
          title: 'L1 Junior Development',
          duration: 'May 2022 - Dec 2022',
          location: 'Sant Cugat del Vallès, Catalonia, Spain (Hybrid)',
          description: [
            'Desjardins banking projects: Migrated services and implemented new developments.',
            'Worked extensively with Java and JavaScript ecosystems.'
          ],
          technologies: ['Spring Boot', 'Struts', 'Thymeleaf', 'JUnit', 'Mockito', 'JavaScript', 'HTML/CSS']
        }
      ]
    },
    {
      company: 'ADTEL',
      roles: [
        {
          id: 'adtel',
          title: 'Systems Technician',
          duration: 'Sep 2021 - May 2022',
          location: 'Molins de Rei, Catalonia, Spain',
          description: [
            'End-to-end project management, from preparation and setup to maintenance.',
            'Administration of routing and encapsulation protocols on routers (Cisco, Huawei, HP).',
            'Remote maintenance of domains and aggregated devices.',
            'Installation and configuration of CCTV, APs, Routers, Cores, and electrical/sound systems.'
          ],
          technologies: ['Networking', 'Cisco', 'Switching', 'Hardware Installation']
        }
      ]
    }
  ];

  return (
    <Section id="experience" title="Experience">
      <div className="timeline">
        {experiences.map((org, orgIndex) => (
          <div key={orgIndex} className="timeline__group">
            <h3 className="timeline__company">{org.company}</h3>
            
            {org.roles.map((role) => (
              <div key={role.id} className="timeline__item">
                <div className="timeline__dot"></div>
                <div className="timeline__content card">
                  <div className="timeline__header">
                    <h4 className="timeline__role">{role.title}</h4>
                    <span className="timeline__duration">{role.duration}</span>
                  </div>
                  <div className="timeline__body">
                    <ul className="timeline__desc">
                      {role.description.map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </ul>
                    {role.technologies && role.technologies.length > 0 && (
                      <div className="timeline__tech">
                        {role.technologies.map(tech => (
                          <span key={tech} className="timeline__tag">{tech}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </Section>
  );
};
