<script setup>
import { onMounted, onUnmounted, computed } from "vue";
import { useRouter } from "vue-router";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useI18n } from "vue-i18n";
import Navbar from "@/components/Navbar.vue";
import IPhoneScreen from "@/components/IPhoneScreen.vue";
import BrowserMockup from "@/components/BrowserMockup.vue";
import ChatMockup from "@/components/ChatMockup.vue";

const router = useRouter();
const { t } = useI18n();

const painPoints = computed(() =>
  [0, 1, 2, 3, 4, 5].map((i) => ({
    icon: t(`pain.item${i}.icon`),
    title: t(`pain.item${i}.title`),
    desc: t(`pain.item${i}.desc`),
  })),
);

const servicesMeta = [
  {
    icon: "📱",
    gradient: "from-purple-600 to-pink-600",
    glow: "rgba(124,58,237,0.3)",
  },
  {
    icon: "🤖",
    gradient: "from-blue-600 to-cyan-500",
    glow: "rgba(37,99,235,0.3)",
  },
  {
    icon: "🌐",
    gradient: "from-cyan-500 to-emerald-500",
    glow: "rgba(6,182,212,0.3)",
  },
];

const services = computed(() =>
  [0, 1, 2].map((i) => ({
    ...servicesMeta[i],
    title: t(`services.item${i}.title`),
    desc: t(`services.item${i}.desc`),
  })),
);

const steps = computed(() =>
  [0, 1, 2].map((i) => ({
    num: t(`steps.item${i}.num`),
    icon: t(`steps.item${i}.icon`),
    title: t(`steps.item${i}.title`),
    desc: t(`steps.item${i}.desc`),
  })),
);

const mobileFeatures = computed(() =>
  [0, 1, 2, 3, 4].map((i) => t(`demo.mobile.feature${i}`)),
);
const webFeatures = computed(() =>
  [0, 1, 2, 3, 4].map((i) => t(`demo.web.feature${i}`)),
);
const aiFeatures = computed(() =>
  [0, 1, 2, 3, 4].map((i) => t(`demo.ai.feature${i}`)),
);

const personaMeta = [
  { gradient: "from-orange-500 to-pink-500", glow: "rgba(249,115,22,0.2)" },
  { gradient: "from-red-500 to-orange-500", glow: "rgba(239,68,68,0.2)" },
  { gradient: "from-blue-500 to-purple-600", glow: "rgba(37,99,235,0.2)" },
  { gradient: "from-pink-500 to-rose-500", glow: "rgba(236,72,153,0.2)" },
  { gradient: "from-emerald-500 to-cyan-500", glow: "rgba(16,185,129,0.2)" },
  { gradient: "from-cyan-500 to-blue-500", glow: "rgba(6,182,212,0.2)" },
];

const personas = computed(() =>
  [0, 1, 2, 3, 4, 5].map((i) => ({
    ...personaMeta[i],
    emoji: t(`for.person${i}.emoji`),
    role: t(`for.person${i}.role`),
    dream: t(`for.person${i}.dream`),
    build: t(`for.person${i}.build`),
  })),
);

let triggers = [];

onMounted(() => {
  // Animate hero elements
  gsap.fromTo(
    ".hero-badge",
    { opacity: 0, y: -20 },
    { opacity: 1, y: 0, duration: 0.6, delay: 0.2 },
  );
  gsap.fromTo(
    ".hero-headline",
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.8, delay: 0.4 },
  );
  gsap.fromTo(
    ".hero-sub",
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.7, delay: 0.7 },
  );
  gsap.fromTo(
    ".hero-cta",
    { opacity: 0, y: 20, scale: 0.95 },
    { opacity: 1, y: 0, scale: 1, duration: 0.6, delay: 0.9 },
  );
  gsap.fromTo(
    ".hero-side-left",
    { opacity: 0, x: -40, rotate: -8 },
    {
      opacity: 1,
      x: 0,
      rotate: 0,
      duration: 0.8,
      delay: 0.95,
      ease: "power3.out",
    },
  );
  gsap.fromTo(
    ".hero-side-right",
    { opacity: 0, x: 40, rotate: 8 },
    {
      opacity: 1,
      x: 0,
      rotate: 0,
      duration: 0.8,
      delay: 1.05,
      ease: "power3.out",
    },
  );

  // Scroll-triggered sections
  const sections = [
    ".for-section",
    ".pain-section",
    ".services-section",
    ".steps-section",
    ".demo-section",
    ".cta-section",
  ];

  sections.forEach((sel) => {
    const el = document.querySelector(sel);
    if (!el) return;
    gsap.fromTo(
      el,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      },
    );
    triggers.push(ScrollTrigger.getAll().slice(-1)[0]);
  });

  // Stagger cards inside sections
  const cardSets = [
    { parent: ".persona-cards", child: ".persona-card" },
    { parent: ".pain-cards", child: ".pain-card" },
    { parent: ".service-cards", child: ".service-card" },
    { parent: ".step-cards", child: ".step-card" },
  ];

  cardSets.forEach(({ parent, child }) => {
    const parentEl = document.querySelector(parent);
    if (!parentEl) return;
    gsap.fromTo(
      child,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: parentEl,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      },
    );
  });
});

