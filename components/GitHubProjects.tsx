'use client';

import { Github, Star, GitFork, ExternalLink, RefreshCw } from 'lucide-react';
import { useState, useEffect } from 'react';

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
  topics: string[];
}

const languageColors: Record<string, string> = {
  Python: 'bg-blue-500',
  JavaScript: 'bg-yellow-500',
  TypeScript: 'bg-blue-400',
  SQL: 'bg-orange-500',
  R: 'bg-teal-500',
  Jupyter: 'bg-orange-400',
  HTML: 'bg-red-500',
  CSS: 'bg-pink-500',
};

const fallbackRepos: Repo[] = [
  {
    id: 1,
    name: 'hr-analytics-dashboard',
    description: 'Power BI HR Analytics dashboard analyzing attrition, salary, and workforce demographics',
    html_url: 'https://github.com/legitanna',
    stargazers_count: 0,
    forks_count: 0,
    language: 'Python',
    updated_at: new Date().toISOString(),
    topics: ['powerbi', 'hr-analytics', 'data-visualization'],
  },
  {
    id: 2,
    name: 'credit-card-analytics',
    description: 'Credit card transaction and customer analytics built with Power BI and DAX',
    html_url: 'https://github.com/legitanna',
    stargazers_count: 0,
    forks_count: 0,
    language: 'SQL',
    updated_at: new Date().toISOString(),
    topics: ['powerbi', 'finance', 'dax'],
  },
  {
    id: 3,
    name: 'data-science-salary-analysis',
    description: 'Global data science salary benchmarking across countries, roles, and experience levels',
    html_url: 'https://github.com/legitanna',
    stargazers_count: 0,
    forks_count: 0,
    language: 'Python',
    updated_at: new Date().toISOString(),
    topics: ['data-science', 'salary-analysis', 'powerbi'],
  },
];

function timeAgo(dateStr: string) {
  const diff = Date.now() - new Date(dateStr).getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  if (days === 0) return 'Today';
  if (days === 1) return '1 day ago';
  if (days < 30) return `${days} days ago`;
  if (days < 365) return `${Math.floor(days / 30)} months ago`;
  return `${Math.floor(days / 365)} years ago`;
}

export default function GitHubProjects() {
  const [repos, setRepos] = useState<Repo[]>(fallbackRepos);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchRepos = async () => {
    setLoading(true);
    setError(false);
    try {
      const res = await fetch('https://api.github.com/users/legitanna/repos?sort=updated&per_page=6');
      if (!res.ok) throw new Error('Failed');
      const data: Repo[] = await res.json();
      if (data && data.length > 0) setRepos(data.slice(0, 6));
      else setRepos(fallbackRepos);
    } catch {
      setError(true);
      setRepos(fallbackRepos);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRepos();
  }, []);

  return (
    <section id="github" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-xs font-medium text-blue-400 tracking-widest uppercase mb-3">Open Source</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">GitHub Projects</h2>
            <p className="text-slate-400">
              Explore projects on{' '}
              <a
                href="https://github.com/legitanna"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                github.com/legitanna
              </a>
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={fetchRepos}
              disabled={loading}
              className="flex items-center gap-2 px-4 py-2 text-sm text-slate-400 glass rounded-xl border border-white/10 hover:border-white/20 transition-all disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
              {loading ? 'Loading...' : 'Refresh'}
            </button>
            <a
              href="https://github.com/legitanna"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-sm text-white bg-slate-800 hover:bg-slate-700 rounded-xl border border-white/10 transition-all"
            >
              <Github className="w-4 h-4" />
              View Profile
            </a>
          </div>
        </div>

        {error && (
          <p className="text-xs text-slate-500 text-center mb-6">Showing sample projects — GitHub API unavailable.</p>
        )}

        {/* Repo grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {repos.map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass glass-hover rounded-2xl p-5 border border-white/5 flex flex-col group"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                  <Github className="w-4 h-4 text-slate-400" />
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-600 group-hover:text-slate-400 transition-colors" />
              </div>

              <h3 className="font-semibold text-white text-sm mb-2 group-hover:text-blue-400 transition-colors line-clamp-1">
                {repo.name}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4 flex-1 line-clamp-3">
                {repo.description || 'No description available.'}
              </p>

              {/* Topics */}
              {repo.topics && repo.topics.length > 0 && (
                <div className="flex flex-wrap gap-1 mb-3">
                  {repo.topics.slice(0, 3).map((t) => (
                    <span key={t} className="px-2 py-0.5 text-xs bg-blue-500/10 text-blue-400 rounded-md">
                      {t}
                    </span>
                  ))}
                </div>
              )}

              <div className="flex items-center justify-between text-xs text-slate-500 border-t border-white/5 pt-3">
                <div className="flex items-center gap-3">
                  {repo.language && (
                    <span className="flex items-center gap-1.5">
                      <span className={`w-2 h-2 rounded-full ${languageColors[repo.language] || 'bg-slate-500'}`} />
                      {repo.language}
                    </span>
                  )}
                  <span className="flex items-center gap-1">
                    <Star className="w-3 h-3" /> {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="w-3 h-3" /> {repo.forks_count}
                  </span>
                </div>
                <span>{timeAgo(repo.updated_at)}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
