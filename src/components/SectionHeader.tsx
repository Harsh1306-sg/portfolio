
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  alignment?: "left" | "center" | "right";
}

const SectionHeader = ({
  title,
  subtitle,
  className,
  alignment = "center",
}: SectionHeaderProps) => {
  return (
    <div
      className={cn(
        "mb-12",
        alignment === "center" && "text-center",
        alignment === "right" && "text-right",
        className
      )}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-dark-100">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-dark-100/70 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
