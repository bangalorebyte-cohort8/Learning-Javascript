function somefunction()
{
    //1st function
    console.log("Overload function 1")
}

function somefunction(a)
{
   //2nd function
   console.log("Overload function 2")
}

function somefunction(a,b)
{
   //3rd function
   console.log("Overload function 3")
}

somefunction(); // function call goes here

somefunction("hello")

somefunction("Hello","world")