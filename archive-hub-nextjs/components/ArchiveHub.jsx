"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search as SearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ITEMS } from "@/data/items";

const CATEGORIES = [
  { key: "all", label: "All" },
  { key: "music", label: "Music" },
  { key: "fashion", label: "Fashion" },
  { key: "acting", label: "Acting" },
  { key: "ventures", label: "Ventures" },
  { key: "shop", label: "Shop" },
];

function classNames(...cls) {
  return cls.filter(Boolean).join(" ");
}

export default function ArchiveHub() {
  const [active, setActive] = React.useState("all");
  const [q, setQ] = React.useState("");

  const filtered = React.useMemo(() => {
    return ITEMS.filter((it) =>
      (active === "all" || it.kind === active) &&
      (q.trim() === "" ||
        it.title.toLowerCase().includes(q.toLowerCase()) ||
        it.tags.join(" ").toLowerCase().includes(q.toLowerCase()))
    );
  }, [active, q]);

  return (
    <div className="min-h-dvh bg-white text-slate-900">
      {/* Top Bar */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 to-violet-600 text-white font-bold">AG</span>
            <span className="font-semibold tracking-tight">Ain't George – Archive</span>
          </div>

          <div className="hidden md:flex items-center gap-2">
            {CATEGORIES.map((c) => (
              <Button
                key={c.key}
                onClick={() => setActive(c.key)}
                className={classNames(
                  "rounded-2xl",
                  active === c.key
                    ? "bg-indigo-600 hover:bg-indigo-700 text-white"
                    : "bg-transparent hover:bg-slate-100 text-slate-800"
                )}
              >
                {c.label}
              </Button>
            ))}
          </div>

          <div className="relative w-64">
            <Input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search archive…"
              className="pl-9 rounded-2xl bg-slate-50 border-slate-200 focus:ring-2 focus:ring-indigo-600"
            />
            <SearchIcon className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
          </div>
        </div>
      </header>

      {/* Hero / Manifesto */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-5 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-3"
          >
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
              Creative Archive
            </h1>
            <p className="mt-4 text-slate-600 max-w-2xl">
              Musica, moda, acting e venture. Un hub pulito su fondo bianco
              con accenti profondi (indigo/violet) dove raccogliere set, editorial,
              showreel e case study. E presto: shop con drop limitati.
            </p>
            <div className="mt-6 flex gap-3">
              <Button className="rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white">Play latest set</Button>
              <Button className="rounded-2xl hover:bg-slate-100 text-slate-900">View portfolio</Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2"
          >
            <Card className="rounded-2xl border-slate-200 bg-white">
              <CardHeader>
                <CardTitle className="text-base">About</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-600 space-y-2">
                <p>
                  Ain't George (Giorgio Lovati) – DJ residente a Milano, modello/attore
                  e creatore di Saturn Movement. Qui trovi tutto: musica, progetti,
                  investimenti e presto e‑commerce.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <Badge className="bg-violet-600 text-white">Techno</Badge>
                  <Badge variant="outline" className="border-slate-200">Moda</Badge>
                  <Badge variant="outline" className="border-slate-200">Acting</Badge>
                  <Badge variant="outline" className="border-slate-200">Ventures</Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Filters (mobile) */}
      <div className="md:hidden sticky top-[57px] z-40 bg-white/90 backdrop-blur border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-3 flex gap-2 overflow-x-auto">
          {CATEGORIES.map((c) => (
            <button
              key={c.key}
              onClick={() => setActive(c.key)}
              className={classNames(
                "px-3 py-1.5 rounded-2xl text-sm whitespace-nowrap",
                active === c.key
                  ? "bg-indigo-600 text-white"
                  : "bg-slate-100 text-slate-700"
              )}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* Archive Grid */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        {filtered.length === 0 ? (
          <div className="text-center text-slate-500">Nessun elemento trovato.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((it) => (
              <motion.article
                key={it.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.35 }}
              >
                <Card className="rounded-2xl border-slate-200 bg-white overflow-hidden">
                  <div className="aspect-[4/3] w-full overflow-hidden">
                    {/* Cover */}
                    <img
                      src={it.cover}
                      alt={it.title}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                      loading="lazy"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="capitalize border-slate-200">
                        {it.kind}
                      </Badge>
                      <span className="text-xs text-slate-500">{new Date(it.date).toLocaleDateString()}</span>
                    </div>
                    <CardTitle className="mt-2 text-base md:text-lg tracking-tight">
                      {it.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pb-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {it.tags.map((t) => (
                        <Badge key={t} variant="secondary" className="bg-slate-100 text-slate-700">
                          {t}
                        </Badge>
                      ))}
                    </div>

                    {/* Media / Actions */}
                    {it.media?.type === "audio" && (
                      <div className="rounded-xl overflow-hidden border border-slate-200">
                        <iframe
                          allow="autoplay"
                          title={it.title}
                          src={it.media.src}
                          className="w-full h-20"
                        />
                      </div>
                    )}

                    {it.media?.type === "iframe" && (
                      <div className="rounded-xl overflow-hidden border border-slate-200 aspect-video">
                        <iframe
                          src={it.media.src}
                          title={it.title}
                          className="w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    )}

                    {it.media?.type === "link" && (
                      <a
                        href={it.media.href}
                        className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 text-sm mt-1"
                        target="_blank" rel="noreferrer"
                      >
                        {it.media.label || "Open"}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-4 h-4"
                        >
                          <path d="M13.5 6H18a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0V8.56l-6.72 6.72a.75.75 0 0 1-1.06-1.06l6.72-6.72H13.5a.75.75 0 0 1 0-1.5Z" />
                          <path d="M5.25 6A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V12a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 1-.75.75H5.25a.75.75 0 0 1-.75-.75V8.25a.75.75 0 0 1 .75-.75H12a.75.75 0 0 0 0-1.5H5.25Z" />
                        </svg>
                      </a>
                    )}

                    {it.media?.type === "coming-soon" && (
                      <div className="flex items-center justify-between bg-slate-50 border border-dashed border-slate-200 rounded-xl px-3 py-3">
                        <span className="text-sm text-slate-600">Drop in arrivo</span>
                        <Button className="rounded-2xl bg-violet-600 text-white hover:bg-violet-700">Notify me</Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.article>
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-3 gap-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 to-violet-600 text-white font-bold">AG</span>
              <span className="font-semibold tracking-tight">Ain't George</span>
            </div>
            <p className="mt-3 text-sm text-slate-600 max-w-sm">
              Milano – musica, moda, acting e venture. Per booking & collaborazioni: info@yourdomain.com
            </p>
          </div>
          <div className="text-sm text-slate-600">
            <div className="font-medium text-slate-900 mb-2">Sections</div>
            <ul className="space-y-1">
              <li>Music</li>
              <li>Fashion</li>
              <li>Acting</li>
              <li>Ventures</li>
              <li>Shop</li>
            </ul>
          </div>
          <div>
            <div className="font-medium text-slate-900 mb-2">Newsletter</div>
            <div className="flex gap-2">
              <Input placeholder="your@email.com" className="rounded-2xl bg-slate-50 border-slate-200 focus:ring-2 focus:ring-indigo-600" />
              <Button className="rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white">Join</Button>
            </div>
            <p className="text-xs text-slate-500 mt-2">Ricevi release, date e drop limitati.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
