<template>
  <div class="blue merida">
    <div ref="board" class="cg-board-wrap"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Chessground } from 'chessground';
import type { Api } from 'chessground/api';
import type { Config } from 'chessground/config';

interface Props {
  size?: string;
  config?: Partial<Config>;
}

const props = withDefaults(defineProps<Props>(), {
  size: '512px',
  config: {} as never,
});

const board = ref<HTMLElement | null>(null);
const cg = ref<Api | null>(null);

onMounted(() => {
  cg.value = Chessground(board.value!, props.config);
});
</script>

<style>
@import '../assets/themes.css';

.blue.merida {
  height: v-bind(size);
  width: v-bind(size);
}
</style>
