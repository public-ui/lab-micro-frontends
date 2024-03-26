# KoliBri - Micro Frontends Playground

> Using KoliBri in micro frontend environments, enabling multiple versions simultaneously.

## Motivation

Utilizing KolBri (or similar libraries providing Web Components) in a micro frontend setup poses a challenge due to global registration of web components, causing conflicts in element names. Typically, this prevents registering multiple versions concurrently (e.g., both would register as `kol-button`). To overcome this, KoliBri offers a **tag name transformer** configuration, allowing unique element name suffixes for each version (e.g., `kol-button-v1`, `kol-button-v2`).

Additionally, framework adapters can be easily configured, facilitating seamless version switching without extensive code modifications.

## Repository Structure

This monorepo is an example implementation for a micro frontend architecture, comprised by the following packages:

- **app**: Main application orchestrating various micro-frontends.
- kolibri-v1-provider: Provides a regular build of KoliBri v1.x including the default theme.
- kolibri-v2-provider: Offers a build of KoliBri v2.x with the default theme, featuring custom tag names suffixed with `-v2`.
- module-v1: A small React module ("Micro frontend") dependent on KolBri v1.x.
- module-v2: A small React module ("Micro frontend") dependent on KolBri v2.x.

### Configuration Highlights

- **Configure KoliBri**: See [`packages/kolibri-v2-provider/src/main.ts`](packages/kolibri-v2-provider/src/main.ts)
- **Configure React adapter**: See [`packages/module-v2/src/main.tsx`](packages/module-v2/src/main.tsx)

## Try It Out

```
pnpm i
pnpm -r build
cd packages/app
pnpm dev
```
