jQuery(function(a){var e,n,o,i,t,s;a.isFunction(a.fn.masonry)&&($blocks=a(".grid"),$blocks.imagesLoaded(function(){$blocks.masonry({itemSelector:".grid-item",columnWidth:".grid-item",transitionDuration:"1s"}),a(".grid-item").fadeIn(),$blocks.find(".grid-item").animate({opacity:1})}),a(function(){setTimeout(function(){$blocks.masonry()},2e3)}),a(window).resize(function(){$blocks.masonry()})),a(".featured-content-section .entry-container, .pricing-section .hentry-inner, .team-section .entry-container, .content-area .archive-content-wrap .hentry .entry-content, .content-area .archive-content-wrap .hentry .entry-summary").matchHeight(),a(document.body).on("post-load",function(){a(".featured-content-section .entry-container, .pricing-section .hentry-inner, .team-section .entry-container, .content-area .archive-content-wrap .hentry .entry-content, .content-area .archive-content-wrap .hentry .entry-summary").matchHeight()}),t=a(".main-navigation"),s=a("<button />",{class:"dropdown-toggle","aria-expanded":!1}).append(catchSketchScreenReaderText.icon).append(a("<span />",{class:"screen-reader-text",text:catchSketchScreenReaderText.expand})),t.find(".menu-item-has-children > a, .page_item_has_children > a").after(s),t.find(".menu-item-has-children, .page_item_has_children").attr("aria-haspopup","true"),t.find(".dropdown-toggle").click(function(e){var n=a(this),t=n.find(".screen-reader-text");e.preventDefault(),n.toggleClass("toggled-on"),n.attr("aria-expanded","false"===n.attr("aria-expanded")?"true":"false"),t.text(t.text()===catchSketchScreenReaderText.expand?catchSketchScreenReaderText.collapse:catchSketchScreenReaderText.expand)}),e=a("#masthead"),n=e.find(".menu-toggle"),e.find("#site-header-menu"),o=e.find("#site-navigation"),i=e.find("#social-navigation"),function(){a(".below-site-header").prepend('<div class="overlay">');var t=0;n.length&&(n.on("click.nusicBand",function(){a(this).add(o).attr("aria-expanded","false"===a(this).add(o).attr("aria-expanded")?"true":"false")}),n.add(o).attr("aria-expanded","false"),n.add(i).attr("aria-expanded","false"),n.on("click.nusicBand",function(){var e=a(this).parents(".menu-wrapper");a(".menu-toggle").not(this).removeClass("selected"),a(".menu-wrapper").not(e).removeClass("is-open"),a(this).toggleClass("selected"),a(e).toggleClass("is-open");var n=a(e).hasClass("is-open");n&&!jQuery("body").hasClass("menu-open")?(0===t&&(t=a("body").scrollTop()),a("body").addClass("menu-open")):n||(a("body").removeClass("menu-open"),a("body").scrollTop(t),t=0)}),a(document).on("click touchstart",function(){a("body").removeClass("menu-open"),a(".menu-toggle").removeClass("selected"),a(".menu-wrapper").removeClass("is-open")}),a(".site-header-menu,.menu-toggle, .dropdown-toggle, .search-field, #site-navigation, #social-search-wrapper, #social-navigation .search-submit").on("click touchstart",function(e){e.stopPropagation()}))}(),function(){function e(){910<=window.innerWidth?(a(document.body).on("touchstart.nusicBand",function(e){a(e.target).closest(".main-navigation li").length||a(".main-navigation li").removeClass("focus")}),o.find(".menu-item-has-children > a, .page_item_has_children > a").on("touchstart.nusicBand",function(e){var n=a(this).parent("li");n.hasClass("focus")||(e.preventDefault(),n.toggleClass("focus"),n.siblings(".focus").removeClass("focus"))})):o.find(".menu-item-has-children > a, .page_item_has_children > a").unbind("touchstart.nusicBand")}o.length&&o.children().length&&("ontouchstart"in window&&(a(window).on("resize.nusicBand",e),e()),o.find("a").on("focus.nusicBand blur.nusicBand",function(){a(this).parents(".menu-item, .page_item").toggleClass("focus")}),a(".main-navigation button.dropdown-toggle").click(function(){a(this).toggleClass("active"),a(this).parent().find(".children, .sub-menu").first().toggleClass("toggled-on")}))}(),a(document).ready(function(){a(".toggle-top").on("click",function(e){a(this).toggleClass("toggled-on")}),a("#search-toggle").on("click",function(){a("#header-menu-social, #share-toggle").removeClass("toggled-on"),a("#header-search-container").toggleClass("toggled-on")}),a("#share-toggle").on("click",function(e){e.stopPropagation(),a("#header-search-container, #search-toggle").removeClass("toggled-on"),a("#header-menu-social").toggleClass("toggled-on")})});if(a(window).on("scroll",function(){250<=a(this).scrollTop()?a("#scrollup").fadeIn(300):a("#scrollup").fadeOut(300)}),a("body").on("click",".scrollup",function(e){return e.preventDefault(),a("html, body").animate({scrollTop:0},300),!1}),a("body").hasClass("header-media-disabled")){var r=a("#masthead");mns="main-nav-scrolled",hdr=a("#masthead").offset().top,a(window).scroll(function(){a(this).scrollTop()>=hdr?r.addClass(mns):r.removeClass(mns)})}a(document).on("wp-custom-header-video-loaded",function(){a("body").addClass("has-header-video")})});