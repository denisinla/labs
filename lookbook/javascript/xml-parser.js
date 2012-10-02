$(document).ready(function(){
				$.ajax({
					type: "GET",
					url: "lookbook.xml",
					dataType: "xml",
					success: xmlParser
				});
					function xmlParser(xml){
						$('#load').fadeOut();
						$(xml).find('look').each(function(){
							var bookName = $(xml).find("book").attr("folder");
							var bookTitle = $(xml).find("book").attr("title");
							var bookThumbsURL = "pages/"+bookName+"/ipad/";
							var bookLarge = "pages/"+bookName+"/Large/";
							$(".gallery-row").append('<div class="gallery-item"><a href="'+bookLarge+''+$(this).attr("imgfile")+'"><img src="'+bookThumbsURL+''+$(this).attr("imgfile")+'" class="img" alt="'+$(this).attr("desc")+'&nbsp;&nbsp;&nbsp;Style: '+$(this).attr("style")+'&nbsp;&nbsp;&nbsp;Fabric: '+$(this).attr("fabricgroup")+'&nbsp;&nbsp;Color: '+$(this).attr("color")+'&nbsp;&nbsp;&nbsp;Sizes: '+$(this).attr("sizes")+'&nbsp;&nbsp;&nbsp;Price: '+$(this).attr("price")+'" /></a></div>');
							$(".gallery-row img:eq(0)").attr("alt",bookTitle);
							$(".gallery-item img:eq(44)").css("display","none");
						});
						$("#Gallery a").photoSwipe({captionAndToolbarOpacity: "1",allowRotationOnUserZoom: false,loop: false,captionAndToolbarAutoHideDelay: "5000" });
					}//END xmlParser
			});