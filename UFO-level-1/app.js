// Variable Declaration
var tbody = d3.select("tbody");

// From data.js
var tableData = data;

// Build Table
function buildTable(data){
    // Clear Existing Data
    tbody.html("");
    // Loop Through Data
    data.forEach((dataRow) => {
        // Append Table Row to the Table Body 
        var row = tbody.append("tr");
        // Iterate Through Values
        Object.values(dataRow).forEach((val) => {
            // Append a Cell to the Row for Each Value
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


