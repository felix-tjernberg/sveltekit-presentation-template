<script lang="ts">
    import Oops from "./Oops.svelte"
    import Slide1 from "./Slide1.svelte"

    export let slideNumber: string

    function getSlideComponent(slideNumber: string) {
        switch (slideNumber) {
            case "1":
                return Slide1
            default:
                return Oops
        }
    }
</script>

<svelte:component this={getSlideComponent(slideNumber)} />
