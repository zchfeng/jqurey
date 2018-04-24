<?php
/**
 * Created by PhpStorm.
 * User: Useker.cn
 * Date: 2018/2/8
 * Time: 17:52
 */
header("Content-type:JSON;charset=utf-8");  //统一输出编码为utf-8
header("Access-Control-Allow-Origin:*");//允许跨域


//我只支持 post请求
if ($_SERVER["REQUEST_METHOD"]=="POST"){

    $username=$_POST["username"];
    $userpwd=$_POST["userpwd"];
    $usersex=$_POST["usersex"];
    $useraddress=$_POST["useraddress"];

// 1.创建连接
    $dbIp = "127.0.0.1";
    $dbUser = "root";
    $dbPwd = "";
    $dbDatabase = "useker";
// 2.输入用户名 密码 数据库名称
    $conn = new mysqli($dbIp, $dbUser, $dbPwd, $dbDatabase);
// 3. 执行连接
    mysqli_query($conn, "set names utf8");
// 4. 拼写 sql语句
    $sql = "INSERT INTO userinfo(u_username,u_userpwd,u_sex,u_address)
 VALUES('".$username."','".$userpwd."','".$usersex."','".$useraddress."')";
// 5. 执行sql语句
    $result = $conn->query($sql);
    $conn->close();//关闭数据库连接

    $printArr = Array();
    if ($result == 1) {
        $printArr["status"] = 1;
        $printArr["msg"] = "注册成功";
        print_r(json_encode($printArr));
    } else {
        $printArr["status"] = 0;
        $printArr["msg"] = "注册失败";
        print_r(json_encode($printArr));
    }


}










// 6. 拿到数据,返回到页面