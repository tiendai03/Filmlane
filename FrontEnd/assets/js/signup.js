function signUp(){
    // e.preventDefault();
    var username = document.getElementById('user').value;
    var password = document.getElementById('pass').value;
    var cf_password = document.getElementById('cf-pass').value;
    var email = document.getElementById('email').value;
    
    
    // Kiểm tra xem các trường đã được điền đầy đủ chưa
    if (username && password && cf_password && email) {
        // Tạo đối tượng người dùng mới
        var newUser = {
            username: username,
            password: password,
            cf_password: cf_password,
            email: email
        };
        
        // Kiểm tra xác nhận mật khẩu
        if (password !== cf_password) {
            document.getElementById('registerMessage').innerHTML = 'Passwords do not match!';
            document.getElementById('cf-registerMessage').innerHTML = 'Passwords do not match!';
            return false;
        }

        console.log("Điều kiện thành công: tất cả các trường đã được điền.");
        // Kiểm tra xem đã có dữ liệu người dùng trong localStorage chưa
        var users = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : [];
        // kiển tra xem username đã tồn tại chưa
        var userExists = users.some(function(user) {
            return user.username === username;
        });
    
        if (userExists) {
            alert('Account already exists!');
            return false;
        }
    

        users.push(newUser);
        // Lưu mảng người dùng vào localStorage
        localStorage.setItem('user', JSON.stringify(users));

        alert('Sign Up Success');

       // Xóa hết các trường văn bản
        document.getElementById('user').value = '';
        document.getElementById('pass').value = '';
        document.getElementById('cf-pass').value = '';
        document.getElementById('email').value = ''; 

        // Chuyển hướng đến trang đăng nhập sau 2 giây
        setTimeout(function() {
            window.location.href = '/login.html';
        }, 1000);
    } else {
        alert('Please complete all information');
        console.log("Điều kiện thất bại: một hoặc nhiều trường không được điền.");
    }

    return false;
 }



// Lấy giá trị của các trường username, password, cf_password, và email từ các phần tử HTML.
// Kiểm tra xem tất cả các trường đã được điền đầy đủ hay không.
// Nếu tất cả các trường đã được điền đầy đủ, tạo một đối tượng newUser chứa thông tin người dùng mới.
// Kiểm tra xem mật khẩu và mật khẩu xác nhận có khớp nhau không. Nếu không, hiển thị một thông báo lỗi và ngăn hành động đăng ký tiếp theo.
// Nếu mọi thứ đều hợp lệ, lấy danh sách người dùng từ localStorage (nếu có) hoặc tạo một danh sách mới nếu không có dữ liệu nào.
// Thêm người dùng mới vào danh sách người dùng.
// Lưu danh sách người dùng mới vào localStorage.
// Hiển thị một thông báo thành công và sau đó chuyển hướng người dùng đến trang đăng nhập sau một khoảng thời gian ngắn.


// var express = require('express');

// var app = express();

// app.get('', function(req,res){
//     res.send("hello");
// })

// const PORT = 3000;
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });

// const {conn, sql} = require('./connect');

// app.get('/nguoidung', async (req, res) => {
//     var pool = await conn;
//     var sqlString = "SELECT * FROM NGUOIDUNG";
//     return await pool.request().query(sqlString, function(err, data) {
//         console.log(err, data);
//     });
//     res.send("stufdsfs");
// })