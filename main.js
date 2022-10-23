std_array=[];
function submit(){
    var n1=document.getElementById("std_1").value;

    var n2=document.getElementById("std_2").value;

    var n3=document.getElementById("std_3").value;

    var n4=document.getElementById("std_4").value;

    std_array.push(n1);

    std_array.push(n2);

    std_array.push(n3);

    std_array.push(n4);

    console.log(std_array);

    document.getElementById("display_name").innerHTML=std_array;

    document.getElementById("submit_button").style.display="none";

    document.getElementById("sort_button").style.display="inline-block";


}
function sorting(){
    std_array.sort();
    console.log(std_array);
    document.getElementById("display_name").innerHTML=std_array;
    
}