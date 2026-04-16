<script lang="ts">
	let {
		id = '',
		label = '',
		checked = $bindable(false)
	}: {
		id: string;
		label: string;
		checked: boolean;
	} = $props();
</script>

<div class="relative flex flex-row-reverse items-center w-fit gap-0.5 bool">
	<label
    class="ml-2.5 text-xs text-gray-500 line-clamp-1 text-nowrap whitespace-nowrap"
    for={id}
  >{label}</label>
	<label class="relative inline w-12.5 h-6 ml-0! switcher" for={id}>
		<input
      type="checkbox"
      {id}
      bind:checked
      class="opacity-0 w-0 h-0"
    />
		<span class="absolute cursor-pointer top-0 left-0 right-0 bottom-0
     bg-gray-400 transition-all duration-200 ease-in-out
     before:absolute bedore:content-[''] before:h-4 before:w-4
     before:left-1 before:bottom-1 before:bg-white
     before:transition-all before:duration-200 before:ease-in-out
     slider"></span>
	</label>
</div>

<style>
	.switcher input:checked + .slider {
		background-color: #26288b !important;
	}

	.switcher input:focus + .slider {
		box-shadow: 0 0 1px var(--color-sky-006) !important;
	}

	.switcher input:checked + .slider:before {
		-webkit-transform: translateX(26px);
		-ms-transform: translateX(26px);
		transform: translateX(26px);
	}

	.switcher .slider {
		border-radius: 34px;
	}

	.switcher .slider:before {
		border-radius: 50%;
	}
</style>
