<template>
  <div class="categoryPanel flex flex-col justify-between p-6">
    <nav class="main">
      <slot />
    </nav>
    <slot name="after" />
  </div>
</template>
