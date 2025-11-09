import React from "react";
import { motion } from "framer-motion";

/*
  Policies.jsx
  - Contains two React components: PrivacyPolicy and TermsAndConditions
  - Includes a simple sticky table-of-contents / side navigation for quick jumps
  - Matches the design system used in AboutUs (uses var(--color-primary-dark), white bg, gray text)
  - Drop into your Next.js / CRA pages directory and route as desired.
*/

function Section({ id, title, children }) {
  return (
    <section id={id} className="mb-12">
      <motion.h2
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="text-2xl font-semibold mb-4 text-[var(--color-primary-dark)]"
      >
        {title}
      </motion.h2>
      <div className="prose max-w-none text-gray-700">{children}</div>
    </section>
  );
}

export function PrivacyPolicy() {
  return (
    <div className="bg-white text-gray-800 font-sans min-h-screen">
      {/* Hero */}
      <section
        className="relative h-[32vh] md:h-[40vh] bg-cover bg-center"
        style={{ backgroundImage: 'url(/privacy_banner.jpg)' }}
      >
        <div className="absolute inset-0 bg-[var(--color-primary-dark)] opacity-60" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold">Privacy Policy</h1>
          <p className="mt-2 text-sm md:text-base font-light">Candid Healthsystems Consultants Ltd.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 lg:py-20 grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8">
        {/* TOC */}
        <nav className="sticky top-24 hidden lg:block self-start">
          <div className="bg-white rounded-xl shadow p-4">
            <h4 className="text-sm font-semibold mb-3 text-gray-700">On this page</h4>
            <ul className="text-sm space-y-2">
              <li><a href="#intro" className="hover:text-[var(--color-primary-dark)]">Introduction</a></li>
              <li><a href="#how-we-use" className="hover:text-[var(--color-primary-dark)]">How we use your personal data</a></li>
              <li><a href="#providing" className="hover:text-[var(--color-primary-dark)]">Providing your data to others</a></li>
              <li><a href="#international" className="hover:text-[var(--color-primary-dark)]">International transfers</a></li>
              <li><a href="#retention" className="hover:text-[var(--color-primary-dark)]">Retaining & deleting</a></li>
              <li><a href="#rights" className="hover:text-[var(--color-primary-dark)]">Your rights</a></li>
              <li><a href="#security" className="hover:text-[var(--color-primary-dark)]">Data security</a></li>
              <li><a href="#cookies" className="hover:text-[var(--color-primary-dark)]">Cookies</a></li>
              <li><a href="#amendments" className="hover:text-[var(--color-primary-dark)]">Amendments</a></li>
              <li><a href="#details" className="hover:text-[var(--color-primary-dark)]">Our details</a></li>
            </ul>
          </div>
        </nav>

        {/* Content Column */}
        <main>
          <Section id="intro" title="Introduction">
            <p>
              1.1 We are committed to safeguarding the privacy of our website visitors and service users.
            </p>
            <p>
              1.2 This policy applies where we are acting as a data controller with respect to the personal
              data of our website visitors and service users; in other words, where we determine the
              purposes and means of the processing of that personal data.
            </p>
            <p>
              1.3 We use cookies on our website. Insofar as those cookies are not strictly necessary for the
              provision of our website and services, we will ask you to consent to our use of cookies when you
              first visit our website.
            </p>
            <p>
              1.4 Our website incorporates privacy controls which affect how we will process your personal
              data. By using the privacy controls, you can specify whether you would like to receive direct
              marketing communications and limit the publication of your information.
            </p>
            <p>
              1.5 In this policy, “we”, “us” and “our” refer to Candid Healthsystems Consultants Ltd. For
              more information about us, see Section 12.
            </p>
          </Section>

          <Section id="how-we-use" title="2. How we use your personal data">
            <p>
              2.1 In this Section 2 we have set out:
            </p>
            <ol className="pl-6 list-decimal space-y-2">
              <li>the general categories of personal data that we may process;</li>
              <li>in the case of personal data that we did not obtain directly from you, the source and specific
                categories of that data;</li>
              <li>the purposes for which we may process personal data; and</li>
              <li>the legal bases of the processing.
              </li>
            </ol>

            <p className="mt-4">
              2.2 We may process data about your use of our website and services (“usage data"). The usage
              data may include your IP address, geographical location, browser type and version, operating
              system, referral source, length of visit, page views and website navigation paths, as well as
              information about the timing, frequency and pattern of your service use. The source of the
              usage data is our analytics tracking system. The legal basis for this processing is our legitimate
              interests, namely monitoring and improving our website and services.
            </p>

            <p>
              2.3 We may process information contained in any enquiry you submit to us regarding goods
              and/or services (“enquiry data"). The enquiry data may be processed for the purposes of
              offering, marketing and selling relevant goods and/or services to you. The legal basis for this
              processing is our legitimate interests, namely the performance of a contract between you and
              us and/or the taking steps, at your request, to enter into such a contract.
            </p>

            <p>
              2.4 We may process information that you provide to us for the purpose of subscribing to our
              email notifications and/or newsletters (“notification data"). The notification data may be
              processed for the purposes of sending you the relevant notifications and/or newsletters. The
              legal basis for this processing is consent, which you can withdraw at any time, and our
              legitimate interests in communicating with our website visitors and service users.
            </p>

            <p>
              2.5 We may process any of your personal data identified in this policy where necessary for the
              establishment, exercise or defence of legal claims, whether in court proceedings or in an
              administrative or out-of-court procedure. The legal basis for this processing is our legitimate
              interests, namely the protection and assertion of our legal rights, your legal rights and the legal
              rights of others.
            </p>

            <p>
              2.6 We may process any of your personal data identified in this policy where necessary for the
              purposes of obtaining or maintaining insurance coverage, managing risks, or obtaining
              professional advice. The legal basis for this processing is our legitimate interests, namely the
              proper protection of our business against risks.
            </p>

            <p>
              2.7 We may process the information that you provide when applying for a job or position. The
              legal basis for this is our legitimate interest to identify suitable talent to match the requirements
              of the role we are recruiting for.
            </p>

            <p>
              2.8 In addition to the specific purposes for which we may process your personal data set out in
              this Section 2, we may also process any of your personal data where such processing is
              necessary for compliance with a legal obligation to which we are subject, or in order to protect
              your vital interests or the vital interests of another natural person.
            </p>

            <p>
              2.9 Please do not supply any other person’s personal data to us, unless we prompt you to do
              so.
            </p>
          </Section>

          <Section id="providing" title="3. Providing your personal data to others">
            <p>
              3.1 We may disclose your personal data to our insurers and/or professional advisers insofar as
              reasonably necessary for the purposes of obtaining or maintaining insurance coverage,
              managing risks, obtaining professional advice, or the establishment, exercise or defence of
              legal claims, whether in court proceedings or in an administrative or out-of-court procedure.
            </p>

            <p>
              3.2 We may also share your personal data with trusted third-party service providers who assist
              us in operating our website, delivering services, processing payments, or communicating with
              you. These include, for example, website hosting providers, analytics platforms (such as
              Google Analytics), and email service providers. All such providers are contractually obligated to
              handle your personal data securely and use it only for the purposes for which it was shared.
            </p>

            <p>
              3.3 In addition to the specific disclosures of personal data set out in this Section 3, we may
              disclose your personal data where such disclosure is necessary for compliance with a legal
              obligation to which we are subject, or in order to protect your vital interests or the vital interests
              of another natural person.
            </p>
          </Section>

          <Section id="international" title="4. International transfers of your personal data">
            <p>
              4.1 We may transfer your personal data outside the United Kingdom or European Economic
              Area (EEA) if required for the provision of our services. Where we do so, we ensure appropriate
              safeguards are in place, such as Standard Contractual Clauses approved by the Information
              Commissioner’s Office (ICO) or adequacy decisions that confirm an equivalent level of data
              protection.
            </p>

            <p>
              4.2 You acknowledge that personal data that you submit for publication through our website or
              services may be available, via the internet, around the world. We cannot prevent the use (or
              misuse) of such personal data by others.
            </p>
          </Section>

          <Section id="retention" title="5. Retaining and deleting personal data">
            <p>
              5.1 This Section 5 sets out our data retention policies and procedures, which are designed to
              help ensure that we comply with our legal obligations in relation to the retention and deletion of
              personal data.
            </p>

            <p>
              5.2 Personal data that we process for any purpose or purposes shall not be kept for longer than
              is necessary for that purpose or those purposes.
            </p>

            <p>
              5.3 We will retain your personal data as follows:
            </p>
            <ol className="pl-6 list-decimal">
              <li>contact/enquiry data via email, form or phone call will be retained for as long as required;</li>
              <li>information gathered when applying for a job or position will be retained for as long as
                required.
              </li>
            </ol>

            <p className="mt-4">
              5.4 In some cases, it is not possible for us to specify in advance the periods for which your
              personal data will be retained. In such cases, we will determine the period of retention based
              on the following criteria:
            </p>
            <ul className="pl-6 list-disc">
              <li>The period of retention of data collected via contact form will be determined based on
                whether services are offered.
              </li>
              <li>The period of retention of data collected via newsletter opt-in will be determined based
                on the length of purpose – an unsubscribe button will be available through all emails
                and, after this is selected, all data of the user will be deleted.
              </li>
            </ul>

            <p className="mt-4">
              5.5 Notwithstanding the other provisions of this Section 5, we may retain your personal data
              where such retention is necessary for compliance with a legal obligation to which we are
              subject, or in order to protect your vital interests or the vital interests of another natural person.
            </p>
          </Section>

          <Section id="rights" title="6. Your rights">
            <p>
              6.1 In this Section 6, we have listed the rights that you have under data protection law.
            </p>

            <p>
              6.2 Your principal rights under data protection law are:
            </p>
            <ol className="pl-6 list-decimal space-y-2">
              <li>the right to access – you can ask for copies of your personal data;</li>
              <li>the right to rectification – you can ask us to rectify inaccurate personal data and to complete
                incomplete personal data;</li>
              <li>the right to erasure – you can ask us to erase your personal data;</li>
              <li>the right to restrict processing – you can ask us to restrict the processing of your personal
                data;</li>
              <li>the right to object to processing – you can object to the processing of your personal data;</li>
              <li>the right to data portability – you can ask that we transfer your personal data to another
                organisation or to you;</li>
              <li>the right to complain to a supervisory authority – you can complain about our processing of
                your personal data; and</li>
              <li>the right to withdraw consent – to the extent that the legal basis of our processing of your
                personal data is consent, you can withdraw that consent at any time.</li>
            </ol>

            <p className="mt-4">
              6.3 These rights are subject to certain limitations and exceptions. You can learn more about the
              rights of data subjects by visiting the ICO guidance at: https://ico.org.uk/for-organisations/guide-to-data-protection/guide-to-the-general-data-protection-regulation-gdpr/individual-rights/.
            </p>

            <p>
              6.4 You may exercise any of your rights in relation to your personal data by written notice to us
              using the contact details set out below. We will respond to all valid requests within one month
              and may request proof of identity before processing your request.
            </p>

            <p>
              6.5 You have the right to lodge a complaint with the UK Information Commissioner’s Office
              (ICO):
            </p>
            <p className="mt-2">
              Website: www.ico.org.uk<br />
              Telephone: 0303 123 1113.
            </p>
          </Section>

          <Section id="security" title="7. Data security">
            <p>
              7.1 We implement appropriate technical and organisational measures to protect your personal
              data against unauthorised access, use, disclosure, alteration or destruction.
            </p>

            <p>
              7.2 These measures include secure data storage, encryption where appropriate, access
              controls, and regular review of our information security policies and procedures.
            </p>
          </Section>

          <Section id="children" title="8. Children’s data">
            <p>
              8.1 Our website and services are not intended for children under 16.
            </p>
            <p>
              8.2 We do not knowingly collect personal data from minors. If we become aware that we have
              inadvertently collected personal data from a child, we will delete such data promptly.
            </p>
          </Section>

          <Section id="cookies" title="9. About cookies">
            <p>
              9.1 Cookies are small text files placed on your device by websites you visit. We use the
              following types of cookies:
            </p>
            <ul className="pl-6 list-disc">
              <li>Necessary cookies – support secure and essential website functions.</li>
              <li>Functionality cookies – remember user preferences and enhance usability.</li>
              <li>Targeting cookies – used by third parties such as Google to show relevant ads.</li>
            </ul>

            <p className="mt-3">
              9.2 You can manage your cookie preferences at any time via our cookie settings panel or your
              browser options. Blocking certain cookies may affect website functionality.
            </p>

            <p className="mt-3">
              9.3 More information about managing cookies can be found at the support pages for common
              browsers.
            </p>
          </Section>

          <Section id="amendments" title="10. Amendments">
            <p>
              10.1 We may update this policy from time to time by publishing a new version on our website.
            </p>
            <p>
              10.2 You should check this page occasionally to ensure you are happy with any changes to this
              policy.
            </p>
          </Section>

          <Section id="details" title="11. Our details & 12. Data Protection Officer">
            <p>
              11.1 This website is owned and operated by Candid Healthsystems Consultants Ltd.
            </p>
            <p>
              11.2 We are registered in England and Wales under registration number 14393967 and our
              registered office is at Flat 18, Chiltern Court, 1 Marri Street, Watford, WD24 5FZ.
            </p>
            <p>
              11.3 Our principal place of business is at Office 120.3 Regus, Cardinal Point, Park Road,
              Rickmansworth, WD3 1RE.
            </p>
            <p>
              11.4 You can contact us:
            </p>
            <ul className="pl-6 list-disc">
              <li>by post, to the postal address given above;</li>
              <li>using our website contact form;</li>
              <li>by telephone, on the contact number published on our website; or</li>
              <li>by email, using the email address published on our website.</li>
            </ul>

            <p className="mt-4">12.1 Our Data Protection Officer can be contacted using the details provided in Section 11.</p>
          </Section>

        </main>
      </div>
    </div>
  );
}

export function TermsAndConditions() {
  return (
    <div className="bg-white text-gray-800 font-sans min-h-screen">
      <section
        className="relative h-[28vh] md:h-[36vh] bg-cover bg-center"
        style={{ backgroundImage: 'url(/terms_banner.jpg)' }}
      >
        <div className="absolute inset-0 bg-[var(--color-primary-dark)] opacity-60" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold">Terms & Conditions</h1>
          <p className="mt-2 text-sm md:text-base font-light">Candid Healthsystems Consultants Ltd.</p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 md:px-12 py-12">
        <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <p className="text-gray-700 mb-6">
            Welcome to Candid Healthsystems Consultants Ltd. By accessing or using our website you agree to be bound by these Terms & Conditions. Please read them carefully.
          </p>

          <Section id="use" title="1. Use of the website">
            <p>
              You may use our website for lawful purposes only. You must not use it in any way that breaches
              applicable local, national, or international law.
            </p>
          </Section>

          <Section id="intellectual" title="2. Intellectual Property">
            <p>
              All content on this website, including text, graphics, logos, images, and code is owned or
              licensed by Candid Healthsystems Consultants Ltd. You may not reproduce, republish,
              distribute or exploit any content without our prior written permission.
            </p>
          </Section>

          <Section id="liability" title="3. Limitation of liability">
            <p>
              We endeavour to ensure the accuracy of information on our website but make no warranties as
              to its completeness or suitability. To the extent permitted by law, we exclude liability for any
              loss or damage arising from use of the site.
            </p>
          </Section>

          <Section id="thirdparty" title="4. Third-party links & services">
            <p>
              Our website may contain links to third-party websites and services. We are not responsible for
              the content or practices of these third parties. Links do not imply endorsement.
            </p>
          </Section>

          <Section id="governing" title="5. Governing law & jurisdiction">
            <p>
              These Terms & Conditions are governed by the laws of England and Wales. Any disputes shall be
              subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </Section>

          <Section id="changes" title="6. Changes to these terms">
            <p>
              We may update these Terms & Conditions from time to time. The date of last revision will be
              displayed at the top of the page. Continued use of the site constitutes acceptance of the revised
              terms.
            </p>
          </Section>

          <Section id="contact-terms" title="7. Contact information">
            <p>
              For questions about these terms, please contact us using the details published on our website or
              the addresses listed in the Privacy Policy.
            </p>
          </Section>
        </motion.div>
      </div>
    </div>
  );
}

export default function PoliciesPage() {
  return (
    <div>
      {/* Simple router-like links for demo purposes */}
      <div className="flex gap-3 justify-center bg-gray-50 py-3">
        <a href="#privacy" onClick={(e)=>{e.preventDefault(); window.location.href='/privacy';}} className="px-4 py-2 rounded bg-white shadow">Privacy Policy</a>
        <a href="#terms" onClick={(e)=>{e.preventDefault(); window.location.href='/terms';}} className="px-4 py-2 rounded bg-white shadow">Terms & Conditions</a>
      </div>

      {/* NOTE: In your routing, render <PrivacyPolicy /> on /privacy and <TermsAndConditions /> on /terms */}

      <div className="max-w-6xl mx-auto mt-8 px-6">
        <p className="text-sm text-gray-500">Drop <code>PrivacyPolicy</code> and <code>TermsAndConditions</code> into your page routes.</p>
      </div>
    </div>
  );
}
