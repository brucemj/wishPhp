$(document).ready(function(){
	$(".tab").each(function(){
		var tab = $(this),
			tabTitle = tab.children(".title-list"),
			tabCont = tab.children(".cont-list");

		tabTitle.delegate("li", "hover", function(){
			var thisTitle = tabTitle.children(".this"),
				thisCont = tabCont.children(".this"),
				hoverTitle = $(this),
				tabIndex = hoverTitle.attr("tabindex");

			thisTitle.removeClass('this');
			thisCont.removeClass('this');
			hoverTitle.addClass("this");
			tabCont.children("[tabindex='" + tabIndex + "']").addClass("this");
		});
	});
});