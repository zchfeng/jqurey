requirejs(["config"],function () {
	requirejs(["jquery","a"],function (a,b) {
		$(function () {
			$("botton").on("click",function () {
				
				$("input:nth-of-type(3)").val(b.add($("input:nth-of-type(1)").val(),$("input:nth-of-type(2)").val()))
			})
			
		})
	})
})