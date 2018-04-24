(function(jQuery){

    $(function(){

        $("#myfrom").validate(
            {
                //1.规则
                rules : {
                    username : {
                        "required" : true,
                        "rangelength" : [6, 16],
                        "remote" : "http://127.0.0.1/useker/server/userIsexites.php"
                    },
                    userpwd : {
                        "required" : true,
                        "rangelength" : [8, 16]

                    },
                    userpwd2 : {
                        "equalTo" : "#userpwd",
                    }
                },
                messages : {
                    username : {
                        required : "用户名不能为空哦~",
                        rangelength : "用户名的长度必须{0}-{1}之间",
                        remote : "逗比,用户名已存在"
                    },
                    userpwd : {
                        required : "密码不能为空哦~",
                        rangelength : "密码的长度必须{0}-{1}之间"
                    },
                    userpwd2 : {
                        equalTo : "2次密码不一致"
                    }
                },
                submitHandler : function(){

                    var regObj = $.toData(decodeURIComponent($("#myfrom").serialize()));
                    regObj.userpwd = $.md5(regObj.userpwd);
                    console.log(regObj);
                    $.ajax({
                        url : "http://127.0.0.1/useker/server/register.php",
                        data : regObj,
                        dataType : "json",
                        type : "post",
                    }).done(function(res){
                        console.log(res);
                        return false;
                    })

                    //ajax  请求
                    return false;
                }

            }
        );


    })


})(jQuery)