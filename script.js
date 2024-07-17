fetch("db.json")
.then(response => response.json())
.then(data => {
    for (var i = 0; i<data.films.length; i++){
        let vmovieID = data.films[i].id;
        let vtitle = data.films[i].title;
        let vruntime = data.films[i].runtime;
        let vcapacity = data.films[i].capacity;
        let vshowtime = data.films[i].showtime;
        let vtickets_sold = data.films[i].ticket_sold;
        let vdescription = data.films[i].description;
        let vposter = data.films[i].poster;
            document.querySelector("#mydb").innerHTML += `
                <tr>
                    <td>${vmovieID}<td>  
                    <td>${vtitle}</td>
                    <td>${vruntime}</td>
                    <td>${vcapacity}</td>
                    <td>${vshowtime}</td>
                    <td>${vtickets_sold}</td>
                    <td>${vdescription}</td>
                    <td>${vposter}</td>
                </tr>`;
    }
})
