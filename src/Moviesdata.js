const moviesData = [
  {
    name: "Inception",
    link: "https://irs.www.warnerbros.com/hero-banner-v2-tablet-jpeg/movies/media/browser/inception_banner.jpg",
    image:
      "https://irs.www.warnerbros.com/hero-banner-v2-tablet-jpeg/movies/media/browser/inception_banner.jpg",
    rating: 4.5,
  },
  {
    name: "The Shawshank Redemption",
    link: "https://m.media-amazon.com/images/S/pv-target-images/d56b2942bc24e60043c79b061040c63d43ba529f0db1feff055e3b7a4dcc28ce.jpg",
    image:
      "https://m.media-amazon.com/images/S/pv-target-images/d56b2942bc24e60043c79b061040c63d43ba529f0db1feff055e3b7a4dcc28ce.jpg",
    rating: 4.9,
  },
  {
    name: "The Dark Knight",
    link: "https://images.moviesanywhere.com/bd47f9b7d090170d79b3085804075d41/c6140695-a35f-46e2-adb7-45ed829fc0c0.jpg",
    image:
      "https://images.moviesanywhere.com/bd47f9b7d090170d79b3085804075d41/c6140695-a35f-46e2-adb7-45ed829fc0c0.jpg",
    rating: 4.8,
  },
  {
    name: "Pulp Fiction",
    link: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    image:
      "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    rating: 4.7,
  },
  {
    name: "Forrest Gump",
    link: "https://flxt.tmsimg.com/assets/p15829_v_v13_aa.jpg",
    image: "https://flxt.tmsimg.com/assets/p15829_v_v13_aa.jpg",
    rating: 4.6,
  },
  {
    name: "Inception",
    link: "https://irs.www.warnerbros.com/hero-banner-v2-tablet-jpeg/movies/media/browser/inception_banner.jpg",
    image:
      "https://irs.www.warnerbros.com/hero-banner-v2-tablet-jpeg/movies/media/browser/inception_banner.jpg",
    rating: 4.5,
  },
  {
    name: "The Shawshank Redemption",
    link: "https://m.media-amazon.com/images/S/pv-target-images/d56b2942bc24e60043c79b061040c63d43ba529f0db1feff055e3b7a4dcc28ce.jpg",
    image:
      "https://m.media-amazon.com/images/S/pv-target-images/d56b2942bc24e60043c79b061040c63d43ba529f0db1feff055e3b7a4dcc28ce.jpg",
    rating: 4.9,
  },
  {
    name: "The Dark Knight",
    link: "https://images.moviesanywhere.com/bd47f9b7d090170d79b3085804075d41/c6140695-a35f-46e2-adb7-45ed829fc0c0.jpg",
    image:
      "https://images.moviesanywhere.com/bd47f9b7d090170d79b3085804075d41/c6140695-a35f-46e2-adb7-45ed829fc0c0.jpg",
    rating: 4.8,
  },
  {
    name: "Pulp Fiction",
    link: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    image:
      "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    rating: 4.7,
  },
  {
    name: "Forrest Gump",
    link: "https://flxt.tmsimg.com/assets/p15829_v_v13_aa.jpg",
    image: "https://flxt.tmsimg.com/assets/p15829_v_v13_aa.jpg",
    rating: 4.6,
  },
  {
    name: "Inception",
    link: "https://irs.www.warnerbros.com/hero-banner-v2-tablet-jpeg/movies/media/browser/inception_banner.jpg",
    image:
      "https://irs.www.warnerbros.com/hero-banner-v2-tablet-jpeg/movies/media/browser/inception_banner.jpg",
    rating: 4.5,
  },
  {
    name: "The Shawshank Redemption",
    link: "https://m.media-amazon.com/images/S/pv-target-images/d56b2942bc24e60043c79b061040c63d43ba529f0db1feff055e3b7a4dcc28ce.jpg",
    image:
      "https://m.media-amazon.com/images/S/pv-target-images/d56b2942bc24e60043c79b061040c63d43ba529f0db1feff055e3b7a4dcc28ce.jpg",
    rating: 4.9,
  },
  {
    name: "The Dark Knight",
    link: "https://images.moviesanywhere.com/bd47f9b7d090170d79b3085804075d41/c6140695-a35f-46e2-adb7-45ed829fc0c0.jpg",
    image:
      "https://images.moviesanywhere.com/bd47f9b7d090170d79b3085804075d41/c6140695-a35f-46e2-adb7-45ed829fc0c0.jpg",
    rating: 4.8,
  },
  {
    name: "Pulp Fiction",
    link: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    image:
      "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    rating: 4.7,
  },
  {
    name: "Forrest Gump",
    link: "https://flxt.tmsimg.com/assets/p15829_v_v13_aa.jpg",
    image: "https://flxt.tmsimg.com/assets/p15829_v_v13_aa.jpg",
    rating: 4.6,
  },
  {
    name: "Inception",
    link: "https://irs.www.warnerbros.com/hero-banner-v2-tablet-jpeg/movies/media/browser/inception_banner.jpg",
    image:
      "https://irs.www.warnerbros.com/hero-banner-v2-tablet-jpeg/movies/media/browser/inception_banner.jpg",
    rating: 4.5,
  },
  {
    name: "The Shawshank Redemption",
    link: "https://m.media-amazon.com/images/S/pv-target-images/d56b2942bc24e60043c79b061040c63d43ba529f0db1feff055e3b7a4dcc28ce.jpg",
    image:
      "https://m.media-amazon.com/images/S/pv-target-images/d56b2942bc24e60043c79b061040c63d43ba529f0db1feff055e3b7a4dcc28ce.jpg",
    rating: 4.9,
  },
  {
    name: "The Dark Knight",
    link: "https://images.moviesanywhere.com/bd47f9b7d090170d79b3085804075d41/c6140695-a35f-46e2-adb7-45ed829fc0c0.jpg",
    image:
      "https://images.moviesanywhere.com/bd47f9b7d090170d79b3085804075d41/c6140695-a35f-46e2-adb7-45ed829fc0c0.jpg",
    rating: 4.8,
  },
  {
    name: "Pulp Fiction",
    link: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    image:
      "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    rating: 4.7,
  },
  {
    name: "Forrest Gump",
    link: "https://flxt.tmsimg.com/assets/p15829_v_v13_aa.jpg",
    image: "https://flxt.tmsimg.com/assets/p15829_v_v13_aa.jpg",
    rating: 4.6,
  },
  {
    name: "Inception",
    link: "https://irs.www.warnerbros.com/hero-banner-v2-tablet-jpeg/movies/media/browser/inception_banner.jpg",
    image:
      "https://irs.www.warnerbros.com/hero-banner-v2-tablet-jpeg/movies/media/browser/inception_banner.jpg",
    rating: 4.5,
  },
  {
    name: "The Shawshank Redemption",
    link: "https://m.media-amazon.com/images/S/pv-target-images/d56b2942bc24e60043c79b061040c63d43ba529f0db1feff055e3b7a4dcc28ce.jpg",
    image:
      "https://m.media-amazon.com/images/S/pv-target-images/d56b2942bc24e60043c79b061040c63d43ba529f0db1feff055e3b7a4dcc28ce.jpg",
    rating: 4.9,
  },
  {
    name: "The Dark Knight",
    link: "https://images.moviesanywhere.com/bd47f9b7d090170d79b3085804075d41/c6140695-a35f-46e2-adb7-45ed829fc0c0.jpg",
    image:
      "https://images.moviesanywhere.com/bd47f9b7d090170d79b3085804075d41/c6140695-a35f-46e2-adb7-45ed829fc0c0.jpg",
    rating: 4.8,
  },
  {
    name: "Pulp Fiction",
    link: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    image:
      "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    rating: 4.7,
  },
  {
    name: "Forrest Gump",
    link: "https://flxt.tmsimg.com/assets/p15829_v_v13_aa.jpg",
    image: "https://flxt.tmsimg.com/assets/p15829_v_v13_aa.jpg",
    rating: 4.6,
  },
  {
    name: "Inception",
    link: "https://irs.www.warnerbros.com/hero-banner-v2-tablet-jpeg/movies/media/browser/inception_banner.jpg",
    image:
      "https://irs.www.warnerbros.com/hero-banner-v2-tablet-jpeg/movies/media/browser/inception_banner.jpg",
    rating: 4.5,
  },
  {
    name: "The Shawshank Redemption",
    link: "https://m.media-amazon.com/images/S/pv-target-images/d56b2942bc24e60043c79b061040c63d43ba529f0db1feff055e3b7a4dcc28ce.jpg",
    image:
      "https://m.media-amazon.com/images/S/pv-target-images/d56b2942bc24e60043c79b061040c63d43ba529f0db1feff055e3b7a4dcc28ce.jpg",
    rating: 4.9,
  },
  {
    name: "The Dark Knight",
    link: "https://images.moviesanywhere.com/bd47f9b7d090170d79b3085804075d41/c6140695-a35f-46e2-adb7-45ed829fc0c0.jpg",
    image:
      "https://images.moviesanywhere.com/bd47f9b7d090170d79b3085804075d41/c6140695-a35f-46e2-adb7-45ed829fc0c0.jpg",
    rating: 4.8,
  },
  {
    name: "Pulp Fiction",
    link: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    image:
      "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    rating: 4.7,
  },
  {
    name: "Forrest Gump",
    link: "https://flxt.tmsimg.com/assets/p15829_v_v13_aa.jpg",
    image: "https://flxt.tmsimg.com/assets/p15829_v_v13_aa.jpg",
    rating: 4.6,
  },
  {
    name: "Inception",
    link: "https://irs.www.warnerbros.com/hero-banner-v2-tablet-jpeg/movies/media/browser/inception_banner.jpg",
    image:
      "https://irs.www.warnerbros.com/hero-banner-v2-tablet-jpeg/movies/media/browser/inception_banner.jpg",
    rating: 4.5,
  },
  {
    name: "The Shawshank Redemption",
    link: "https://m.media-amazon.com/images/S/pv-target-images/d56b2942bc24e60043c79b061040c63d43ba529f0db1feff055e3b7a4dcc28ce.jpg",
    image:
      "https://m.media-amazon.com/images/S/pv-target-images/d56b2942bc24e60043c79b061040c63d43ba529f0db1feff055e3b7a4dcc28ce.jpg",
    rating: 4.9,
  },
  {
    name: "The Dark Knight",
    link: "https://images.moviesanywhere.com/bd47f9b7d090170d79b3085804075d41/c6140695-a35f-46e2-adb7-45ed829fc0c0.jpg",
    image:
      "https://images.moviesanywhere.com/bd47f9b7d090170d79b3085804075d41/c6140695-a35f-46e2-adb7-45ed829fc0c0.jpg",
    rating: 4.8,
  },
  {
    name: "Pulp Fiction",
    link: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    image:
      "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    rating: 4.7,
  },
  {
    name: "Forrest Gump",
    link: "https://flxt.tmsimg.com/assets/p15829_v_v13_aa.jpg",
    image: "https://flxt.tmsimg.com/assets/p15829_v_v13_aa.jpg",
    rating: 4.6,
  },
];

export default moviesData;
