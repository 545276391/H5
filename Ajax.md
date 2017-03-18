<h1>Ajax简单例子</h1>

<h2>PHP代码：</h2>

```
<?php
//设置页面内容是html编码格式是utf-8
header("Content-Type: text/plain;charset=utf-8"); 
//header("Content-Type: application/json;charset=utf-8"); 
//header("Content-Type: text/xml;charset=utf-8"); 
//header("Content-Type: text/html;charset=utf-8"); 
//header("Content-Type: application/javascript;charset=utf-8"); 

//定义一个多维数组，包含员工的信息，每条员工信息为一个数组
$staff = array
	(
		array("name" => "洪七", "number" => "101", "sex" => "男", "job" => "总经理"),
		array("name" => "郭靖", "number" => "102", "sex" => "男", "job" => "开发工程师"),
		array("name" => "黄蓉", "number" => "103", "sex" => "女", "job" => "产品经理")
	);

//判断如果是get请求，则进行搜索；如果是POST请求，则进行新建
//$_SERVER是一个超全局变量，在一个脚本的全部作用域中都可用，不用使用global关键字
//$_SERVER["REQUEST_METHOD"]返回访问页面使用的请求方法
if ($_SERVER["REQUEST_METHOD"] == "GET") {
	search();
} elseif ($_SERVER["REQUEST_METHOD"] == "POST"){
	create();
}

//通过员工编号搜索员工
function search(){
	//检查是否有员工编号的参数
	//isset检测变量是否设置；empty判断值为否为空
	//超全局变量 $_GET 和 $_POST 用于收集表单数据
	if (!isset($_GET["number"]) || empty($_GET["number"])) {
		echo "参数错误";      //使用JSON时，改为echo '{"success":false,"msg":"参数错误"}';
		return;
	}
	//函数之外声明的变量拥有 Global 作用域，只能在函数以外进行访问。
	//global 关键词用于访问函数内的全局变量
	global $staff;
	//获取number参数
	$number = $_GET["number"];
	$result = "没有找到员工。";    //使用JSON时，改为$result = '{"success":false,"msg":"没有找到员工。"}';
	
	//遍历$staff多维数组，查找key值为number的员工是否存在，如果存在，则修改返回结果
	foreach ($staff as $value) {
		if ($value["number"] == $number) {
			$result = "找到员工：员工编号：" . $value["number"] . "，员工姓名：" . $value["name"] . 
			                  "，员工性别：" . $value["sex"] . "，员工职位：" . $value["job"];
			
	//使用JSON时，上述改为$result = '{"success":true,"msg":"找到员工：员工编号：' . $value["number"] . 
							'，员工姓名：' . $value["name"] . 
							'，员工性别：' . $value["sex"] . 
							'，员工职位：' . $value["job"] . '"}';
					  
			break;
		}
	}
    echo $result;
}

//创建员工
function create(){
	//判断信息是否填写完全
	if (!isset($_POST["name"]) || empty($_POST["name"])
		|| !isset($_POST["number"]) || empty($_POST["number"])
		|| !isset($_POST["sex"]) || empty($_POST["sex"])
		|| !isset($_POST["job"]) || empty($_POST["job"])) {
		echo "参数错误，员工信息填写不全";    
	//使用JSON时，上述改为echo '{"success":false,"msg":"参数错误，员工信息填写不全"}';
		return;
	}
	//TODO: 获取POST表单数据并保存到数据库
	
	//提示保存成功
	echo "员工：" . $_POST["name"] . " 信息保存成功！";   
	//使用JSON时，上述改为echo '{"success":true,"msg":"员工：' . $_POST["name"] . ' 信息保存成功！"}';
}

```

<h2>HTML代码：</h2>

```
<!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Demo</title>
<style>
body, input, select, button, h1 {
	font-size: 28px;
	line-height:1.7;
}
</style>	
</head>

<body>

<h1>员工查询</h1>

<label>请输入员工编号：</label>
<input type="text" id="keyword" />
<button id="search">查询</button>
<p id="searchResult"></p>

<h1>员工新建</h1>
<label>请输入员工姓名：</label>
<input type="text" id="staffName" /><br>
<label>请输入员工编号：</label>
<input type="text" id="staffNumber" /><br>
<label>请选择员工性别：</label>
<select id="staffSex">
<option>女</option>
<option>男</option>
</select><br>
<label>请输入员工职位：</label>
<input type="text" id="staffJob" /><br>
<button id="save">保存</button>
<p id="createResult"></p>
</body>
</html>


```

<h2>JS代码：</h2>

* 原生方式：
  
