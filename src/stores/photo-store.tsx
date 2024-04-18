/* eslint-disable import/no-anonymous-default-export */
import { observable, action } from 'mobx';

class PhotoStore {
  @observable data = [];

  @action fetchData = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos');
        const jsonData = await response.json();
        this.data = jsonData;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
  };
}

const store = new PhotoStore();
export default store;
