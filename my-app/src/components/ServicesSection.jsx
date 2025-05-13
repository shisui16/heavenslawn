const services = [
  {
    title: "Theoretical Physics",
    description: "I try to study Particle Physics and its Cosmological implications.",
    icon: "🧪", // replace with an actual icon or image path
  },
  {
    title: "Web Development",
    description: "High-quality development of sites at the professional level.",
    icon: "💻",
  },
  {
    title: "Mobile Apps",
    description: "Professional development of applications for iOS and Android.",
    icon: "📱",
  },
  {
    title: "Photography",
    description: "I make high-quality photos of any category at a professional level.",
    icon: "📸",
  },
];

const ServicesSection = () => {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-bold mb-4">What I'm Doing</h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {services.map((service, idx) => (
          <div key={idx} className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-xl transition">
            <div className="text-3xl mb-2">{service.icon}</div>
            <h3 className="text-lg font-semibold mb-1">{service.title}</h3>
            <p className="text-gray-400 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
