import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="dark:bg-[#111C29] dark:text-white container mx-auto lg:px-32 px-6 lg:py-24 py-16">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-4">
        At Phoenix Tech Co., we are committed to protecting your privacy. This Privacy
        Policy outlines how we collect, use, disclose, and safeguard your information
        when you visit our website or use our services.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Information We Collect</h2>
      <p className="mb-4">
        We may collect personal information from you when you:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Register on our site</li>
        <li>Place an order</li>
        <li>Subscribe to our newsletter</li>
        <li>Contact us via email or through our contact forms</li>
      </ul>
      <p className="mb-4">
        The information we collect may include your name, email address, phone number,
        billing address, and payment information.
      </p>

      <h2 className="text-2xl font-semibold mb-2">How We Use Your Information</h2>
      <p className="mb-4">
        We use the information we collect for various purposes, including:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>To provide, maintain, and improve our services</li>
        <li>To process your transactions and send you related information</li>
        <li>To communicate with you, including customer support</li>
        <li>To send you marketing communications, with your consent</li>
        <li>To analyze usage trends and improve our website</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Data Sharing and Disclosure</h2>
      <p className="mb-4">
        We do not sell or rent your personal information to third parties. We may share
        your information with third-party service providers who assist us in operating
        our website or conducting our business, as long as those parties agree to keep
        this information confidential.
      </p>
      <p className="mb-4">
        We may also disclose your information when required by law or to protect our
        rights or the rights of others.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Cookies</h2>
      <p className="mb-4">
        Our website uses cookies to enhance your experience. Cookies are small text files
        placed on your device to collect information about your browsing activities. You
        can choose to accept or decline cookies. However, declining cookies may prevent
        you from taking full advantage of our site.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Security of Your Information</h2>
      <p className="mb-4">
        We implement reasonable security measures to protect your personal information
        from unauthorized access, use, or disclosure. However, no method of transmission
        over the internet or method of electronic storage is 100% secure. Therefore, we
        cannot guarantee its absolute security.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Your Rights</h2>
      <p className="mb-4">
        Depending on your location, you may have certain rights regarding your personal
        information, including the right to access, correct, or delete your data. If you
        wish to exercise these rights, please contact us using the information provided
        below.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Third-Party Links</h2>
      <p className="mb-4">
        Our website may contain links to third-party websites. We are not responsible for
        the privacy practices or content of these websites. We encourage you to read the
        privacy policies of any third-party sites you visit.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Changes to This Privacy Policy</h2>
      <p className="mb-4">
        We may update our Privacy Policy from time to time. We will notify you of any
        changes by posting the new Privacy Policy on this page. You are advised to
        review this Privacy Policy periodically for any changes. Changes to this Privacy
        Policy are effective when they are posted on this page.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
      <p className="mb-4">
        If you have any questions about this Privacy Policy, please contact us at
        <a href="mailto:support@phoenixtechco.com" className="text-blue-600">
        {" "}
        techphoenixco@gmail.com
        </a>.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
