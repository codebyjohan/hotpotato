<script lang="ts">
    import { receive, send } from "$lib/utilities/transitions"
    export let exploded: boolean = false
</script>

<span class="potato" in:receive={{ key: "emoji" }} out:send={{ key: "emoji" }}>
    {exploded ? "💥" : "🥔"}
</span>

<style>
    .potato {
        position: absolute;
        left: 50px;
        top: 13px;
    }

    @media (max-width: 800px) {
        .potato {
            left: 80px;
        }
    }
</style>
