import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

interface BlogsPageProps {
  onNavigateToHome: (sectionId?: string) => void;
  onNavigateToWorks: () => void;
  onNavigateToContact: () => void;
  onNavigateToWhatWeDo: () => void;
  onNavigateToWhyEsperia?: () => void;
}

interface CommentItem {
  id: string;
  name: string;
  avatar: string;
  date: string;
  text: string;
  expanded?: boolean;
}

export default function BlogsPage({
  onNavigateToHome,
  onNavigateToWorks,
  onNavigateToContact,
  onNavigateToWhatWeDo,
  onNavigateToWhyEsperia,
}: BlogsPageProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Likes and interactions state
  const [likesCount, setLikesCount] = useState(54);
  const [hasLiked, setHasLiked] = useState(false);
  const [dislikesCount, setDislikesCount] = useState(1);
  const [hasDisliked, setHasDisliked] = useState(false);
  const [isFollowingAuthor, setIsFollowingAuthor] = useState(false);
  const [followedUsers, setFollowedUsers] = useState<Record<string, boolean>>({});

  // Comments state
  const [comments, setComments] = useState<CommentItem[]>([
    {
      id: '1',
      name: 'Sam',
      avatar: '/assets/figma/blog_comment_sam1.png',
      date: 'Jun 5, 2026',
      text: 'Lorem ipsum dolor sit amet consectetur. Pellentesque sem elementum sit dui condimentum adipiscing dui arcu tristique. Odio diam ornare mi amet ut scelerisque. Tristique velit tempus sit aenean malesuada viverra eleifend. A interdum eget pellentesque',
      expanded: false,
    },
    {
      id: '2',
      name: 'Sam',
      avatar: '/assets/figma/blog_comment_sam2.png',
      date: 'Jun 5, 2026',
      text: 'Lorem ipsum dolor sit amet consectetur. Pellentesque sem elementum sit dui condimentum adipiscing dui arcu tristique. Odio diam ornare mi amet ut scelerisque. Tristique velit tempus sit aenean malesuada viverra eleifend. A interdum eget pellentesque',
      expanded: false,
    },
  ]);
  const [newCommentText, setNewCommentText] = useState('');

  const handleToggleLike = () => {
    if (hasLiked) {
      setLikesCount((prev) => prev - 1);
      setHasLiked(false);
    } else {
      setLikesCount((prev) => prev + 1);
      setHasLiked(true);
      if (hasDisliked) {
        setDislikesCount((prev) => prev - 1);
        setHasDisliked(false);
      }
    }
  };

  const handleToggleDislike = () => {
    if (hasDisliked) {
      setDislikesCount((prev) => prev - 1);
      setHasDisliked(false);
    } else {
      setDislikesCount((prev) => prev + 1);
      setHasDisliked(true);
      if (hasLiked) {
        setLikesCount((prev) => prev - 1);
        setHasLiked(false);
      }
    }
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCommentText.trim()) return;

    const newComment: CommentItem = {
      id: Date.now().toString(),
      name: 'You',
      avatar: '/assets/figma/blog_comment_user.png',
      date: 'Just now',
      text: newCommentText.trim(),
      expanded: false,
    };

    setComments([newComment, ...comments]);
    setNewCommentText('');
  };

  const toggleCommentExpand = (id: string) => {
    setComments((prev) =>
      prev.map((c) => (c.id === id ? { ...c, expanded: !c.expanded } : c))
    );
  };

  const toggleFollowUser = (name: string) => {
    setFollowedUsers((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  // Sidebar cards data
  const sidebarCards = [
    {
      id: 1,
      image: '/assets/figma/blog_card_1_img.png',
      title: "AI Doesn't Replace Creativity. It Removes Friction.",
      author: 'Ravi Menon',
      meta: 'CTO, Esperia · Jun 5, 2026 · 8 min read',
      tag: 'AI & Development',
    },
    {
      id: 2,
      image: '/assets/figma/blog_card_2_img.png',
      title: "AI Doesn't Replace Creativity. It Removes Friction.",
      author: 'Ravi Menon',
      meta: 'CTO, Esperia · Jun 5, 2026 · 8 min read',
      tag: 'AI & Development',
    },
    {
      id: 3,
      image: '/assets/figma/blog_card_3_img.png',
      title: "AI Doesn't Replace Creativity. It Removes Friction.",
      author: 'Ravi Menon',
      meta: 'CTO, Esperia · Jun 5, 2026 · 8 min read',
      tag: 'AI & Development',
    },
    {
      id: 4,
      image: '/assets/figma/blog_card_1_img.png',
      title: "AI Doesn't Replace Creativity. It Removes Friction.",
      author: 'Ravi Menon',
      meta: 'CTO, Esperia · Jun 5, 2026 · 8 min read',
      tag: 'AI & Development',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-[#0A0A0A] font-sans antialiased flex flex-col selection:bg-[#C5445A] selection:text-white">
      {/* ============================================================ */}
      {/* 1. HERO SECTION                                               */}
      {/* ============================================================ */}
      <div className="w-full bg-white px-0 sm:px-4 lg:px-8 pt-0 sm:pt-4">
        <section className="relative w-full text-white rounded-b-[32px] sm:rounded-[40px] overflow-hidden bg-[#071F1A]">
          {/* Background gradient image */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <img
              src="/assets/figma/blog_hero_bg.png"
              alt=""
              className="w-full h-full object-cover rounded-b-[32px] sm:rounded-[40px]"
            />
          </div>

          {/* Geometric emblem watermark on right */}
          <div className="absolute top-0 right-0 w-[550px] sm:w-[680px] h-full pointer-events-none z-[1] overflow-hidden flex items-center justify-end">
            <img
              src="/assets/figma/blog_hero_ribbon.png"
              alt=""
              className="w-full h-auto max-w-none opacity-[0.25] mix-blend-screen translate-x-[8%] -translate-y-[2%]"
            />
          </div>

          {/* Ambient Top Glow */}
          <div className="absolute top-0 left-1/4 w-[450px] h-[260px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none z-0" />

          {/* Navigation Header */}
          <Header
            activePage="blogs"
            onNavigateToHome={onNavigateToHome}
            onNavigateToWhatWeDo={onNavigateToWhatWeDo}
            onNavigateToWhyEsperia={onNavigateToWhyEsperia}
            onNavigateToWorks={onNavigateToWorks}
            onNavigateToBlogs={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            onNavigateToContact={onNavigateToContact}
          />

          {/* Hero Title & Breadcrumb Content */}
          <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-20 pt-10 pb-16 lg:pt-14 lg:pb-24">
            <div className="max-w-[862px] flex flex-col gap-4 sm:gap-5">
              {/* Back Button */}
              <div>
                <button
                  type="button"
                  onClick={() => onNavigateToWorks()}
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-black/20 hover:bg-black/30 text-[#E5E7EB] text-[12px] font-manrope font-semibold transition-all duration-200 cursor-pointer border border-white/5"
                >
                  <img
                    src="/assets/figma/icon_chevron_left.svg"
                    alt=""
                    className="w-4 h-4 object-contain"
                  />
                  <span>Back to Our Works</span>
                </button>
              </div>

              {/* Category */}
              <div className="text-[12px] font-manrope font-semibold text-[#E5E7EB] tracking-wide mt-1">
                Blogs
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-[64px] font-semibold font-display text-white tracking-tight leading-[1.12]">
                <span>AI Doesn't Replace </span>
                <span className="font-playball text-[#91CBA6] font-normal italic tracking-normal inline-block ml-1">
                  Creativity.
                </span>
                <br />
                <span className="block mt-1">It Removes Friction.</span>
              </h1>
            </div>
          </div>
        </section>
      </div>

      {/* ============================================================ */}
      {/* 2. MAIN CONTENT AREA (2 COLUMNS)                              */}
      {/* ============================================================ */}
      <main className="max-w-[1440px] w-full mx-auto px-6 sm:px-10 lg:px-20 py-12 lg:py-20 flex-1">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 xl:gap-16">
          {/* ========================================================== */}
          {/* LEFT COLUMN: Main Blog Post & Comments                     */}
          {/* ========================================================== */}
          <article className="w-full lg:w-[62%] xl:w-[738px] flex-shrink-0 flex flex-col">
            {/* Feature Illustration Image */}
            <div className="w-full rounded-[30px] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.06)] bg-[#2A4438]">
              <img
                src="/assets/figma/blog_feature_main.png"
                alt="AI Creativity and Productivity Illustration"
                className="w-full h-auto object-cover rounded-[30px] block"
              />
            </div>

            {/* Author Bar & Action Buttons */}
            <div className="pt-6 pb-4 border-b border-gray-100 flex flex-wrap items-center justify-between gap-4">
              {/* Author Info */}
              <div className="flex items-center gap-3">
                {/* Author Avatar with coral border */}
                <div className="w-10 h-10 rounded-full border border-[#DE5E60] overflow-hidden flex-shrink-0">
                  <img
                    src="/assets/figma/blog_author_ravi.png"
                    alt="Ravi Menon"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Name and Meta */}
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="text-[16px] font-parkinsans text-black">
                      By <strong className="font-bold">Ravi Menon</strong>
                    </span>
                    <span className="text-gray-300">·</span>
                    <button
                      type="button"
                      onClick={() => setIsFollowingAuthor(!isFollowingAuthor)}
                      className="text-[16px] font-manrope font-semibold text-[#AB3D4A] hover:opacity-80 transition-opacity cursor-pointer"
                    >
                      {isFollowingAuthor ? 'Following' : 'Follow'}
                    </button>
                  </div>
                  <span className="text-[12px] font-parkinsans text-[#6B6B6B]">
                    CTO, Esperia · Jun 5, 2026 · 8 min read
                  </span>
                </div>
              </div>

              {/* Like / Dislike / Share Actions */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2.5 bg-gray-50/80 px-3 py-1.5 rounded-full border border-gray-200/60">
                  {/* Thumbs Up */}
                  <button
                    type="button"
                    onClick={handleToggleLike}
                    className={`flex items-center gap-1.5 transition-colors cursor-pointer ${hasLiked ? 'text-emerald-700 font-semibold' : 'text-[#6B6B6B] hover:text-black'
                      }`}
                    title="Like article"
                  >
                    <img
                      src="/assets/figma/icon_thumbs_up.svg"
                      alt=""
                      className={`w-4 h-4 transition-transform ${hasLiked ? 'scale-110' : ''}`}
                    />
                    <span className="text-[14px] font-parkinsans">{likesCount}</span>
                  </button>

                  {/* Vertical Divider */}
                  <div className="w-[1px] h-[18px] bg-[#BABABA]" />

                  {/* Thumbs Down */}
                  <button
                    type="button"
                    onClick={handleToggleDislike}
                    className={`flex items-center gap-1.5 transition-colors cursor-pointer ${hasDisliked ? 'text-red-700 font-semibold' : 'text-[#6B6B6B] hover:text-black'
                      }`}
                    title="Dislike article"
                  >
                    <span className="text-[14px] font-parkinsans">
                      {dislikesCount < 10 ? `0${dislikesCount}` : dislikesCount}
                    </span>
                    <img
                      src="/assets/figma/icon_thumbs_down.svg"
                      alt=""
                      className={`w-4 h-4 transition-transform ${hasDisliked ? 'scale-110' : ''}`}
                    />
                  </button>
                </div>

                {/* Share Button */}
                <button
                  type="button"
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: "AI Doesn't Replace Creativity. It Removes Friction.",
                        url: window.location.href,
                      });
                    } else {
                      navigator.clipboard.writeText(window.location.href);
                      alert('Article link copied to clipboard!');
                    }
                  }}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer text-[#6B6B6B] hover:text-black"
                  title="Share article"
                >
                  <img
                    src="/assets/figma/icon_share.svg"
                    alt="Share"
                    className="w-5 h-5 object-contain"
                  />
                </button>
              </div>
            </div>

            {/* Article Heading & Paragraphs */}
            <div className="pt-8 pb-6">
              <h2 className="text-[22px] font-semibold font-parkinsans text-black mb-4">
                About AI
              </h2>

              <p className="text-[16px] font-normal font-manrope text-[#6B7280] leading-[1.65] mb-6">
                Lorem ipsum dolor sit amet consectetur. Pellentesque sem elementum sit dui condimentum adipiscing dui arcu tristique. Odio diam ornare mi amet ut scelerisque. Tristique velit tempus sit aenean malesuada viverra eleifend. A interdum eget pellentesque aenean at hendrerit sapien pellentesque. Faucibus risus feugiat auctor aliquam lacus. Quam cras vel sed eget erat cum. Nascetur mi lacinia posuere vitae egestas quisque scelerisque. Non quam fermentum dolor sagittis gravida cursus amet rhoncus sem.
              </p>

              <p className="text-[16px] font-normal font-manrope text-[#6B7280] leading-[1.65] mb-8">
                Etiam morbi eleifend rhoncus felis vivamus amet mi convallis. Nibh habitant dignissim elementum purus a. Sit libero parturient dis quam. Dictum tortor posuere dolor in sed semper turpis. Aliquam et cras felis risus eget tempor interdum nam vestibulum. Sodales tempor velit metus ac commodo fusce. Consequat non odio sit aliquam nibh arcu magna libero sollicitudin.
              </p>

              <p className="text-[16px] font-normal font-manrope text-[#6B7280] leading-[1.65] pb-8 border-b border-[#E5E7EB]">
                Lorem ipsum dolor sit amet consectetur. Pellentesque sem elementum sit dui condimentum adipiscing dui arcu tristique. Odio diam ornare mi amet ut scelerisque. Tristique velit tempus sit aenean malesuada viverra eleifend. A interdum eget pellentesque aenean at hendrerit sapien pellentesque. Faucibus risus feugiat auctor aliquam lacus. Quam cras vel sed eget erat cum. Nascetur mi lacinia posuere vitae egestas quisque scelerisque. Non quam fermentum dolor sagittis gravida cursus amet rhoncus sem.
              </p>
            </div>

            {/* Comments Section */}
            <section className="pt-4">
              <h3 className="text-[22px] font-semibold font-parkinsans text-black mb-6">
                Comments
              </h3>

              {/* Add Comment Input Bar */}
              <form onSubmit={handleAddComment} className="flex items-center gap-3 sm:gap-4 mb-8">
                <div className="w-10 h-10 rounded-full border border-[#DE5E60] overflow-hidden flex-shrink-0">
                  <img
                    src="/assets/figma/blog_comment_user.png"
                    alt="User"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={newCommentText}
                    onChange={(e) => setNewCommentText(e.target.value)}
                    placeholder="Add Comment"
                    className="w-full bg-[#F6F6F6] border border-[#D9D9D9] rounded-[10px] px-4 py-2.5 text-[16px] font-manrope text-[#111827] placeholder:text-[#6B7280] focus:outline-none focus:border-[#AB3D4A] transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#646F70] to-[#0D0D0E] text-white text-[16px] font-semibold font-manrope hover:opacity-90 active:scale-[0.98] transition-all cursor-pointer flex-shrink-0"
                >
                  Send
                </button>
              </form>

              {/* Comment Cards List */}
              <div className="flex flex-col gap-5">
                {comments.map((comment) => (
                  <div
                    key={comment.id}
                    className="p-5 sm:p-6 rounded-[30px] border border-[#D9D9D9] bg-white flex flex-col gap-3 transition-shadow hover:shadow-sm"
                  >
                    {/* Comment Header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full border border-[#DE5E60] overflow-hidden flex-shrink-0">
                          <img
                            src={comment.avatar}
                            alt={comment.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[16px] font-bold font-parkinsans text-black">
                            {comment.name}
                          </span>
                          <span className="text-[12px] font-normal font-parkinsans text-[#6B6B6B]">
                            {comment.date}
                          </span>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => toggleFollowUser(comment.name)}
                        className="text-[16px] font-semibold font-manrope text-[#AB3D4A] hover:opacity-80 transition-opacity cursor-pointer"
                      >
                        {followedUsers[comment.name] ? 'Following' : 'Follow'}
                      </button>
                    </div>

                    {/* Comment Content */}
                    <p className="text-[16px] font-normal font-manrope text-[#6B7280] leading-relaxed">
                      {comment.text}
                      {comment.expanded && (
                        <span className="block mt-2">
                          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
                        </span>
                      )}
                    </p>

                    {/* View More Link */}
                    <div>
                      <button
                        type="button"
                        onClick={() => toggleCommentExpand(comment.id)}
                        className="text-[16px] font-normal font-manrope text-[#007AFF] underline hover:text-blue-700 transition-colors cursor-pointer"
                      >
                        {comment.expanded ? 'View Less' : 'View More'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </article>

          {/* ========================================================== */}
          {/* RIGHT COLUMN: Sidebar - More Blogs                         */}
          {/* ========================================================== */}
          <aside className="w-full lg:w-[38%] xl:w-[494px] flex-shrink-0">
            {/* Sidebar Title */}
            <h2 className="text-[22px] font-semibold font-parkinsans text-[#BBBBBB] mb-5">
              More Blogs
            </h2>

            {/* Sidebar Gray Container */}
            <div className="w-full bg-[#FAFAFA] rounded-[30px] p-6 sm:p-8 lg:p-10 flex flex-col gap-12 border border-gray-100">
              {sidebarCards.map((card) => (
                <div key={card.id} className="flex flex-col group cursor-pointer">
                  {/* Top Custom Illustration Container with Scoop & Button */}
                  <div className="relative w-full h-[220px] rounded-t-[28px] overflow-visible select-none">
                    {/* Scoop background container */}
                    <div className="w-full h-full rounded-[28px] overflow-hidden bg-gradient-to-b from-[#E6EDE8] to-[#FAFAFA] relative flex items-center justify-center">
                      <img
                        src="/assets/figma/blog_subtract_1.png"
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-95"
                      />
                      {/* 3D Illustration centered */}
                      <img
                        src={card.image}
                        alt=""
                        className="relative z-10 max-h-[190px] w-auto max-w-[85%] object-contain group-hover:scale-[1.04] transition-transform duration-300"
                      />
                    </div>

                    {/* Floating "Learn More" Pill Button in the scoop corner */}
                    <div className="absolute right-0 bottom-0 translate-y-1/2 z-20">
                      <button
                        type="button"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#F56F6A] to-[#C5445A] text-white font-manrope font-semibold text-[14px] shadow-sm hover:shadow-md hover:brightness-105 active:scale-95 transition-all cursor-pointer"
                      >
                        <span>Learn More</span>
                        <img
                          src="/assets/figma/icon_arrow_right.svg"
                          alt=""
                          className="w-4 h-4 object-contain brightness-0 invert"
                        />
                      </button>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="pt-6 pb-1 flex flex-col gap-3">
                    <h3 className="text-[16px] font-semibold font-parkinsans text-[#0D0D0D] leading-snug group-hover:text-[#AB3D4A] transition-colors">
                      {card.title}
                    </h3>

                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <div className="flex flex-col">
                        <span className="text-[12px] font-medium font-parkinsans text-[#111827]">
                          {card.author}
                        </span>
                        <span className="text-[12px] font-normal font-manrope text-[#111827]/70">
                          {card.meta}
                        </span>
                      </div>

                      <span className="px-2.5 py-1 rounded-[36px] border border-[#C2E3D1] text-[10px] font-normal font-manrope text-[#111827] tracking-wider uppercase bg-white/50">
                        {card.tag}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </main>

      {/* ============================================================ */}
      {/* 3. FOOTER SECTION                                             */}
      {/* ============================================================ */}
      <Footer
        activePage="blogs"
        onNavigateToHome={onNavigateToHome}
        onNavigateToWorks={onNavigateToWorks}
        onNavigateToContact={onNavigateToContact}
        onNavigateToWhatWeDo={onNavigateToWhatWeDo}
        onNavigateToBlogs={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        onNavigateToWhyEsperia={onNavigateToWhyEsperia}
      />
    </div>
  );
}
