$(document).ready(function(){
	$(".profileImageChange").bind("click", function(){
		$("#chooseProfilePicture").trigger("click");
	});
});


$(".chooseProfilePicture").change(function(e){
	console.log(e.target.result);
	renderImage(files[0]);
});

// рендеринг изображения
function renderImage(file) {

 // генерация нового объекта FileReader
  var reader = new FileReader();

 // подстановка изображения в атрибут src
  reader.onload = function(event) {
    var the_url = event.target.result;
    $('body').html('<img src="' + the_url + '">');
  }

 // при считке файла, вызывается метод, описанный выше
  reader.readAsDataURL(file);
}
