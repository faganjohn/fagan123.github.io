nameofstudentarray=[];

function submit()
{
    var name1=document.getElementById("1").value;
    var name2=document.getElementById("2").value;
    var name3=document.getElementById("3").value;
    var name4=document.getElementById("4").value;


    nameofstudentarray.push(name1);
    nameofstudentarray.push(name2);
    nameofstudentarray.push(name3);
    nameofstudentarray.push(name4);

    console.log(nameofstudentarray);

    document.getElementById("display_name").innerHTML=nameofstudentarray;
document.getElementById("submit").style.display="inline-block";
document.getElementById("sorting").style.display="inline-block";



}


function sorting()
{
    nameofstudentarray.sort();
    console.log(nameofstudentarray);
    document.getElementById("display_name").innerHTML=nameofstudentarray;
}
