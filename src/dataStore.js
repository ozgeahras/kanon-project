import { observable, action } from 'mobx';

class DataStore {
  data = observable([]);

  fetchData = async () => {
    try {
      const response = await fetch('./src/game-data.json');
      const jsonData = await response.json();
      this.data.replace(jsonData);
      console.log(jsonData[0]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
}

const dataStore = new DataStore();
export default dataStore;
