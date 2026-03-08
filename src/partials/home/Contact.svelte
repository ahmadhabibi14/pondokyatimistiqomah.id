<script lang="ts">
	import { Icon } from "svelte-icons-pack";
	import { RiBusinessMailLine, RiDevicePhoneLine, RiMapMapPinRangeLine } from "svelte-icons-pack/ri";

</script>

<section class="w-full my-0 py-10 bg-istq-lighter text-istq-white">
	<div class="container max-w-6xl mx-auto flex flex-col gap-10 px-4 md:px-0">
		<h2 class="md:text-4xl text-3xl font-bold text-center text-white">Hubungi Kami</h2>
		<div class="flex flex-col md:grid md:grid-cols-[40%_1fr] gap-5">
			<div class="flex flex-col gap-1 text-lg">
				<a
					href="https://maps.app.goo.gl/JHAMACgXWpHYZrKD8"
					target="_blank"
					class="cursor-pointer flex flex-row gap-2 items-start hover:underline"
				>
					<Icon
						size="25"
						className="fill-istq-orange shrink-0"
						src={RiMapMapPinRangeLine}
					/>
					<p class="grow">Jl. Nangka III No. 47B, Perumahan Jatibening II Kel. Jatibening Baru, Kec. Pondokgede, Kota Bekasi</p>
				</a>
				<a
					href="mailto:pondokyatimistiqomah1@gmail.com"
					target="_blank"
					class="cursor-pointer flex flex-row gap-2 items-center hover:underline"
				>
					<Icon
						size="25"
						className="fill-istq-orange shrink-0"
						src={RiBusinessMailLine}
					/>
					<p class="grow">pondokyatimistiqomah1@gmail.com</p>
				</a>
				<a
					href="tel:+6281213339923"
					class="cursor-pointer flex flex-row gap-2 items-center hover:underline"
				>
					<Icon
						size="25"
						className="fill-istq-orange shrink-0"
						src={RiDevicePhoneLine}
					/>
					<p class="grow">(+62) 812-1333-9923</p>
				</a>
			</div>
			<div class="w-full h-[400px] rounded-xl overflow-hidden">
				<iframe
					title="Lokasi Pondok Yatim Istiqomah"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.000477270892!2d106.94354969999999!3d-6.2636657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698d1a6e123dd7%3A0x4f12099bbd30615a!2sPondok%20Yatim%20Istiqomah!5e0!3m2!1sid!2sid!4v1772599107371!5m2!1sid!2sid"
          width="100%"
					height="400"
					style="border:0;"
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
				></iframe>
			</div>
		</div>
	</div>
</section>
