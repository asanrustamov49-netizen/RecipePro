import { Icon } from '../icons/Icon';
import './Logo.css';

interface LogoProps {
  compact?: boolean;
}

export function Logo({ compact = false }: LogoProps) {
  return (
    <span className={`logo${compact ? ' logo--compact' : ''}`}>
      <span className="logo__mark">
        <Icon name="chefHat" size={compact ? 18 : 20} strokeWidth={1.9} />
      </span>
      <span className="logo__text">
        AI Recipe <span className="logo__accent">Generator</span>
      </span>
    </span>
  );
}
