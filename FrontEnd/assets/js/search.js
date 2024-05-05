function toggleSearchInput() {
    const searchButton = document.querySelector('.search-btn'); // Chọn nút tìm kiếm bằng class
    const searchInput = document.querySelector('#search-input');

    console.log(searchInput)
    if (searchInput.style.display === 'none') {
        searchInput.style.display = 'inline-block';
    } else {
        searchInput.style.display = 'none';
    }
}


function inff(){
    const inf = document.querySelector('.contain'); 
    const inbon = document.querySelector('#inf');
    if (inbon.style.display === 'none') {
        inbon.style.display = 'inline-block';
    }else {
        inbon.style.display = 'none';
    }
}