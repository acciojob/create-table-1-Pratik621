function insert_Row() {
    //Write your code here
	const table=document.querySelector("#sampleTable");
	const newrow=document.createElement("tr")
	const cell1=document.createElement("td")
	const cell2=document.createElement("td")

	cell1.textContent="New Cell1"
	cell2.textContent="New Cell2"

	newrow.appendChild(cell1)
	newrow.appendChild(cell2)
	table.querySelector("tbody").prepend(newrow)
  
  
}
