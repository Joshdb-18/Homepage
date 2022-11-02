document.addEventListener('DOMContentLoaded', function()
{
    document.querySelector('button').addEventListener('click', function()
    {
       let n = document.querySelector('button')
       const today = new Date();
       let day = today.getDate();
       let month = today.getMonth();
       let year = today.getFullYear();
       let monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
       n.style.backgroundColor = "green";
       n.style.border = " 1px solid green";
       alert("It's" + monthName[month] + " " + day + " " + year);
       document.querySelector('#feedback').innerHTML = `Today is ${monthName[month]} ${day}, ${year}`;
    });

});