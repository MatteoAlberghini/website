<!-- script -->
<script lang="ts">
  /* svelte imports */
  import { page } from '$app/stores'
  import { goto } from '$app/navigation'
  import { browser } from '$app/environment'
  /* stores imports */
  import { modalFocused } from '../../stores/modals.store'
  /* data */
  import { dropdownContacts, currentContact } from '../../support/data'
  /* ui imports */
  import ContactDesktop from '../components/desktop/contact.desktop.svelte'
  import Selector from '../atoms/selector.svelte'
  import Input from '../atoms/input.svelte'
  import Textarea from '../atoms/textarea.svelte';

  /* props */
  export let gridRow: string = 'auto'
  export let gridColumn: string = 'auto'
  /* constants */
  let openModal: boolean = false /* todo svelte 5 change to reactive */
  let shouldOpen: boolean = false
  let selected: string = currentContact.text
  /* functions */
  function onOpen() { goto('/contacts') }
  function onClose() { goto('/') }
  function handleInitialPage() {
    if ($page.url.pathname === '/contacts') {
      shouldOpen = true
      if (browser) { triggerNavigation() }
    }
  }
  function triggerNavigation() {
    if (shouldOpen === true) {
      modalFocused.set(5)
      openModal = true
      let query = new URLSearchParams($page.url.searchParams.toString())
      query.delete('t')
      goto(`?${query.toString()}`).then(() => {
        openModal = false
        shouldOpen = false
      })
    }
  }
  /* callbacks */
  function selectorCallback(e: CustomEvent<{ value: string, text: string }>) {
    selected = e.detail.text
  }
  /* stores */
  $: $page, handleInitialPage()
</script>

<!-- template -->
<ContactDesktop
  uniqueId={5}
  text="contact.sh"
  mainColor="#2B4162"
  modalWidth="750px"
  modalHeight="600px"
  modalLeft="14%"
  modalBottom="30%"
  gridColumn={gridColumn}
  gridRow={gridRow}
  openModal={openModal}
  on:open={onOpen}
  on:close={onClose}
>
  <div class="content">
    <div class="selector-container">
      <Selector
        label="version"
        items={dropdownContacts}
        selected={selected}
        on:itemClick={selectorCallback}
      />
    </div>
    <form class="inputs-container">
      <Input id="email" label="email" type="email" />
      <Textarea id="info" label="your message" />
    </form>
  </div>
</ContactDesktop>

<!-- style -->
<style>
  .content {
    /* size */
    width: 100%;
    /* display */
    display: flex;
    justify-content: flex-start;
    align-self: center;
    flex-direction: column;
    flex-wrap: wrap;
    /* margins */
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 4px;
    padding-bottom: 24px;
  }
  .selector-container {
    /* flex */
    display: flex;
    align-self: flex-start;
    /* size */
    width: 100%;
    max-width: 435px;
  }
  .inputs-container {
    /* flex */
    display: flex;
    align-self: flex-start;
    flex-direction: column;
    /* size */
    width: 100%;
    max-width: 500px;
  }
</style>