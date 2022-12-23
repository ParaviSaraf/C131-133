st="";
img="";
obj="";
l=[];
function preload(){
    img=loadImage("dog_cat.jpg");
}
function setup(){
    a=createCanvas(600,500);
    a.center();
    od=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Detecting Object"; 
}
function draw(){
    image(img,0,0,600,500);
    if(st!=""){
        for(i=0;i<l.length;i++){
            document.getElementById("status").innerHTML="Object Detected";
            s=floor(l[i].confidence*100);
            stroke("red");
            noFill("white");
            text(l[i].label+" "+s+"%",l[i].x+8,l[i].y+15);
            rect(l[i].x,l[i].y,l[i].width,l[i].height);
            textSize(14);

            
            
        }
    }

}
function modelLoaded(){
    console.log("asdfghjknbstyjnbvcdhjbqaswedrftgyhjmjnhbgvfcdxsxcdfvbgnujyhtjhgftcriohgfewijjuytrewsxcvbnmgfdcds");
    st=true;
    od.detect(img,result);
}
function result(error,z){
    if(error){
        console.error(error);
    }

    console.log(z);
    l=z;
}
