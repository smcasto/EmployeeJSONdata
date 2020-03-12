var employeePromise = d3.json("employee.json");
    employeePromise.then (function(employee) {
            console.log("worked", employee)
            ;
        madeRows(employee)
        information()
    },
        function(err){
        console.log("failed:", err);
    })



var madeRows = function(employee)
{
    var row = 
d3.select("table")
    
.selectAll("tr")
.data(employee)
.enter()
.append("tr")
.classed("row", true)
 row.append("td")
    .text(function(employee)
         {
        return employee.firstName;
    })
    
    row.append("td")
    .text(function(employee)
         {
        return employee.lastName;
    })
    row.append("td")
    .text(function(employee)
         {
        return employee.title;
    })
    row.append("td")
    .text(function(employee)
         {
        return employee.unit;
    })
     row.append("td")
    .text(function(employee)
         {
        return employee.email;
    })
     row.append("td")
    .text(function(employee)
         {
        return employee.bio;
    })
     row.append("td")
    .text(function(employee)
         {
        return employee.phone;
    })
    row.append("td")
    .append("img")
    .attr("src", function(employee){return employee.photo})
}








