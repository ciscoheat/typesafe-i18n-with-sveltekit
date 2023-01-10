<script lang="ts">
  import { invalidateAll } from '$app/navigation';
  import { LL } from '$lib/i18n/i18n-svelte';
</script>

<h1>{$LL.HI({ name: 'World' })}</h1>

<form action="/apples/1">
  <button>1 🍎</button>
</form>

<form action="/apples/3">
  <button>3 🍎</button>
</form>

<p>
  {$LL.SWITCH_LANGUAGE()}: <a on:click={invalidateAll} href="/?lang=en">English</a>
  <a on:click={invalidateAll} href="/?lang=de">Deutsch</a>
</p>

<style>
  form {
    display: inline;
  }

  form button {
    font-size: 120%;
  }

  p {
    margin-top: 2rem;
  }
</style>
