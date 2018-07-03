document.addEventListener('DOMContentLoaded', function(){

	const list = document.querySelector("#item-list ul");
	var tog = document.querySelectorAll("#item-list li");

	// Delete Items

	list.addEventListener('click', function(e){
		if(e.target.className === 'delete'){
			const li = e.target.parentElement;
			list.removeChild(li);
		}
	});

	// Add Items

	const addForm = document.forms['add-item'];
	addForm.addEventListener('submit', function(e){
		const value = addForm.querySelector('input[type="text"]').value;
		e.preventDefault();

		// Create Elements
		const li = document.createElement('li');
		const itemName = document.createElement('span');
		const deleteBtn = document.createElement('span');

		// Add content
		deleteBtn.textContent = 'delete';
		itemName.textContent = value;

		// Add Classses
		itemName.classList.add('name');
		deleteBtn.classList.add('delete');

		// Append to DOM
		li.appendChild(itemName);
		li.appendChild(deleteBtn);
		list.appendChild(li);
	});

	// Hide Items
	const hideBox = document.querySelector('#hide');
	hideBox.addEventListener('change', function(e){
		if(hideBox.checked){
			list.style.display = "none";
		} else {
			list.style.display = "initial";
		}
	});

	// Filter Items

	const searchBar = document.forms['search-items'].querySelector('input');
	searchBar.addEventListener('keyup', function(e){
		const term = e.target.value.toLowerCase();
		const items = list.getElementsByTagName('li');
		Array.from(items).forEach(function(item){
			const title = item.firstElementChild.textContent;
			if(title.toLowerCase().indexOf(term) != -1){
				item.style.display = 'block';
			} else {
				item.style.display = 'none';
			}
		})
	})

	//Tabbed Content

	const tabs = document.querySelector('.tabs');
	const panels = document.querySelectorAll('.panel');
	tabs.addEventListener('click', function(e){
		if(e.target.tagName == "LI"){
			const targetPanel = document.querySelector(e.target.dataset.target);
			panels.forEach(function(panel){
				if(panel == targetPanel){
					panel.classList.add('active');
				} else{
					panel.classList.remove('active');
				}
			})
		}
	})


});
