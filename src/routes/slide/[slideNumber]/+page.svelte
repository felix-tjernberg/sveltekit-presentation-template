<script lang="ts">
    import Slide from "$lib/components/Slide/Slide.svelte"
    import { page } from "$app/stores"

    const slideNumber = $page.params.slideNumber
</script>

<Slide {slideNumber} />
