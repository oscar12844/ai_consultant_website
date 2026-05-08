<template>
  <div class="w-full max-w-lg mx-auto">
    <!-- Browser Chrome -->
    <div class="rounded-xl overflow-hidden shadow-2xl border border-white/10" style="background: #1e2433">
      <!-- Title Bar -->
      <div class="flex items-center gap-3 px-4 py-3 border-b border-white/10" style="background: #252b3b">
        <!-- Traffic lights -->
        <div class="flex items-center gap-1.5">
          <div class="w-3 h-3 rounded-full bg-red-500"></div>
          <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div class="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <!-- Address bar -->
        <div class="flex-1 flex items-center gap-2 bg-slate-900/60 rounded-md px-3 py-1.5">
          <svg class="w-3 h-3 text-green-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"/>
          </svg>
          <span class="text-slate-400 text-xs font-mono truncate">{{ url }}</span>
        </div>
        <!-- Nav buttons -->
        <div class="flex items-center gap-1.5">
          <div class="w-4 h-4 rounded bg-slate-700/50 flex items-center justify-center">
            <svg class="w-2 h-2 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M15 19l-7-7 7-7"/></svg>
          </div>
          <div class="w-4 h-4 rounded bg-slate-700/50 flex items-center justify-center">
            <svg class="w-2 h-2 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7"/></svg>
          </div>
        </div>
      </div>

      <!-- Page Content -->
      <div class="overflow-hidden" style="height: 340px; background: #0f172a">
        <slot>
          <!-- Default: fake SaaS dashboard -->
          <div class="flex h-full">
            <!-- Sidebar -->
            <div class="w-40 border-r border-white/5 p-3 shrink-0" style="background: #141c2e">
              <div class="text-purple-400 font-bold text-xs mb-4 px-2">myapp.io</div>
              <div v-for="item in sidebarItems" :key="item.label"
                class="flex items-center gap-2 px-2 py-1.5 rounded-lg mb-1 text-xs transition-colors"
                :class="item.active ? 'bg-purple-600/20 text-purple-300' : 'text-slate-500 hover:text-slate-300'">
                <span>{{ item.icon }}</span>
                <span>{{ item.label }}</span>
              </div>
            </div>

            <!-- Main content -->
            <div class="flex-1 p-4 overflow-hidden">
              <div class="flex items-center justify-between mb-4">
                <div>
                  <div class="text-white font-semibold text-sm">Dashboard</div>
                  <div class="text-slate-500 text-xs">Welcome back, Alex</div>
                </div>
                <div class="bg-linear-to-r from-purple-600 to-blue-600 text-white text-xs px-3 py-1.5 rounded-lg">+ New</div>
              </div>

              <!-- Stats row -->
              <div class="grid grid-cols-3 gap-3 mb-4">
                <div v-for="stat in stats" :key="stat.label" class="bg-slate-800/60 rounded-lg p-3">
                  <div class="text-slate-500 text-xs mb-1">{{ stat.label }}</div>
                  <div class="text-white font-bold text-sm">{{ stat.value }}</div>
                  <div class="text-xs mt-1" :class="stat.up ? 'text-green-400' : 'text-red-400'">
                    {{ stat.up ? '↑' : '↓' }} {{ stat.change }}
                  </div>
                </div>
              </div>

              <!-- Chart placeholder -->
              <div class="bg-slate-800/40 rounded-lg p-3">
                <div class="text-slate-400 text-xs mb-3">Revenue (Last 7 days)</div>
                <div class="flex items-end gap-2 h-16">
                  <div v-for="(bar, i) in chartBars" :key="i"
                    class="flex-1 rounded-t-sm"
                    :style="{ height: bar + '%', background: i === 6 ? 'linear-gradient(to top, #7C3AED, #06B6D4)' : 'rgba(124,58,237,0.3)' }">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  url: { type: String, default: "myapp.io/dashboard" },
});

const sidebarItems = [
  { icon: "📊", label: "Dashboard", active: true },
  { icon: "👥", label: "Users", active: false },
  { icon: "🛒", label: "Orders", active: false },
  { icon: "📦", label: "Products", active: false },
  { icon: "⚙️", label: "Settings", active: false },
];

const stats = [
  { label: "Revenue", value: "$24.5K", up: true, change: "12%" },
  { label: "Users", value: "3,280", up: true, change: "8%" },
  { label: "Churn", value: "2.4%", up: false, change: "0.3%" },
];

const chartBars = [40, 60, 45, 75, 55, 80, 100];
</script>
