$(function(){
    // to see a placeholder for the item while it is being dragged
    $("#list").sortable({
        placeholder: "ui-state-highlight",
        // to make an item not sortable
        cancel: ".notSortable"
    });
    $("#list2").sortable();
    $("#list, #list2").sortable({
        connectWith: ".connectedList"
    });
    //once you remove all of the items from the list it will disappear
    //add a minimum height to .connectedList
});
