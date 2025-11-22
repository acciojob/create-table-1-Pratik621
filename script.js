function insert_Row() {
    //Write your code here
	const table=document.querySelector("#sampleTable");
	const newrow=document.createElement("tr")
	const cell1=document.createElement("td")
	const cell2=document.createElement("td")

	cell1.textContent="New cell1"
	cell2.textContent="New cell2"

	newrow.appendChild(cell1)
	newrow.appendChild(cell2)
	table.prepend(newrow)
  
  
}
