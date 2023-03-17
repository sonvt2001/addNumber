# addNumber

Theo đề bài ta có :

![image](https://user-images.githubusercontent.com/113413905/225798394-86a6a7ed-ece2-48f5-b1f2-fa8278dad940.png)

Ta có các test case : 
   1. Test với các số không có nhớ :
    1.1.
      Cho chuỗi thứ 1 = "1234" 
      Cho chuỗi thứ 2 = "1234"
      ==> Kết quả = "2468"
    1.2.
      Cho chuỗi thứ 1 = "0"
      Cho chuỗi thứ 2 = "0
      ==> Kết quả = "0"
     1.3.
      Cho chuỗ thứ 1 = "123"
      Cho chuỗi thứ 2 = "2"
      ==> Kết quả = "125"
      
    2. Test với các số có nhớ
      2.1.
        Cho chuỗi thứ 1 = "1234"
        Cho chuỗi thứ 2 = "789"
        ==> Kết quả = "2023"
       2.2.
        Cho chuỗi thứ 1 = "9999"
        Cho chuỗi thứ 2 = "1"
        ==> Kết quả = "10000"
    3. Test với các số âm
      3.1.
        Cho chuỗi 1 = "-123"
        Cho chuỗi 2 = "456"
        ==> Kết quả = "Error"
       3.2.
        Cho chuỗi 1 = "123"
        Cho chuỗi 2 = "-456"
        ==> Kết quả = "Error"
       3.3.
        Cho chuỗi 1 = "-123"
        Cho chuỗi 2 = "-456"
        ==> Kết quả = "Error"
       3.4.
        Cho chuỗi 1 = "123"
        Cho chuỗi 2 = "-001"
        ==> Kết quả = "Error"
    4. Test các chuỗi không phải là số
       4.1.
        Cho chuỗi 1 = "1234"
        Cho chuỗi 2 = "abcd"
        ==> Kết quả = "Error"
       4.2.
        Cho chuỗi 1 = "1234"
        Cho chuỗi 2 = "1234,1234"
        ==>Kết quả = "Error"
       4.3.
        Cho chuỗi 1 = "1234"
        Cho chuỗi 2 = "12-34"
        ==> Kết quả = "Error"
       4.4.
        Cho chuỗi 1 = "1234"
        Cho chuỗi 2 = "1.234"
        ==> Kết quả == "Error"
       
      
