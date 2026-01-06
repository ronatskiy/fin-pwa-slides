<template>
  <div class="slidev-layout cover h-full grid place-content-center text-center">
    <div class="my-auto w-full flex flex-col items-center justify-center gap-4">
      
      <img src="/ReStartLogo.png" class="logo-right-top animate-fade-in-up" />


      <img src="/LogoRazom.png" class="logo-left-top" />

      <!-- Контент слайда (Заголовок і текст) -->
      <div class="slide-content relative z-10">
        <slot />
      </div>

      <!-- Місце для авторів -->
      <div class="absolute left-20 bottom-16 text-left z-10">
        <div class="text-sm opacity-60 uppercase tracking-widest mb-2">Підготували</div>
        <div class="text-xl font-bold flex flex-col gap-2 whitespace-pre-line">
          <slot name="authors">
            {{ $frontmatter.authors || 'Команда проекту' }}
          </slot>
        </div>
      </div>

      <div
        class="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-purple-500 z-2"
      ></div>
    </div>
    
    <!-- Декоративні елементи (Хвиля) -->
    <div class="wave-bg"></div>
  </div>
</template>

<style>
.slidev-layout.cover {
  background-color: #faefe5;
  color: #333;
  position: relative;
  overflow: hidden;
}

.wave-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' viewBox='0 0 1600 900' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 1090,-100 C 890,150 1440,300 1340,500 S 1040,750 1540,900 S 2140,1150 2240,1350' fill='none' stroke='%23EDD1C9' stroke-width='60' stroke-linecap='round' /%3E%3C/svg%3E");
  background-size: cover;
  background-position: center;
  z-index: 0;
  pointer-events: none;
}

.slidev-layout.cover h1 {
  font-size: 3.5rem;
  line-height: 1.2;
  font-weight: 800;
  margin-bottom: 1rem;
  background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.slidev-layout.cover p {
  font-size: 1.5rem;
  opacity: 0.8;
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.logo-left-top {
  position: absolute;
  top: 20px;
  left: 20px;
  width: 200px;
  z-index: 100;
}

.logo-right-top {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 200px;
  z-index: 100;
}

</style>
