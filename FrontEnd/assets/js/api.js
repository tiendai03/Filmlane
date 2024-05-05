const express = require('express'); // thêm thư viện express vào
const cors = require('cors');
const app = express(); //tạo express mới

// Sử dụng CORS middleware để cho phép các yêu cầu từ domain khác
app.use(cors());

// Dữ liệu JSON
const jsonData = {
    "tvSeriesData": [
      {
        "movieId": 1,
        "title": "Moon Knight",
        "imageUrl": "./assets/images/series-1.png",
        "description": "A bank teller realizes he's a background character in an open world video game called Free City.",
        "releaseYear": 2022,
        "duration": "47 min",
        "rating": 8.6
      },
      {
        "movieId": 2,
        "title": "Halo",
        "imageUrl": "./assets/images/series-2.png",
        "description": "A bank teller realizes he's a background character in an open world video game called Free City.",
        "releaseYear": 2022,
        "duration": "59 min",
        "rating": 8.8
      },
      {
        "movieId": 3,
        "title": "Vikings: Valhalla",
        "imageUrl": "./assets/images/series-3.png",
        "description": "A bank teller realizes he's a background character in an open world video game called Free City.",
        "releaseYear": 2022,
        "duration": "51 min",
        "rating": 8.3
      },
      {
        "movieId": 4,
        "title": "Money Heist",
        "imageUrl": "./assets/images/series-4.png",
        "description": "A bank teller realizes he's a background character in an open world video game called Free City.",
        "releaseYear": 2017,
        "duration": "70 min",
        "rating": 8.3
      }
        // Thêm dữ liệu khác tương tự ở đây...
    ]
};

const jsonDatas = {
  "tvSeriesDatas" : [
    {
      "movieId": 1,
      "title": "The Northman",
      "imageUrl": "/assets/images/upcoming-1.png",
      "description": "A bank teller realizes he's a background character in an open world video game called Free City.",
      "releaseYear": 2022,
      "duration": "137 min",
      "rating": 8.5
    },
    {
      "movieId": 2,
      "title": "Doctor Strange in the Multiverse of Madness",
      "imageUrl": "./assets/images/upcoming-2.png",
      "description": "A bank teller realizes he's a background character in an open world video game called Free City.",
      "releaseYear": 2022,
      "duration": "126 min",
      "rating": "NR"
    },
    {
      "movieId": 3,
      "title": "Memory",
      "imageUrl": "./assets/images/upcoming-3.png",
      "description": "A bank teller realizes he's a background character in an open world video game called Free City.",
      "releaseYear": 2022,
      "duration": "N/A",
      "rating": "NR"
    },
    {
      "movieId": 4,
      "title": "The Unbearable Weight of Massive Talent",
      "imageUrl": "./assets/images/upcoming-4.png",
      "description": "A bank teller realizes he's a background character in an open world video game called Free City.",
      "releaseYear": 2022,
      "duration": "107 min",
      "rating": "NR"
    }
      // Thêm dữ liệu khác tương tự ở đây...
  ]
};

const jsonDatass = {
  "tvSeriesDatass" : [
    {
      "movieId": 1,
      "title": "Sonic the Hedgehog 2",
      "imageUrl": "./assets/images/movie-1.png",
      "description": "A bank teller realizes he's a background character in an open world video game called Free City.",
      "releaseYear": 2022,
      "duration": "122 min",
      "rating": 7.8
    },
    {
      "movieId": 2,
      "title": "Morbius",
      "imageUrl": "./assets/images/movie-2.png",
      "description": "A bank teller realizes he's a background character in an open world video game called Free City.",
      "releaseYear": 2022,
      "duration": "104 min",
      "rating": 5.9
    },
    {
      "movieId": 3,
      "title": "The Adam Project",
      "imageUrl": "./assets/images/movie-3.png",
      "description": "A bank teller realizes he's a background character in an open world video game called Free City.",
      "releaseYear": 2022,
      "duration": "106 min",
      "rating": 7.0
    },
    {
      "movieId": 4,
      "title": "Free Guy",
      "imageUrl": "./assets/images/movie-4.png",
      "description": "A bank teller realizes he's a background character in an open world video game called Free City.",
      "releaseYear": 2021,
      "duration": "115 min",
      "rating": 7.7
    },
    {
      "movieId": 5,
      "title": "The Batman",
      "imageUrl": "./assets/images/movie-5.png",
      "description": "A bank teller realizes he's a background character in an open world video game called Free City.",
      "releaseYear": 2022,
      "duration": "176 min",
      "rating": 7.9
    },
    {
      "movieId": 6,
      "title": "Uncharted",
      "imageUrl": "./assets/images/movie-6.png",
      "description": "A bank teller realizes he's a background character in an open world video game called Free City.",
      "releaseYear": 2022,
      "duration": "116 min",
      "rating": 7.0
    },
    {
      "movieId": 7,
      "title": "Death on the Nile",
      "imageUrl": "./assets/images/movie-7.png",
      "description": "A bank teller realizes he's a background character in an open world video game called Free City.",
      "releaseYear": 2022,
      "duration": "127 min",
      "rating": 6.5
    },
    {
      "movieId": 8,
      "title": "The King's Man",
      "imageUrl": "./assets/images/movie-8.png",
      "description": "A bank teller realizes he's a background character in an open world video game called Free City.",
      "releaseYear": 2021,
      "duration": "131 min",
      "rating": 7.0
    }

      // Thêm dữ liệu khác tương tự ở đây...
  ]
};

// API endpoint để phục vụ dữ liệu JSON
app.get('/api/movies', (req, res) => { //((request) là đối tượng biểu diễn yêu cầu từ phía client (trình duyệt web), (response) là đối tượng để gửi phản hồi từ server về client.)
  res.json(jsonData); //phản hồi JSON về client

}); //api Endpoint

// Khởi động máy chủ
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});