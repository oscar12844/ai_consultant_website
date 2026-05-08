<template>
  <div class="flex justify-center">
    <div class="relative">
      <!-- iPhone 14 Pro Max Frame -->
      <div
        class="relative rounded-[3rem] p-0.75 shadow-2xl"
        style="width: 260px; height: 564px; background: linear-gradient(145deg, #3a3a3c, #1c1c1e, #3a3a3c)"
      >
        <!-- Inner frame -->
        <div class="bg-gray-900 rounded-[2.9rem] w-full h-full overflow-hidden relative p-1.5">
          <!-- Screen -->
          <div class="bg-black rounded-[2.5rem] w-full h-full overflow-hidden relative">
            <!-- Dynamic Island -->
            <div class="absolute z-30 top-3 left-1/2 -translate-x-1/2 bg-black rounded-full w-24 h-6 border border-gray-800"></div>

            <!-- Status bar -->
            <div class="absolute z-20 top-0 left-0 right-0 h-12 flex items-start justify-between px-8 pt-3">
              <span class="text-white text-xs font-semibold">9:41</span>
              <div class="flex items-center gap-1 mt-0.5">
                <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/></svg>
                <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z"/></svg>
              </div>
            </div>

            <!-- App Content -->
            <div class="w-full h-full">
              <slot>
                <!-- Default fake app screen -->
                <div class="w-full h-full bg-linear-to-b from-slate-900 to-slate-800 pt-14 px-3">
                  <div class="text-white text-xs font-semibold mb-3 px-1">Dashboard</div>
                  <div class="bg-linear-to-br from-purple-600 to-blue-600 rounded-2xl p-3 mb-3">
                    <div class="text-white/60 text-xs mb-1">Total Revenue</div>
                    <div class="text-white font-bold text-lg">$12,450</div>
                    <div class="text-green-300 text-xs">↑ 24% this month</div>
                  </div>
                  <div class="grid grid-cols-2 gap-2 mb-3">
                    <div class="bg-slate-700/60 rounded-xl p-2.5">
                      <div class="text-slate-400 text-xs">Users</div>
                      <div class="text-white font-semibold text-sm">1,280</div>
                    </div>
                    <div class="bg-slate-700/60 rounded-xl p-2.5">
                      <div class="text-slate-400 text-xs">Orders</div>
                      <div class="text-white font-semibold text-sm">340</div>
                    </div>
                  </div>
                  <div class="bg-slate-700/40 rounded-xl p-2.5 mb-2">
                    <div class="text-slate-400 text-xs mb-2">Recent Orders</div>
                    <div v-for="(item, i) in orders" :key="i" class="flex items-center justify-between py-1.5 border-b border-slate-600/30 last:border-0">
                      <div class="flex items-center gap-2">
                        <div class="w-5 h-5 rounded-full" :style="{ background: item.color }"></div>
                        <div class="text-white text-xs">{{ item.name }}</div>
                      </div>
                      <div class="text-green-400 text-xs font-medium">{{ item.amount }}</div>
                    </div>
                  </div>
                </div>
              </slot>
            </div>

            <!-- Home indicator -->
            <div class="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-white/40 rounded-full"></div>
          </div>
        </div>

        <!-- Side buttons -->
        <div class="absolute -left-0.75 top-24 w-1 h-8 bg-gray-600 rounded-l-sm"></div>
        <div class="absolute -left-0.75 top-36 w-1 h-10 bg-gray-600 rounded-l-sm"></div>
        <div class="absolute -left-0.75 top-48 w-1 h-10 bg-gray-600 rounded-l-sm"></div>
        <div class="absolute -right-0.75 top-32 w-1 h-14 bg-gray-600 rounded-r-sm"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
const orders = [
  { name: "Sarah K.", amount: "$89", color: "linear-gradient(135deg,#7C3AED,#2563EB)" },
  { name: "Mike R.", amount: "$145", color: "linear-gradient(135deg,#06B6D4,#2563EB)" },
  { name: "Amy L.", amount: "$67", color: "linear-gradient(135deg,#F97316,#EC4899)" },
];
</script>
