$(function() {
  $(".datepicker").datepicker({dateFormat: "yy/mm/dd"});
  $(".tasks").sortable({
    connectWith: ".tasks",
    update: function(event, ui){
      var order = $(this).closest(".tasks").sortable('serialize');
      $.ajax({
        type: "PUT",
        url: "/tasks/order",
        data: order + "&category=" + $(this).closest("ol").attr("id")
      });
    }
  });
  $(".tasks").disableSelection();
});
