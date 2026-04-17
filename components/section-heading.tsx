type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`max-w-3xl ${alignment}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="section-title mt-5 text-balance">{title}</h2>
      <p className="section-copy mt-5">{description}</p>
    </div>
  );
}
