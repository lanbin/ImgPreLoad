ImgPreLoad
==========

This can do the pre-loading of imgs, and set the imgs on the center of container.

It's require jQuery.js (>1.7)

use it like this:
	
	<div id="imgBox">
		<img src="b.gif" origin_src="http://xxx/yyy/zzz.jpg" />
		<img src="b.gif" origin_src="http://xxx/yyy/zzz.jpg" />
		<img src="b.gif" origin_src="http://xxx/yyy/zzz.jpg" />
		<img src="b.gif" origin_src="http://xxx/yyy/zzz.jpg" />
		<img src="b.gif" origin_src="http://xxx/yyy/zzz.jpg" />
	</div>

	<script type="text/javascript" src="imgPreload.js"></script>
	<script type="text/javascript">
		$.each($("#imgBox img"), function(){
			imgPreLoad(300, $(this));

			// or

			// imgPreLoad([300, 300], $(this));

			// or

			// imgPreLoad({width:300, height:300}, $(this));
		});
	</script>


"b.gif" is a blank gif file in 1*1.

"origin_src " is a necessary attribute which hold the real img file path.

The "imgPreLoad" function has three ways to use.

