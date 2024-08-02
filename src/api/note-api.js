const BASE_URL = process.env.REACT_APP_BASE_URL_API || "http://localhost:3200/notes";

export class NoteAPI {
  static async create(note){
    return fetch(`${BASE_URL}`,
      {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(note)
      })
      .then(response => response.json())
      .then((data) => {
        return this.formatId(data);
      })
  }

  static async fetchAll(){
    return fetch(BASE_URL)
      .then(response => response.json())
      .then((data)  => {
        return data;
      })
  }

  static async fetchById(noteId){
    return fetch(`${BASE_URL}/${noteId}`)
      .then(response => response.json())
      .then((data)  => {
        return this.formatId(data ) ;
      })
  }

  static async deleteById(noteId){
    return fetch(`${BASE_URL}/${noteId}`,
      {
        method: "DELETE"
      })
      .then(response => response.json())
      .then((data)  => {
        return this.formatId(data) ;
      })
  }

  static async udpate(note){
    return fetch(`${BASE_URL}/${note.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(note)
      })
      .then(response => response.json())
      .then((data)  => {
        return this.formatId(data) ;
      })
  };

  static formatId(note) {
    return {
      ...note,
      id: note.id.toString()
    }
  }
}















