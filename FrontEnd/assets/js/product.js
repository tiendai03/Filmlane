        // Fetch API
        fetch('products.json')
            .then(response => response.json())
            .then(data => {
                const moviesList = document.getElementById('movies-list');
                const tvSeriesData = data.tvSeriesData;

                // Loop through each TV series
                tvSeriesData.forEach(series => {
                    // Create HTML elements for each series
                    const seriesItem = document.createElement('li');
                    // seriesItem.classList.add('movie-card');

                    seriesItem.innerHTML = `
                        <div class="movie-card">
                            <a href="${series.url}">
                                <figure class="card-banner">
                                    <img src="${series.imageUrl}" alt="${series.title} movie poster">
                                </figure>
                            </a>
                            <div class="title-wrapper">
                                <a href="${series.url}l">
                                    <h3 class="card-title">${series.title}</h3>
                                </a>
                                <time datetime="${series.releaseYear}">${series.releaseYear}</time>
                            </div>
                            <div class="card-meta">
                                <div class="badge badge-outline">HD</div>
                                <div class="duration">
                                    <ion-icon name="time-outline"></ion-icon>
                                    <time datetime="PT${series.duration}">${series.duration}</time>
                                </div>
                                <div class="rating">
                                    <ion-icon name="star"></ion-icon>
                                    <data>${series.rating}</data>
                                </div>
                            </div>
                        </div>
                    `;

                    // Append each series item to the movies list
                    moviesList.appendChild(seriesItem);
                });
            })
            .catch(error => console.error('Error fetching data:', error));
