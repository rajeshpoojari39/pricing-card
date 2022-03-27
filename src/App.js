import "./App.css";
import PricingCard from "./componenets/PricingCard";

function App() {
  const pricingTier = [
    {
      id: 1,
      tier: "Free",
      price: 0,
      user: "Single User",
      storage: "5GB",
      project: "Unlimited Public Projects",
      access: "Community Access",
      privateProject: "Unlimited Private Projects",
      support: "Dedicated Phone Support",
      domain: "Free Subdomain",
      report: "Monthly Status Reports",
    },
    {
      id: 2,
      tier: "Plus",
      price: 9,
      user: 5,
      storage: "50GB",
      project: "Unlimited Public Projects",
      access: "Community Access",
      privateProject: "Unlimited Private Projects",
      support: "Dedicated Phone Support",
      domain: "Free Subdomain",
      report: "Monthly Status Reports",
    },
    {
      id: 3,
      tier: "Pro",
      price: 49,
      user: "Unlimited",
      storage: "150GB",
      project: "Unlimited Public Projects",
      access: "Community Access",
      privateProject: "Unlimited Private Projects",
      support: "Dedicated Phone Support",
      domain: "Unlimited",
      report: "Monthly Status Reports",
    },
  ];
  return (
    <>
      <section className='pricing py-5'>
        <div className='container'>
          <div className='row'>
            {pricingTier.map((pricing) => (
              <PricingCard key={pricing.id} pricingDetails={pricing} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
