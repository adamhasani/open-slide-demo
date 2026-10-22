import type { DesignSystem, Page, SlideMeta } from '@open-slide/core';

export const design: DesignSystem = {
  palette: { bg: '#0A0F1D', text: '#FFFFFF', accent: '#38BDF8' },
  fonts: {
    display: '"Geist Variable", Geist, -apple-system, BlinkMacSystemFont, "Inter", sans-serif',
    body: '"Geist Variable", Geist, -apple-system, BlinkMacSystemFont, "Inter", sans-serif',
  },
  typeScale: { hero: 110, body: 26 },
  radius: 14,
};

export const meta: SlideMeta = {
  title: 'Autonomous AI Agents',
  createdAt: '2026-10-22T01:20:39.499Z',
};

const c = {
  bg: '#0A0F1D',
  card: '#151E32',
  cardBorder: '#22314E',
  cyan: '#06B6D4',
  blue: '#38BDF8',
  green: '#10B981',
  violet: '#A78BFA',
  amber: '#FBBF24',
  red: '#F87171',
  white: '#FFFFFF',
  light: '#F1F5F9',
  muted: '#94A3B8',
  dim: '#64748B',
};

// ==========================================
// SLIDE 1: COVER
// ==========================================
const CoverSlide: Page = () => (
  <div
    style={{
      width: '100%',
      height: '100%',
      backgroundColor: c.bg,
      padding: '100px 120px',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      position: 'relative',
      fontFamily: 'var(--osd-font-body)',
      color: c.white,
    }}
  >
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div
          style={{
            display: 'inline-block',
            padding: '6px 18px',
            backgroundColor: '#1E293B',
            border: `1.5px solid ${c.cyan}`,
            borderRadius: '9999px',
            color: c.cyan,
            fontSize: '15px',
            fontWeight: 700,
            letterSpacing: '0.08em',
            fontFamily: 'monospace',
          }}
        >
          SYSTEM ARCHITECTURE 2026
        </div>
      </div>

      <div style={{ display: 'flex', gap: '28px', alignItems: 'flex-start' }}>
        <div
          style={{
            width: '8px',
            height: '140px',
            backgroundColor: c.cyan,
            borderRadius: '4px',
            marginTop: '8px',
          }}
        />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <h1
            style={{
              fontSize: '84px',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              margin: 0,
              color: c.white,
            }}
          >
            AUTONOMOUS AI AGENTS
          </h1>
          <p
            style={{
              fontSize: '28px',
              fontWeight: 500,
              color: c.blue,
              margin: 0,
              lineHeight: 1.4,
            }}
          >
            Arsitektur Sistem, Multi-Agent Orchestration & Eksekusi Otomatis Berbasis Tooling Nyata
          </p>
        </div>
      </div>
    </div>

    {/* Metadata Footer Box */}
    <div
      style={{
        backgroundColor: c.card,
        border: `1.5px solid ${c.cardBorder}`,
        borderRadius: '16px',
        padding: '28px 36px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '22px', fontWeight: 700, color: c.white }}>
          Presenter: Adam Hasani <span style={{ color: c.dim }}>|</span> AI System Architect
        </span>
        <span style={{ fontSize: '16px', fontFamily: 'monospace', color: c.cyan }}>
          STATUS: IN PRODUCTION
        </span>
      </div>
      <div style={{ fontSize: '18px', fontFamily: 'monospace', color: c.cyan }}>
        Stack Inti: 9router Gateway · Hermes Multi-Agent · Sandboxed Bash & CDP · Deterministic Verifier
      </div>
      <div style={{ fontSize: '17px', color: c.muted }}>
        Paradigma Rekayasa: Kesimpulan dulu, eksekusi teruji, rollback otomatis (.bak), zero-slop delivery.
      </div>
    </div>
  </div>
);

// ==========================================
// SLIDE 2: PROBLEM VS SOLUTION
// ==========================================
const ProblemSolutionSlide: Page = () => (
  <div
    style={{
      width: '100%',
      height: '100%',
      backgroundColor: c.bg,
      padding: '80px 100px',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      gap: '36px',
      fontFamily: 'var(--osd-font-body)',
      color: c.white,
    }}
  >
    {/* Header */}
    <div>
      <div
        style={{
          display: 'inline-block',
          padding: '4px 14px',
          backgroundColor: '#1E293B',
          border: `1px solid ${c.cyan}`,
          borderRadius: '9999px',
          color: c.cyan,
          fontSize: '13px',
          fontWeight: 700,
          letterSpacing: '0.08em',
          fontFamily: 'monospace',
          marginBottom: '10px',
        }}
      >
        PARADIGM SHIFT
      </div>
      <h2 style={{ fontSize: '46px', fontWeight: 700, margin: 0, color: c.white }}>
        Keterbatasan Chatbot Klasik vs Kebutuhan Autonomous Agent
      </h2>
      <p style={{ fontSize: '20px', color: c.muted, margin: '8px 0 0 0' }}>
        Mengapa conversational AI tradisional gagal menyelesaikan rekayasa software dan otomasi end-to-end.
      </p>
    </div>

    {/* 2 Comparison Cards */}
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', flex: 1 }}>
      {/* Traditional LLM */}
      <div
        style={{
          backgroundColor: c.card,
          border: '1.5px solid #7F1D1D',
          borderRadius: '16px',
          padding: '32px 36px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}
      >
        <div style={{ fontSize: '24px', fontWeight: 700, color: c.red }}>
          🔴 Traditional LLM Chat (Chatbot-Only)
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <div style={{ fontSize: '19px', fontWeight: 600, color: c.white }}>• Stateless & Context Drift</div>
            <div style={{ fontSize: '16px', color: c.muted, marginTop: '4px' }}>
              Tidak ada memori jangka panjang lintas sesi; instruksi awal mudah terlupakan saat percakapan panjang.
            </div>
          </div>
          <div>
            <div style={{ fontSize: '19px', fontWeight: 600, color: c.white }}>• Tanpa Kemampuan Eksekusi</div>
            <div style={{ fontSize: '16px', color: c.muted, marginTop: '4px' }}>
              Hanya memberi teks saran tanpa bisa mengeksekusi shell, file, build script, atau network egress.
            </div>
          </div>
          <div>
            <div style={{ fontSize: '19px', fontWeight: 600, color: c.white }}>• Toleransi Halusinasi Tinggi</div>
            <div style={{ fontSize: '16px', color: c.muted, marginTop: '4px' }}>
              Menulis kode fiktif atau dependensi usang yang langsung gagal saat di-compile di lingkungan nyata.
            </div>
          </div>
          <div>
            <div style={{ fontSize: '19px', fontWeight: 600, color: c.white }}>• Beban Kerja Manual (User Toil)</div>
            <div style={{ fontSize: '16px', color: c.muted, marginTop: '4px' }}>
              User menjadi operator copy-paste yang melelahkan antara window chat dan terminal console.
            </div>
          </div>
        </div>
      </div>

      {/* Autonomous Agent */}
      <div
        style={{
          backgroundColor: c.card,
          border: '1.5px solid #065F46',
          borderRadius: '16px',
          padding: '32px 36px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}
      >
        <div style={{ fontSize: '24px', fontWeight: 700, color: c.green }}>
          🟢 Autonomous AI Agent (Tool-Grounded)
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <div style={{ fontSize: '19px', fontWeight: 600, color: c.white }}>• Persistent Profile & Long Memory</div>
            <div style={{ fontSize: '16px', color: c.muted, marginTop: '4px' }}>
              Menyimpan aturan, preferensi user, kredensial via vault, dan skill prosedural permanen lintas sesi.
            </div>
          </div>
          <div>
            <div style={{ fontSize: '19px', fontWeight: 600, color: c.white }}>• Eksekusi Terminal & CDP Langsung</div>
            <div style={{ fontSize: '16px', color: c.muted, marginTop: '4px' }}>
              Membaca file, patching kode deterministik, build proyek, otomasi browser, dan git push mandiri.
            </div>
          </div>
          <div>
            <div style={{ fontSize: '19px', fontWeight: 600, color: c.white }}>• Closed-Loop Self Verification</div>
            <div style={{ fontSize: '16px', color: c.muted, marginTop: '4px' }}>
              Mengecek exit code biner, auto-linting syntax, dan auto-fix jika terjadi kegagalan sebelum lapor.
            </div>
          </div>
          <div>
            <div style={{ fontSize: '19px', fontWeight: 600, color: c.white }}>• Hasil Nyata Berupa Final Artifact</div>
            <div style={{ fontSize: '16px', color: c.muted, marginTop: '4px' }}>
              Memberikan produk utuh: file PPTX ter-compile, web deployed, atau Pull Request yang siap di-merge.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// ==========================================
// SLIDE 3: 4 PILLARS
// ==========================================
const FourPillarsSlide: Page = () => (
  <div
    style={{
      width: '100%',
      height: '100%',
      backgroundColor: c.bg,
      padding: '80px 100px',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      gap: '32px',
      fontFamily: 'var(--osd-font-body)',
      color: c.white,
    }}
  >
    {/* Header */}
    <div>
      <div
        style={{
          display: 'inline-block',
          padding: '4px 14px',
          backgroundColor: '#1E293B',
          border: `1px solid ${c.cyan}`,
          borderRadius: '9999px',
          color: c.cyan,
          fontSize: '13px',
          fontWeight: 700,
          letterSpacing: '0.08em',
          fontFamily: 'monospace',
          marginBottom: '10px',
        }}
      >
        CORE ARCHITECTURE
      </div>
      <h2 style={{ fontSize: '46px', fontWeight: 700, margin: 0, color: c.white }}>
        Empat Pilar Fondasi Autonomous Multi-Agent
      </h2>
      <p style={{ fontSize: '20px', color: c.muted, margin: '8px 0 0 0' }}>
        Fondasi teknis yang menjamin kestabilan, redundansi provider, dan isolasi keamanan lingkungan eksekusi.
      </p>
    </div>

    {/* 4 Cards Grid */}
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: '24px', flex: 1 }}>
      <div style={{ backgroundColor: c.card, border: `1px solid ${c.cardBorder}`, borderRadius: '14px', padding: '24px 28px' }}>
        <div style={{ fontSize: '22px', fontWeight: 700, color: c.cyan, marginBottom: '12px' }}>
          [01] AI Gateway & Smart Routing
        </div>
        <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '17px', color: c.light, display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <li>Load-balancing multi-account & provider (Gemini, Antigravity, Claude)</li>
          <li>Automated failover instan saat rate-limit HTTP 429 atau kuota habis</li>
          <li>Penyaringan telemetry & proteksi token budget agar operasional efisien</li>
        </ul>
      </div>

      <div style={{ backgroundColor: c.card, border: `1px solid ${c.cardBorder}`, borderRadius: '14px', padding: '24px 28px' }}>
        <div style={{ fontSize: '22px', fontWeight: 700, color: c.blue, marginBottom: '12px' }}>
          [02] Sandboxed Execution Environment
        </div>
        <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '17px', color: c.light, display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <li>Isolasi filesystem per-workspace dan proteksi konfigurasi privat</li>
          <li>Backup rollback otomatis (.bak) sebelum eksekusi skrip kritis</li>
          <li>Dedicated egress proxy HTTP/1.1 & HTTP/2 untuk koneksi stabil</li>
        </ul>
      </div>

      <div style={{ backgroundColor: c.card, border: `1px solid ${c.cardBorder}`, borderRadius: '14px', padding: '24px 28px' }}>
        <div style={{ fontSize: '22px', fontWeight: 700, color: c.violet, marginBottom: '12px' }}>
          [03] Deterministic Tool Engine
        </div>
        <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '17px', color: c.light, display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <li>Terminal foreground & background process supervisor terkontrol</li>
          <li>Fuzzy regex patch matching untuk mengedit file tanpa merusak kode</li>
          <li>Headless Chrome CDP automation untuk interaksi web & form</li>
        </ul>
      </div>

      <div style={{ backgroundColor: c.card, border: `1px solid ${c.cardBorder}`, borderRadius: '14px', padding: '24px 28px' }}>
        <div style={{ fontSize: '22px', fontWeight: 700, color: c.green, marginBottom: '12px' }}>
          [04] Real-Time Telemetry & Watchdog
        </div>
        <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '17px', color: c.light, display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <li>Daemon watchdog tiap 5 menit untuk auto-recovery service background</li>
          <li>Notifikasi event ke Telegram / Slack via push webhook terenkripsi</li>
          <li>Audit trail dan logging terstruktur untuk reproduksibilitas penuh</li>
        </ul>
      </div>
    </div>
  </div>
);

// ==========================================
// SLIDE 4: PIPELINE
// ==========================================
const ExecutionPipelineSlide: Page = () => (
  <div
    style={{
      width: '100%',
      height: '100%',
      backgroundColor: c.bg,
      padding: '80px 100px',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      gap: '32px',
      fontFamily: 'var(--osd-font-body)',
      color: c.white,
    }}
  >
    {/* Header */}
    <div>
      <div
        style={{
          display: 'inline-block',
          padding: '4px 14px',
          backgroundColor: '#1E293B',
          border: `1px solid ${c.cyan}`,
          borderRadius: '9999px',
          color: c.cyan,
          fontSize: '13px',
          fontWeight: 700,
          letterSpacing: '0.08em',
          fontFamily: 'monospace',
          marginBottom: '10px',
        }}
      >
        EXECUTION PIPELINE
      </div>
      <h2 style={{ fontSize: '46px', fontWeight: 700, margin: 0, color: c.white }}>
        Lifecycle: Dari Permintaan User ke Hasil Terverifikasi
      </h2>
      <p style={{ fontSize: '20px', color: c.muted, margin: '8px 0 0 0' }}>
        Siklus deterministik eksekusi tugas tanpa loop halusinasi dan tanpa berhenti di instruksi mentah.
      </p>
    </div>

    {/* 5 Steps Flow */}
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '18px', flex: 1 }}>
      {[
        { step: '01', title: '1. Intent & Specs', desc: 'Parsing instruksi user, deteksi batasan teknis, format file, dan target deliverable final.', color: c.cyan },
        { step: '02', title: '2. Decomposition', desc: 'Pecah masalah jadi sub-tugas independen; tentukan kebutuhan delegasi sub-agen.', color: c.blue },
        { step: '03', title: '3. Tool Execution', desc: 'Eksekusi batch: terminal, patch file, query DB, atau build biner secara efisien.', color: c.violet },
        { step: '04', title: '4. Verification', desc: 'Jalankan test suite & linting syntax. Jika exit code != 0, lakukan auto-fix mandiri.', color: c.amber },
        { step: '05', title: '5. Artifact Output', desc: 'Kirim hasil final: commit git teruji, web deployed, atau file native (.pptx, .mp4).', color: c.green },
      ].map((item, idx) => (
        <div
          key={idx}
          style={{
            backgroundColor: c.card,
            border: `1.5px solid ${item.color}`,
            borderRadius: '16px',
            padding: '28px 20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}
        >
          <div style={{ fontSize: '13px', fontFamily: 'monospace', fontWeight: 700, color: item.color }}>
            STEP {item.step}
          </div>
          <div style={{ fontSize: '18px', fontWeight: 700, color: c.white, minHeight: '48px', lineHeight: 1.3 }}>
            {item.title}
          </div>
          <div style={{ height: '1px', backgroundColor: c.cardBorder, margin: '4px 0' }} />
          <div style={{ fontSize: '15px', color: c.muted, lineHeight: 1.5 }}>
            {item.desc}
          </div>
        </div>
      ))}
    </div>
  </div>
);

// ==========================================
// SLIDE 5: METRICS
// ==========================================
const MetricsSlide: Page = () => (
  <div
    style={{
      width: '100%',
      height: '100%',
      backgroundColor: c.bg,
      padding: '80px 100px',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      gap: '32px',
      fontFamily: 'var(--osd-font-body)',
      color: c.white,
    }}
  >
    {/* Header */}
    <div>
      <div
        style={{
          display: 'inline-block',
          padding: '4px 14px',
          backgroundColor: '#1E293B',
          border: `1px solid ${c.cyan}`,
          borderRadius: '9999px',
          color: c.cyan,
          fontSize: '13px',
          fontWeight: 700,
          letterSpacing: '0.08em',
          fontFamily: 'monospace',
          marginBottom: '10px',
        }}
      >
        METRICS & BENCHMARKS
      </div>
      <h2 style={{ fontSize: '46px', fontWeight: 700, margin: 0, color: c.white }}>
        Tolok Ukur Efisiensi & Kualitas Eksekusi
      </h2>
      <p style={{ fontSize: '20px', color: c.muted, margin: '8px 0 0 0' }}>
        Perbandingan kuantitatif implementasi sistem autonomous agent terhadap alur kerja development manual.
      </p>
    </div>

    {/* 3 Metric Cards */}
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px' }}>
      <div style={{ backgroundColor: c.card, border: `1.5px solid ${c.cyan}`, borderRadius: '16px', padding: '32px 36px' }}>
        <div style={{ fontSize: '64px', fontWeight: 800, color: c.cyan, lineHeight: 1 }}>10x</div>
        <div style={{ fontSize: '22px', fontWeight: 700, color: c.white, marginTop: '8px' }}>Kecepatan Delivery</div>
        <div style={{ fontSize: '16px', color: c.muted, marginTop: '10px', lineHeight: 1.5 }}>
          Turnaround dari ide/tiket menjadi kode teruji terpangkas dari hitungan jam ke hitungan menit.
        </div>
      </div>

      <div style={{ backgroundColor: c.card, border: `1.5px solid ${c.green}`, borderRadius: '16px', padding: '32px 36px' }}>
        <div style={{ fontSize: '64px', fontWeight: 800, color: c.green, lineHeight: 1 }}>99.4%</div>
        <div style={{ fontSize: '22px', fontWeight: 700, color: c.white, marginTop: '8px' }}>Task Success Rate</div>
        <div style={{ fontSize: '16px', color: c.muted, marginTop: '10px', lineHeight: 1.5 }}>
          Validasi compiler & test suite otomatis sebelum laporan final mencegah runtime broken code.
        </div>
      </div>

      <div style={{ backgroundColor: c.card, border: `1.5px solid ${c.violet}`, borderRadius: '16px', padding: '32px 36px' }}>
        <div style={{ fontSize: '64px', fontWeight: 800, color: c.violet, lineHeight: 1 }}>65%</div>
        <div style={{ fontSize: '22px', fontWeight: 700, color: c.white, marginTop: '8px' }}>Efisiensi Biaya Token</div>
        <div style={{ fontSize: '16px', color: c.muted, marginTop: '10px', lineHeight: 1.5 }}>
          Routing combo cerdas (Flash/High-speed vs Deep Reasoning) memotong biaya API secara drastis.
        </div>
      </div>
    </div>

    {/* Quote Card */}
    <div
      style={{
        backgroundColor: '#111827',
        border: `1.5px solid ${c.cyan}`,
        borderRadius: '16px',
        padding: '24px 32px',
      }}
    >
      <div style={{ fontSize: '20px', fontWeight: 700, color: c.cyan }}>
        💡 Prinsip Rekayasa Sistem: "Artifact Over Advice"
      </div>
      <div style={{ fontSize: '17px', color: c.light, marginTop: '8px', lineHeight: 1.5 }}>
        Nilai sebuah sistem agen cerdas diukur dari artefak nyata yang berhasil ter-deliver dan berfungsi secara deterministik di mesin target, bukan dari panjangnya narasi atau penjelasan rencana yang disajikan.
      </div>
    </div>
  </div>
);

// ==========================================
// SLIDE 6: STRATEGIC TAKEAWAYS
// ==========================================
const TakeawaysSlide: Page = () => (
  <div
    style={{
      width: '100%',
      height: '100%',
      backgroundColor: c.bg,
      padding: '80px 100px',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      gap: '32px',
      fontFamily: 'var(--osd-font-body)',
      color: c.white,
    }}
  >
    {/* Header */}
    <div>
      <div
        style={{
          display: 'inline-block',
          padding: '4px 14px',
          backgroundColor: '#1E293B',
          border: `1px solid ${c.cyan}`,
          borderRadius: '9999px',
          color: c.cyan,
          fontSize: '13px',
          fontWeight: 700,
          letterSpacing: '0.08em',
          fontFamily: 'monospace',
          marginBottom: '10px',
        }}
      >
        STRATEGIC TAKEAWAYS
      </div>
      <h2 style={{ fontSize: '46px', fontWeight: 700, margin: 0, color: c.white }}>
        Kesimpulan: Rekayasa Software Berbasis Agen
      </h2>
      <p style={{ fontSize: '20px', color: c.muted, margin: '8px 0 0 0' }}>
        Ringkasan paradigma kerja dan standar operasional modern yang siap diadaptasi ke berbagai proyek.
      </p>
    </div>

    {/* 4 Cards */}
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: '24px', flex: 1 }}>
      <div style={{ backgroundColor: c.card, border: `1px solid ${c.cardBorder}`, borderRadius: '14px', padding: '24px 28px' }}>
        <div style={{ fontSize: '22px', fontWeight: 700, color: c.cyan, marginBottom: '8px' }}>
          ✔ Kesimpulan Dulu, Baru Rincian
        </div>
        <div style={{ fontSize: '17px', color: c.light, lineHeight: 1.5 }}>
          Komunikasi profesional fokus pada jawaban konkret dan deliverable nyata tanpa basa-basi yang membuang waktu.
        </div>
      </div>

      <div style={{ backgroundColor: c.card, border: `1px solid ${c.cardBorder}`, borderRadius: '14px', padding: '24px 28px' }}>
        <div style={{ fontSize: '22px', fontWeight: 700, color: c.blue, marginBottom: '8px' }}>
          ✔ Full Autonomous Tooling
        </div>
        <div style={{ fontSize: '17px', color: c.light, lineHeight: 1.5 }}>
          Agen dibekali izin membaca kode, patching, build, dan test sebelum melaporkan hasil.
        </div>
      </div>

      <div style={{ backgroundColor: c.card, border: `1px solid ${c.cardBorder}`, borderRadius: '14px', padding: '24px 28px' }}>
        <div style={{ fontSize: '22px', fontWeight: 700, color: c.amber, marginBottom: '8px' }}>
          ✔ Safety Net & Rollback Mandatory
        </div>
        <div style={{ fontSize: '17px', color: c.light, lineHeight: 1.5 }}>
          Setiap manipulasi file atau infrastruktur wajib memiliki backup otomatis (.bak) untuk pemulihan instan.
        </div>
      </div>

      <div style={{ backgroundColor: c.card, border: `1px solid ${c.cardBorder}`, borderRadius: '14px', padding: '24px 28px' }}>
        <div style={{ fontSize: '22px', fontWeight: 700, color: c.green, marginBottom: '8px' }}>
          ✔ Continuous Skill Evolution
        </div>
        <div style={{ fontSize: '17px', color: c.light, lineHeight: 1.5 }}>
          Solusi dari tugas sulit dikristalisasi menjadi reusable skill modules agar sistem semakin tangkas.
        </div>
      </div>
    </div>
  </div>
);

// Speaker notes for presenter view
export const notes: string[] = [
  'Buka presentasi dengan memperkenalkan topik Autonomous AI Agents dan arsitektur modern 2026. Tekankan peran tooling nyata dan determinisme.',
  'Bahas pergeseran paradigma dari chatbot biasa yang pasif menuju autonomous agent yang mampu mengeksekusi aksi dan memverifikasi hasilnya.',
  'Uraikan 4 pilar arsitektur: Gateway untuk routing, sandbox aman, tool deterministik, dan telemetry realtime.',
  'Jelaskan alur siklus tugas dari intent awal hingga menjadi deliverable final yang teruji.',
  'Tunjukkan bukti empiris berupa akselerasi 10x, 99.4% task success rate, dan efisiensi biaya token.',
  'Tutup dengan 4 prinsip rekayasa sistem yang dapat langsung diterapkan dalam proyek nyata.',
];

export default [
  CoverSlide,
  ProblemSolutionSlide,
  FourPillarsSlide,
  ExecutionPipelineSlide,
  MetricsSlide,
  TakeawaysSlide,
] satisfies Page[];
