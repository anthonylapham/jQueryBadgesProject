$(function() {

  $.ajax({
    url: 'https://www.codeschool.com/users/ajlapham.json,
    dataType: 'jsonp',
    success: function(response) {
      console.log(response.courses.completed);
    }
  });

});
