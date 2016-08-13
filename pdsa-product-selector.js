var checkOptions = {
	id: "",
	checkedGlyph: "glyphicon-ok-circle",
	uncheckedGlyph: "glyphicon-unchecked",
	checkedBtnClass: "btn-success",
	uncheckedBtnClass: "btn-primary",
	checkedText: "Selected",
	uncheckedText: "Not Selected"
}

var totalOptions = {
	id: "#total",
	priceClass: ".price",
	priceContainerClass: ".panel"
}

$(document).ready(function () {

	$("[type='checkbox']").on("change", function () {
		if ($(this).prop('checked')) {
			setChecked($(this));
		} else {
			setUnChecked($(this));
		}

		calculateTotal($(this));
	});

	var checked = $(checkOptions.id + " .btn-group input:checked");
	setChecked(checked);

	for (var i=0; i<checked.length; i++) {
		setChecked($(checked[i]));
		calculateTotal($(checked[i]));
	}


	function setChecked(ct1) {
				$(ct1).prev()
				.removeClass(checkOptions.uncheckedGlyph)
				.addClass(checkOptions.checkedGlyph);
				$(ct1).parent()
				.removeClass(checkOptions.uncheckedGlyph)
				.addClass(checkOptions.checkedBtnClass);
				$(ct1).next().text(checkOptions.checkedText);			
	}
	function setUnChecked(ct1) {
				$(ct1).prev()
				.removeClass(checkOptions.checkedGlyph)
				.addClass(checkOptions.uncheckedGlyph);
				$(ct1).parent()
				.removeClass(checkOptions.checkedBtnClass)
				.addClass(checkOptions.uncheckedBtnClass);
				$(ct1).next().text(checkOptions.uncheckedText);			
	}				
})

	function calculateTotal(ct1) {
		var total = $(totalOptions.id).text();

		total = stripCurrency(total);

		var price = $(ct1).closest(totalOptions.priceContainerClass)
						  .find(totalOptions.priceClass)
						  .text();

		price = stripCurrency(price);

		if ($(ct1).prop("checked")) {
			total = parseFloat(total) + parseFloat(price);
		} else {
			total = parseFloat(total) - parseFloat(price);
		}

		$(totalOptions.id).text(formatCurrency(total));
	}
