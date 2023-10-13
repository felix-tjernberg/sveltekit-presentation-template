<script lang="ts">
    import "$lib/utilities/stylesheets/stylesheets.css"
    import Background from "$lib/components/Background.svelte"

    let mouse = false
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
    class="grid-stack height-100p"
    on:mousemove={() => {
        mouse = true
        setTimeout(() => (mouse = false), 1000)
    }}
    style={`cursor: ${mouse ? "auto" : "none"}`}>
    <Background />
    <slot />
</div>
