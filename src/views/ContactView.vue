<script setup>
import { onMounted, computed, ref } from "vue";
import { gsap } from "gsap";
import { useI18n } from "vue-i18n";
import Navbar from "@/components/Navbar.vue";

const { t } = useI18n();

const copied = ref(false);

function copyQuestions() {
  const lines = Array.from(
    { length: 5 },
    (_, i) => `${i + 1}. ${t(`contact.ig.say${i}`)}`,
  );
  navigator.clipboard.writeText(lines.join("\n")).then(() => {
    copied.value = true;
    setTimeout(() => (copied.value = false), 2000);
  });
}

const faqs = computed(() =>
  [0, 1, 2, 3, 4, 5, 6].map((i) => ({
    q: t(`contact.faq${i}.q`),
    a: t(`contact.faq${i}.a`),
  })),
);

onMounted(() => {
  gsap.fromTo(
    ".contact-hero",
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.8, delay: 0.2 },
  );
  gsap.fromTo(
    ".contact-card",
    { opacity: 0, y: 40, scale: 0.97 },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.7,
      delay: 0.5,
      ease: "power2.out",
    },
  );
  gsap.fromTo(
    ".faq-item",
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, delay: 0.8 },
  );
});
</script>

<template>
  <div class="min-h-screen bg-slate-900">
    <Navbar />

    <!-- Hero -->
    <section class="pt-40 pb-16 px-6 relative overflow-hidden">
      <div class="absolute inset-0 pointer-events-none">
        <div
          class="absolute top-1/3 left-1/2 -translate-x-1/2 w-150 h-100 rounded-full opacity-10 blur-3xl"
          style="background: radial-gradient(circle, #7c3aed, transparent)"
        ></div>
      </div>

      <div class="contact-hero max-w-2xl mx-auto text-center relative z-10">
        <div
          class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6"
        >
          <span class="text-purple-400 text-sm font-medium">{{
            $t("contact.badge")
          }}</span>
        </div>
        <h1
          class="text-4xl md:text-6xl font-extrabold text-white mb-5 leading-tight"
        >
          {{ $t("contact.h1") }}
          <span class="gradient-text"> {{ $t("contact.h1Accent") }}</span>
        </h1>
        <p class="text-slate-400 text-lg leading-relaxed">
          {{ $t("contact.sub") }}
        </p>
      </div>
    </section>

    <!-- Contact Card -->
    <section class="pb-20 px-6">
      <div class="max-w-lg mx-auto">
        <div class="contact-card gradient-border p-8 rounded-3xl text-center">
          <!-- Instagram icon -->
          <div class="relative w-20 h-20 mx-auto mb-6">
            <div
              class="w-20 h-20 rounded-2xl flex items-center justify-center"
              style="
                background: linear-gradient(
                  135deg,
                  #f09433 0%,
                  #e6683c 25%,
                  #dc2743 50%,
                  #cc2366 75%,
                  #bc1888 100%
                );
              "
            >
              <svg
                class="w-10 h-10 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
                />
              </svg>
            </div>
          </div>

          <h2 class="text-2xl font-bold text-white mb-2">
            {{ $t("contact.ig.h2") }}
          </h2>
          <!-- What to say card -->
          <div
            class="mb-6 text-left rounded-xl border border-white/8 bg-white/4 px-5 py-4 w-full mx-auto"
          >
            <!-- label -->
            <p
              class="text-white text-xs font-semibold uppercase tracking-widest mb-3"
            >
              {{ $t("contact.ig.sayTitle") }}
            </p>

            <!-- numbered questions -->
            <div
              class="relative rounded-lg border border-white/10 bg-slate-800/60 px-4 pt-4 pb-10 mb-4"
            >
              <ol class="space-y-2 list-none">
                <li
                  v-for="n in 5"
                  :key="n"
                  class="flex items-baseline gap-2 text-sm"
                >
                  <span class="shrink-0 text-purple-400 font-bold"
                    >{{ n }}.</span
                  >
                  <span class="text-slate-300">{{
                    $t(`contact.ig.say${n - 1}`)
                  }}</span>
                </li>
              </ol>
              <!-- copy button -->
              <button
                @click="copyQuestions"
                class="absolute bottom-2 right-2 flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium transition-all duration-200"
                :class="
                  copied
                    ? 'bg-green-500/20 text-green-400'
                    : 'bg-white/8 text-slate-400 hover:bg-white/12 hover:text-white'
                "
              >
                <svg
                  v-if="!copied"
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-3.5 h-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect x="9" y="9" width="13" height="13" rx="2" />
                  <path
                    d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
                  />
                </svg>
                <svg
                  v-else
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-3.5 h-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {{ copied ? "Copied!" : "Copy" }}
              </button>
            </div>

            <!-- estimation nudge -->
            <p class="text-slate-300 text-sm font-bold mb-4">
              {{ $t("contact.ig.estimation") }}
            </p>

            <!-- alert -->
            <div
              class="rounded-lg bg-red-500/10 border border-red-500/30 px-4 py-3"
            >
              <p class="text-red-400 text-sm font-medium leading-snug">
                ⚠️ {{ $t("contact.ig.alert") }}
              </p>
            </div>
          </div>

          <!-- Instagram DM link -->
          <a
            href="https://ig.me/m/icrafthk"
            target="_blank"
            rel="noopener noreferrer"
            class="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-white text-base shadow-2xl hover:scale-105 transition-all duration-300"
            style="
              background: linear-gradient(
                135deg,
                #f09433 0%,
                #e6683c 25%,
                #dc2743 50%,
                #cc2366 75%,
                #bc1888 100%
              );
              box-shadow: 0 8px 32px rgba(220, 39, 67, 0.4);
            "
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
              />
            </svg>
            {{ $t("contact.ig.button") }}
            <svg
              class="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
          </a>

          <!-- Value props -->
          <div class="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/5">
            <div class="text-center">
              <div class="text-2xl mb-1">⚡</div>
              <div class="text-slate-400 text-xs">
                {{ $t("contact.v0Pre") }}
                <span class="text-white font-semibold">{{
                  $t("contact.v0Acc")
                }}</span>
              </div>
            </div>
            <div class="text-center">
              <div class="text-2xl mb-1">🎯</div>
              <div class="text-slate-400 text-xs">
                {{ $t("contact.v1Pre") }}
                <span class="text-white font-semibold">{{
                  $t("contact.v1Acc")
                }}</span>
              </div>
            </div>
            <div class="text-center">
              <div class="text-2xl mb-1">🔒</div>
              <div class="text-slate-400 text-xs">
                {{ $t("contact.v2Pre") }}
                <span class="text-white font-semibold">{{
                  $t("contact.v2Acc")
                }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="pb-24 px-6">
      <div class="max-w-2xl mx-auto">
        <h2 class="text-2xl font-bold text-white text-center mb-8">
          {{ $t("contact.faqH2") }}
        </h2>
        <div class="space-y-4">
          <div
            v-for="(faq, i) in faqs"
            :key="i"
            class="faq-item glass-card p-5"
          >
            <div class="text-white font-semibold mb-2">{{ faq.q }}</div>
            <div class="text-slate-500 text-sm leading-relaxed">
              {{ faq.a }}
            </div>
          </div>
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
        {{ $t("contact.footerCopy") }}
      </p>
    </footer>
  </div>
</template>
