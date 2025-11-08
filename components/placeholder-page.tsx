import { LucideIcon } from "lucide-react";

interface PlaceholderPageProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export function PlaceholderPage({ title, description, icon: Icon }: PlaceholderPageProps) {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-center max-w-md">
        <div className="inline-flex p-4 bg-surface border border-border rounded-2xl mb-4">
          <Icon className="w-12 h-12 text-primary-red" />
        </div>

        <h1 className="text-2xl font-bold text-text-primary mb-2">{title}</h1>
        <p className="text-text-muted">{description}</p>

        <button className="mt-6 btn-primary">
          Coming Soon
        </button>
      </div>
    </div>
  );
}
