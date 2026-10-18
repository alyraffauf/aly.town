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
    description: (
      <>
        indie appview for <a href="https://tangled.org">tangled</a>.
      </>
    ),
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
    description: (
      <>
        public moderation explorer for <a href="https://bsky.app">bsky</a>.
      </>
    ),
  },
  {
    name: 'slingshot',
    href: 'https://slingshot.aly.town',
    description: 'fast cache for atproto records + identities.',
  },
  {
    name: 'snarled',
    href: 'https://snarled.at',
    description: (
      <>
        wip indie client for <a href="https://tangled.org">tangled</a>.
      </>
    ),
  },
];

export function ServiceLinks() {
  return (
    <nav aria-label="Apps and services" className="mt-8">
      <ul className="space-y-5 lg:columns-2">
        {services.map(({ name, href, description }) => (
          <li key={href} className="break-inside-avoid-column">
            <a
              href={href}
              className="border-b border-ctp-surface2 text-ctp-blue hover:text-ctp-sapphire"
            >
              {name}
              <span
                aria-hidden="true"
                className="ml-1 align-super text-[0.65em]"
              >
                ↗
              </span>
            </a>
            <p className="mt-1 text-sm text-ctp-subtext0 [&_a]:underline">
              {description}
            </p>
          </li>
        ))}
      </ul>
    </nav>
  );
}
