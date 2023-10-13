<script lang="ts">
    import Slide from "$lib/components/Slide/Slide.svelte"
    import { page } from "$app/stores"

    $: slideNumber = $page.params.slideNumber
</script>

<Slide {slideNumber} />
