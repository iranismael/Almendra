import { Star, Leaf } from 'lucide-react';
import type { FeatureItem } from '@/types';

interface FeatureCardProps {
  feature: FeatureItem;
}

const icons = {
  star: Star,
  leaf: Leaf,
} as const;

export default function FeatureCard({ feature }: FeatureCardProps) {
  const Icon = icons[feature.icon];

  return (
    <div className="space-y-2">
      <div className="w-12 h-12 bg-brand-cream rounded-full flex items-center justify-center text-brand-sage border border-brand-almond/30">
        <Icon size={24} />
      </div>
      <h4 className="font-bold text-brand-dark">{feature.title}</h4>
      <p className="text-sm text-brand-dark/50">{feature.description}</p>
    </div>
  );
}