import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const guidesDir = path.join(process.cwd(), 'content', 'guides');

export type GuideMeta = {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  updated?: string;
  readMinutes: number;
  keywords: string[];
};

export type Guide = GuideMeta & { html: string };

function readFile(slug: string) {
  return fs.readFileSync(path.join(guidesDir, `${slug}.md`), 'utf8');
}

function toMeta(slug: string, data: Record<string, unknown>): GuideMeta {
  return {
    slug,
    title: String(data.title ?? ''),
    description: String(data.description ?? ''),
    category: String(data.category ?? 'Guides'),
    date: String(data.date ?? ''),
    updated: data.updated ? String(data.updated) : undefined,
    readMinutes: Number(data.readMinutes ?? 6),
    keywords: Array.isArray(data.keywords) ? data.keywords.map(String) : [],
  };
}

export function getGuideSlugs(): string[] {
  if (!fs.existsSync(guidesDir)) return [];
  return fs
    .readdirSync(guidesDir)
    .filter((file) => file.endsWith('.md'))
    .map((file) => file.replace(/\.md$/, ''));
}

export function getGuide(slug: string): Guide | null {
  if (!fs.existsSync(path.join(guidesDir, `${slug}.md`))) return null;
  const { data, content } = matter(readFile(slug));
  const html = marked.parse(content, { gfm: true, async: false }) as string;
  return { ...toMeta(slug, data), html };
}

export function getAllGuides(): GuideMeta[] {
  return getGuideSlugs()
    .map((slug) => {
      const { data } = matter(readFile(slug));
      return toMeta(slug, data);
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getGuidesByCategory(): { category: string; guides: GuideMeta[] }[] {
  const groups = new Map<string, GuideMeta[]>();
  for (const guide of getAllGuides()) {
    groups.set(guide.category, [...(groups.get(guide.category) ?? []), guide]);
  }
  return Array.from(groups).map(([category, guides]) => ({ category, guides }));
}