```
  <script>
document.getElementById("search").onclick = function() { 
	var request = new XMLHttpRequest();
	request.open("GET", "server.php?number=" + document.getElementById("keyword").value);
	request.send();
	request.onreadystatechange = function() {
		if (request.readyState===4) {
			if (request.status===200) { 
				document.getElementById("searchResult").innerHTML = request.responseText;
			} else {
				alert("发生错误：" + request.status);
			}
		} 
	}
}

document.getElementById("save").onclick = function() { 
	var request = new XMLHttpRequest();
	request.open("POST", "server.php");
	var data = "name=" + document.getElementById("staffName").value 
	                  + "&number=" + document.getElementById("staffNumber").value 
	                  + "&sex=" + document.getElementById("staffSex").value 
	                  + "&job=" + document.getElementById("staffJob").value;
	request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	request.send(data);
	request.onreadystatechange = function() {
		if (request.readyState===4) {
			if (request.status===200) { 
				document.getElementById("createResult").innerHTML = request.responseText;
			} else {
				alert("发生错误：" + request.status);
			}
		} 
	}
}
</script>

```

* 改用JSON传递数据：
  
```
<script>
document.getElementById("search").onclick = function() { 
	var request = new XMLHttpRequest();
	request.open("GET", "serverjson.php?number=" + document.getElementById("keyword").value);
	request.send();
	request.onreadystatechange = function() {
		if (request.readyState===4) {
			if (request.status===200) { 
				var data = JSON.parse(request.responseText);
				if (data.success) { 
					document.getElementById("searchResult").innerHTML = data.msg;
				} else {
					document.getElementById("searchResult").innerHTML = "出现错误：" + data.msg;
				}
			} else {
				alert("发生错误：" + request.status);
			}
		} 
	}
}

document.getElementById("save").onclick = function() { 
	var request = new XMLHttpRequest();
	request.open("POST", "serverjson.php");
	var data = "name=" + document.getElementById("staffName").value 
	                  + "&number=" + document.getElementById("staffNumber").value 
	                  + "&sex=" + document.getElementById("staffSex").value 
	                  + "&job=" + document.getElementById("staffJob").value;
	request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	request.send(data);
	request.onreadystatechange = function() {
		if (request.readyState===4) {
			if (request.status===200) { 
				var data = JSON.parse(request.responseText);
				if (data.success) { 
					document.getElementById("createResult").innerHTML = data.msg;
				} else {
					document.getElementById("createResult").innerHTML = "出现错误：" + data.msg;
				}
			} else {
				alert("发生错误：" + request.status);
			}
		} 
	}
}
</script>
```

* Jquery方式：

```
<script src="http://apps.bdimg.com/libs/jquery/1.11.1/jquery.js"></script>
<script>
$(document).ready(function(){ 
	$("#search").click(function(){ 
		$.ajax({ 
		    type: "GET", 	
			url: "http://127.0.0.1:8080/ajaxdemo/serverjson2.php?number=" + $("#keyword").val(),
			dataType: "json",
			success: function(data) {
				if (data.success) { 
					$("#searchResult").html(data.msg);
				} else {
					$("#searchResult").html("出现错误：" + data.msg);
				}  
			},
			error: function(jqXHR){     
			   alert("发生错误：" + jqXHR.status);  
			},     
		});
	});
	
	$("#save").click(function(){ 
		$.ajax({ 
		    type: "POST", 	
			url: "serverjson.php",
			data: {
				name: $("#staffName").val(), 
				number: $("#staffNumber").val(), 
				sex: $("#staffSex").val(), 
				job: $("#staffJob").val()
			},
			dataType: "json",
			success: function(data){
				if (data.success) { 
					$("#createResult").html(data.msg);
				} else {
					$("#createResult").html("出现错误：" + data.msg);
				}  
			},
			error: function(jqXHR){     
			   alert("发生错误：" + jqXHR.status);  
			},     
		});
	});
});
</script>
```

* JSONP跨域处理

```
<script src="http://apps.bdimg.com/libs/jquery/1.11.1/jquery.js"></script>
<script>
$(document).ready(function(){ 
	$("#search").click(function(){ 
		$.ajax({ 
		    type: "GET", 	
			url: "http://127.0.0.1:8000/ajaxdemo/serverjsonp.php?number=" + $("#keyword").val(),
			dataType: "jsonp",
			jsonp: "callback",
			success: function(data) {
				if (data.success) {
					$("#searchResult").html(data.msg);
				} else {
					$("#searchResult").html("出现错误：" + data.msg);
				}  
			},
			error: function(jqXHR){     
			   alert("发生错误：" + jqXHR.status);  
			},     
		});
	});
	
	$("#save").click(function(){ 
		$.ajax({ 
		    type: "POST", 	
			url: "http://127.0.0.1:8000/ajaxdemo/serverjsonp.php",
			data: {
				name: $("#staffName").val(), 
				number: $("#staffNumber").val(), 
				sex: $("#staffSex").val(), 
				job: $("#staffJob").val()
			},
			dataType: "json",
			success: function(data){
				if (data.success) { 
					$("#createResult").html(data.msg);
				} else {
					$("#createResult").html("出现错误：" + data.msg);
				}  
			},
			error: function(jqXHR){     
			   alert("发生错误：" + jqXHR.status);  
			},     
		});
	});
});
</script>
```

同时将PHP中有关代码进行改动：
将`header("Content-Type: text/plain;charset=utf-8"); `注释掉，启用`header("Content-Type: application/json;charset=utf-8"); `
