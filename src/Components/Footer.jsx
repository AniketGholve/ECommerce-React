import { useState } from "react";

const Footer = () => {

  const links = [
    { text: 'Home', url: '/' },
    { text: 'Bollywood', url: '/bollywood' },
    { text: 'Technology', url: '/technology' },
    { text: 'Hollywood', url: '/hollywood' },
    { text: 'Fitness', url: '/fitness' },
    { text: 'Food', url: '/food' },
  ];
  const socialMediaLinks = [
    { name: 'Facebook', url: 'https://www.facebook.com/aniketgholve02/' },
    { name: 'Instagram', url: 'https://www.instagram.com/aniket_gholve_02/' },
    { name: 'Linkedin', url: 'https://www.linkedin.com/in/aniket-gholve/' },
  ];
  const companyLink = [
    { name: 'About Us', url: 'https://www.linkedin.com/in/aniket-gholve/' },
    { name: 'Careers', url: 'https://www.linkedin.com/in/aniket-gholve/' },
    { name: 'Management Team', url: 'https://www.linkedin.com/in/aniket-gholve/' },
    { name: 'Blog', url: 'https://www.linkedin.com/in/aniket-gholve/' },
    { name: 'Contact Us', url: 'https://www.linkedin.com/in/aniket-gholve/' }
  ];
  const partner = [
    { name: 'All Partner', url: 'https://www.linkedin.com/in/aniket-gholve/' },
    { name: 'Solution Partner ', url: 'https://www.linkedin.com/in/aniket-gholve/' },
    { name: 'Partner Program', url: 'https://www.linkedin.com/in/aniket-gholve/' },
  ];
  const [activeFooterBlog, setActiveFooterBlog] = useState(false);
  const [activeFooterSocial, setActiveFooterSocial] = useState(false);
  const [activeFooterCompany, setActiveFooterCompany] = useState(false);
  const [activeFooterPartner, setActiveFooterPartner] = useState(false);

  return (
    <div className="footer">
      <div className="footerHeading d-grid">
        <div className="footerImg">
          <img src={'https://seeklogo.com/images/B/business-people-circle-logo-83C8022853-seeklogo.com.png'} alt="Logo" width={'30%'} style={{ justifySelf: 'center', marginTop: '20px' }} />
        </div>
        <div>
          <h1 className="">The Siren</h1>
          <p className="text-center">Copyright <i className="fa-solid fa-copyright"></i> 2023 The Siren</p>
        </div>
      </div>
      <div className="d-grid footerData" >
        <h3 className="footer-heading" onClick={() => setActiveFooterBlog(!activeFooterBlog)}>Blogs</h3>
        <div className={activeFooterBlog ? "footer-links" : "footer-links hideFooterLinks"}>
          <ul>
            {links.map((link, index) => (
              <li key={index}>
                <a href={link.url}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="d-grid footerData" >
        <h3 className="footer-heading" onClick={() => setActiveFooterSocial(!activeFooterSocial)}>Social</h3>
        <div className={activeFooterSocial ? "footer-links" : "footer-links hideFooterLinks"}>
          <ul>
            {socialMediaLinks.map((link, index) => (
              <li key={index}>
                <a target="_blank" rel="noreferrer" href={link.url}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="d-grid footerData" >
        <h3 className="footer-heading" onClick={() => setActiveFooterCompany(!activeFooterCompany)}>Company</h3>
        <div className={activeFooterCompany ? "footer-links" : "footer-links hideFooterLinks"}>
          <ul>
            {companyLink.map((link, index) => (
              <li key={index}>
                <a target="_blank" rel="noreferrer" href={link.url}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="d-grid footerData" >
        <h3 className="footer-heading" onClick={() => setActiveFooterPartner(!activeFooterPartner)}>Partners</h3>
        <div className={activeFooterPartner ? "footer-links" : "footer-links hideFooterLinks"}>
          <ul>
            {partner.map((link, index) => (
              <li key={index}>
                <a target="_blank" rel="noreferrer" href={link.url}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer