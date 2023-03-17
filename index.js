 class addNum {
    static sum(stn1, stn2) {
      let result = '';
      let i = stn1.length - 1; // Lấy index của kí tự cuối cùng của chuỗi stn1
      let j = stn2.length - 1; // Lấy index của kí tự cuối cùng của chuỗi stn2
      let remember = 0; // Biến nhớ ban đầu là 0
  
      // Duyệt từ phải sang trái của chuỗi stn1 và stn2
      while (i >= 0 || j >= 0) {
        // Lấy giá trị số của kí tự tương ứng hoặc mặc định là 0 nếu đã hết chuỗi
        let num1 = i >= 0 ? parseInt(stn1.charAt(i)) : 0;
        let num2 = j >= 0 ? parseInt(stn2.charAt(j)) : 0;
  
        let sum = num1 + num2 + remember; // Cộng 2 số và biến nhớ
        result = (sum % 10) + result; // Lấy phần đơn vị của tổng và ghép vào kết quả
  
        remember = sum >= 10 ? 1 : 0; // Nếu tổng >= 10, ghi nhớ 1; ngược lại ghi nhớ 0
  
        // Di chuyển tới kí tự tiếp theo của cả 2 chuỗi
        i--;
        j--;
      }
  
      // Nếu còn nhớ 1, ghép vào kết quả
      if (remember === 1) {
        result = '1' + result;
      }
  
      return result;
    }
  }

