import { Button, Card } from "antd";

const IncreaseSaleCard = () => {
  return (
    <Card
      style={{
        padding: 0,
        borderRadius: 30,
        backgroundColor: "#e5e7eb",
      }}
    >
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold">Increase Sale Card</h1>
        <p className="text-lg">
          Discover the Proven Methods to Skyrocket Your Sales! Unleash the
          Potential of Your Business and Achieve Remarkable Growth. Whether
          you're a seasoned entrepreneur or just starting out
        </p>
        <Button size="large">Learn more</Button>
      </div>
    </Card>
  );
};

export default IncreaseSaleCard;
