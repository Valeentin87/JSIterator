// определим список альбомов музыки
let musicAlbums = [
    {
    title: "Название альбома",
    artist: "Исполнитель",
    year: "Год выпуска"
    },
    {
    title: "Название альбома_2",
    artist: "Исполнитель_2",
    year: "Год выпуска"
    },
    {
    title: "Название альбома_3",
    artist: "Исполнитель_3",
    year: "Год выпуска"
    }
    ];
    
    
class MusicInfo {
    albums; // список альбомов
    
    constructor(albums) {
        this.albums = albums;
    };
    
    
    // метод получения музыкального произведения по id
 get(idx) {
     let info = this.albums[idx];
   return `${info.title} ${info.artist} (${info.year})`;
 }
    
    [Symbol.iterator]() {
        return new AlbumIterator(this);
    }
    
    
}

class AlbumIterator {
 _route; // доступ до итерируемого объекта
 _nextIdx; // указатель следующего значения

 constructor(route) {
  this._route = route;
  this._nextIdx = 0;
 }

 next() {
  if (this._nextIdx === this._route.albums.length) {
   return { done: true } // проверка на последний элемент
  }

  const result = {
   value: this._route.get(this._nextIdx),
   done: false
  }

  this._nextIdx++;

  return result;
 }
};

const newAlbum = new MusicInfo(musicAlbums);

for (let compos of newAlbum) {
    console.log(compos);
}

