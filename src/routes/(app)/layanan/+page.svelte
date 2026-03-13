<script lang="ts">
	import Head from '@/partials/Head.svelte';
	import { Icon, type IconType } from 'svelte-icons-pack';
	import {
		FaSolidBookOpenReader,
		FaSolidBookQuran,
		FaSolidChalkboardUser,
		FaSolidMicrophoneLines,
		FaSolidUsersBetweenLines
	} from 'svelte-icons-pack/fa';
	const Services: {
		name: string;
		desc: string;
		icon: IconType;
		iconColor: string;
	}[] = [
		{
			name: 'Bimbingan Belajar Al-Qur’an Dasar',
			desc: `Layanan ini ditujukan bagi anak-anak dan santri pemula untuk belajar membaca Al-Qur’an dari dasar menggunakan metode yang sistematis dan mudah dipahami. Pembelajaran meliputi pengenalan huruf hijaiyah, tajwid dasar, hingga mampu membaca Al-Qur’an dengan lancar dan benar sesuai kaidah.`,
			icon: FaSolidChalkboardUser,
			iconColor: 'text-violet-600 fill-violet-600'
		},
		{
			name: 'Dauroh Al-Qur’an Bersanad',
			desc: `Program dauroh ini menghadirkan pembelajaran Al-Qur’an secara intensif bersama para ustadz yang memiliki sanad keilmuan yang tersambung hingga Rasulullah ﷺ. Peserta mendapatkan pembinaan bacaan yang lebih mendalam, perbaikan makharijul huruf, tajwid lanjutan, serta kesempatan memperoleh ijazah/syahadah sesuai capaian.`,
			icon: FaSolidBookQuran,
			iconColor: 'text-green-600 fill-green-600'
		},
		{
			name: 'Layanan Khutbah',
			desc: `Pondok Istiqomah menyediakan layanan khutbah Jumat maupun khutbah hari raya dengan materi yang menyejukkan, berbasis Al-Qur’an dan Sunnah. Para khatib menyampaikan pesan dakwah yang membangun keimanan, memperkuat ukhuwah, serta memberikan solusi atas persoalan umat secara bijak dan relevan.`,
			icon: FaSolidMicrophoneLines,
			iconColor: 'text-rose-600 fill-rose-600'
		},
		{
			name: 'Pembinaan Akhlak dan Karakter Islami',
			desc: `Selain pembelajaran Al-Qur’an, Pondok Istiqomah memberikan pembinaan akhlak melalui kajian adab, praktik ibadah harian, serta pembiasaan sunnah. Layanan ini bertujuan membentuk pribadi yang berakhlakul karimah, disiplin, dan bertanggung jawab.`,
			icon: FaSolidUsersBetweenLines,
			iconColor: 'text-sky-600 fill-sky-600'
		},
		{
			name: 'Kajian dan Halaqah Keislaman',
			desc: `Layanan ini berupa kajian rutin dan halaqah yang membahas aqidah, fiqih, sirah, dan ilmu-ilmu dasar Islam. Kegiatan dilaksanakan secara berkala untuk memperkuat pemahaman agama serta meningkatkan kualitas keimanan santri dan masyarakat.`,
			icon: FaSolidBookOpenReader,
			iconColor: 'text-green-600 fill-green-600'
		}
	];
</script>

<Head
	title="Layanan"
	path="/layanan"
	description="Menghadirkan layanan pendidikan Al-Qur’an dan pembinaan keislaman untuk membentuk generasi yang berilmu, berakhlak, dan istiqomah.”"
/>

<div class="w-full h-auto">
	<div class="container max-w-6xl mx-auto px-4 md:px-0 my-10 flex flex-col gap-8">
		<div class="w-full flex flex-col gap-3">
			<h1 class="font-bold text-4xl hidden md:block">Layanan Pondok Yatim Istiqomah</h1>
			<h1 class="font-bold text-3xl block md:hidden">Layanan Kami</h1>
			<p>
				Menghadirkan layanan pendidikan Al-Qur’an dan pembinaan keislaman untuk membentuk generasi
				yang berilmu, berakhlak, dan istiqomah.”
			</p>
		</div>
		<div class="flex flex-col gap-5 md:grid md:grid-cols-2 md:gap-6">
			{#each Services as srv (srv.name)}
				<div
					class="flex flex-row gap-5 border border-gray-300 rounded-xl p-5
					shadow-md"
				>
					<div class="flex shrink-0">
						<Icon src={srv.icon} className={srv.iconColor} size="55" />
					</div>
					<div class="flex flex-col gap-3 grow">
						<h2 class="text-xl md:text-2xl font-bold">{srv.name}</h2>
						<p class="text-gray-800 text-base">
							{srv.desc}
						</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
