$(document).ready(function () {

	var pdsaCollapsers = $("[data-pdsa-collapser-name]");

	for (var i=0; i<pdsaCollapsers.length; i++) {
		var name = pdsaCollapsers[i].id;
		var open = $("#" + name).data("pdsa-collapser-open");
		var close = $("#" + name).data("pdsa-collapser-close");
		$("#" + name + " .pdsa-panel-toggle")
		.addClass(open);

		var list = $("#" + name + " .in");
		for (var i=0; i<list.length; i++) {
			$("a[href='#" + $(list[i]).attr("id") + "']")
			.next(".pdsa-panel-toggle")
			.removeClass(open)
			.addClass(close);
		}
	}	


	$("#" + name).on("hide.bs.collapse", function (e) {
		$("#" + e.target.id).prev()
		.find(".pdsa-panel-toggle")
		.removeClass($("#" + name).data("pdsa-collapser-close"))
		.addClass($("#" + name).data("pdsa-collapser-open"));
	});

	$("#" + name).on("show.bs.collapse", function (e) {
		$("#" + e.target.id).prev()
		.find(".pdsa-panel-toggle")
		.removeClass($("#" + name).data("pdsa-collapser-open"))
		.addClass($("#" + name).data("pdsa-collapser-close"));
	});		
})