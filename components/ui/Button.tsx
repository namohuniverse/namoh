import Link from 'next/link';
import { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary';

interface BaseProps {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
}

interface ButtonAsButton extends BaseProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'> {
  href?: undefined;
}

interface ButtonAsLink extends BaseProps {
  href: string;
  onClick?: () => void;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const baseStyles =
  'inline-flex items-center justify-center gap-2 rounded-soft px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-bg';

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-gradient-to-b from-gold to-gold-dark text-white border border-gold-light/50',
  secondary: 'bg-transparent text-gold border border-gold/60 hover:bg-gold/10 hover:border-gold',
};

/**
 * Shared CTA button. Renders a <Link> when `href` is provided,
 * otherwise a native <button>.
 */
export default function Button(props: ButtonProps) {
  const { children, variant = 'primary', className = '' } = props;
  const styles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if ('href' in props && props.href) {
    return (
      <Link href={props.href} className={styles} onClick={props.onClick}>
        {children}
      </Link>
    );
  }

  const { href: _href, variant: _variant, className: _className, children: _children, ...buttonProps } =
    props as ButtonAsButton;

  return (
    <button className={styles} {...buttonProps}>
      {children}
    </button>
  );
}
