
function changeImage1(){
    let image_number1;
    let image = document.getElementById('image1');
    let rd = (Math.floor(Math.random()* 3) + 1);
    image_number1 = rd;
    
    if (image_number1 == 2){
        image.src = "kakashi1.png";
        
    }
        
    if (image_number1 == 3){
        image.src = "jiraiya1.jpeg"
    }
    if(image_number1 == 1){
        image.src = "naruto1.png";
    }
    
    
}
function changeImage2(){
    let image = document.getElementById('image2');
    let rd = (Math.floor(Math.random()* 3) + 1);
    let image_number2 = rd;
    if (image_number2 == 2){
        image.src = "kakashi2.png";
    }
        
    if (image_number2 == 3){
        image.src = "jiraiya2.jpeg"
    }
    if(image_number2 == 1){
        image.src = "naruto2.png";
    }
    
}
function changeImage4(){
    let image = document.getElementById('image4');
    let rd = (Math.floor(Math.random()* 3) + 1);
    let image_number4 = rd;
    if (image_number4 == 2){
        image.src = "kakashi4.png";
    }
        
    if (image_number4 == 3){
        image.src = "jiraiya4.jpeg"
    }
    if(image_number4 == 1){
        image.src = "naruto4.png";
    }
    
}
function changeImage3(){
    let image = document.getElementById('image3');
    let rd = (Math.floor(Math.random()* 3) + 1);
    let image_number3 = rd;
    if (image_number3 == 2){
        image.src = "kakashi3.png";
    }
        
    if (image_number3 == 3){
        image.src = "jiraiya3.jpeg"
    }
    if(image_number3 == 1){
        image.src = "naruto3.png";
    }
    
}
 
