import React from "react";

const RefundPolicy = () => {
  return (
    <div className="dark:bg-[#111C29] dark:text-white container mx-auto lg:px-32 px-6 lg:py-24 py-16">
      <h1 className="text-3xl font-bold mb-4">Refund Policy</h1>
      <p className="mb-4">
        Thank you for shopping with Phoenix Tech Co. We strive to ensure you
        have a positive experience with our products and services. However, if
        you're not satisfied with your purchase, we're here to help.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Refund Eligibility</h2>
      <p className="mb-4">
        To be eligible for a refund, you must request it within 30 days of your
        purchase date. The item must be unused and in the same condition as when
        you received it. It should also be in the original packaging.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Non-Refundable Items</h2>
      <p className="mb-4">
        Certain items are exempt from being refunded, including:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Downloadable software products</li>
        <li>Gift cards</li>
        <li>Services that have already been performed</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Refund Process</h2>
      <p className="mb-4">
        Once we receive your return, we will inspect the item and notify you of
        the status of your refund. If approved, the refund will be processed
        within 7-10 business days, and a credit will automatically be applied to
        your original payment method.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Late or Missing Refunds</h2>
      <p className="mb-4">
        If you haven’t received your refund after the allotted time, please
        first check your bank account again. Then, contact your credit card
        company, as it may take some time before your refund is officially
        posted. If you’ve done all of this and still have not received your
        refund, please contact us at{" "}
        <a href="mailto:support@phoenixtechco.com" className="text-blue-600">
          {" "}
          techphoenixco@gmail.com
        </a>
        .
      </p>

      <h2 className="text-2xl font-semibold mb-2">Exchanges</h2>
      <p className="mb-4">
        We only replace items if they are defective or damaged. If you need an
        exchange for the same item, send us an email at{" "}
        <a href="mailto:support@phoenixtechco.com" className="text-blue-600">
          {" "}
          techphoenixco@gmail.com
        </a>
        .
      </p>

      <h2 className="text-2xl font-semibold mb-2">Shipping Returns</h2>
      <p className="mb-4">
        To return your product, please mail it to: Phoenix Tech Co., 123 Tech
        Avenue, Suite 100, Cityville, State, 12345. You will be responsible for
        paying for your own shipping costs for returning your item. Shipping
        costs are non-refundable.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
      <p className="mb-4">
        If you have any questions about our refund policy, please contact us at{" "}
        <a href="mailto:support@phoenixtechco.com" className="text-blue-600">
          {" "}
          techphoenixco@gmail.com
        </a>
        .
      </p>
    </div>
  );
};

export default RefundPolicy;
