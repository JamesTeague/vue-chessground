<script setup lang="ts">
import Chessboard from '@/components/Chessboard.vue';
import { ref } from 'vue';
const fen = ref('rqbkrnnb/pppppppp/8/8/8/8/PPPPPPPP/RQBKRNNB w - - 0 1');
</script>

<template><Chessboard :fen="fen" /></template>
