document.addEventListener('DOMContentLoaded', () => {
    // Lấy URL hiện tại
    const currentUrl = new URL(window.location.href);

    // Lấy tham số 'id' từ URL (nếu có)
    const urlParams = new URLSearchParams(currentUrl.search);
    const movieId = urlParams.get('id');

    // Nếu không tìm thấy 'id' trong URL, bạn có thể thêm 'id' vào URL
    if (!movieId) {
        console.error('Movie ID not found in URL');

        fetch('products.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                const tvSeriesData = data.tvSeriesData;
                const modifiedUrlsss = [];

                // Thêm tham số 'id' vào URL và lưu trữ các URL đã được sửa đổi
                tvSeriesData.forEach(ser => {
                    const newUrl = new URL(currentUrl); // Tạo một URL mới dựa trên URL hiện tại
                    newUrl.searchParams.set('id', ser.id); // Thêm tham số 'id' với giá trị là ser.movieId
                    modifiedUrlsss.push(newUrl.href); // Lưu trữ URL đã được sửa đổi vào mảng modifiedUrls

                    console.log('Modified URL:', newUrl.href);

                    console.log(ser.id)
                });

                // Hiển thị mảng các URL đã được sửa đổi trong console
                console.log('Modified URLs:', modifiedUrlsss);


            })
            .catch(error => {
                console.error('Error fetching or processing data:', error);
            });

            // Chuyển hướng đến URL mới với tham số 'id' được thêm vào
            // window.location.href = newUrl.href;
            return; // Dừng thực thi nếu không có 'id' trong URL và đã thêm vào URL mới
    }


  
    // Nếu có 'id' trong URL, tiếp tục gọi API để lấy chi tiết của bộ phim có movieId này
    fetch(`http://localhost:3000/tvSeriesData/${movieId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Hiển thị chi tiết của bộ phim
            displayMovieDetails(data);
        })
        .catch(error => {
            console.error('Error fetching movie details:', error);
        });

    function displayMovieDetails(movie) {
        // Lấy các phần tử HTML bằng id
        const titleElement = document.querySelector('.detail-title strong');
        const posterElement = document.getElementById('moviePoster');
        const descriptionElement = document.getElementById('storyline');
        const releaseYearElement = document.getElementById('releaseYear');
        const durationElement = document.getElementById('duration');

        // Hiển thị thông tin của bộ phim
        titleElement.textContent = movie.title;
        posterElement.src = movie.imageUrl;
        descriptionElement.textContent = movie.description;
        releaseYearElement.textContent = movie.releaseYear;
        durationElement.textContent = movie.duration;
    }
});