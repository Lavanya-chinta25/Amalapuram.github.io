export default function AcademicHonors() {
  const awards = [
    {
      title: "1st Prize – Malware Analysis Hackathon",
      description:
        "Led a team of three to win 1st prize (INR 1,00,000) at the Malware Analysis Hackathon 2024, hosted by IIT Madras.",
    },
    {
      title: "Google Travel Grant",
      description: "Received a travel grant from Google to attend NeurIPS 2023.",
    },
    {
      title: "NeurIPS 2023 Scholar Award",
      description: "Recognized as a scholar for NeurIPS 2023.",
    },
    {
      title: "COMSNETS 2024 Travel Award",
      description:
        "Received an international travel award by the LRN Foundation for COMSNETS 2024.",
    },
    {
      title: "ACM Travel Grant – IEEE INFOCOM 2024",
      description: "Awarded ACM travel grant to attend IEEE INFOCOM 2024.",
    },
    {
      title: "PhD Fellowship – MoE, Govt. of India",
      description:
        "Awarded a full PhD fellowship by the Ministry of Education, Government of India for the period 2019–2024.",
    },
  ];

  return (
    <div className="mb-12">
  <h2 className="text-2xl font-bold px-4 py-2 rounded">
    Research Awards
  </h2>
  <ul className="mt-4 space-y-4 text-gray-800 text-base list-disc list-inside">
    {awards.map((award, index) => (
      <li key={index}>
        <span className="font-semibold">{award.title}</span>
        <div>{award.description}</div>
      </li>
    ))}
  </ul>
</div>

  );
}
