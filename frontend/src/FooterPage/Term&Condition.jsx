import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="dark:bg-[#111C29] dark:text-white container mx-auto lg:px-32 px-6 lg:py-24 py-16">
      <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
      <p className="mb-4">
        Welcome to Phoenix Tech Co.! These terms and conditions outline the
        rules and regulations for the use of our website, products, and
        services, including website development, app development, and SEO
        services.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Acceptance of Terms</h2>
      <p className="mb-4">
        By accessing or using any of our services, you agree to comply with and
        be bound by these terms. If you do not agree with any part of these
        terms, you must not use our services.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Services</h2>
      <p className="mb-4">
        Phoenix Tech Co. provides various tech services, including but not
        limited to:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Website Development</li>
        <li>App Development</li>
        <li>Search Engine Optimization (SEO)</li>
        <li>Technical Consulting</li>
      </ul>
      <p className="mb-4">
        The scope, timeline, and costs for services will be agreed upon in a
        separate contract or statement of work before the commencement of any
        project.
      </p>

      <h2 className="text-2xl font-semibold mb-2">User Responsibilities</h2>
      <p className="mb-4">
        You agree to use our services only for lawful purposes and in accordance
        with these terms. You are responsible for ensuring that your use of our
        services does not violate any applicable laws or regulations.
      </p>

      <h2 className="text-2xl font-semibold mb-2">
        Intellectual Property Rights
      </h2>
      <p className="mb-4">
        All content, code, and intellectual property developed by Phoenix Tech
        Co. remain our property until full payment has been made. Once the final
        payment is received, ownership will be transferred as specified in the
        service agreement. However, Phoenix Tech Co. reserves the right to
        showcase the work as part of our portfolio.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Limitations of Liability</h2>
      <p className="mb-4">
        Phoenix Tech Co. shall not be liable for any direct, indirect,
        incidental, consequential, or punitive damages arising from the use or
        inability to use our services. We make no guarantees about the
        effectiveness of SEO services, as search engine algorithms can change
        without notice.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Service Termination</h2>
      <p className="mb-4">
        We reserve the right to terminate or suspend any service immediately,
        without prior notice, if you breach any of these terms. Upon
        termination, your access to the services will be revoked, and any unpaid
        fees will be due immediately.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Payment Terms</h2>
      <p className="mb-4">
        Payments for services are due as outlined in the individual service
        agreement. If payment is not received within the specified period,
        Phoenix Tech Co. reserves the right to suspend all services until the
        account is brought current.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Amendments</h2>
      <p className="mb-4">
        Phoenix Tech Co. reserves the right to amend these terms at any time.
        You will be notified of significant changes via email or a notice on our
        website. Your continued use of our services after any changes
        constitutes acceptance of the new terms.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Governing Law</h2>
      <p className="mb-4">
        These terms and conditions are governed by the laws of [Your
        State/Region]. Any disputes arising from these terms shall be subject to
        the exclusive jurisdiction of the courts located in [Your State/Region].
      </p>

      <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
      <p className="mb-4">
        If you have any questions about our terms and conditions, please contact
        us at
        <a
          href="mailto:support@techphoenixco@gmail.com"
          className="text-blue-600"
        >
          {" "}
          techphoenixco@gmail.com
        </a>
        .
      </p>
    </div>
  );
};

export default TermsAndConditions;
