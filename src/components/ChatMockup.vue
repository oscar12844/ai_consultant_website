<template>
  <div class="w-full max-w-sm mx-auto">
    <div class="rounded-2xl overflow-hidden border border-white/10 shadow-2xl" style="background: #141c2e">
      <!-- Header -->
      <div class="flex items-center gap-3 px-4 py-3 border-b border-white/10" style="background: #1e2433">
        <div class="w-8 h-8 rounded-full bg-linear-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white text-xs font-bold shrink-0">
          AI
        </div>
        <div>
          <div class="text-white text-sm font-semibold">AI Assistant</div>
          <div class="flex items-center gap-1">
            <div class="w-1.5 h-1.5 rounded-full bg-green-400"></div>
            <div class="text-green-400 text-xs">Online</div>
          </div>
        </div>
      </div>

      <!-- Messages -->
      <div class="p-4 space-y-3" style="min-height: 280px">
        <div v-for="(msg, i) in messages" :key="i" class="flex" :class="msg.from === 'user' ? 'justify-end' : 'justify-start'">
          <!-- AI avatar -->
          <div v-if="msg.from === 'ai'" class="w-6 h-6 rounded-full bg-linear-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white text-xs font-bold shrink-0 mr-2 mt-1">
            AI
          </div>
          <div
            class="max-w-[80%] px-3 py-2 rounded-2xl text-sm leading-relaxed"
            :class="msg.from === 'user'
              ? 'bg-linear-to-br from-purple-600 to-blue-600 text-white rounded-br-sm'
              : 'bg-slate-700/60 text-slate-200 rounded-bl-sm'"
          >
            <span v-if="msg.typing" class="flex items-center gap-1 py-1">
              <span class="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style="animation-delay:0ms"></span>
              <span class="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style="animation-delay:150ms"></span>
              <span class="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style="animation-delay:300ms"></span>
            </span>
            <span v-else>{{ msg.text }}</span>
          </div>
        </div>
      </div>

      <!-- Input bar -->
      <div class="flex items-center gap-2 px-4 py-3 border-t border-white/10" style="background: #1e2433">
        <div class="flex-1 bg-slate-800/80 rounded-xl px-3 py-2 text-slate-500 text-sm">
          Ask me anything...
        </div>
        <div class="w-8 h-8 rounded-xl bg-linear-to-br from-purple-600 to-blue-600 flex items-center justify-center shrink-0">
          <svg class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const messages = [
  { from: "user", text: "I want to build an AI chatbot for my e-commerce store" },
  { from: "ai", text: "Great idea! I can help you build a customer support AI that handles orders, FAQs, and product recommendations — fully connected to your store's database." },
  { from: "user", text: "Will it work 24/7? I don't want to miss any customers." },
  { from: "ai", text: "Yes! We'll deploy it on cloud infrastructure with 99.9% uptime, auto-scaling, and real-time monitoring. You focus on your business, we handle the tech. 🚀" },
];
</script>
