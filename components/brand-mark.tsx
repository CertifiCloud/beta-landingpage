import Image from "next/image";

import logoCloudStudy from "../Logo-CloudStudy-removebg-cropped.png";

type BrandMarkProps = {
  compact?: boolean;
};

export function BrandMark({ compact = false }: BrandMarkProps) {
  return (
    <div
      className={`relative inline-flex items-center justify-center overflow-hidden border border-[var(--color-border-soft)] bg-[linear-gradient(175deg,#ffffff_0%,#eef5ff_100%)] ${
        compact
          ? "h-12 w-[6.75rem] rounded-[1.25rem] md:h-[3.15rem] md:w-[7.2rem]"
          : "h-14 w-[8rem] rounded-[1.6rem] md:h-16 md:w-[8.8rem]"
      }`}
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      <Image
        src={logoCloudStudy}
        alt="CloudStudy"
        priority={compact}
        sizes={compact ? "(max-width: 768px) 108px, 115px" : "(max-width: 768px) 128px, 141px"}
        className={`h-auto w-auto object-contain ${
          compact ? "max-h-[92%] max-w-[94%]" : "max-h-[86%] max-w-[92%]"
        }`}
      />
    </div>
  );
}
