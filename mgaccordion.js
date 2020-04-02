(function ($) {

	$.fn.mgaccordion = function (options) {

		var defaults = {
			theme: "flat",
			leaveOpen: false
		};

		var settings = $.extend({}, defaults, options);

		var openIcon, closeIcon;

		if (this.length > 1) {
			this.each(function () {
				$(this).mgaccordion(options)
			});
			return this;
		}

		this.initialize = function () {
			/**
			 * silently exit if passed element is not a list
			 */
			if (!this.is('ul') && !this.is('ol')) {
				console.log('Element is not a list');
				return;
			}
			this.addClass('mg-accordion');
			var theme = settings.theme;
			var leaveOpen = settings.leaveOpen;
			if (theme === 'tree') {
				this.addClass('mg-tree');
			} else {
				this.addClass('mg-flat');
			}
			$.each(this.find('li'), function () {
				var $this = $(this);
				if ($this.children('ul').length) {
					$this.addClass('dropdown')
						.children('a')
						.bind('click', $.proxy(function () {
							if (leaveOpen === false) {
								closeOther($(this));
							}
							$(this).siblings('ul.submenu').slideToggle(function () {
								$(this).toggleClass('closed', $(this).is(':visible'));
							});
							updateIcons($(this));
						})
						);
					$this.find('ul').addClass('submenu');
					if (theme === 'tree') {
						$this.children('a').prepend('<span class="toggler"><i class="fa fa-plus-circle"></i> </span>');
					} else {
						$this.children('a').append('<span class="toggler"> <i class="fa fa-arrow-circle-down"></i></span>');
					}
				}
			});

			return this;

		};

		var setIcons = function () {
			if (settings.theme === 'tree') {
				openIcon = '<span class="toggler"><i class="fa fa-plus-circle"></i> </span>';
				closeIcon = '<span class="toggler"><i class="fa fa-minus-circle"></i> </span>';
			} else if (settings.theme === 'flat') {
				openIcon = '<span class="toggler"><i class="fa fa-arrow-circle-down"></i> </span>';
				closeIcon = '<span class="toggler"> <i class="fa fa-arrow-circle-up"></i></span>';
			}
		}

		var closeOther = function (obj) {
			setIcons();
			var items = obj.parent().siblings().find('ul.submenu');
			if (settings.theme === 'flat') {
				items.each(function () {
					if ($(this).hasClass('closed')) {
						$(this).slideUp('slow')
							.parent()
							.find('a')
							.removeClass('openItem');
					}
				});
			} else {
				items.each(function () {
					if ($(this).hasClass('closed')) {
						$(this).slideUp('slow')
							.parent()
							.find('span.toggler')
							.replaceWith(openIcon);
					}
				});
			}
		}

		var updateIcons = function (obj) {
			if (settings.theme === 'flat') {
				if (obj.siblings('.submenu').hasClass('closed')) {
					obj.removeClass('openItem');
				} else {
					obj.addClass('openItem');
				}
			} else {
				if (obj.siblings('.submenu').hasClass('closed')) {
					obj.find('span.toggler').replaceWith(openIcon);
				} else {
					obj.find('span.toggler').replaceWith(closeIcon);
				}
			}
		}

		return this.initialize();

	};

}(jQuery));
