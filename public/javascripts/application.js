$(function() {
  $(".datepicker").datepicker({dateFormat: "yy/mm/dd"});
  $(".tasks").sortable({
    update: function(event, ui){
      var order = ui.item.parent().sortable('serialize');
      $.ajax({
        type: "PUT",
        url: "/tasks/order",
        data: order
      });
    }
  });
});
