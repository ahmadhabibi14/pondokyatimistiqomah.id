<script lang="ts">
	import { onMount } from 'svelte';
	import PostItem from '@/partials/posts/PostItem.svelte';
	import { PUBLIC_API_URL } from '$env/static/public';
	import type { WPPost } from '@/types/post';
	import Skeleton from '@/lib/components/ui/skeleton/skeleton.svelte';

	let posts: WPPost[] = [];

	let isLoading: boolean = false;

	// ================================
	// FETCH POSTS (Reusable)
	// ================================
	async function fetchPosts() {
		isLoading = true;

		const res = await fetch(`${PUBLIC_API_URL}/posts?_embed&per_page=4`);

		if (!res.ok) {
			isLoading = false;
			return;
		}

		posts = (await res.json()) as WPPost[];

		isLoading = false;
	}

	onMount(fetchPosts);
</script>

<div class="container max-w-6xl mx-auto flex flex-col gap-8 my-10 px-5 md:px-0">
	<div class="flex flex-col gap-6">
		<h2 class="md:text-4xl text-3xl font-bold text-center">Berita Terbaru</h2>
		<div class="grid grid-cols-2 md:grid-cols-4 gap-5 w-full min-w-full auto-rows-fr">
			{#if isLoading}
				{#each Array(4) as _}
					<Skeleton class="h-36 md:h-56 w-full rounded-lg border border-gray-200" />
				{/each}
			{:else}
				{#each posts || [] as post}
					<PostItem {post} />
				{/each}
			{/if}
		</div>
		<div class="flex justify-center items-center">
			<a
				href="/berita"
				aria-label="Berita lainnya"
				class="bg-istq text-white px-6 py-2 rounded-full
			hover:underline h-fit w-fit text-sm md:text-base"
			>
				Berita Lainnya...
			</a>
		</div>
	</div>
</div>
