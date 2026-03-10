<script lang="ts">
	import Image from "@/lib/components/Image.svelte";

  const galleryImages: string[][] = [
    ['/img/gallery/01.jpg', '/img/gallery/02.jpg', '/img/gallery/03.jpg', '/img/gallery/04.jpg'],
    ['/img/gallery/05.jpg', '/img/gallery/06.jpg', '/img/gallery/07.jpg', '/img/gallery/08.jpg'],
    ['/img/gallery/09.jpg', '/img/gallery/10.jpg', '/img/gallery/11.jpg', '/img/gallery/12.jpg'],
    ['/img/gallery/13.jpg', '/img/gallery/14.jpg', '/img/gallery/15.jpg', '/img/gallery/16.jpg']
  ]
</script>

<div class="container max-w-6xl mx-auto my-10 px-4 md:px-0">
	<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
    {#each galleryImages as images, idx}
      <div class="grid gap-3">
        <Image
          src={images[0]}
          alt="Gallery Image {idx + 1}" 
          classNameContainer="border shadow overflow-hidden object-cover h-auto max-w-full rounded-lg group cursor-pointer"
          classNameImg="w-full h-full object-cover group-hover:scale-110 duration-300"
        />
        <Image
          src={images[1]}
          alt="Gallery Image {idx + 2}" 
          classNameContainer="border shadow overflow-hidden object-cover h-auto max-w-full rounded-lg group cursor-pointer"
          classNameImg="w-full h-full object-cover group-hover:scale-110 duration-300"
        />
      </div>
      <div class="grid gap-3">
        <Image
          src={images[2]}
          alt="Gallery Image {idx + 3}" 
          classNameContainer="border shadow overflow-hidden object-cover h-auto max-w-full rounded-lg group cursor-pointer"
          classNameImg="w-full h-full object-cover group-hover:scale-110 duration-300"
        />
        <Image
          src={images[3]}
          alt="Gallery Image {idx + 4}" 
          classNameContainer="border shadow overflow-hidden object-cover h-auto max-w-full rounded-lg group cursor-pointer"
          classNameImg="w-full h-full object-cover group-hover:scale-110 duration-300"
        />
      </div>
    {/each}
	</div>
</div>