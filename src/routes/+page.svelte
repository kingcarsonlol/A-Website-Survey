<script>
import { userStyles } from "$lib/state/userStyles.svelte";
import { goto } from "$app/navigation";
</script>

<div class="h-[100vh] flex flex-col items-center justify-center">
    <h1 class="text-8xl mb-10">A Website Survey</h1>
    <button class="!text-3xl {userStyles.button.join(" ")}" on:click={() => goto("/survey")}>
        START
    </button>
</div>