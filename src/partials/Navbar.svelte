<script lang="ts">
	import { Icon } from 'svelte-icons-pack';
	import { BsList, BsX } from 'svelte-icons-pack/bs';
	import {
		RiArrowsArrowDownSLine
	} from 'svelte-icons-pack/ri';
	import * as HoverCard from '$lib/components/ui/hover-card/index.js';
	import { NAVBAR_OPEN } from '@/states/navbar';
	import { ProgramsShort } from '@/data/programs';
	import NavMenuItems from './NavMenuItems.svelte';

	function closeNavbar() {
		NAVBAR_OPEN.set(false);
	}
</script>

<div
	id="top"
	class="top-0 z-99 fixed w-full h-24 flex flex-col items-center justify-center py-auto bg-istq text-istq-white shadow-lg"
>
	<div
		class="h-full px-4 md:px-0 container max-w-6xl flex flex-row items-center justify-between mx-auto"
	>
		<div class="flex flex-row gap-3 items-center">
			<a href="/" class="w-fit h-fit
				focus:outline-none focus:ring-0 focus:ring-offset-0
				flex flex-row items-center gap-2">
				<img
					src="/icons/logo.png"
					alt="Pondok Yatim Istiqomah Logo"
					class="h-16 w-auto object-contain"
					fetchpriority="high"
				/>
				<div class="flex flex-col gap-0">
					<span class="text-xs shrink-0 whitespace-nowrap">Yayasan Pondok Yatim</span>
					<span class="text-xl font-bold shrink-0 whitespace-nowrap">ISTIQOMAH</span>
				</div>
			</a>
		</div>
		<nav class="hidden md:flex flex-row gap-6 items-center justify-center w-fit text-sm">
			<a href="/" class="hover:text-istq-orange">Beranda</a>
			<a href="/profil">
				<HoverCard.Root openDelay={100} closeDelay={100}>
					<HoverCard.Trigger class="flex flex-row items-center gap-1 hover:text-istq-orange">
						<span>Profil</span>
						<Icon src={RiArrowsArrowDownSLine} size="20" className="" />
					</HoverCard.Trigger>
					<HoverCard.Content class="z-100 px-2 py-3">
						<div class="flex flex-col text-sm">
							<a
								href="/profil#tentang"
								class="block px-4 py-2 hover:bg-istq-orange/10 hover:text-istq-orange-darker rounded-md"
							>
								Tentang
							</a>
							<a
								href="/profil#visi"
								class="block px-4 py-2 hover:bg-istq-orange/10 hover:text-istq-orange-darker rounded-md"
							>
								Visi
							</a>
							<a
								href="/profil#misi"
								class="block px-4 py-2 hover:bg-istq-orange/10 hover:text-istq-orange-darker rounded-md"
							>
								Misi
							</a>
							<a
								href="/profil#struktur"
								class="block px-4 py-2 hover:bg-istq-orange/10 hover:text-istq-orange-darker rounded-md"
							>
								Struktur
							</a>
							<a
								href="/profil#logo"
								class="block px-4 py-2 hover:bg-istq-orange/10 hover:text-istq-orange-darker rounded-md"
							>
								Makna Logo
							</a>
						</div>
					</HoverCard.Content>
				</HoverCard.Root>
			</a>
			<a href="/program">
				<HoverCard.Root openDelay={100} closeDelay={100}>
					<HoverCard.Trigger class="flex flex-row items-center gap-1 hover:text-istq-orange">
						<span>Program</span>
						<Icon src={RiArrowsArrowDownSLine} size="20" className="" />
					</HoverCard.Trigger>
					<HoverCard.Content class="z-100 px-2 py-3 w-[300px]">
						<div class="flex flex-col text-sm">
							{#each ProgramsShort as pg}
								<a
									href="{pg.link}"
									data-sveltekit-reload
									class="block px-4 py-2 hover:bg-istq-orange/10 hover:text-istq-orange-darker rounded-md"
								>
									{pg.title}
								</a>
							{/each}
						</div>
					</HoverCard.Content>
				</HoverCard.Root>
			</a>
			<a href="/#layanan" class="hover:text-istq-orange">Layanan</a>
			<a href="/posts" class="hover:text-istq-orange">Artikel</a>
			<a href="/ramadhan" class="hover:text-istq-orange">Ramadhan 1447</a>
		</nav>
		<a
			href="https://wa.me/6281285960701"
			class="md:block hidden w-fit h-fit cursor-pointer py-2 px-8 font-medium rounded-full text-istq bg-istq-orange hover:bg-istq-orange-darker text-sm"
		>
			Donasi
		</a>
		<div class="flex md:hidden">
			<button type="button" onclick={() => ($NAVBAR_OPEN = !$NAVBAR_OPEN)} class="">
				<Icon src={$NAVBAR_OPEN ? BsX : BsList} size="30" />
			</button>
		</div>
	</div>
</div>

<aside
	class="{$NAVBAR_OPEN ? 'translate-y-0' : ''}
  top-24
  fixed z-98 transition-all
  duration-300
  ease-in-out
  bg-white
  shadow-lg
  w-full h-fit
  -translate-y-full
  "
>
	<div class="flex flex-col gap-3 py-5 font-medium">
		<a href="/" class="hover:text-qc px-5" onclick={closeNavbar}>Beranda</a>
		<span class="h-px w-full border-t border-dashed border-gray-300"></span>
		<NavMenuItems
			name="Profil"
			links={[
				{ name: 'Tentang', link: '/profile#tentang' },
				{ name: 'Visi', link: '/profile#visi' },
				{ name: 'Misi', link: '/profile#misi' },
				{ name: 'Struktur', link: '/profile#struktur' },
				{ name: 'Logo', link: '/profile#logo' }
			]}
		/>
		<span class="h-px w-full border-t border-dashed border-gray-300"></span>
		<NavMenuItems
			name="Program"
			links={[
				{ name: 'Semua Program', link: '/program' },
				...ProgramsShort.map((program) => ({
					name: String(program.title),
					link: String(program.link)
				}))
			]}
		/>
		<span class="h-px w-full border-t border-dashed border-gray-300"></span>
		<a href="/layanan" class="hover:text-qc px-5" onclick={closeNavbar}>Layanan</a>
		<span class="h-px w-full border-t border-dashed border-gray-300"></span>
		<a href="/posts" class="hover:text-qc px-5" onclick={closeNavbar}>Artikel</a>
		<span class="h-px w-full border-t border-dashed border-gray-300"></span>
		<a href="/ramadhan" class="hover:text-qc px-5" onclick={closeNavbar}>Ramadhan 1447</a>
	</div>
</aside>