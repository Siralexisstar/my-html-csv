import React from 'react';
import { Section } from '../layout/Section';
import './Experience.css';

export const Experience = () => {
  const experiences = [
    {
      company: 'GFT for Deutsche Bank',
      logo: '/images/gft.png',
      roles: [
        {
          id: 'gft-l3',
          title: 'L3 Software Engineer (Expert)',
          duration: 'Mar 2026 - Present',
          location: 'Sant Cugat del Vallès, Catalonia, Spain (Remote)',
          description: [
            '**Recently promoted to L3 Expert.** Leading the frontend development, integration, and deployment for the critical DART decommissioning project, while engineering robust backend microservices deployed on GCP.'
          ],
          technologies: ['GCP', 'Java', 'Spring Boot', 'React', 'Oracle', 'BigQuery', 'GitHub Actions']
        },
        {
          id: 'gft-l2-3',
          title: 'L2 Software Engineer (Skilled)',
          duration: 'May 2024 - Mar 2026',
          location: 'Sant Cugat del Vallès, Catalonia, Spain',
          description: [
            '**Participated in the design of the complete DART reporting migration** to a modern, cloud-native GCP architecture.',
            'Design and implementation of Java microservices for complex banking recalculations, transforming massive data pipelines from Oracle to BigQuery.',
            'Design and implementation of event-driven ETL pipelines (Dataflow, Pub/Sub) and established robust CI/CD workflows utilizing GitHub Actions and Jenkins.',
            'Drove frontend modernization by building a React-based UI, ensuring pristine code quality through comprehensive unit, integration, and E2E testing.'
          ],
          technologies: ['GCP', 'Java', 'Spring Boot', 'React', 'Oracle', 'BigQuery', 'GitHub Actions']
        },
        {
          id: 'gft-l2-2',
          title: 'L2 Software Engineer (Skilled)',
          duration: 'Jan 2024 - May 2024',
          location: 'Sant Cugat del Vallès, Catalonia, Spain',
          description: [
            '**Spearheaded the complete decommissioning of the legacy Computron platform.** Successfully migrated and implemented new messaging protocols for critical banking reports via a modern ACS component.'
          ],
          technologies: ['Java 8', 'Spark', 'Hadoop', 'SQL', 'Fabrik']
        },
        {
          id: 'gft-l2-1',
          title: 'L2 Software Engineer (Skilled)',
          duration: 'Apr 2023 - May 2024',
          location: 'Sant Cugat del Vallès, Catalonia, Spain',
          description: [
            'Developed core business logic for key Deutsche Bank applications (CRES, Computron, FxRates).',
            'Optimized banking processes by migrating legacy jobs and engineering new, highly-efficient applications to resolve non-functional bottlenecks.'
          ],
          technologies: ['Java', 'Spring Boot', 'Spring Batch', 'Oracle DB', 'PL/SQL', 'JUnit']
        }
      ]
    },
    {
      company: 'GFT Group',
      logo: '/images/gft.png',
      roles: [
        {
          id: 'gft-l1-2',
          title: 'L1 Software Engineer (Junior)',
          duration: 'Jan 2023 - May 2024',
          location: 'Sant Cugat del Vallès, Catalonia, Spain (Remote)',
          description: [
            'Modernized backend infrastructure by migrating legacy SOAP services to RESTful APIs utilizing Spring Boot.',
            'Maintained and scaled microservices while seamlessly integrating new business capabilities.'
          ],
          technologies: ['Java', 'Spring Boot', 'REST API', 'Testing']
        },
        {
          id: 'gft-l1-1',
          title: 'L1 Software Engineer (Junior)',
          duration: 'May 2022 - Dec 2022',
          location: 'Sant Cugat del Vallès, Catalonia, Spain (Hybrid)',
          description: [
            'Contributed to the Desjardins banking project by migrating critical services and developing robust new features utilizing the Java and JavaScript ecosystems.'
          ],
          technologies: ['Spring Boot', 'Struts', 'Thymeleaf', 'JUnit', 'Mockito', 'JavaScript', 'HTML/CSS']
        }
      ]
    },
    {
      company: 'ADTEL',
      logo: '/images/adtel.png',
      initials: 'AD',
      color: '#ef4444',
      roles: [
        {
          id: 'adtel',
          title: 'Systems Technician',
          duration: 'Sep 2021 - May 2022',
          location: 'Molins de Rei, Catalonia, Spain',
          description: [
            '**End-to-end Systems Management.** Administrated complex routing architectures (Cisco, Huawei, HP) and managed remote maintenance of aggregated domains.',
            'Executed hands-on configuration and installation of critical networking, CCTV, and hardware infrastructure.'
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
            <div className="timeline__company-header">
              {org.logo ? (
                <div className="timeline__company-logo" style={{ backgroundColor: '#fff' }}>
                  <img src={org.logo} alt={`${org.company} logo`} />
                </div>
              ) : (
                <div className="timeline__company-logo" style={{ borderColor: org.color, backgroundColor: 'transparent' }}>
                  <span style={{ color: org.color, fontWeight: 'bold' }}>{org.initials}</span>
                </div>
              )}
              <h3 className="timeline__company">{org.company}</h3>
            </div>

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
                      {role.description.map((desc, i) => {
                        // Bold the text if it's wrapped in ** **
                        const boldMatch = desc.match(/\*\*(.*?)\*\*(.*)/);
                        if (boldMatch) {
                          return (
                            <li key={i}>
                              <strong>{boldMatch[1]}</strong>{boldMatch[2]}
                            </li>
                          );
                        }
                        return <li key={i}>{desc}</li>;
                      })}
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
