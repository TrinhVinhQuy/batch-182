$(document).ready(function () {
  $("#open__aside").click(function () {
    $(".aside__mobile").show();
  });
});

$(document).ready(function () {
  $("#close__aside").click(function () {
    $(".aside__mobile").hide();
  });
});

 var xhr = new XMLHttpRequest();

  // Đường dẫn tới file home.html
  var url = '/home.html';

  // Mở kết nối và gửi yêu cầu GET để tải nội dung của file home.html
  xhr.open('GET', url, true);
  xhr.send();

  // Xử lý khi yêu cầu đã được hoàn thành
  xhr.onload = function() {
  if (xhr.status === 200) {
      // Lấy nội dung của file home.html từ response
      var responseHTML = xhr.responseText;

      // Tạo một temporary element để chứa nội dung
      var tempElement = document.createElement('header');
      tempElement.innerHTML = responseHTML;

      // Tìm đối tượng có class name là "block-header"
      var blockHeader = tempElement.querySelector('.block-header');

      // Kiểm tra xem đối tượng tồn tại trước khi chèn vào file product.html
      if (blockHeader) {
      // Chèn đối tượng vào vị trí mong muốn trong file product.html
      var headerContainer = document.getElementById('block-header-container');
      headerContainer.appendChild(blockHeader);
      }

      // Tạo một temporary element để chứa nội dung
      var tempElement = document.createElement('footer');
      tempElement.innerHTML = responseHTML;

      // Tìm đối tượng có class name là "block-header"
      var blockFooter = tempElement.querySelector('.block-footer');

      // Kiểm tra xem đối tượng tồn tại trước khi chèn vào file product.html
      if (blockFooter) {
      // Chèn đối tượng vào vị trí mong muốn trong file product.html
      var headerContainer = document.getElementById('block-footer-container');
      headerContainer.appendChild(blockFooter);
      }
  }
  };
