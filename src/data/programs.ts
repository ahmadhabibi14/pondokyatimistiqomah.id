export type ProgramSlug = string;

export const SlugProgram1: ProgramSlug = 'pesantren-tahfidz-al-quran';
export const SlugProgram2: ProgramSlug = 'majelis-taklim-al-quran';
export const SlugProgram3: ProgramSlug = 'taman-pendidikan-anak-sholeh';
export const SlugProgram4: ProgramSlug = 'pelatihan-keterampilan';
export const SlugProgram5: ProgramSlug = 'santunan-yatim-dhuafa';
export const SlugProgram6: ProgramSlug = 'infaq-beras';
export const SlugProgram7: ProgramSlug = 'sedekah-jariyah';

export type Program = {
	title?: string;
	shortTitle?: string;
	desc?: string;
	descMultiple?: string[];
	descList?: string[];
	link?: string;
	slug?: ProgramSlug;
	iconLink?: string;
};

export const ProgramsShort: Program[] = [
	{
		title: 'Pesantren Tahfidz Al-Qur’an',
		link: `/program#${SlugProgram1}`,
		iconLink: '/icons/program/pesantren-tahfidz.svg'
	},
	{
		title: 'Majelis Taklim Al-Qur’an',
		link: `/program#${SlugProgram2}`,
		iconLink: '/icons/program/majelis-taklim.svg'
	},
	{
		title: 'Taman Pend. Anak Sholeh',
		link: `/program#${SlugProgram3}`,
		iconLink: '/icons/program/taman-pendidikan.svg'
	},
	{
		title: 'Pelatihan Keterampilan Santri',
		link: `/program#${SlugProgram4}`,
		iconLink: '/icons/program/pelatihan-keterampilan.svg'
	},
	{
		title: 'Santunan Yatim & Dhu’afa',
		link: `/program#${SlugProgram5}`,
		iconLink: '/icons/program/santunan-yatim.svg'
	},
	{
		title: 'Infaq Beras Santri Tahfidz',
		link: `/program#${SlugProgram6}`,
		iconLink: '/icons/program/infaq-beras.svg'
	},
	{
		title: 'Sedekah Jariyah Wakaf',
		link: `/program#${SlugProgram7}`,
		iconLink: '/icons/program/sedekah-jariyah.svg'
	}
];

