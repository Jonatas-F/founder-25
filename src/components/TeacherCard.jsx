import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { fadeUp } from "../lib/motion";

/**
 * Card de professor com slot de vídeo. Se `videoUrl` for null, mostra placeholder
 * com ícone de play e label "Vídeo em breve".
 *
 * Aceita videoUrl em formato:
 *   - YouTube: "https://youtu.be/ID" ou "https://www.youtube.com/watch?v=ID"
 *   - Vimeo: "https://vimeo.com/ID"
 *   - Caminho local: "/videos/file.mp4" (será exibido em <video>)
 */
function getEmbedSrc(videoUrl) {
  if (!videoUrl) return null;
  const yt = videoUrl.match(/(?:youtu\.be\/|youtube\.com\/watch\?v=)([\w-]+)/);
  if (yt) return { type: "iframe", src: `https://www.youtube.com/embed/${yt[1]}` };
  const vimeo = videoUrl.match(/vimeo\.com\/(\d+)/);
  if (vimeo) return { type: "iframe", src: `https://player.vimeo.com/video/${vimeo[1]}` };
  return { type: "video", src: videoUrl };
}

export default function TeacherCard({ teacher, accent = false }) {
  const embed = getEmbedSrc(teacher.videoUrl);

  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -4 }}
      className={`group relative flex flex-col rounded-2xl overflow-hidden border ${
        accent
          ? "bg-gradient-to-br from-[var(--accent)]/10 to-transparent border-[var(--accent)]/40"
          : "bg-[var(--bg-elevated)] border-white/10 hover:border-[var(--accent)]/40"
      } transition-colors`}
    >
      {/* Video / placeholder */}
      <div className="relative aspect-video bg-black overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.10) 0.8px, transparent 1.2px)",
            backgroundSize: "5px 5px",
          }}
        />
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)]/40 to-transparent" />
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)]/40 to-transparent" />
        {embed ? (
          embed.type === "iframe" ? (
            <iframe
              src={embed.src}
              title={`Apresentação · ${teacher.name}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          ) : (
            <video
              src={embed.src}
              controls
              className="absolute inset-0 w-full h-full object-cover"
            />
          )
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
            {teacher.photoUrl && (
              <img
                src={teacher.photoUrl}
                alt={teacher.name}
                className="absolute inset-0 w-full h-full object-cover opacity-50"
              />
            )}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at 50% 60%, rgba(255,90,31,0.18) 0%, transparent 60%)",
              }}
            />
            <div className="relative w-14 h-14 rounded-full border-2 border-[var(--accent)]/60 flex items-center justify-center bg-black/40">
              <Icon icon="lucide:play" className="w-5 h-5 text-[var(--accent)] ml-0.5" />
            </div>
            <span className="relative text-[0.7rem] uppercase tracking-[0.3em] text-white/50">
              Vídeo em breve
            </span>
          </div>
        )}
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <span
          className={`text-[0.65rem] uppercase tracking-[0.25em] font-bold ${
            accent ? "text-[var(--accent)]" : "text-white/50"
          }`}
        >
          {teacher.role}
        </span>
        <h4 className="mt-2 font-display text-xl uppercase tracking-tight">{teacher.name}</h4>

        {teacher.studio && (
          <span className="mt-1 text-sm text-white/70">{teacher.studio}</span>
        )}

        {teacher.bio && teacher.bio.length > 0 && (
          <ul className="mt-4 space-y-1.5">
            {teacher.bio.map((b) => (
              <li
                key={b}
                className="flex items-center gap-2 text-xs text-white/60"
              >
                <span className="w-1 h-1 rounded-full bg-[var(--accent)]" />
                {b}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-4 pt-4 border-t border-white/10">
          <span className="text-[0.65rem] uppercase tracking-[0.25em] text-[var(--accent)] font-bold">
            Conteúdo
          </span>
          <p className="mt-2 text-sm text-white/75 leading-relaxed">{teacher.content}</p>
        </div>
      </div>
    </motion.article>
  );
}
