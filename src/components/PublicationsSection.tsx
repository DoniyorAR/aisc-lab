import { useEffect, useMemo, useRef, useState } from 'react';
import { ExternalLink, Calendar, User, Loader2 } from 'lucide-react';

/**
 * Live publications using Semantic Scholar Graph API.
 * - CORS-friendly for browser fetch
 * - Docs: https://api.semanticscholar.org/api-docs/graph
 */

type S2Author = { authorId: string; name: string };
type S2Paper = {
  paperId: string;
  title: string;
  year?: number;
  venue?: string;      // journal/conference
  url?: string;        // canonical url on S2
  authors: S2Author[];
};

const PAGE_SIZE = 10;

// --- Category config ---------------------------------------------------------
const CATEGORY_CONFIG = {
  all: {
    label: 'All Publications',
    s2Query: 'Young Im Cho', // broad
    scholarUrl:
      'https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=Young+Im+Cho+&btnG=',
  },
  research: {
    label: 'Research',
    s2Query: 'Young Im Cho research',
    scholarUrl:
      'https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=Young+Im+Cho+Research&btnG=',
  },
  ethics: {
    label: 'AI Ethics',
    s2Query: 'Young Im Cho AI ethics',
    scholarUrl:
      'https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=Young+Im+Cho+AI+ethics&btnG=',
  },
  vision: {
    label: 'Computer Vision',
    s2Query: 'Young Im Cho computer vision',
    scholarUrl:
      'https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=Young+Im+Cho+Computer+Vision&btnG=',
  },
  nlp: {
    label: 'NLP',
    s2Query: 'Young Im Cho NLP',
    scholarUrl:
      'https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=Young+Im+Cho+NLP&btnG=',
  },
  engineering: {
    label: 'Engineering',
    s2Query: 'Young Im Cho engineering',
    scholarUrl:
      'https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=Young+Im+Cho+Engineering&btnG=',
  },
} as const;

type CategoryKey = keyof typeof CATEGORY_CONFIG;

// --- Fallback static (uses your original examples) ---------------------------
const STATIC_FALLBACK = [
  {
    title:
      'CerviLearnNet: Advancing Cervical Cancer Diagnosis with Reinforcement Learning-Enhanced Convolutional Networks',
    authors: 'S. Muksimova, S. Umirzakova, S. Kang, Y. Im Cho',
    journal: 'Heliyon',
    year: '2024',
    abstract:
      'This paper introduces CerviLearnNet, a novel reinforcement learning-enhanced convolutional neural network for cervical cancer diagnosis, demonstrating improved accuracy in challenging clinical scenarios.',
    link: 'https://www.cell.com/heliyon/fulltext/S2405-8440(24)01151-1',
    type: 'Journal Article',
  },
  {
    title: 'Fire and Smoke Detection in Complex Environments',
    authors: 'F. Safarov, S. Muksimova, M. Kamoliddin, Y. I. Cho',
    journal: 'Fire',
    year: '2024',
    abstract:
      'We present a real-time fire and smoke detection approach for complex and large-scale environments, surpassing traditional monitoring systems and supporting effective disaster prevention.',
    link: 'https://www.mdpi.com/2571-6255/7/6/276',
    type: 'Journal Article',
  },
];

const PublicationsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey>('all');

  // pagination
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState<number | null>(null);

  // data
  const [items, setItems] = useState<S2Paper[]>([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const sectionRef = useRef<HTMLDivElement>(null);

  // reveal animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // reset page when category changes
  useEffect(() => {
    setPage(1);
  }, [selectedCategory]);

  const offset = useMemo(() => (page - 1) * PAGE_SIZE, [page]);

  // fetch from Semantic Scholar
  useEffect(() => {
    const fetchPubs = async () => {
      setLoading(true);
      setErr(null);

      try {
        const query = CATEGORY_CONFIG[selectedCategory].s2Query;

        // Search papers (simple query). We filter by author name here to keep it browser-only.
        const url =
          `https://api.semanticscholar.org/graph/v1/paper/search?` +
          new URLSearchParams({
            query,
            fields: 'title,year,authors,venue,url',
            limit: String(PAGE_SIZE),
            offset: String(offset),
          }).toString();

        const res = await fetch(url);
        if (!res.ok) throw new Error(`S2 error: ${res.status}`);
        const data = await res.json(); // { total:int, data: S2Paper[] }

        // Filter to entries that include "Young Im Cho" among authors (best-effort)
        const filtered: S2Paper[] = (data?.data || []).filter((p: S2Paper) =>
          (p.authors || []).some(a =>
            /young\s*im\s*cho/i.test(a.name ?? '')
          )
        );

        setItems(filtered);
        setTotal(typeof data?.total === 'number' ? data.total : null);
      } catch (e: any) {
        setErr(e?.message || 'Failed to load publications');
        setItems([]);
        setTotal(null);
      } finally {
        setLoading(false);
      }
    };

    fetchPubs();
  }, [selectedCategory, offset]);

  const totalPages = useMemo(() => {
    if (!total) return null;
    return Math.max(1, Math.ceil(total / PAGE_SIZE));
  }, [total]);

  const categories: { id: CategoryKey; label: string }[] = [
    { id: 'all', label: 'All Publications' },
    { id: 'research', label: 'Research' },
    { id: 'ethics', label: 'AI Ethics' },
    { id: 'vision', label: 'Computer Vision' },
    { id: 'nlp', label: 'NLP' },
    { id: 'engineering', label: 'Engineering' },
  ];

  const onPrev = () => setPage(p => Math.max(1, p - 1));
  const onNext = () => setPage(p => (totalPages ? Math.min(totalPages, p + 1) : p + 1));

  const scholarUrl = CATEGORY_CONFIG[selectedCategory].scholarUrl;

  return (
    <section id="publications" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'animate-fade-in' : 'opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Publications</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Discover our latest research via live results. Use the tabs to filter, paginate results below,
            or open the same query on Google Scholar.
          </p>
          <div className="mt-4">
            <a
              href={scholarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-ai-blue to-ai-purple text-white hover:scale-105 transition"
            >
              Open this filter on Google Scholar
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Category Filter */}
        <div
          className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-1000 delay-300 ${
            isVisible ? 'animate-fade-in' : 'opacity-0'
          }`}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-ai-blue to-ai-purple text-white'
                  : 'bg-accent/20 text-foreground/70 hover:bg-accent/40'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Loading / Error */}
        {loading && (
          <div className="flex items-center justify-center py-12 text-foreground/70">
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Loading publications…
          </div>
        )}
        {err && (
          <div className="glass-card p-6 mb-6 border border-red-500/30">
            <p className="text-red-400 font-medium mb-2">Live feed unavailable.</p>
            <p className="text-foreground/70">
              {err}. Showing a small static list while the API is unreachable.
            </p>
          </div>
        )}

        {/* Publications Grid (Live if available, else fallback) */}
        <div className="space-y-6">
          {(items.length ? items : err ? [] : items).map(() => null)}
          {(!err ? items : STATIC_FALLBACK).map((publication: any, index: number) => {
            // Normalize fields for both S2 and fallback
            const title = publication.title;
            const authors =
              'authors' in publication
                ? (publication.authors as S2Author[]).map(a => a.name).join(', ')
                : publication.authors;

            const year =
              'year' in publication ? publication.year : Number(publication.year) || undefined;

            const venue =
              'venue' in publication ? publication.venue : (publication.journal ?? '');

            const link =
              'url' in publication ? publication.url : publication.link;

            return (
              <div
                key={(publication.paperId as string) ?? `${title}-${index}`}
                className={`glass-card p-6 hover:scale-[1.02] transition-all duration-500 group ${
                  isVisible ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 60}ms` }}
              >
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="md:col-span-3">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold gradient-text mb-2 group-hover:text-ai-purple transition-colors">
                          {title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-foreground/60 mb-3">
                          <div className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            <span>{authors}</span>
                          </div>
                          {year && (
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span>{year}</span>
                            </div>
                          )}
                        </div>
                      </div>
                      {venue && (
                        <span className="px-3 py-1 bg-ai-blue/10 text-ai-blue text-xs rounded-full whitespace-nowrap">
                          {venue}
                        </span>
                      )}
                    </div>

                    {'abstract' in publication && publication.abstract && (
                      <p className="text-foreground/70 leading-relaxed mb-4">
                        {publication.abstract}
                      </p>
                    )}

                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-ai-blue">
                        {venue ? `Published in: ${venue}` : 'Publication'}
                      </p>
                      {link && (
                        <a
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-ai-blue to-ai-purple text-white rounded-lg hover:scale-105 transition-all duration-300"
                        >
                          <span>Read More</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination */}
        {!err && totalPages && totalPages > 1 && (
          <div className="flex items-center justify-center gap-3 mt-8">
            <button
              onClick={onPrev}
              disabled={page === 1}
              className={`px-4 py-2 rounded-lg border border-white/10 ${
                page === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-accent/30'
              }`}
            >
              Prev
            </button>
            <span className="text-foreground/70">
              Page <strong>{page}</strong> of <strong>{totalPages}</strong>
            </span>
            <button
              onClick={onNext}
              disabled={page === totalPages}
              className={`px-4 py-2 rounded-lg border border-white/10 ${
                page === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-accent/30'
              }`}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PublicationsSection;
