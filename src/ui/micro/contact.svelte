<!-- script -->
<script lang="ts">
  /* svelte imports */
  import { page } from '$app/stores'
  import { goto } from '$app/navigation'
  import { browser } from '$app/environment'
  /* stores imports */
  import { modalFocused } from '../../stores/modals.store'
  /* data */
  import { dropdownContacts, currentContact, contacts } from '../../support/data'
  /* types */
  import type { ContactType } from '../../types/common'
  import { postRequest, type DefaultResponseType } from '../../managers/rest.manager'
  /* ui imports */
  import ContactDesktop from '../components/desktop/contact.desktop.svelte'
  import Selector from '../atoms/selector.svelte'
  import Input from '../atoms/input.svelte'
  import Textarea from '../atoms/textarea.svelte'
  import Button from '../atoms/button.svelte'

  /* props */
  export let gridRow: string = 'auto'
  export let gridColumn: string = 'auto'
  /* refs*/
  let formRef: HTMLFormElement | null = null
  /* constants */
  let openModal: boolean = false /* todo svelte 5 change to reactive */
  let shouldOpen: boolean = false
  let isLoading: boolean = false
  let selected: string = currentContact.text
  let selectedContent: ContactType = contacts[currentContact.id]
  let formMessage: { error: boolean, text: string } = { error: false, text: '' }
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
      const s = query.get('s')
      if (s && parseInt(s, 10)) {
        selectedContent = contacts[parseInt(s, 10)]
        selected = dropdownContacts[parseInt(s, 10)].text
      }
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
    selectedContent = contacts.filter((v) => v.id === e.detail.value)[0]
  }
  async function submitRequest() {
    isLoading = true
    if (!selectedContent || !formRef) { return }
    let formData = new FormData(formRef)
    const response = await postRequest<DefaultResponseType>(selectedContent.url, formData)
    isLoading = false
    if (response.success === true) {
      formMessage = { error: false, text: '[ submission has been registered correctly ]'}
    } else {
      formMessage = { error: true, text: `[ ${response.error} ]` }
    }
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
  modalHeight="570px"
  modalLeft="20%"
  modalBottom="40%"
  gridColumn={gridColumn}
  gridRow={gridRow}
  openModal={openModal}
  on:open={onOpen}
  on:close={onClose}
>
  <div class="content">
    <div class="selector-container">
      <Selector
        label="reason"
        items={dropdownContacts}
        selected={selected}
        on:itemClick={selectorCallback}
      />
    </div>
    <form bind:this={formRef}>
      <div class="inputs-container">
        {#each selectedContent.inputs as value}
          {#if value.type === 'input'}
            <Input
              id={value.id}
              label={value.label}
              labelAddition={value.labelAddition}
              type={value.inputType || 'text'}
              max={50}
            />
          {/if}
          {#if value.type === 'area'}
            <Textarea
              id={value.id}
              label={value.label}
              labelAddition={value.labelAddition}
              max={300}
            />
          {/if}
        {/each}
      </div>
      <div class="button-container">
        <Button
          width="300px"
          on:click={submitRequest}
          isLoading={isLoading}
          message={formMessage}
        >
          <span class="button-title">submit</span>
        </Button>
      </div>
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
    padding-top: 8px;
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
  .label {
    /* margins */
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 3px;
    /* fonts */
    font-size: 14px;
    font-weight: 400;
    /* color */
    color: var(--color-highlight);
    text-shadow: 1px 0px var(--color-neon-blue), 0px -1px var(--color-neon-violet);
  }
  .button-container {
    /* margins */
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 28px;
  }
  .button-title {
    /* fonts */
    font-size: 16px;
    font-weight: 400;
    /* color */
    color: var(--color-black);
    text-shadow: 1px 0px var(--color-neon-blue), 0px -1px var(--color-neon-violet);   
  }
</style>