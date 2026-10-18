# aly.town

Atmosphere apps & services by [Aly Raffauf](https://aly.codes).

```sh
bun install
bun run dev
```

`bun run check` checks types, lint, and formatting.
`bun run build` generates the sharing image and builds to `dist/`.
`bun run preview` serves the build.

```sh
docker build -f Containerfile -t aly.town .
docker run --rm -p 8080:80 aly.town
```
