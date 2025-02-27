<svelte:options tag="goa-side-menu" />

<script lang="ts">
  import { onMount, tick } from "svelte";
  import { isUrlMatch } from "../../common/urls";

  let _rootEl: HTMLElement;

  onMount(async () => {
    await tick();
    setCurrentUrl();
    addEventListeners();

  })

  function setCurrentUrl() {  
    const slot = _rootEl.querySelector("slot") as HTMLSlotElement;
    if (!slot) {
      return false;
    }

    const links = slot
        .assignedElements()
        .filter((el: HTMLElement) => el.tagName === "A");

    let currentEl: HTMLElement;
    let maxWeight = 0;
    links.forEach((child: HTMLElement) => {
      const weight = isUrlMatch(document.location, child.getAttribute("href"));
      if (weight > maxWeight) {
        maxWeight = weight
        currentEl = child
      } 
      child.classList.remove("current");
    })

    if (currentEl) {
      currentEl.classList.add("current");
    }
  }

  function addEventListeners() {
    // watch path changes
    let currentLocation = document.location.href;
    const observer = new MutationObserver((_mutationList) => {
      if (isUrlMatch(document.location, currentLocation)) {
        currentLocation = document.location.href;
        setCurrentUrl();
      }
    });
    observer.observe(document.body, {childList: true, subtree: true });

    // watch hash / browser history changes
    window.addEventListener("popstate", () => {
      setCurrentUrl();
    })
  }
</script>

<style>
  ::slotted(a),
  ::slotted(a:visited) {
    /* required to override base styles */
    color: var(--goa-color-text-default) !important; 

    display: block;
    font: var(--goa-typography-body-m);
    padding: 0.5rem 1rem 0.5rem 2rem;
    text-decoration: none;
  }
  ::slotted(a.current) {
    font: var(--goa-typography-heading-s);
    background: #CEDFEE;
  }
  ::slotted(a:hover:not(.current)) {
    background: #CEDFEE;
  }
  ::slotted(a:focus-visible) {
    outline: var(--goa-border-width-l) solid var(--goa-color-interactive-focus);
  }
  
  .side-menu {
    display: block;
  }
</style>

<div 
  bind:this={_rootEl}
  class="side-menu"
>
  <slot />
</div>

