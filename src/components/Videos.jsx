import { PlayCircle } from "lucide-react";
const videos = [
  { id: "9X-78TH8nAQ", url: "https://youtu.be/9X-78TH8nAQ" },
  { id: "b5RzQZMQZGc", url: "https://youtube.com/shorts/b5RzQZMQZGc" },
  { id: "1Q3CgBYl8vk", url: "https://youtube.com/shorts/1Q3CgBYl8vk" },
  { id: "5kMTEd3on8I", url: "https://youtube.com/shorts/5kMTEd3on8I" },
];
export default function Videos() {
  return (
    <section className="travel-art-bg px-4 section-gap sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center reveal"><h2 className="font-display text-3xl font-extrabold text-brand-darker sm:text-4xl">See What Clients Say About Us</h2></div>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {videos.map((v) => (
            <article key={v.id} className="glass-panel reveal rounded-[16px] p-3 shadow-card">
              <div className="video-frame-wrap">
                <a className="video-preview-link" href={v.url} target="_blank" rel="noopener noreferrer">
                  <img className="video-frame" loading="lazy" src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`} alt="Client video" />
                  <img src="/img/koh logo.jpeg" className="absolute top-3 left-3 z-20 w-8 sm:w-10 object-contain drop-shadow-xl" alt="" />
                  <span className="play-chip absolute bottom-3 left-3 inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold text-white"><PlayCircle className="h-3.5 w-3.5" />Watch on YouTube</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
