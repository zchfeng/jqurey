<?php
/**
 * Created by PhpStorm.
 * User: Useker.cn
 * Date: 2018/2/8
 * Time: 19:27
 */

header("Content-type:JSON;charset=utf-8");  //统一输出编码为utf-8
header("Access-Control-Allow-Origin:*");//允许跨域

$userName = $_REQUEST["username"];

//1.创建连接
$conn = new mysqli("127.0.0.1", "root", "", "useker");
//2.设置连接字符集
mysqli_query($conn, "set names utf8");
//3. 准备sql语句
$sql = "SELECT*FROM userinfo WHERE u_username='" . $userName . "'";
//4. 执行sql语句
$result = $conn->query($sql);
//5.拿到结果
if ($result->num_rows >= 1) {
    print_r("false");

} else {
    print_r("true");
}
//6.断开连接 挂断电话
$conn->close();
