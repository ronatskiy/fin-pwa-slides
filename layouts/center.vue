<template>
  <div class="slidev-layout center h-full grid place-content-center relative">
    <slot />
    <img src="/ReStartLogo.png" class="logo" />

    <!-- Номер слайда -->
    <div class="absolute bottom-3 left-4 text-sm opacity-50 z-10 font-mono">
      {{ $slidev.nav.currentPage }} / {{ $slidev.nav.total }}
    </div>

     <!-- Декоративні елементи -->
      <div
        class="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-purple-500"
      ></div>
  </div>
</template>

<style scoped>
.logo {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 120px;
  z-index: 100;
}
</style>
