<script lang="ts">
	import Head from '@/partials/Head.svelte';
	const Services: {
		name: string;
		desc: string;
	}[] = [
		{
			name: 'Bimbingan Belajar Al-Qur’an Dasar',
			desc: `Layanan ini ditujukan bagi anak-anak dan santri pemula untuk belajar membaca Al-Qur’an dari dasar menggunakan metode yang sistematis dan mudah dipahami. Pembelajaran meliputi pengenalan huruf hijaiyah, tajwid dasar, hingga mampu membaca Al-Qur’an dengan lancar dan benar sesuai kaidah.`
		},
		{
			name: 'Dauroh Al-Qur’an Bersanad',
			desc: `Program dauroh ini menghadirkan pembelajaran Al-Qur’an secara intensif bersama para ustadz yang memiliki sanad keilmuan yang tersambung hingga Rasulullah ﷺ. Peserta mendapatkan pembinaan bacaan yang lebih mendalam, perbaikan makharijul huruf, tajwid lanjutan, serta kesempatan memperoleh ijazah/syahadah sesuai capaian.`
		},
		{
			name: 'Layanan Khutbah',
			desc: `Pondok Istiqomah menyediakan layanan khutbah Jumat maupun khutbah hari raya dengan materi yang menyejukkan, berbasis Al-Qur’an dan Sunnah. Para khatib menyampaikan pesan dakwah yang membangun keimanan, memperkuat ukhuwah, serta memberikan solusi atas persoalan umat secara bijak dan relevan.`
		},
		{
			name: 'Pembinaan Akhlak dan Karakter Islami',
			desc: `Selain pembelajaran Al-Qur’an, Pondok Istiqomah memberikan pembinaan akhlak melalui kajian adab, praktik ibadah harian, serta pembiasaan sunnah. Layanan ini bertujuan membentuk pribadi yang berakhlakul karimah, disiplin, dan bertanggung jawab.`
		},
		{
			name: 'Kajian dan Halaqah Keislaman',
			desc: `Layanan ini berupa kajian rutin dan halaqah yang membahas aqidah, fiqih, sirah, dan ilmu-ilmu dasar Islam. Kegiatan dilaksanakan secara berkala untuk memperkuat pemahaman agama serta meningkatkan kualitas keimanan santri dan masyarakat.`
		}
	];
</script>

<Head title="Layanan" path="/layanan" description="Layanan Pondok Yatim Istiqomah" />

<div class="w-full h-auto">
	<div class="container max-w-6xl mx-auto px-4 md:px-0 my-10 flex flex-col gap-8">
		<div class="text-center w-full">
			<h1 class="font-bold text-3xl md:text-5xl">Layanan Pondok Yatim Istiqomah</h1>
		</div>
		<div class="flex flex-col gap-7">
			{#each Services as srv, idx}
				<section class="flex flex-col gap-5 scroll-mt-28">
					<h2 class="text-2xl md:text-3xl font-bold grow">{idx+1}. {srv.name}</h2>
					<p class="text-gray-800 text-lg">
						{srv.desc}
					</p>
				</section>
			{/each}
		</div>
	</div>
</div>
