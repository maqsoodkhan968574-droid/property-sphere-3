type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  copy?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, copy, align = "left" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="mt-2 text-3xl font-black leading-tight text-navy sm:text-4xl">{title}</h2>
      {copy ? <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">{copy}</p> : null}
    </div>
  );
}
