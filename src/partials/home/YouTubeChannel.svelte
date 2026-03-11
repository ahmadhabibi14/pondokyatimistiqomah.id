<script lang="ts">
	import { Icon } from "svelte-icons-pack";
	import { RiLogosYoutubeFill } from "svelte-icons-pack/ri";

	//
</script>

<div class="container max-w-6xl mx-auto flex px-4 md:px-0">
	<div class="w-full flex flex-col md:flex-row items-center justify-center md:gap-4
  bg-linear-to-br from-red-400 to-red-600 
  rounded-3xl pb-7">
    <div class="">
      <Icon
        src={RiLogosYoutubeFill}
        size="300"
        className="fill-white"
      />
    </div>
		<a
			href="https://www.youtube.com/@PondokYatimIstiqomah/"
			target="_blank"
			aria-label="YouTube Channel Pondok Yatim Istiqomah"
      class="bg-white text-red-500 py-2 px-6 rounded-full hover:bg-white/90 hover:underline"
		>
			Lihat Channel YouTube Kami
		</a>
	</div>
</div>
