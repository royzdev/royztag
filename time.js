var timeRemain = 10000; // переменная у которой не удаётся изменить/установить значение
function getData() {
			var dataUpdate = new XMLHttpRequest();
			dataUpdate.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
					var data = JSON.parse(this.responseText);
					timeRemain = data["remain"] * 1000; // значение для переменной
				}
			};
			dataUpdate.open("GET", "data.json", true);
			dataUpdate.send();
		}

		document.addEventListener("DOMContentLoaded", function() {
			getData();
		});
		setInterval(getData, timeRemain); // время полученное из json