export const Programs: Program[] = [
	{
		title: 'Pesantren Tahfidz Al-Qur’an',
		descMultiple: [
			'Program Pesantren Tahfidz Al-Qur’an merupakan program inti Pondok Yatim Istiqomah yang berfokus pada pembinaan generasi penghafal Al-Qur’an melalui sistem pendidikan berbasis asrama. Santri dibimbing secara intensif dalam menghafal, menjaga, serta memperbaiki bacaan Al-Qur’an sesuai kaidah tajwid dan tahsin yang benar.',
			'Selain pembinaan hafalan, program ini juga menanamkan nilai-nilai akhlak Islami, kedisiplinan, serta kemandirian dalam kehidupan sehari-hari. Dengan pendampingan para ustadz dan pembimbing yang berkompeten, diharapkan lahir generasi Qur’ani yang berilmu, berakhlak mulia, dan siap mengabdi untuk umat.'
		],
		slug: SlugProgram1,
		iconLink: '/icons/program/pesantren-tahfidz.svg'
	},
	{
		title: 'Majelis Taklim Al-Qur’an',
		descMultiple: [
			'Majelis Taklim Al-Qur’an menjadi sarana pembinaan keislaman bagi masyarakat umum melalui kegiatan kajian rutin, pembelajaran tahsin, serta pendalaman ilmu agama. Program ini terbuka bagi berbagai kalangan usia yang ingin meningkatkan kualitas bacaan dan pemahaman terhadap Al-Qur’an.',
			'Kegiatan dilaksanakan secara berkala dengan metode yang mudah dipahami dan aplikatif. Melalui majelis taklim ini, Pondok Yatim Istiqomah berupaya memperkuat ukhuwah Islamiyah serta membangun masyarakat yang lebih dekat dengan Al-Qur’an.'
		],
		slug: SlugProgram2,
		iconLink: '/icons/program/majelis-taklim.svg'
	},
	{
		title: 'Taman Pendidikan Anak Sholeh',
		descMultiple: [
			'Program Taman Pendidikan Anak Sholeh (TPAS) ditujukan untuk membina anak-anak sejak usia dini agar memiliki dasar keimanan dan akhlak yang kuat. Pembelajaran meliputi pengenalan huruf hijaiyah, doa-doa harian, praktik ibadah, serta pendidikan karakter Islami.',
			'Dengan suasana belajar yang menyenangkan dan penuh kasih sayang, anak-anak dibimbing agar tumbuh menjadi pribadi yang sholeh dan sholehah. Program ini menjadi pondasi penting dalam membentuk generasi yang cinta Al-Qur’an sejak dini.'
		],
		slug: SlugProgram3,
		iconLink: '/icons/program/taman-pendidikan.svg'
	},
	{
		title: 'Pelatihan Keterampilan Santri',
		descMultiple: [
			'Pelatihan Keterampilan Santri merupakan program pemberdayaan yang bertujuan membekali santri dengan kemampuan praktis sebagai bekal kemandirian di masa depan. Pelatihan meliputi berbagai keterampilan sesuai kebutuhan dan potensi, seperti kewirausahaan, kerajinan, atau keterampilan lainnya.',
			'Melalui program ini, santri tidak hanya unggul dalam hafalan Al-Qur’an, tetapi juga memiliki kemampuan produktif yang dapat membantu meningkatkan taraf hidup. Diharapkan mereka mampu menjadi pribadi yang mandiri, kreatif, dan bermanfaat bagi masyarakat.'
		],
		slug: SlugProgram4,
		iconLink: '/icons/program/pelatihan-keterampilan.svg'
	},
	{
		title: 'Santunan Yatim & Dhu’afa',
		descMultiple: [
			'Program Santunan Yatim dan Dhu’afa merupakan bentuk kepedulian sosial Pondok Yatim Istiqomah terhadap anak-anak yatim serta masyarakat kurang mampu. Bantuan diberikan dalam bentuk kebutuhan pokok, biaya pendidikan, serta dukungan pembinaan secara berkelanjutan.',
			'Program ini bertujuan meringankan beban ekonomi sekaligus memberikan semangat dan harapan baru bagi penerima manfaat. Dengan dukungan para donatur, santunan ini menjadi sarana berbagi kebaikan dan mempererat kepedulian antar sesama.'
		],
		slug: SlugProgram5,
		iconLink: '/icons/program/santunan-yatim.svg'
	},
	{
		title: 'Infaq Beras Santri Tahfidz',
		descMultiple: [
			'Program Infaq Beras Santri Tahfidz adalah gerakan kepedulian untuk memenuhi kebutuhan konsumsi harian para santri penghafal Al-Qur’an. Melalui donasi beras dari para dermawan, kebutuhan pangan santri dapat terpenuhi secara berkelanjutan.',
			'Program ini menjadi bentuk dukungan nyata dalam menjaga semangat dan keberlangsungan proses hafalan para santri. Setiap butir beras yang diinfaqkan menjadi bagian dari amal jariyah yang mengalir bersama setiap ayat yang dibaca dan dihafalkan.'
		],
		slug: SlugProgram6,
		iconLink: '/icons/program/infaq-beras.svg'
	},
	{
		title: 'Sedekah Jariyah Wakaf Pembangunan Pesantren Tahfidz',
		descMultiple: [
			'Program Sedekah Jariyah Wakaf Pembangunan Pesantren Tahfidz merupakan upaya pengembangan sarana dan prasarana pendidikan, seperti pembangunan asrama, ruang belajar, dan fasilitas ibadah. Wakaf ini menjadi investasi akhirat yang manfaatnya dirasakan dalam jangka panjang.',
			'Melalui partisipasi masyarakat, diharapkan terwujud fasilitas pendidikan yang layak dan representatif bagi para santri. Setiap kontribusi wakaf menjadi amal jariyah yang pahalanya terus mengalir selama sarana tersebut dimanfaatkan untuk kegiatan pendidikan dan dakwah.'
		],
		slug: SlugProgram7,
		iconLink: '/icons/program/sedekah-jariyah.svg'
	}
];
