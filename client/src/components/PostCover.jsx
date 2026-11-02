import React, { useState } from "react";

// লোগো আসে devicon থেকে (CDN)। কোনো ইমেজ ফাইল ডাউনলোড করতে হবে না
const DEVICON_BASE =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons";

// এই আইকনগুলো কালো, তাই ডার্ক ব্যাকগ্রাউন্ডে সাদা করে দেখাতে হয়
const DARK_ICONS = ["express", "nextjs", "github"];

const PostCover = ({ post, large = false }) => {
  const [imgFailed, setImgFailed] = useState(false);
  const [from, to] = post.colors || ["#1a1a2e", "#C9A876"];

  // নিজের ছবি থাকলে সেটা আগে দেখাবে
  if (post.image && !imgFailed) {
    return (
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-full object-cover"
        onError={() => setImgFailed(true)}
      />
    );
  }

  return (
    <div
      className="relative w-full h-full flex items-center justify-center gap-3 sm:gap-4 overflow-hidden"
      style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
      aria-label={post.title}
    >
      {/* সাজানোর জন্য হালকা বৃত্ত */}
      <span className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-white/10" />
      <span className="absolute -bottom-12 -right-8 w-48 h-48 rounded-full bg-black/20" />

      {post.icons.map((icon) => {
        const folder = icon.split("/")[0];
        const invert = DARK_ICONS.includes(folder);
        return (
          <div
            key={icon}
            className={`relative z-10 flex items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm border border-white/20 shadow-lg ${
              large ? "w-24 h-24 sm:w-28 sm:h-28" : "w-14 h-14 sm:w-16 sm:h-16"
            }`}
          >
            <img
              src={`${DEVICON_BASE}/${icon}`}
              alt={folder}
              className={large ? "w-14 h-14 sm:w-16 sm:h-16" : "w-8 h-8 sm:w-9 sm:h-9"}
              style={invert ? { filter: "invert(1)" } : undefined}
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default PostCover;