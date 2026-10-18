const services = [
  {
    name: 'aly.social',
    href: 'https://aly.social',
    description: 'atproto personal data server.',
  },
  {
    name: 'atbbs',
    href: 'https://atbbs.xyz',
    description: 'decentralized bulletin boards on atproto.',
  },
  {
    name: 'bobbin',
    href: 'https://bobbin.aly.town',
    description: 'indie appview for tangled.',
  },
  {
    name: 'haunt.at',
    href: 'https://haunt.at',
    description: 'atproto as a demon compendium.',
  },
  {
    name: 'hydrant',
    href: 'https://hydrant.cute.haus',
    description: 'general-purpose atproto indexer.',
  },
  {
    name: 'morsels.blue',
    href: 'https://morsels.blue',
    description: 'social pastebin built on atproto.',
  },
  {
    name: 'skytrace',
    href: 'https://skytrace.aly.town',
    description: 'public moderation explorer for bsky.',
  },
  {
    name: 'slingshot',
    href: 'https://slingshot.aly.town',
    description: 'fast cache for atproto records + identities.',
  },
  {
    name: 'snarled',
    href: 'https://snarled.at',
    description: 'wip indie client for tangled.',
  },
];

export function ServiceLinks() {
  return (
    <nav aria-label="Apps and services" className="mt-8">
      <ul className="space-y-5">
        {services.map(({ name, href, description }) => (
          <li key={href}>
            <a
              href={href}
              className="rounded-sm text-ctp-blue underline decoration-ctp-surface2 underline-offset-4 hover:text-ctp-sapphire focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ctp-mauve"
            >
              {name}
              <span aria-hidden="true" className="ml-2">
                ↗
              </span>
            </a>
            <p className="mt-1 text-sm text-ctp-subtext0">{description}</p>
          </li>
        ))}
      </ul>
    </nav>
  );
}
