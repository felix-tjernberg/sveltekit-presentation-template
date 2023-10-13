<script lang="ts">
    import SvelteReligion from "./SvelteReligion/SvelteReligion.svelte"
    import SvelteReligion2 from "./SvelteReligion2/SvelteReligion.svelte"

    export let slideNumber: string

    function getSlideComponent(slideNumber: string) {
        switch (slideNumber) {
            case "1":
                return SvelteReligion
            case "2":
                return SvelteReligion2
        }
    }
</script>

<svelte:component this={getSlideComponent(slideNumber)} />
