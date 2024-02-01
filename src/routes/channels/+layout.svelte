<!-- <script>
import { readable } from "svelte/store";

export const socketStore = readable({}, set => {
    const socket = new WebSocket("wss://gateway.discord.gg");

    socket.addEventListener("message", function (event) {
      const data = JSON.parse(event.data);
      set(data);
    });

    return () => { socket.close() };
});
</script> -->

<script lang="ts">
import Servers from "./Servers.svelte";
</script>

<style>
@import './main.css';
</style>


<slot />
