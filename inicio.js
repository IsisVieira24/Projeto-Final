let bannerIndex = 0;
showBanners(bannerIndex);


function changeBanner(n) {
    showBanners(bannerIndex += n);
}


function showBanners(n) {
    const banners = document.querySelectorAll(".banner");
    if (n >= banners.length) { bannerIndex = 0; }
    if (n < 0) { bannerIndex = banners.length - 1; }
    banners.forEach((banner, index) => {
        banner.classList.remove("active");
        if (index === bannerIndex) {
            banner.classList.add("active");
        }
    });
}
