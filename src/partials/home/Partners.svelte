<script lang="ts">
	const partners: {
		name?: string;
		imgUrl: string;
	}[] = [
		{ name: 'Bank Muamalat', imgUrl: '/img/partners/bank-muamalat.png' },
		{ name: 'Bank BJB', imgUrl: '/img/partners/bjb.png' },
		{ name: 'Bank BSI', imgUrl: '/img/partners/bsi.png' },
		{ name: 'Dinas Sosial Kota Bekasi', imgUrl: '/img/partners/dinsos-bekasi.png' },
		{ name: 'Kementerian Agama RI', imgUrl: '/img/partners/kemenag.png' },
		{ name: 'Majelis Ulama Indonesia', imgUrl: '/img/partners/mui.png' },
		{ name: 'Pemerintah Provinsi Bekasi', imgUrl: '/img/partners/pemprov-bekasi.png' },
		{ name: 'Telkomsel', imgUrl: '/img/partners/telkomsel.png' },
		{ name: 'Bank BNI', imgUrl: '/img/partners/bni.png' },
		{ name: 'Pertamina Lubricants', imgUrl: '/img/partners/pertamina-lubricants.png' }
	];
</script>

<div class="container max-w-6xl w-full px-4 md:px-0 mx-auto md:my-14 my-9">
	<div class="flex flex-col gap-10">
		<h3 class="text-3xl text-center font-bold font-poppins">Mitra Kami</h3>
		<div
			class="mdw-8/12 flex flex-wrap md:gap-x-14 md:gap-y-10 gap-x-6 gap-y-7
    justify-center items-center mx-auto"
		>
			{#each partners as p (p.name)}
				<div class="h-fit w-auto group" title={p.name}>
					<img
						src={p.imgUrl}
						alt={p.name}
						class="h-[35px] md:h-[50px] w-auto group-hover:grayscale"
					/>
				</div>
			{/each}
		</div>
	</div>
</div>
