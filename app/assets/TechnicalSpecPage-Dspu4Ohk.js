import{a as e}from"./rolldown-runtime-B0Z9INg1.js";import{o as t,r as n}from"./vendor-react-7UgxwFha.js";import{E as r,Et as i,Gt as a,Ot as o,Y as s,_t as c,at as l,jt as u,pt as d,z as f}from"./vendor-ui-BwjII98I.js";var p=e(t(),1),m=n(),h=()=>{let[e,t]=(0,p.useState)(`architecture`),[n,h]=(0,p.useState)(null),g=(e,t)=>{navigator.clipboard.writeText(t),h(e),setTimeout(()=>h(null),2e3)},_=()=>{let e=new Blob(["# ZTube — Complete Modern Full-Stack (Laravel 12 / PHP 8.4 & React 19.3 / Vite 8.3 / TypeScript 7.0) Technical Specification\n\n## 1. Modernized System Architecture & Latest Package Stack (2026 Edition)\n- **Frontend Runtime & Build Stack**:\n  - `react` & `react-dom` (`^19.0.1` / `@types/react ^19.3.0`) with Concurrent Suspense & Transitions\n  - `typescript` (`^7.0.2`) with strict type checking\n  - `vite` (`^8.3.0`) & `@vitejs/plugin-react` (`^6.1.1`)\n  - `tailwindcss` (`^4.3.3`) & `@tailwindcss/vite` (`^4.3.3`) CSS-first engine\n  - `@google/genai` (`^2.4.0`) Unified Google Gen AI SDK (using dynamic latest model aliases `gemini-flash-latest` & `gemini-pro-latest`)\n  - `firebase` (`^12.11.0`) Firestore real-time synchronization & Google OAuth\n  - `recharts` (`^3.10.1`) for View Velocity & engagement telemetry visualization\n  - `motion` (`^12.23.24`) & `lucide-react` (`^0.546.0`)\n- **Backend Tier**:\n  - Node.js / Express (`tsx ^4.21.0`) + PHP 8.4 / Laravel 12 REST API reference architecture\n- **Core Platform Capabilities**:\n  - **Web Clipboard API 'Copy Link' on Every VideoCard**: One-click direct URL sharing (`?watch=<videoId>`) with instant visual confirmation and fallback support.\n  - **Playlists & Optional Watch History**: Create public/private playlists, quick-add videos directly from any VideoCard or Watch page, share playlist links, and toggle Optional Watch History ON/OFF (pause or clear history anytime).\n  - **Video Categorization & Real-Time Upload Progress**: Assign categories (`Gaming`, `Tutorials`, `Music`, `Engineering`, `Hardware`, `Travel`, `Culinary`, `Design`, `Science`, or custom categories) with category filtering on Home & Profile pages, plus a real-time 0%–100% upload progress bar with completion/failure banners.\n  - **Timeline Hover-Preview Thumbnail**: Hovering over any video card's progress bar displays a floating static frame preview, timestamp, and chapter title.\n  - **Global Player Color Themes & Dynamic Background**: Neon Green, Sunset Red, and Midnight Blue player themes; optional 2–5 Hz dominant-color frame sampling with 500ms+ transitions, opt-in Audio-Reactive mode, fixed-contrast overlays, and automatic pause/disable on pause, off-screen, background tab, low-end hardware, battery saver, or `prefers-reduced-motion`.\n  - **Identity, Security & Anti-Abuse Subscriber Credits**: Server-side random UUIDv7+ vault with versioned `HMAC-SHA-256(UUIDv7+, server_secret)` public IDs (no raw SHA-512), MFA-enforced least-privilege RBAC Admin Console with audit logs, and auto-claimed +1 creator credits with anti-abuse verification (email + Google sign-in, device fingerprint + IP rate limits, 30s dwell time + interaction, daily caps, no self-crediting, and clawback ledger).\n  - **Gemini Identification Guardrails**: Uses latest Gemini models to summarize videos and identify people strictly from creator cast/credits, IMDb/Wikidata/TMDB, public figures, or opted-in ZTube users (no private facial recognition), labeled `AI-generated` with source, confidence %, and dispute/removal controls.\n\n## 2. Color Scheme & Typography Plan\n- **Primary Brand Accent**: YouTube Crimson (`#FF0033`), Neon Green (`#58F01B`), & Midnight Sky (`#38BDF8`)\n- **Dark Canvas**: Obsidian (`#0F0F0F`), Elevated Surface (`#141417`), Hairline Border (`#27272A`)\n- **Light Canvas**: Crisp Alabaster (`#F8FAFC`), Surface (`#FFFFFF`), Slate Text (`#0F172A`)\n- **Typography**:\n  - Display Headings: `Syne` (600/700/800)\n  - UI & Body Prose: `Plus Jakarta Sans` (400/500/600/700)\n  - Telemetry, Timestamps & View Counts: `JetBrains Mono` (`tabular-nums`)\n\n## 3. 3-Column YouTube Grid Advertisement Placement Logic\n- **Row 1, Column 1 (Index 0)**: Google AdSense Ad replaces first video on top-left\n- **Row 2, Column 2 (Index 4)**: Sponsored Ad placed in the middle of the second row\n- **Row 3, Column 3 (Index 8)**: Google AdSense Ad on the right of the third row\n- Automatically disabled for Base (20 Cr/mo) and Plus (50 Cr/mo) subscribers.\n\n## 4. cPanel & Cloud Production Deployment Guide\n1. Upload the Laravel 12 project root to `/home/username/ztube_core` (outside `public_html`).\n2. Build the Vite 8.3 + React 19 bundle (`npm run build`) and copy `dist/` into `/home/username/public_html`.\n3. Configure MySQL 8.4 / PostgreSQL 17 database and run `php artisan migrate --force`.\n"],{type:`text/markdown;charset=utf-8`}),t=URL.createObjectURL(e),n=document.createElement(`a`);n.href=t,n.download=`ZTube_Laravel_React_Technical_Specification.md`,n.click(),URL.revokeObjectURL(t)},v=`<?php
// database/migrations/2026_10_05_000001_create_ztube_core_tables.php
use Illuminate\\Database\\Migrations\\Migration;
use Illuminate\\Database\\Schema\\Blueprint;
use Illuminate\\Support\\Facades\\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('uid', 128)->unique();
            $table->string('display_name', 100);
            $table->string('email', 150)->unique();
            $table->string('photo_url', 500)->nullable();
            $table->enum('role', ['user', 'admin'])->default('user');
            $table->unsignedBigInteger('subscribers_count')->default(0);
            $table->timestamps();
        });

        Schema::create('videos', function (Blueprint $table) {
            $table->id();
            $table->string('public_id', 64)->unique();
            $table->foreignId('user_id')->constrained('users')->cascadeOnDelete();
            $table->string('youtube_id', 32)->nullable()->index();
            $table->string('title', 160);
            $table->text('description');
            $table->string('thumbnail_url', 600);
            $table->string('video_url', 600);
            $table->string('category', 64)->index();
            $table->json('tags')->nullable();
            $table->string('duration', 20)->default('00:00');
            $table->string('location_tag', 150)->nullable();
            $table->unsignedBigInteger('views')->default(0);
            $table->unsignedBigInteger('likes')->default(0);
            $table->timestamps();
        });

        Schema::create('comments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('video_id')->constrained('videos')->cascadeOnDelete();
            $table->foreignId('user_id')->constrained('users')->cascadeOnDelete();
            $table->string('text', 1500);
            $table->unsignedInteger('likes')->default(0);
            $table->timestamps();
        });

        Schema::create('subscriptions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('subscriber_id')->constrained('users')->cascadeOnDelete();
            $table->foreignId('channel_id')->constrained('users')->cascadeOnDelete();
            $table->timestamps();
            $table->unique(['subscriber_id', 'channel_id']);
        });

        Schema::create('ad_placements', function (Blueprint $table) {
            $table->id();
            $table->enum('slot_key', ['row1_left_adsense', 'row2_middle_sponsored', 'row3_right_adsense'])->unique();
            $table->boolean('is_active')->default(true);
            $table->string('headline', 120);
            $table->string('sponsor_label', 80);
            $table->string('cta_url', 300);
            $table->unsignedBigInteger('impressions')->default(0);
            $table->unsignedBigInteger('clicks')->default(0);
            $table->timestamps();
        });

        Schema::create('api_keys', function (Blueprint $table) {
            $table->id();
            $table->string('provider', 50)->default('youtube_data_v3');
            $table->text('encrypted_key');
            $table->string('sync_channel_handle', 100)->nullable();
            $table->boolean('auto_sync_enabled')->default(true);
            $table->timestamp('last_synced_at')->nullable();
            $table->timestamps();
        });
    }
};`,y=`<?php
// app/Http/Controllers/Api/VideoSyncController.php
namespace App\\Http\\Controllers\\Api;

use App\\Http\\Controllers\\Controller;
use App\\Models\\Video;
use App\\Models\\ApiKey;
use Illuminate\\Http\\Request;
use Illuminate\\Support\\Facades\\Http;
use Illuminate\\Support\\Str;

class VideoSyncController extends Controller
{
    /**
     * POST /api/v1/videos/youtube-sync
     * Automatically syncs video title, description, thumbnail, tags, and ISO-8601 duration from YouTube Data API v3
     */
    public function syncFromYouTube(Request $request)
    {
        $validated = $request->validate([
            'youtube_url_or_id' => 'required|string|max:255',
        ]);

        preg_match('/(?:v=|youtu\\.be\\/|embed\\/)([a-zA-Z0-9_-]{11})/', $validated['youtube_url_or_id'], $matches);
        $youtubeId = $matches[1] ?? trim($validated['youtube_url_or_id']);

        $apiKeyRecord = ApiKey::where('provider', 'youtube_data_v3')->firstOrFail();
        $apiKey = decrypt($apiKeyRecord->encrypted_key);

        $response = Http::get('https://www.googleapis.com/youtube/v3/videos', [
            'part' => 'snippet,contentDetails,statistics',
            'id'   => $youtubeId,
            'key'  => $apiKey,
        ]);

        if ($response->failed() || empty($response->json('items'))) {
            return response()->json(['message' => 'YouTube video not found or quota exceeded'], 404);
        }

        $item = $response->json('items.0');
        $snippet = $item['snippet'];

        $video = Video::updateOrCreate(
            ['youtube_id' => $youtubeId],
            [
                'public_id'     => 'vid_' . Str::lower(Str::random(10)),
                'user_id'       => $request->user()->id,
                'title'         => Str::limit($snippet['title'], 155, ''),
                'description'   => Str::limit($snippet['description'] ?? '', 3900, ''),
                'thumbnail_url' => $snippet['thumbnails']['maxres']['url']
                                   ?? $snippet['thumbnails']['high']['url'],
                'video_url'     => "https://www.youtube.com/embed/{$youtubeId}",
                'category'      => 'Engineering',
                'tags'          => array_slice($snippet['tags'] ?? ['youtube', 'synced'], 0, 10),
                'duration'      => $this->formatIsoDuration($item['contentDetails']['duration'] ?? 'PT12M30S'),
                'views'         => (int) ($item['statistics']['viewCount'] ?? 1),
                'likes'         => (int) ($item['statistics']['likeCount'] ?? 1),
            ]
        );

        return response()->json(['status' => 'synced', 'video' => $video], 201);
    }
}`,b=`# /home/username/public_html/.htaccess (cPanel Apache Hybrid Routing for Laravel API + React SPA)
<IfModule mod_rewrite.c>
    <IfModule mod_negotiation.c>
        Options -MultiViews -Indexes
    </IfModule>

    RewriteEngine On

    # Forward Authorization Headers to PHP Laravel Sanctum / Bearer OAuth
    RewriteCond %{HTTP:Authorization} .
    RewriteRule .* - [E=HTTP_AUTHORIZATION:%{HTTP:Authorization}]

    # Route /api/* requests to Laravel front controller
    RewriteCond %{REQUEST_URI} ^/api/ [NC]
    RewriteRule ^ index.php [L]

    # Serve existing static assets (React JS/CSS bundles, thumbnails) directly
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteRule ^ index.html [L]
</IfModule>`;return(0,m.jsxs)(`div`,{className:`max-w-[1440px] mx-auto px-4 lg:px-6 py-6 space-y-6`,children:[(0,m.jsxs)(`div`,{className:`flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-neutral-200 dark:border-neutral-800`,children:[(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`p`,{className:`text-xs font-mono text-[#FF0033] font-semibold`,children:`MODERNIZED 2026 ENGINEERING HANDOFF & ARCHITECTURE SPECIFICATION`}),(0,m.jsx)(`h1`,{className:`text-2xl font-bold text-neutral-900 dark:text-white mt-0.5`,children:`Laravel 12 + React 19.3 + Vite 8.3 + TypeScript 7.0 Technical Specification`}),(0,m.jsx)(`p`,{className:`text-xs text-neutral-500 mt-1`,children:`Updated with Web Clipboard API Copy Link, Playlists, Optional Watch History, Video Categorization, Real-Time Upload Progress, Hover Thumbnail Scrubbing, Dynamic Background, and UUIDv7+ HMAC Security`})]}),(0,m.jsxs)(`button`,{onClick:_,className:`px-4 py-2 rounded-lg text-xs font-semibold bg-[#FF0033] hover:bg-[#D9002B] text-white flex items-center gap-1.5 cursor-pointer`,children:[(0,m.jsx)(i,{className:`w-3.5 h-3.5`}),(0,m.jsx)(`span`,{children:`Download Spec (.MD)`})]})]}),(0,m.jsx)(`div`,{className:`flex flex-wrap items-center gap-1 p-1 rounded-xl bg-neutral-100 dark:bg-[#141417] border border-neutral-200 dark:border-neutral-800 w-fit`,children:[{id:`architecture`,label:`1. System Architecture & Design System`,icon:(0,m.jsx)(l,{className:`w-3.5 h-3.5`})},{id:`wireframes`,label:`2. UI Wireframes & UX Flowcharts`,icon:(0,m.jsx)(f,{className:`w-3.5 h-3.5`})},{id:`schema`,label:`3. Database Schema & ER Diagram`,icon:(0,m.jsx)(o,{className:`w-3.5 h-3.5`})},{id:`laravel-api`,label:`4. Laravel Backend API & Code`,icon:(0,m.jsx)(r,{className:`w-3.5 h-3.5`})},{id:`ad-engine`,label:`5. Ad Placement Spec (3-Row Grid)`,icon:(0,m.jsx)(s,{className:`w-3.5 h-3.5`})},{id:`cpanel-deploy`,label:`6. cPanel Deployment Guide`,icon:(0,m.jsx)(d,{className:`w-3.5 h-3.5`})}].map(n=>(0,m.jsxs)(`button`,{onClick:()=>t(n.id),className:`px-3.5 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${e===n.id?`bg-white dark:bg-[#27272A] text-neutral-900 dark:text-white shadow-xs`:`text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white`}`,children:[n.icon,(0,m.jsx)(`span`,{children:n.label})]},n.id))}),e===`architecture`&&(0,m.jsxs)(`div`,{className:`space-y-6`,children:[(0,m.jsxs)(`div`,{className:`grid grid-cols-1 lg:grid-cols-3 gap-5`,children:[(0,m.jsxs)(`div`,{className:`p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#141417] space-y-3`,children:[(0,m.jsx)(`h2`,{className:`text-sm font-bold text-neutral-900 dark:text-white`,children:`Frontend Tier (React 19 + Context API)`}),(0,m.jsxs)(`p`,{className:`text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed`,children:[`Modular functional React components powered by `,(0,m.jsx)(`code`,{className:`font-mono`,children:`AppContext`}),` hooks. Manages SPA routing (Home, Trending, Subscriptions, Library, Watch, Profile, Admin), dark/light mode, 3-tier accessibility text scaling, and 3-column AdSense/Sponsored grid injection.`]})]}),(0,m.jsxs)(`div`,{className:`p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#141417] space-y-3`,children:[(0,m.jsx)(`h2`,{className:`text-sm font-bold text-neutral-900 dark:text-white`,children:`Backend API Tier (Laravel 11 + Express Runtime)`}),(0,m.jsx)(`p`,{className:`text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed`,children:`RESTful JSON controllers handling YouTube Data API v3 metadata extraction, ISO-8601 duration parsing, Sanctum/Firebase JWT validation, server-side Gemini 3.1 Pro video chaptering, and Google Search & Maps grounding.`})]}),(0,m.jsxs)(`div`,{className:`p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#141417] space-y-3`,children:[(0,m.jsx)(`h2`,{className:`text-sm font-bold text-neutral-900 dark:text-white`,children:`Persistence, Playlists & Privacy-First History`}),(0,m.jsxs)(`p`,{className:`text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed`,children:[`Server-side UUIDv7+ vault with versioned `,(0,m.jsx)(`code`,{className:`font-mono`,children:`HMAC-SHA-256`}),` public IDs, custom user Playlists (`,(0,m.jsx)(`code`,{className:`font-mono`,children:`playlists`}),` & `,(0,m.jsx)(`code`,{className:`font-mono`,children:`playlist_videos`}),`), Optional Watch History with pause/clear controls, and Web Clipboard API direct link sharing on every `,(0,m.jsx)(`code`,{className:`font-mono`,children:`VideoCard`}),`.`]})]})]}),(0,m.jsxs)(`div`,{className:`p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#141417] space-y-4`,children:[(0,m.jsxs)(`div`,{className:`flex flex-wrap items-center justify-between gap-2`,children:[(0,m.jsx)(`h2`,{className:`text-base font-bold text-neutral-900 dark:text-white`,children:`Modernized 2026 Package Versions & Platform Capabilities`}),(0,m.jsx)(`span`,{className:`px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-emerald-500/10 text-emerald-500 border border-emerald-500/30`,children:`Latest Stack Verified`})]}),(0,m.jsx)(`div`,{className:`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 text-xs`,children:[{pkg:`React 19.3 + Vite 8.3`,desc:`Concurrent rendering, Suspense code-splitting, and instant ESBuild/Rollup bundling.`},{pkg:`TypeScript 7.0.2 + Tailwind 4.3.3`,desc:`Strict type safety and zero-runtime CSS-first @tailwindcss/vite styling.`},{pkg:`@google/genai 2.4.0 + Firebase 12.11`,desc:`Dynamic latest Gemini models (gemini-flash-latest / gemini-pro-latest) & Firestore sync.`},{pkg:`Recharts 3.10.1 + Motion 12.23`,desc:`View Velocity analytics charts, spring physics, and 60fps UI transitions.`}].map(e=>(0,m.jsxs)(`div`,{className:`p-3.5 rounded-xl bg-neutral-50 dark:bg-[#0F0F0F] border border-neutral-200 dark:border-neutral-800 space-y-1`,children:[(0,m.jsx)(`div`,{className:`font-mono font-bold text-neutral-900 dark:text-white`,children:e.pkg}),(0,m.jsx)(`p`,{className:`text-[11px] text-neutral-500 leading-relaxed`,children:e.desc})]},e.pkg))})]}),(0,m.jsxs)(`div`,{className:`p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#141417] space-y-4`,children:[(0,m.jsx)(`h2`,{className:`text-base font-bold text-neutral-900 dark:text-white`,children:`Color Scheme & Typography System (60-30-10 Distribution)`}),(0,m.jsx)(`div`,{className:`grid grid-cols-2 sm:grid-cols-6 gap-3 text-xs`,children:[{name:`Obsidian Canvas (60%)`,hex:`#0F0F0F`,bg:`bg-[#0F0F0F] text-white border border-neutral-700`},{name:`Elevated Surface (30%)`,hex:`#141417`,bg:`bg-[#141417] text-white border border-neutral-700`},{name:`Alabaster Light`,hex:`#F8FAFC`,bg:`bg-[#F8FAFC] text-neutral-900 border border-neutral-300`},{name:`YouTube Crimson (10%)`,hex:`#FF0033`,bg:`bg-[#FF0033] text-white`},{name:`Sponsored Amber`,hex:`#F59E0B`,bg:`bg-[#F59E0B] text-neutral-950`},{name:`Sync Emerald`,hex:`#10B981`,bg:`bg-[#10B981] text-neutral-950`}].map(e=>(0,m.jsxs)(`div`,{className:`p-3 rounded-lg ${e.bg} space-y-2`,children:[(0,m.jsx)(`div`,{className:`font-mono font-bold`,children:e.hex}),(0,m.jsx)(`div`,{className:`text-[11px] opacity-90`,children:e.name})]},e.hex))})]})]}),e===`wireframes`&&(0,m.jsxs)(`div`,{className:`space-y-6`,children:[(0,m.jsxs)(`div`,{className:`grid grid-cols-1 lg:grid-cols-2 gap-6`,children:[(0,m.jsxs)(`div`,{className:`p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#141417] space-y-3`,children:[(0,m.jsx)(`h3`,{className:`text-sm font-bold text-neutral-900 dark:text-white`,children:`Wireframe 1: Homepage Feed & 3-Column Ad Matrix`}),(0,m.jsx)(`div`,{className:`p-4 rounded-lg bg-neutral-950 text-neutral-300 font-mono text-[11px] leading-relaxed overflow-x-auto`,children:(0,m.jsx)(`pre`,{children:`+-----------------------------------------------------------------------+
| ZTube     [Home] [Trending] [Subscriptions] [Library]   [+ Upload] (U)|
+---------------+-------------------------------------------------------+
| [Search...]   | [All] [Engineering] [Hardware] [Travel] [Culinary]    |
|               +-----------------+-----------------+-------------------+
| > Home Feed   | [ADSENSE SLOT 1]| [VIDEO CARD 1]  | [VIDEO CARD 2]    |
| > Trending    | Row 1, Top-Left | 16:9 Thumbnail  | 16:9 Thumbnail    |
| > Subscript.  +-----------------+-----------------+-------------------+
| > Library     | [VIDEO CARD 3]  | [SPONSORED AD 2]| [VIDEO CARD 4]    |
| > Admin Panel | 16:9 Thumbnail  | Row 2, Middle   | 16:9 Thumbnail    |
|               +-----------------+-----------------+-------------------+
| Theme: [Dark] | [VIDEO CARD 5]  | [VIDEO CARD 6]  | [ADSENSE SLOT 3]  |
| Text: [A-|A+] | 16:9 Thumbnail  | 16:9 Thumbnail  | Row 3, Right      |
+---------------+-----------------+-----------------+-------------------+`})})]}),(0,m.jsxs)(`div`,{className:`p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#141417] space-y-3`,children:[(0,m.jsx)(`h3`,{className:`text-sm font-bold text-neutral-900 dark:text-white`,children:`Wireframe 2: Video Watch Page & AI/Gmail Hub`}),(0,m.jsx)(`div`,{className:`p-4 rounded-lg bg-neutral-950 text-neutral-300 font-mono text-[11px] leading-relaxed overflow-x-auto`,children:(0,m.jsx)(`pre`,{children:`+-----------------------------------------------+-----------------------+
| [ 16:9 HTML5 / YOUTUBE EMBED VIDEO PLAYER   ] | UP NEXT SIDEBAR       |
| [ Play/Pause | Timeline | Theater | 4K      ] | +-------------------+ |
+-----------------------------------------------+ | [Thumb] Video A   | |
| Video Title (Syne Bold)                       | | [Thumb] Video B   | |
| (Avatar) Creator Name [Subscribe] [Like][Save]| | [Thumb] Video C   | |
+-----------------------------------------------+ | [Thumb] Video D   | |
| GEMINI INTELLIGENCE & WORKSPACE HUB           | +-------------------+ |
| [Gemini Pro Chapters] [Search] [Maps] [Gmail] |                       |
| > Timestamped Takeaways & Grounded Citations  |                       |
+-----------------------------------------------+                       |
| COMMENTS SYSTEM (Real-Time + Flash Polish)    |                       |
| [Add Comment...] [Polish with AI] [Post]      |                       |
+-----------------------------------------------+-----------------------+`})})]})]}),(0,m.jsxs)(`div`,{className:`p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#141417] space-y-3`,children:[(0,m.jsxs)(`h3`,{className:`text-sm font-bold text-neutral-900 dark:text-white flex items-center gap-2`,children:[(0,m.jsx)(c,{className:`w-4 h-4 text-[#FF0033]`}),(0,m.jsx)(`span`,{children:`UX Journey Flowchart: Video Import, AI Analysis & Gmail Share`})]}),(0,m.jsx)(`div`,{className:`p-4 rounded-lg bg-neutral-950 text-neutral-300 font-mono text-xs overflow-x-auto`,children:(0,m.jsx)(`pre`,{children:`[User Clicks "Upload / Sync"] ---> (Paste YouTube URL/ID) ---> [POST /api/youtube/sync]
                                                                        |
   +--------------------------------------------------------------------+
   v
[Fetches Title, Author, Thumbnail + Gemini 3.1 Flash Lite Tags/Summary]
   |
   v
[Persists to Firestore / MySQL] ---> [Appears in 3-Column Home Grid Alongside Ad Slots]
   |
   v
[Viewer Opens Watch Page] ---> [1. Runs Gemini 3.1 Pro Video Analysis]
                          ---> [2. Verifies Facts & Locations via Google Search & Maps Grounding]
                          ---> [3. Shares Digest via Gmail API with Mandatory Confirmation Modal]`})})]})]}),e===`schema`&&(0,m.jsx)(`div`,{className:`space-y-4`,children:(0,m.jsxs)(`div`,{className:`p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#141417] space-y-3`,children:[(0,m.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,m.jsx)(`h2`,{className:`text-sm font-bold text-neutral-900 dark:text-white`,children:`Laravel 11 Database Schema Migration (users, videos, comments, subscriptions, ad_placements, api_keys)`}),(0,m.jsxs)(`button`,{onClick:()=>g(`migration`,v),className:`px-3 py-1 rounded bg-neutral-100 dark:bg-[#27272A] text-xs font-medium flex items-center gap-1 cursor-pointer`,children:[n===`migration`?(0,m.jsx)(a,{className:`w-3.5 h-3.5 text-emerald-500`}):(0,m.jsx)(u,{className:`w-3.5 h-3.5`}),(0,m.jsx)(`span`,{children:n===`migration`?`Copied`:`Copy Migration`})]})]}),(0,m.jsx)(`pre`,{className:`p-4 rounded-lg bg-neutral-950 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed`,children:v})]})}),e===`laravel-api`&&(0,m.jsxs)(`div`,{className:`space-y-5`,children:[(0,m.jsx)(`div`,{className:`rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#141417] overflow-hidden`,children:(0,m.jsxs)(`table`,{className:`w-full text-left border-collapse text-xs`,children:[(0,m.jsx)(`thead`,{children:(0,m.jsxs)(`tr`,{className:`border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#18181B] text-neutral-500`,children:[(0,m.jsx)(`th`,{className:`py-3 px-4`,children:`Method & Endpoint`}),(0,m.jsx)(`th`,{className:`py-3 px-4`,children:`Controller Action`}),(0,m.jsx)(`th`,{className:`py-3 px-4`,children:`Request Payload / Business Logic`})]})}),(0,m.jsxs)(`tbody`,{className:`divide-y divide-neutral-200 dark:divide-neutral-800 font-mono`,children:[(0,m.jsxs)(`tr`,{children:[(0,m.jsx)(`td`,{className:`py-3 px-4 text-emerald-500 font-semibold`,children:`GET /api/v1/videos`}),(0,m.jsx)(`td`,{className:`py-3 px-4`,children:`VideoController@index`}),(0,m.jsx)(`td`,{className:`py-3 px-4 font-sans text-neutral-600 dark:text-neutral-300`,children:`Paginated video feed filtered by category, search query, or trending velocity.`})]}),(0,m.jsxs)(`tr`,{children:[(0,m.jsx)(`td`,{className:`py-3 px-4 text-sky-500 font-semibold`,children:`POST /api/v1/videos/youtube-sync`}),(0,m.jsx)(`td`,{className:`py-3 px-4`,children:`VideoSyncController@syncFromYouTube`}),(0,m.jsx)(`td`,{className:`py-3 px-4 font-sans text-neutral-600 dark:text-neutral-300`,children:`Accepts YouTube URL/ID, queries YouTube Data API v3 + Gemini enrichment, and persists record.`})]}),(0,m.jsxs)(`tr`,{children:[(0,m.jsxs)(`td`,{className:`py-3 px-4 text-sky-500 font-semibold`,children:[`POST /api/v1/videos/`,`{id}`,`/comments`]}),(0,m.jsx)(`td`,{className:`py-3 px-4`,children:`CommentController@store`}),(0,m.jsx)(`td`,{className:`py-3 px-4 font-sans text-neutral-600 dark:text-neutral-300`,children:`Validates Sanctum/Firebase auth token and stores viewer comment under video.`})]}),(0,m.jsxs)(`tr`,{children:[(0,m.jsx)(`td`,{className:`py-3 px-4 text-amber-500 font-semibold`,children:`PUT /api/v1/admin/ads`}),(0,m.jsx)(`td`,{className:`py-3 px-4`,children:`AdminAdController@update`}),(0,m.jsx)(`td`,{className:`py-3 px-4 font-sans text-neutral-600 dark:text-neutral-300`,children:`Updates active status, sponsor copy, and target URLs for the 3 grid ad slots.`})]})]})]})}),(0,m.jsxs)(`div`,{className:`p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#141417] space-y-3`,children:[(0,m.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,m.jsx)(`h3`,{className:`text-sm font-bold text-neutral-900 dark:text-white`,children:`Sample Laravel 11 Controller: YouTube Data API v3 Auto-Sync`}),(0,m.jsxs)(`button`,{onClick:()=>g(`controller`,y),className:`px-3 py-1 rounded bg-neutral-100 dark:bg-[#27272A] text-xs font-medium flex items-center gap-1 cursor-pointer`,children:[n===`controller`?(0,m.jsx)(a,{className:`w-3.5 h-3.5 text-emerald-500`}):(0,m.jsx)(u,{className:`w-3.5 h-3.5`}),(0,m.jsx)(`span`,{children:n===`controller`?`Copied`:`Copy PHP Code`})]})]}),(0,m.jsx)(`pre`,{className:`p-4 rounded-lg bg-neutral-950 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed`,children:y})]})]}),e===`ad-engine`&&(0,m.jsxs)(`div`,{className:`p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#141417] space-y-4`,children:[(0,m.jsx)(`h2`,{className:`text-base font-bold text-neutral-900 dark:text-white`,children:`Deterministic 3-Column Grid Advertisement Injection Algorithm`}),(0,m.jsxs)(`p`,{className:`text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed`,children:[`To preserve a balanced 3-item-per-row YouTube grid without displacing organic videos into orphan cells, the frontend feed engine (`,(0,m.jsx)(`code`,{className:`font-mono`,children:`buildYoutubeGridWithAds`}),`) iterates through output grid indices `,(0,m.jsx)(`code`,{className:`font-mono`,children:`0..N`}),` and injects enabled ad slots at deterministic coordinates while advancing the organic video cursor only on non-ad cells:`]}),(0,m.jsxs)(`ul`,{className:`list-disc list-inside text-xs text-neutral-700 dark:text-neutral-300 space-y-2`,children:[(0,m.jsxs)(`li`,{children:[(0,m.jsx)(`strong`,{children:`Grid Index 0 (Row 1, Column 1 — Top-Left)`}),`: Injects Google AdSense Unit #1 when `,(0,m.jsx)(`code`,{className:`font-mono`,children:`adRow1LeftActive === true`}),`. Organic videos 1 and 2 occupy Row 1, Columns 2 and 3.`]}),(0,m.jsxs)(`li`,{children:[(0,m.jsx)(`strong`,{children:`Grid Index 4 (Row 2, Column 2 — Middle)`}),`: Injects Direct Sponsored Campaign Unit #2 when `,(0,m.jsx)(`code`,{className:`font-mono`,children:`adRow2MiddleActive === true`}),`. Organic videos occupy Row 2, Columns 1 and 3.`]}),(0,m.jsxs)(`li`,{children:[(0,m.jsx)(`strong`,{children:`Grid Index 8 (Row 3, Column 3 — Right)`}),`: Injects Google AdSense Unit #3 when `,(0,m.jsx)(`code`,{className:`font-mono`,children:`adRow3RightActive === true`}),`. Organic videos occupy Row 3, Columns 1 and 2.`]})]})]}),e===`cpanel-deploy`&&(0,m.jsx)(`div`,{className:`space-y-5`,children:(0,m.jsxs)(`div`,{className:`p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#141417] space-y-4`,children:[(0,m.jsx)(`h2`,{className:`text-base font-bold text-neutral-900 dark:text-white`,children:`Step-by-Step cPanel Shared / Cloud Hosting Deployment Guide`}),(0,m.jsxs)(`ol`,{className:`list-decimal list-inside space-y-2.5 text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed`,children:[(0,m.jsxs)(`li`,{children:[(0,m.jsx)(`strong`,{children:`Directory Isolation`}),`: Upload the Laravel 11 backend repository to `,(0,m.jsx)(`code`,{className:`font-mono`,children:`/home/cpanel_user/ztube_core`}),` so that `,(0,m.jsx)(`code`,{className:`font-mono`,children:`.env`}),` and `,(0,m.jsx)(`code`,{className:`font-mono`,children:`vendor/`}),` remain strictly above the public web root.`]}),(0,m.jsxs)(`li`,{children:[(0,m.jsx)(`strong`,{children:`Frontend Production Build`}),`: Run `,(0,m.jsx)(`code`,{className:`font-mono`,children:`npm run build`}),` locally or via cPanel Terminal and copy the compiled `,(0,m.jsx)(`code`,{className:`font-mono`,children:`dist/*`}),` files plus Laravel's `,(0,m.jsx)(`code`,{className:`font-mono`,children:`public/index.php`}),` into `,(0,m.jsx)(`code`,{className:`font-mono`,children:`/home/cpanel_user/public_html/`}),`.`]}),(0,m.jsxs)(`li`,{children:[(0,m.jsx)(`strong`,{children:`Database & PHP 8.3 Setup`}),`: In `,(0,m.jsx)(`strong`,{children:`cPanel > MultiPHP Manager`}),`, select PHP 8.3 and enable `,(0,m.jsx)(`code`,{className:`font-mono`,children:`pdo_mysql`}),`, `,(0,m.jsx)(`code`,{className:`font-mono`,children:`mbstring`}),`, `,(0,m.jsx)(`code`,{className:`font-mono`,children:`openssl`}),`, and `,(0,m.jsx)(`code`,{className:`font-mono`,children:`curl`}),`. Create the database in `,(0,m.jsx)(`strong`,{children:`MySQL® Databases`}),` and run `,(0,m.jsx)(`code`,{className:`font-mono`,children:`php artisan migrate --seed --force`}),`.`]}),(0,m.jsxs)(`li`,{children:[(0,m.jsx)(`strong`,{children:`Automated YouTube Sync Cron Job`}),`: In `,(0,m.jsx)(`strong`,{children:`cPanel > Cron Jobs`}),`, add a 1-minute scheduler entry: `,(0,m.jsx)(`code`,{className:`font-mono`,children:`* * * * * /usr/local/bin/php /home/cpanel_user/ztube_core/artisan schedule:run >> /dev/null 2>&1`}),`.`]})]}),(0,m.jsxs)(`div`,{className:`pt-2`,children:[(0,m.jsxs)(`div`,{className:`flex items-center justify-between mb-2`,children:[(0,m.jsx)(`span`,{className:`text-xs font-semibold text-neutral-900 dark:text-white`,children:`Production cPanel .htaccess Configuration`}),(0,m.jsxs)(`button`,{onClick:()=>g(`htaccess`,b),className:`px-3 py-1 rounded bg-neutral-100 dark:bg-[#27272A] text-xs font-medium flex items-center gap-1 cursor-pointer`,children:[n===`htaccess`?(0,m.jsx)(a,{className:`w-3.5 h-3.5 text-emerald-500`}):(0,m.jsx)(u,{className:`w-3.5 h-3.5`}),(0,m.jsx)(`span`,{children:n===`htaccess`?`Copied`:`Copy .htaccess`})]})]}),(0,m.jsx)(`pre`,{className:`p-4 rounded-lg bg-neutral-950 text-neutral-200 font-mono text-xs overflow-x-auto`,children:b})]})]})})]})};export{h as TechnicalSpecPage};