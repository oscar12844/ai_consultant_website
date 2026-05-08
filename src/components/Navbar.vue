<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { RouterLink, useRoute } from "vue-router";
import { useI18n } from "vue-i18n";

const route = useRoute();
const { locale, t } = useI18n();
const isScrolled = ref(false);
const mobileMenuOpen = ref(false);

const toggleLocale = () => {
  locale.value = locale.value === "en" ? "zh-TW" : "en";
  localStorage.setItem("icw-locale", locale.value);
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

onMounted(() => window.addEventListener("scroll", handleScroll));
onUnmounted(() => window.removeEventListener("scroll", handleScroll));
</script>

<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b"
    :class="
      isScrolled
        ? 'bg-slate-900/80 backdrop-blur-xl border-white/10 shadow-lg shadow-black/20'
        : 'bg-transparent border-transparent'
    "
  >
    <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      <!-- Logo -->
      <RouterLink to="/" class="flex items-center gap-2 group">
        <div
          class="w-8 h-8 group-hover:scale-110 transition-transform duration-200 shrink-0"
        >
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            class="w-full h-full"
          >
            <defs>
              <linearGradient
                id="bgGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stop-color="#4F46E5" />
                <stop offset="100%" stop-color="#EC4899" />
              </linearGradient>
            </defs>
            <circle cx="100" cy="100" r="90" fill="url(#bgGradient)" />
            <circle
              cx="100"
              cy="100"
              r="60"
              fill="none"
              stroke="#FFFFFF"
              stroke-width="4"
              stroke-opacity="0.7"
            />
            <path
              d="M100 40 L145 140 L55 140 Z"
              fill="none"
              stroke="#FFFFFF"
              stroke-width="6"
              stroke-linejoin="round"
            />
            <line
              x1="75"
              y1="110"
              x2="125"
              y2="110"
              stroke="#FFFFFF"
              stroke-width="6"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <span class="text-white font-bold text-xl tracking-tight">
          iCraft<span class="gradient-text">HK</span>
        </span>
      </RouterLink>

      <!-- Desktop Nav -->
      <div class="hidden md:flex items-center gap-2">
        <RouterLink
          to="/"
          class="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
          :class="
            route.path === '/'
              ? 'text-white bg-white/10'
              : 'text-slate-400 hover:text-white hover:bg-white/5'
          "
        >
          {{ t("nav.home") }}
        </RouterLink>
        <RouterLink
          to="/contact"
          class="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ml-1"
          :class="
            route.path === '/contact'
              ? 'text-white bg-purple-600'
              : 'bg-linear-to-r from-purple-600 to-blue-600 text-white hover:from-purple-500 hover:to-blue-500 shadow-lg shadow-purple-900/30'
          "
        >
          {{ t("nav.contact") }}
        </RouterLink>
        <!-- Language toggle -->
        <button
          @click="toggleLocale"
          class="px-3 py-2 rounded-lg text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 transition-all duration-200 tracking-wide"
          :title="
            locale === 'en' ? 'Switch to Traditional Chinese' : '切換至英文'
          "
        >
          {{ locale === "en" ? "中文" : "EN" }}
        </button>
      </div>

      <!-- Mobile menu button -->
      <button
        class="md:hidden text-slate-400 hover:text-white p-2 rounded-lg hover:bg-white/5 transition-colors duration-200"
        @click="mobileMenuOpen = !mobileMenuOpen"
        aria-label="Toggle menu"
      >
        <svg
          v-if="!mobileMenuOpen"
          class="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <svg
          v-else
          class="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>

    <!-- Mobile menu -->
    <Transition name="slide-down">
      <div
        v-if="mobileMenuOpen"
        class="md:hidden bg-slate-900/95 backdrop-blur-xl border-b border-white/10 px-6 pb-4"
      >
        <div class="flex flex-col gap-2 pt-2">
          <RouterLink
            to="/"
            class="px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200"
            :class="
              route.path === '/'
                ? 'text-white bg-white/10'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            "
            @click="mobileMenuOpen = false"
          >
            {{ t("nav.home") }}
          </RouterLink>
          <RouterLink
            to="/contact"
            class="px-4 py-3 rounded-lg text-sm font-medium bg-linear-to-r from-purple-600 to-blue-600 text-white text-center"
            @click="mobileMenuOpen = false"
          >
            {{ t("nav.contact") }}
          </RouterLink>
          <button
            @click="
              toggleLocale;
              mobileMenuOpen = false;
            "
            class="px-4 py-3 rounded-lg text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 text-left transition-all duration-200"
          >
            {{ locale === "en" ? "中文" : "EN" }}
          </button>
        </div>
      </div>
    </Transition>

    <!-- Urgency banner -->
    <div class="py-4 bg-white border-t border-black/10">
      <div
        class="max-w-7xl mx-auto px-6 flex items-center justify-between gap-4"
      >
        <span
          class="flex items-center gap-1.5 text-black text-xs font-black uppercase tracking-widest shrink-0"
        >
          {{ t("nav.bannerSeatsPre") }}
          <span
            class="inline-flex items-center justify-center text-xl font-black leading-none bg-black text-white rounded-md w-8 h-8"
            >{{ t("nav.bannerSeatsNum") }}</span
          >
          {{ t("nav.bannerSeatsPost") }}
        </span>
        <span
          class="hidden sm:inline-flex sm:items-center text-black/70 text-xs text-center flex-1 font-medium justify-center"
          >{{ t("nav.bannerDesc") }}</span
        >
        <RouterLink
          to="/contact"
          class="shrink-0 text-xs font-black text-white bg-black hover:bg-black/80 px-3 py-1 rounded-full transition-all duration-200"
        >
          {{ t("nav.bannerCta") }}
        </RouterLink>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.2s ease;
}
.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

@keyframes bannerShift {
  0% {
    background-position: 0% 0;
  }
  100% {
    background-position: 200% 0;
  }
}
</style>
