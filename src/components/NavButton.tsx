import { LucideIcon } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';

type Props = {
  icon: LucideIcon;
  label: string;
  href?: string;
  isActive?: boolean;
};

function NavButton({ icon: Icon, label, href, isActive }: Props) {
  const ButtonContent = (
    <Icon
      className={`min-h-6 min-w-6 ${
        isActive ? 'fill-current ' : 'text-primary/30'
      }`}
    />
  );

  return (
    <Button
      variant="ghost"
      aria-label={label}
      title={label}
      className={`hover:bg-accent/50 sm:p-6 p-4 h-max w-max`}
      asChild
    >
      {href ? (
        <Link
          href={href}
          className="flex items-center justify-center w-full h-full"
        >
          {ButtonContent}
        </Link>
      ) : (
        ButtonContent
      )}
    </Button>
  );
}

export default NavButton;
