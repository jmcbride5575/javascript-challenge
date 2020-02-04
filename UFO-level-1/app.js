// Variable declared
var tbody = d3.select("tbody");

// From data.js
var tableData = data;

// Build table
function buildTable(data){
    // Clear data
    tbody.html("");
    // Loop through data
    data.forEach((dataRow) => {
        // Append table row to table body
        var row = tbody.append("tr");
        Object.values(dataRow).forEach((val) => {
            // Append a cell to the row for each value
            var cell = row.append("td");
            cell.text(val);
        });
    })
}
// Function when the button is clicked
function handleClick(){
    // Prevent the page from refreshing
    d3.event.preventDefault();
    // Select html input element and get the value property of the element
    var date = d3.select("#datetime").property("value");
    var filterData = tableData;

    // Filter data using date
    if(date) {
        // Apply filter to the table data
        filterData = filterData.filter((row) => row.datetime === date);
    }
    // Build table with filter data
    buildTable(filterData);
}
// on function to attach an event to the handler function
d3.selectAll("#filter-btn").on("click", handleClick);
// Build table with data.js 
buildTable(tableData);


