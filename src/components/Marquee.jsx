const items = [
  'No Preservatives',
  'Cold-Pressed Fresh',
  'Small Batch',
  'Seasonal Menus',
  'Subscription-First',
  'Clean Label',
  'In-House Prepared',
  'Local Sourcing',
  'Mon · Wed · Fri Delivery',
  'Zero Artificial Additives',
];

export default function Marquee() {
  return (
    <div className="marquee-strip">
      <div className="marquee-track">
        {items.map((item, i) => (
          <span key={i}>{item}</span>
        ))}
        {items.map((item, i) => (
          <span key={`dup-${i}`}>{item}</span>
        ))}
      </div>
    </div>
  );
}
