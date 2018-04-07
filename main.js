window.onload = function(){ 


  //GRID CONTROLLER
  var one = document.getElementById('item1','itemone'); //BUTTON 
  var two = document.getElementById('item2'); 



  //PREVENT EVENT BUBBLE


  
  //BACK 
  var bck = document.getElementsByClassName('back');//RETURN NODE OBJ


  //GRID MENU
  var menu = document.getElementById('Smenu');  //SECTION


  //CONTENT 
  var modalItem1 = document.getElementById('Ccraft');
  var modalItem2 = document.getElementById('Ccshop');

  //ACTIVE CONTENT

  var activeContent;
  

  var modal = {
    itemone: modalItem1,
    item1: modalItem1,

    
    item2: modalItem2 
  };

  one.onclick = toggleContent;
  two.onclick = toggleContent;
 
 // CREATE ARRAY FROM AND ITERATE 
  Array.from(bck).forEach(function(item){
    item.onclick = closeContent
  });
  


  
///

  function toggleContent(event){
    console.log(event.target);
    menu.classList.toggle("none");
    modal[event.target.id].classList.toggle("none");

    activeContent = event.target.id;
  };


  
  function closeContent (){
    console.log(activeContent);
    menu.classList.toggle("none");
    modal[activeContent].classList.toggle("none");
    
    activeContent = "";    
  };


}





























function fadeout() {

};