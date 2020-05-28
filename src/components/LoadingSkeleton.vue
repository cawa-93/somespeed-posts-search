<template>
    <label>
        <span class="skeleton">Choose brand:</span>
        <input type="text" disabled class="skeleton">
    </label>
</template>

<script>
    export default {
        name: 'LoadingSkeleton',
    }
</script>

<style scoped>
    .skeleton {
        background: gainsboro;
        color: gainsboro;
        cursor: wait;
        border: none;
    }
</style>
