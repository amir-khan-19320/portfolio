import { profile, siteUrl } from "@/content/profile";

export function JsonLd() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: profile.name,
    url: siteUrl,
    image: `${siteUrl}${profile.photo}`,
    jobTitle: profile.role,
    description: profile.seo.description,
    email: profile.email,
    telephone: profile.phones.map((phone) => `+91${phone}`),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    sameAs: [profile.linkedin],
    subjectOf: {
      "@type": "DigitalDocument",
      name: `${profile.name} Resume`,
      url: `${siteUrl}${profile.resume}`,
      encodingFormat: "application/pdf",
    },
    worksFor: {
      "@type": "Organization",
      name: profile.experience[0].company,
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: profile.education[0].school,
    },
    knowsAbout: profile.seo.keywords,
    hasCredential: profile.certifications.map((cert) => ({
      "@type": "EducationalOccupationalCredential",
      name: cert.name,
      credentialCategory: "certification",
      recognizedBy: { "@type": "Organization", name: cert.issuer },
    })),
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: `${profile.name} — ${profile.role}`,
    url: siteUrl,
    description: profile.seo.description,
    inLanguage: "en-IN",
    publisher: { "@id": `${siteUrl}/#person` },
  };

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Selected work",
    itemListElement: profile.projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: project.title,
      description: `${project.problem} ${project.result}`,
      url: project.caseStudy
        ? `${siteUrl}/work/${project.slug}/`
        : `${siteUrl}/#work`,
    })),
  };

  const payload = JSON.stringify([person, website, itemList]);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: payload }}
    />
  );
}
