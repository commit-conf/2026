const youtubeVideos = document.querySelectorAll(".video-link");
Array.prototype.forEach.call(youtubeVideos, function (item: HTMLElement) {
  item.addEventListener("click", function (e) {
    try {
      const link: HTMLElement | null = e.currentTarget as HTMLElement;
      if (link && !link.classList.contains("playing")) {
        const dataset = link?.dataset;
        const id = dataset.id;
        const title = dataset.title;
        const iframe = `<iframe title="${title}" class="video-iframe"  src="https://www.youtube-nocookie.com/embed/${id}?autoplay=1&modestbranding=1&rel=0&wmode=transparent" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
        link.classList.add("playing");
        link.innerHTML = iframe;
      }
      e.preventDefault();
    } catch (error) {}
  });
});
