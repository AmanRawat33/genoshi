import { useState } from "react";
const Price = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const pricingPlans = [
    {
      id: "1",
      name: "Basic Plan",
      cost: "$4/month/user",
      graphs: "Up to 10 graphs",
      queries: "Up to 500 chatbot queries",
      features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
    },
    {
      id: "2",
      name: "Pro Plan",
      cost: "$8/month/user",
      graphs: "Up to 50 graphs",
      queries: "Up to 1000 chatbot queries",
      features: [
        "Feature 1",
        "Feature 2",
        "Feature 3",
        "Email + live chat support",
      ],
    },
    {
      id: "3",
      name: "Enterprise Plan",
      cost: "Contact for price",
      graphs: "Unlimited graphs",
      queries: "Ability to upload custom PDFs",
      features: [
        "Feature 1",
        "Feature 2",
        "Feature 3",
        "24/7 phone + email support",
      ],
    },
  ];

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <div className="p-4 bg-gray-800 min-h-[100vh]">
      <h1 className="text-5xl font-semibold text-slate-300">
        We are excited to have you onbard!
      </h1>
      <h2 className="text-4xl font-bold mb-4 text-white pt-24">
        Our Offerings
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {pricingPlans.map((plan) => (
          <div
            key={plan.id}
            className={`p-4 border rounded-md bg-gray-900 border-none shadow-lg`}
          >
            <h3 className="text-xl text-white font-semibold mb-2">
              {plan.name}
            </h3>
            <p className=" mb-2 text-gray-300">{plan.cost}</p>
            <p className=" mb-2 text-gray-300">{plan.graphs}</p>
            <p className=" mb-2 text-gray-300">{plan.queries}</p>
            <div className="flex flex-col gap-2">
              <ul className="list-disc pl-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="text-gray-300">
                    {feature}
                  </li>
                ))}
              </ul>
              <div>
                <input
                  type="radio"
                  id={plan.name}
                  name="pricingPlan"
                  onChange={() => handleSelectPlan(plan)}
                  className="mt-4"
                />
              </div>
              <label htmlFor={plan.name} className=" text-gray-700">
                Select Plan
              </label>
            </div>
          </div>
        ))}
      </div>

      {selectedPlan && (
        <div className="mt-8 p-4 border rounded-md bg-slate-900 w-1/2 mx-auto shadow-2xl border-none">
          <h3 className="text-2xl font-bold mb-2">
            Details about our <span className="text-slate-400"> {selectedPlan.name}</span>
          </h3>
          <p className="text-white mb-2">{selectedPlan.cost}</p>
          <p className="text-white mb-2">{selectedPlan.graphs}</p>
          <p className="text-white mb-2">{selectedPlan.queries}</p>

          <ul className="list-disc pl-4">
            {selectedPlan.features.map((feature) => (
              <li key={feature} className="text-white">
                {feature}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Price;
