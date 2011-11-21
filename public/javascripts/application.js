$(function() {
  $(".datepicker").datepicker({dateFormat: "yy/mm/dd"});
  $(".tasks").sortable({
    connectWith: ".tasks",
    update: function(event, ui){
      var category = $(this).closest("ol").attr("id");
      var order = $(this).closest(".tasks").sortable('serialize');
      $.ajax({
        type: "PUT",
        url: "/tasks/order",
        data: order + "&category=" + category
      });
      $("#" + category + "_count").html($(this).closest("ol").find("li").length);
    }
  });
  $(".tasks").disableSelection();
});
