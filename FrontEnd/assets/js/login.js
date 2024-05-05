function checkLogin() {
    var username = document.getElementById('user').value;
    var password = document.getElementById('pass').value;

    if (username && password) {
        var users = localStorage.getItem('user');
        if (users) {
            users = JSON.parse(users);
            var foundUser = users.find(function(user) {
                return user.username === username && user.password === password;
            });
            if (foundUser) {
                console.log('Đăng nhập thành công');
                // Đăng nhập thành công
                alert('Logged in successfully');
                // Chuyển hướng đến trang sau khi đăng nhập thành công
                // setTimeout(function() {
                //     window.location.href = '/login.html';
                // }, 1000);
                history.pushState({}, '', '/index2.html');
                console.log("URL trước khi chuyển hướng: " + window.location.href);
                window.location.href = '/index2.html';
            } else {
                // Tên người dùng hoặc mật khẩu không chính xác
                alert('Username or password is incorrect');
            }
        } else {
            // Không có người dùng trong localStorage
            alert('No users');
        }
    } else {
        // Bạn phải nhập tên người dùng và mật khẩu
        alert('Please complete all information');
    }

    return false;
}


// Lấy giá trị tên người dùng và mật khẩu từ trường nhập liệu trên trang đăng nhập.
// Kiểm tra xem cả hai trường đã được nhập hay chưa.
// Nếu cả hai trường đều đã được nhập, tiếp tục kiểm tra.
// Lấy danh sách người dùng từ localStorage.
// Nếu danh sách người dùng tồn tại, kiểm tra xem có người dùng nào có tên người dùng và mật khẩu trùng khớp không.
// Nếu tìm thấy người dùng, hiển thị thông báo đăng nhập thành công và chuyển hướng đến trang chính (index.html).
// Nếu không tìm thấy người dùng, hiển thị thông báo lỗi về tên người dùng hoặc mật khẩu không chính xác.
// Nếu không có người dùng nào trong localStorage, hiển thị thông báo rằng không có người dùng.
// Nếu tên người dùng hoặc mật khẩu không được nhập, hiển thị thông báo yêu cầu nhập đầy đủ thông tin.