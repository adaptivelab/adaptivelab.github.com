(function($) {

	function toggleAccordionElementState(accordionElement) {
		accordionElement.toggleClass("Accordion__toggle--closed Accordion__toggle--open");
	}

	function showOrHideAccordionContent(accordionElement) {
		if(accordionElement.hasClass("Accordion__toggle--open")) {
			accordionElement.next().slideDown();
		}

		if(accordionElement.hasClass("Accordion__toggle--closed")) {
			accordionElement.next().slideUp();
		}
	}

	$(function() {

		$('.Accordion--top dd').hide();
		$('.Accordion--top dt').addClass("Accordion__toggle--closed");

		$('.Accordion--top dt').click(function() {
			toggleAccordionElementState($(this));
			showOrHideAccordionContent($(this));
			return false;
		});

		// If the title contains a link, and the link is clicked, treat it normally
		$('.Accordion--top dt a').click(function(e) {
			e.stopPropagation();
		});

	});

})($);