onUnmounted(() => {
  triggers.forEach((t) => t && t.kill());
  ScrollTrigger.getAll().forEach((t) => t.kill());
});
</script>

<template>
  <div class="min-h-screen bg-slate-900">
    <Navbar />

    <!-- ===================== HERO ===================== -->
    <section
      class="relative min-h-screen flex items-center justify-center overflow-hidden pt-36"
    >
      <!-- Animated background blobs -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          class="animate-blob absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style="background: radial-gradient(circle, #7c3aed, transparent)"
        ></div>
        <div
          class="animate-blob animation-delay-2000 absolute top-1/3 right-1/4 w-80 h-80 rounded-full opacity-15 blur-3xl"
          style="background: radial-gradient(circle, #2563eb, transparent)"
        ></div>
        <div
          class="animate-blob animation-delay-4000 absolute bottom-1/4 left-1/2 w-72 h-72 rounded-full opacity-15 blur-3xl"
          style="background: radial-gradient(circle, #06b6d4, transparent)"
        ></div>
        <!-- Grid overlay -->
        <div
          class="absolute inset-0 opacity-5"
          style="
            background-image:
              linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(
                90deg,
                rgba(255, 255, 255, 0.1) 1px,
                transparent 1px
              );
            background-size: 60px 60px;
          "
        ></div>
      </div>

      <!-- LEFT: iPhone (Gym App) + Browser (Online Store) -->
      <div
        class="hero-side-left hidden xl:flex xl:flex-col gap-5 absolute left-6 2xl:left-16 top-1/2 -translate-y-1/2 z-10 pointer-events-none"
      >
        <!-- iPhone frame -->
        <div
          class="hero-iphone hero-float-slow shadow-2xl shadow-purple-950/30"
        >
          <!-- Shell -->
          <div class="hero-iphone-shell">
            <!-- Dynamic Island -->
            <div class="hero-iphone-island"></div>
            <!-- Screen content -->
            <div class="hero-iphone-screen">
              <div
                class="flex flex-col items-center justify-center h-full gap-3"
              >
                <div class="hero-mock-icon">
                  <svg
                    class="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3.75 13.5l3-6m3 6l3-6m3 6l3-6M4.5 18h15"
                    />
                  </svg>
                </div>
                <span class="hero-mock-title">{{ $t("hero.gymCard") }}</span>
              </div>
            </div>
            <!-- Home indicator -->
            <div class="hero-iphone-home"></div>
          </div>
        </div>

        <!-- Browser window (Online Store) -->
        <div class="hero-browser hero-float-fast shadow-xl shadow-slate-950/20">
          <!-- Chrome bar -->
          <div class="hero-browser-bar">
            <span class="hero-trafficlight bg-rose-400"></span>
            <span class="hero-trafficlight bg-amber-400"></span>
            <span class="hero-trafficlight bg-green-400"></span>
            <div class="hero-browser-url">mystore.io</div>
          </div>
          <!-- Viewport -->
          <div class="hero-browser-viewport">
            <div class="flex flex-col items-center justify-center h-full gap-3">
              <div class="hero-mock-icon">
                <svg
                  class="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.25 2.25H4.5l1.5 9h12l1.5-9z"
                  />
                </svg>
              </div>
              <span class="hero-mock-title">{{ $t("hero.storeCard") }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- RIGHT: Chat app (AI Chatbot) -->
      <div
        class="hero-side-right hidden xl:flex xl:flex-col gap-5 absolute right-6 2xl:right-16 top-1/2 -translate-y-1/2 z-10 pointer-events-none items-end"
      >
        <div class="hero-chat hero-float-delayed shadow-2xl shadow-blue-950/30">
          <!-- Chat header -->
          <div class="hero-chat-header">
            <div class="hero-chat-avatar">
              <svg
                class="w-4 h-4 block"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z"
                />
              </svg>
            </div>
            <div>
              <div class="text-white text-xs font-semibold leading-none">
                {{ $t("hero.chat.name") }}
              </div>
              <div class="text-cyan-400 text-[10px] mt-0.5">
                {{ $t("hero.chat.status") }}
              </div>
            </div>
          </div>
          <!-- Messages -->
          <div class="hero-chat-body">
            <div class="hero-bubble hero-bubble-user">
              {{ $t("hero.chat.msg0") }}
            </div>
            <div class="hero-bubble hero-bubble-ai">
              {{ $t("hero.chat.msg1") }}
            </div>
            <div class="hero-bubble hero-bubble-user">
              {{ $t("hero.chat.msg2") }}
            </div>
            <div class="hero-bubble hero-bubble-ai">
              {{ $t("hero.chat.msg3") }}
            </div>
          </div>
          <!-- Input bar -->
          <div class="hero-chat-input">
            <span class="text-slate-500 text-xs">{{
              $t("hero.chat.placeholder")
            }}</span>
            <div class="hero-chat-send">
              <svg
                class="w-3 h-3 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div class="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <!-- Badge -->
        <div
          class="hero-badge inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-8"
        >
          <div class="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
          <span class="text-slate-300 text-sm font-medium">{{
            $t("hero.badge")
          }}</span>
        </div>

        <!-- Headline -->
        <h1
          class="hero-headline text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight"
        >
          {{ $t("hero.h1") }}
          <br />
          <span class="gradient-text">{{ $t("hero.h2") }}</span>
        </h1>

        <!-- Sub-headline -->
        <p
          class="hero-sub text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {{ $t("hero.sub") }}
          <span class="text-slate-200 font-medium">
            {{ $t("hero.subAccent") }}</span
          >
        </p>

        <!-- CTAs -->
        <div
          class="hero-cta flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <RouterLink
            to="/contact"
            class="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-linear-to-r from-purple-600 to-blue-600 text-white font-semibold text-base whitespace-nowrap shadow-lg shadow-purple-900/40 hover:shadow-purple-900/60 hover:scale-105 transition-all duration-300"
          >
            {{ $t("hero.cta1") }}
            <svg
              class="w-5 h-5 shrink-0 group-hover:translate-x-0.5 transition-transform duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </RouterLink>
          <a
            href="#services"
            class="inline-flex items-center gap-2 px-8 py-4 rounded-2xl glass-card text-slate-300 font-semibold text-base hover:text-white hover:bg-white/10 transition-all duration-300"
          >
            {{ $t("hero.cta2") }}
          </a>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div
        class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600"
      >
        <span class="text-xs uppercase tracking-widest">{{
          $t("hero.scroll")
        }}</span>
        <div
          class="w-px h-8 bg-linear-to-b from-slate-600 to-transparent"
        ></div>
      </div>
    </section>

    <!-- ===================== WHO IS THIS FOR ===================== -->
    <section class="for-section py-24 px-6 relative">
      <div class="max-w-6xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-16">
          <div
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6"
          >
            <span
              class="w-2 h-2 rounded-full bg-purple-400 inline-block"
            ></span>
            <span class="text-purple-400 text-sm font-medium">{{
              $t("for.badge")
            }}</span>
          </div>
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
            {{ $t("for.h2") }}
            <span class="gradient-text">{{ $t("for.h2Accent") }}</span>
          </h2>
          <p class="text-slate-400 text-lg max-w-2xl mx-auto">
            {{ $t("for.sub") }}
          </p>
        </div>

        <!-- Persona cards grid -->
        <div
          class="persona-cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          <div
            v-for="(p, idx) in personas"
            :key="idx"
            class="persona-card relative rounded-2xl p-6 border border-white/8 bg-slate-800/40 backdrop-blur-sm hover:border-white/15 hover:-translate-y-1 transition-all duration-300 overflow-hidden group"
            :style="{ boxShadow: `0 0 40px ${p.glow}` }"
          >
            <!-- top glow accent -->
            <div
              class="absolute inset-x-0 top-0 h-px opacity-60"
              :class="`bg-linear-to-r ${p.gradient}`"
            ></div>

            <!-- Emoji badge -->
            <div
              class="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
              :class="`bg-linear-to-br ${p.gradient}`"
            >
              {{ p.emoji }}
            </div>

            <!-- Role -->
            <p
              class="text-xs font-semibold uppercase tracking-widest mb-1"
              :class="`bg-linear-to-r ${p.gradient} bg-clip-text text-transparent`"
            >
              {{ p.role }}
            </p>

            <!-- Dream -->
            <h3 class="text-white font-semibold text-base mb-3 leading-snug">
              "{{ p.dream }}"
            </h3>

            <!-- What we build -->
            <div class="flex items-start gap-2">
              <span
                class="mt-0.5 shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-white text-[10px] font-bold"
                :class="`bg-linear-to-br ${p.gradient}`"
                >✓</span
              >
              <p class="text-slate-400 text-sm leading-relaxed">
                {{ p.build }}
              </p>
            </div>
          </div>
        </div>

        <!-- Bottom CTA -->
        <div class="text-center">
          <RouterLink
            to="/contact"
            class="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold text-base transition-colors duration-200 group"
          >
            {{ $t("for.cta") }}
            <svg
              class="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- ===================== PAIN POINTS ===================== -->
    <section id="pain" class="pain-section py-24 px-6 relative">
      <div class="max-w-6xl mx-auto">
        <!-- Section header -->
        <div class="text-center mb-16">
          <div
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6"
          >
            <span class="text-orange-400 text-sm font-medium">{{
              $t("pain.badge")
            }}</span>
          </div>
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
            {{ $t("pain.h2") }}
            <span class="gradient-text-warm">{{ $t("pain.h2Accent") }}</span>
          </h2>
          <p class="text-slate-400 text-lg max-w-2xl mx-auto">
            {{ $t("pain.sub") }}
          </p>
        </div>

        <!-- Cards grid -->
        <div
          class="pain-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <div
            v-for="(point, i) in painPoints"
            :key="i"
            class="pain-card glass-card p-6 hover:bg-white/8 hover:-translate-y-1 transition-all duration-300 group"
          >
            <div class="text-3xl mb-4">{{ point.icon }}</div>
            <h3
              class="text-white font-semibold text-lg mb-2 group-hover:gradient-text transition-all"
            >
              {{ point.title }}
            </h3>
            <p class="text-slate-500 text-sm leading-relaxed">
              {{ point.desc }}
            </p>
          </div>
        </div>

        <!-- CTA nudge -->
        <div class="text-center mt-12">
          <p class="text-slate-400 text-base">
            {{ $t("pain.ctaText") }}
            <RouterLink
              to="/contact"
              class="text-purple-400 hover:text-purple-300 font-medium underline underline-offset-4 transition-colors"
            >
              {{ $t("pain.ctaLink") }}
            </RouterLink>
          </p>
        </div>
      </div>
    </section>

    <!-- ===================== SERVICES ===================== -->
    <section id="services" class="services-section py-24 px-6 relative">
      <!-- Background accent -->
      <div class="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          class="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-purple-500/30 to-transparent"
        ></div>
        <div
          class="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-blue-500/30 to-transparent"
        ></div>
      </div>

      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <div
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6"
          >
            <span class="text-purple-400 text-sm font-medium">{{
              $t("services.badge")
            }}</span>
          </div>
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
            {{ $t("services.h2") }}
            <span class="gradient-text">{{ $t("services.h2Accent") }}</span>
          </h2>
          <p class="text-slate-400 text-lg max-w-2xl mx-auto">
            {{ $t("services.sub") }}
          </p>
        </div>

        <div class="service-cards grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="(svc, i) in services"
            :key="i"
            class="service-card gradient-border p-6 hover:-translate-y-2 transition-all duration-300 group cursor-default"
            :style="{ '--glow-color': svc.glow }"
          >
            <!-- Icon badge -->
            <div
              class="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-5 bg-linear-to-br shadow-lg"
              :class="svc.gradient"
              :style="{ boxShadow: `0 8px 24px ${svc.glow}` }"
            >
              {{ svc.icon }}
            </div>

            <h3 class="text-white font-bold text-xl mb-3">{{ svc.title }}</h3>
            <p class="text-slate-400 text-sm leading-relaxed">{{ svc.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===================== HOW IT WORKS ===================== -->
    <section class="steps-section py-24 px-6">
      <div class="max-w-5xl mx-auto">
        <div class="text-center mb-16">
          <div
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6"
          >
            <span class="text-cyan-400 text-sm font-medium">{{
              $t("steps.badge")
            }}</span>
          </div>
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
            {{ $t("steps.h2") }}
            <span class="gradient-text">{{ $t("steps.h2Accent") }}</span>
          </h2>
          <p class="text-slate-400 text-lg max-w-xl mx-auto">
            {{ $t("steps.sub") }}
          </p>
        </div>

        <div class="step-cards grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <!-- Connector line (desktop) -->
          <div
            class="hidden md:block absolute top-12 left-[16.67%] right-[16.67%] h-px bg-linear-to-r from-purple-500/40 via-blue-500/40 to-cyan-500/40 z-0"
          ></div>

          <div
            v-for="(step, i) in steps"
            :key="i"
            class="step-card relative text-center group"
          >
            <!-- Number badge -->
            <div
              class="relative z-10 w-16 h-16 mx-auto rounded-2xl bg-linear-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold text-lg mb-6 shadow-lg shadow-purple-900/40 group-hover:scale-110 transition-transform duration-300"
            >
              {{ step.icon }}
            </div>
            <div class="text-purple-400/60 text-xs font-mono font-bold mb-2">
              {{ $t("steps.step") }} {{ step.num }}
            </div>
            <h3 class="text-white font-bold text-xl mb-3">{{ step.title }}</h3>
            <p class="text-slate-500 text-sm leading-relaxed">
              {{ step.desc }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===================== DEMO SHOWCASE ===================== -->
    <section class="demo-section py-24 px-6 relative overflow-hidden">
      <!-- Background -->
      <div class="absolute inset-0 pointer-events-none">
        <div
          class="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-purple-500/30 to-transparent"
        ></div>
        <div
          class="absolute inset-0 opacity-3"
          style="
            background: radial-gradient(
              ellipse 80% 50% at 50% 0%,
              rgba(124, 58, 237, 0.1),
              transparent
            );
          "
        ></div>
      </div>

      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <div
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6"
          >
            <span class="text-blue-400 text-sm font-medium">{{
              $t("demo.badge")
            }}</span>
          </div>
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
            {{ $t("demo.h2") }}
            <span class="gradient-text">{{ $t("demo.h2Accent") }}</span>
          </h2>
          <p class="text-slate-400 text-lg max-w-2xl mx-auto">
            {{ $t("demo.sub") }}
          </p>
        </div>

        <!-- Mobile App Demo -->
        <div class="flex flex-col lg:flex-row items-center gap-12 mb-24">
          <div class="lg:w-1/2 order-2 lg:order-1">
            <div
              class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/15 border border-purple-500/20 mb-5"
            >
              <span class="text-purple-400 text-xs font-medium">{{
                $t("demo.mobile.badge")
              }}</span>
            </div>
            <h3 class="text-3xl font-bold text-white mb-4">
              {{ $t("demo.mobile.h3") }} <br /><span class="text-purple-400">{{
                $t("demo.mobile.h3Accent")
              }}</span>
            </h3>
            <p class="text-slate-400 leading-relaxed mb-6">
              {{ $t("demo.mobile.p") }}
            </p>
            <ul class="space-y-3">
              <li
                v-for="feat in mobileFeatures"
                :key="feat"
                class="flex items-center gap-3 text-slate-400 text-sm"
              >
                <div
                  class="w-5 h-5 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center shrink-0"
                >
                  <svg
                    class="w-3 h-3 text-green-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                {{ feat }}
              </li>
            </ul>
          </div>
          <div class="lg:w-1/2 order-1 lg:order-2 flex justify-center">
            <IPhoneScreen />
          </div>
        </div>

        <!-- Website Demo -->
        <div class="flex flex-col lg:flex-row items-center gap-12 mb-24">
          <div class="lg:w-1/2 flex justify-center">
            <BrowserMockup url="myapp.io/dashboard" />
          </div>
          <div class="lg:w-1/2">
            <div
              class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/15 border border-blue-500/20 mb-5"
            >
              <span class="text-blue-400 text-xs font-medium">{{
                $t("demo.web.badge")
              }}</span>
            </div>
            <h3 class="text-3xl font-bold text-white mb-4">
              {{ $t("demo.web.h3") }} <br /><span class="text-blue-400">{{
                $t("demo.web.h3Accent")
              }}</span>
            </h3>
            <p class="text-slate-400 leading-relaxed mb-6">
              {{ $t("demo.web.p") }}
            </p>
            <ul class="space-y-3">
              <li
                v-for="feat in webFeatures"
                :key="feat"
                class="flex items-center gap-3 text-slate-400 text-sm"
              >
                <div
                  class="w-5 h-5 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center shrink-0"
                >
                  <svg
                    class="w-3 h-3 text-green-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                {{ feat }}
              </li>
            </ul>
          </div>
        </div>

        <!-- AI Agent Demo -->
        <div class="flex flex-col lg:flex-row items-center gap-12">
          <div class="lg:w-1/2 order-2 lg:order-1">
            <div
              class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-500/20 mb-5"
            >
              <span class="text-cyan-400 text-xs font-medium">{{
                $t("demo.ai.badge")
              }}</span>
            </div>
            <h3 class="text-3xl font-bold text-white mb-4">
              {{ $t("demo.ai.h3") }} <br /><span class="text-cyan-400">{{
                $t("demo.ai.h3Accent")
              }}</span>
            </h3>
            <p class="text-slate-400 leading-relaxed mb-6">
              {{ $t("demo.ai.p") }}
            </p>
            <ul class="space-y-3">
              <li
                v-for="feat in aiFeatures"
                :key="feat"
                class="flex items-center gap-3 text-slate-400 text-sm"
              >
                <div
                  class="w-5 h-5 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center shrink-0"
                >
                  <svg
                    class="w-3 h-3 text-green-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                {{ feat }}
              </li>
            </ul>
          </div>
          <div class="lg:w-1/2 order-1 lg:order-2 flex justify-center">
            <ChatMockup />
          </div>
        </div>
      </div>
    </section>

    <!-- ===================== FINAL CTA ===================== -->
    <section class="cta-section py-24 px-6 relative overflow-hidden">
      <div class="absolute inset-0 pointer-events-none">
        <div
          class="absolute inset-0"
          style="
            background: radial-gradient(
              ellipse 60% 60% at 50% 50%,
              rgba(124, 58, 237, 0.15),
              transparent
            );
          "
        ></div>
      </div>

      <div class="max-w-3xl mx-auto text-center relative z-10">
        <div class="gradient-border p-12 rounded-3xl">
          <div class="text-4xl mb-6">🚀</div>
          <h2
            class="text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight"
          >
            {{ $t("cta.h2") }}
          </h2>
          <p class="text-slate-400 text-lg mb-8 leading-relaxed">
            {{ $t("cta.sub") }}
          </p>
          <RouterLink
            to="/contact"
            class="group inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-linear-to-r from-purple-600 to-blue-600 text-white font-bold text-lg shadow-2xl shadow-purple-900/50 hover:shadow-purple-900/70 hover:scale-105 transition-all duration-300"
          >
            {{ $t("cta.button") }}
            <svg
              class="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </RouterLink>
          <p class="text-slate-600 text-sm mt-6">{{ $t("cta.note") }}</p>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="border-t border-white/5 py-8 px-6 text-center">
      <div class="flex items-center justify-center gap-2 mb-3">
        <div
          class="w-6 h-6 rounded-md bg-linear-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold text-xs"
        >
          iC
        </div>
        <span class="text-slate-400 font-medium text-sm">iCraftHK</span>
      </div>
      <p class="text-slate-700 text-xs">
        {{ $t("footer.copy") }}
      </p>
    </footer>
  </div>
</template>
