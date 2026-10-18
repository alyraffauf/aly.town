import type { ReactNode } from 'react';

interface LinkProps {
  name: string;
  href: string;
  description: ReactNode;
}

export function Link({ name, href, description }: LinkProps) {
  return (
    <li className="break-inside-avoid-column">
      <a
        href={href}
        className="border-b border-ctp-surface2 text-ctp-blue hover:text-ctp-sapphire"
      >
        {name}
        <span aria-hidden="true" className="ml-1 align-super text-[0.65em]">
          ↗
        </span>
      </a>
      <p className="mt-1 text-sm text-ctp-subtext0 [&_a]:underline">
        {description}
      </p>
    </li>
  );
}
