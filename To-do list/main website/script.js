var input = document.getElementById("user_input"); /*listens to input from the user*/
var button = document.getElementById("enter"); /*Listens to input from the button*/
var button2 = document.getElementById("erase");/*listens to input from button*/
var ul = document.getElementById("list");



function input_length()
{
    return input.value.length;
}
function addingNewList()
{
    var li = document.createElement("li");
    var tag = document.createElement("a");
    tag.appendChild(document.createTextNode(input.value)); /*to that tag element adds a text piece*/
    

    li.appendChild(tag);
    ul.appendChild(li); /*appendsthe newly created li element to the ul*/

    li.addEventListener("click",function(event) /*li listens to the clicking*/
    {
        event.target.classList.toggle("done");
    })

    input.value = ""; /*erases the previous text from the input box after adding it to the list*/

    var button2 = document.createElement("button"); /*creates element button*/
    button2.appendChild(document.createTextNode("Remove")); /*gives it a text input of "remove"*/
    li.appendChild(button2); /*appends the button to the li element */    

    button2.onclick=removeParent; /*gives functionality to the button*/
}
function removeParent(evt) /*function to remove the li element*/
{
    evt.target.parentNode.remove(); /*removes the parent node of the evt element, which here the evt is the clicking action, target is the button2 whose parent node is the li element.*/
}



button.addEventListener("click",function() /*so that the text gets appended even on pressing the enter button*/
{
    if(input_length() >0)
    {
        addingNewList();
    }
})
input.addEventListener("keypress",function(event) /*so that the text gets appended even on pressing the enter key*/
{
    if(input_length() >0 && event.which == 13)
    {
        addingNewList();
    }
})
button2.addEventListener("click",function() /*removes the list all at once*/
{
    for(var i=ul.childElementCount;i>0;i--)
    {
        ul.removeChild(ul.childNodes[i]);
    }
})
