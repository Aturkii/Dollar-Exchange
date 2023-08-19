function change()
{
    //get
    var doll=document.getElementById("doll").value;
    var rate=document.getElementById("rate").value;
    //prccess
    var total=doll*rate;
   //set
    document.getElementById("txt").innerHTML=total+'  L.E';
}