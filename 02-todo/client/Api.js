
class Api {
  url = '';

  constructor(url) {
    /* Medlemsvariabeln url sätts till den sträng som man skickar in när man skapar en instans av klassen (det görs i script.js). Detta upplägg är för att göra denna klass generell. Tanken är att det ska gå att använda vår api-klass till olika HTTP-anrop, inte bara sådana för våran todo-applikation.   */
    this.url = url;
  }

  
  create(data) {
    const JSONData = JSON.stringify(data);
    console.log(`Sending ${JSONData} to ${this.url}`);

    const request = new Request(this.url, {
      method: 'POST',
      body: JSONData,
      headers: {
        'content-type': 'application/json'
      }
    });

    
    return (
     
      fetch(request)
        .then((result) => result.json())
        .then((data) => data)
        .catch((err) => console.log(err))
    );
  }

 
  getAll() {
    return fetch(this.url)
      .then((result) => result.json())
      .then((data) => data)
      .catch((err) => console.log(err));
  }

  
  remove(id) {
    console.log(`Removing task with id ${id}`);

   
    return fetch(`${this.url}/${id}`, {
      method: 'DELETE'
    })
      .then((result) => result)
      .catch((err) => console.log(err));
  }

  /***********************Labb 2 ***********************/
 

  /***********************Labb 2 ***********************/
  update(id, completed) {
    const JSONData = JSON.stringify(completed);
    
    
    return fetch(`${this.url}/${id}`, {
      method: "PATCH",
      body: JSONData,
      headers: {
        "content-type": "application/json",
      },
    })
    .then((result) => result)
    .catch((err) => result);
  }
}
