function nearestNeighbour(srcImageData,desImageData){
    var x_ratio=img.width/new_width;
    var y_ratio=img.height/new_height;
   
    for(var i=0;i<new_height;i++){
        for(var j=0;j<new_width;j++){
            var px=Math.floor(j*x_ratio);
            var py=Math.floor(i*y_ratio);
            var des=((i*new_width)+j)*4;
            var source=((py*img.width)+px)*4;
            desImageData.data[des]=srcImageData.data[source];
            desImageData.data[des+1]=srcImageData.data[source+1];
            desImageData.data[des+2]=srcImageData.data[source+2];
            desImageData.data[des+3]=srcImageData.data[source+3];

            }
        }
    }
var new_height,new_width;
var img=new Image();
img.src="pic.png";
var canvasElement=document.getElementById("original-image");
var canvasContext=canvasElement.getContext("2d");

var scale=2;
//zoomed canvas or scaled image
var canvasZoomed=document.getElementById("zoomed-image");
var canvasZoomedContext=canvasZoomed.getContext("2d");

img.onload=function(){

//draw image onto canvas
canvasElement.setAttribute("width",img.width);
canvasElement.setAttribute("height",img.height);
canvasElement.width=img.width;
canvasElement.height=img.height;

canvasContext.drawImage(img,0,0,img.width,img.height);
var srcImageData=canvasContext.getImageData(0,0,img.width,img.height);

new_width=img.width*scale;
new_height=img.height*scale;
canvasZoomed.setAttribute("width",new_width);
canvasZoomed.setAttribute("height",new_height);
canvasZoomed.width=new_width;
canvasZoomed.height=new_height;
var desImageData=canvasZoomedContext.createImageData(new_width,new_height);
nearestNeighbour(srcImageData,desImageData);
console.log(desImageData);
canvasZoomedContext.putImageData(desImageData,0,0);
};