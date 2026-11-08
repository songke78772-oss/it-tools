<script lang="ts" setup>
import { NIcon, useThemeVars } from 'naive-ui';
import { RouterLink } from 'vue-router';
import { Home2 } from '@vicons/tabler';
import { storeToRefs } from 'pinia';
import MenuLayout from '../components/MenuLayout.vue';
import { useStyleStore } from '@/stores/style.store';
import { useToolStore } from '@/tools/tools.store';

const themeVars = useThemeVars();
const styleStore = useStyleStore();
const toolStore = useToolStore();
const { toolsByCategory } = storeToRefs(toolStore);
</script>

<template>
  <MenuLayout class="menu-layout" :class="{ isSmallScreen: styleStore.isSmallScreen }">
    <template #content>
      <div flex items-center justify-center gap-2 py-3>
        <c-tooltip :tooltip="$t('home.home')" position="bottom">
          <c-button to="/" circle variant="text" :aria-label="$t('home.home')">
            <NIcon size="25" :component="Home2" />
          </c-button>
        </c-tooltip>
        <span class="text-lg font-semibold">Tools</span>
      </div>
      <slot />
    </template>
  </MenuLayout>
</template>

<style lang="less" scoped>
</style>
