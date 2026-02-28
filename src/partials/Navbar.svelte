<script lang="ts">
	import { Icon } from 'svelte-icons-pack';
	import { BsList, BsX } from 'svelte-icons-pack/bs';
	import {
		RiArrowsArrowDownSLine,
		RiBusinessCalendar2Line,
		RiBusinessMailLine,
		RiLogosFacebookFill,
		RiLogosInstagramLine,
		RiLogosTwitterXFill,
		RiLogosWhatsappLine,
		RiLogosYoutubeLine
	} from 'svelte-icons-pack/ri';
	import * as HoverCard from '$lib/components/ui/hover-card/index.js';
	import { NAVBAR_OPEN } from '@/states/navbar';
</script>

<div
	id="top"
	class="top-0 z-99 fixed w-full h-24 flex flex-col items-center justify-center py-auto bg-istq text-istq-white shadow-lg"
>
	<div
		class="h-full px-5 md:px-0 container max-w-6xl flex flex-row items-center justify-between mx-auto"
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
								href="/profile#tentang"
								class="block px-4 py-2 hover:bg-gray-100 hover:text-istq-orange rounded-md"
							>
								Tentang
							</a>
							<a
								href="/profile#visi"
								class="block px-4 py-2 hover:bg-gray-100 hover:text-istq-orange rounded-md"
							>
								Visi
							</a>
							<a
								href="/profile#misi"
								class="block px-4 py-2 hover:bg-gray-100 hover:text-istq-orange rounded-md"
							>
								Misi
							</a>
							<a
								href="/profile#struktur"
								class="block px-4 py-2 hover:bg-gray-100 hover:text-istq-orange rounded-md"
							>
								Struktur
							</a>
							<a
								href="/profile#logo"
								class="block px-4 py-2 hover:bg-gray-100 hover:text-istq-orange rounded-md"
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
					<HoverCard.Content class="z-100 px-2 py-3">
						<div class="flex flex-col text-sm">
							<a
								href="/cihuyy"
								data-sveltekit-reload
								class="block px-4 py-2 hover:bg-gray-100 hover:text-istq-orange rounded-md"
							>
								CIHUYY
							</a>
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
			class="md:block hidden w-fit h-fit cursor-pointer py-2 px-6 rounded-full text-istq-white bg-istq-orange-darker hover:bg-istq-orange-darker/80 text-sm"
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