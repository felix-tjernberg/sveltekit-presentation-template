<script lang="ts">
    import { goto } from "$app/navigation"
    import { page } from "$app/stores"

    const MIN_SLIDE_NUMBER = 1
    const MAX_SLIDE_NUMBER = 20

    $: slideNumber = Number($page.params.slideNumber)
    $: allowPreviousSlide = !(slideNumber <= MIN_SLIDE_NUMBER)
    $: allowNextSlide = !(slideNumber >= MAX_SLIDE_NUMBER)
    $: previousSlideUrl = `/slide/${slideNumber - 1}`
    $: nextSlideUrl = `/slide/${slideNumber + 1}`
</script>

<svelte:body
    on:keydown={(event) => {
        const { key } = event
        switch (key) {
            case "ArrowLeft":
                if (allowPreviousSlide) return goto(previousSlideUrl)
                break
            case "ArrowRight":
                if (allowNextSlide) return goto(nextSlideUrl)
                break
        }
    }} />

<slot />

{#if allowPreviousSlide}
    <a href={previousSlideUrl}>Previous</a>
{/if}
{#if allowNextSlide}
    <a href={nextSlideUrl}>Next</a>
{/if}
