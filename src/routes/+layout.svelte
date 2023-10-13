<script lang="ts">
    import "$lib/utilities/stylesheets/stylesheets.css"
    import Background from "$lib/components/Background.svelte"
</script>

<div class="grid-stack height-100p">
    <Background />
    <slot />
</div>
