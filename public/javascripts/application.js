$(function() {
  $(".datepicker").datepicker({dateFormat: "yy/mm/dd"});
  $(".tasks").sortable({
    connectWith: ".tasks",
    update: function(event, ui){
      var category = $(this).closest("ol").attr("id");
      var order = $(this).closest(".tasks").sortable('serialize');
      var selected = $(this);
      $.ajax({
        type: "PUT",
        url: "/tasks/order",
        data: order + "&category=" + category,
        success: function() {
          history.pushState('', '', '/tasks?t=' + new Date().getTime());
          $("#" + category + "_count").html(selected.closest("ol").find("li").length);
        }
      });
    }
  });
  $(".tasks").disableSelection();
});
