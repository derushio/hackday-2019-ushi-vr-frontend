<template lang='pug'>
#$__CLASS_NAME__$.fill-height
    .main-pane
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class $__CLASS_NAME__$ extends Vue {}
</script>

<style lang='stylus'>
@require '~@/assets/styles/entry/view.styl';

html
    scroll-view: true;
    // static-view: true;

#$__CLASS_NAME__$
    .main-pane
        main-pane();
</style>
