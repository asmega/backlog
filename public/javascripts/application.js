$(function() {
  $(".datepicker").datepicker({dateFormat: "yy/mm/dd"});
  $(".tasks").sortable({
    update: function(event, ui){
      var order = ui.item.parent().sortable('serialize');
      $.ajax({
        type: "PUT",
        url: "/inventories/order",
        data: order
      });
    }
  });
});
