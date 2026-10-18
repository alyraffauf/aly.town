import { Link } from './Link';

const links = [
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
  {
    name: 'tg',
    href: 'https://tgcli.wisp.place',
    description: (
      <>
        cli client + mcp server for <a href="https://tangled.org">tangled</a>.
      </>
    ),
  },
];

export function Links() {
  return (
    <nav aria-label="Apps and services" className="mt-8">
      <ul className="space-y-5 lg:columns-2">
        {links.map(({ name, href, description }) => (
          <Link key={href} name={name} href={href} description={description} />
        ))}
      </ul>
    </nav>
  );
}
