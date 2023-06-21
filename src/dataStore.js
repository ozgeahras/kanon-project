import { observable } from 'mobx'; // Importing the 'observable' function from 'mobx' module

// created a class because it serves as a centralized store for data that can be accessed and modified by different components.
class DataStore {
  data = observable([]); // Creating an observable array named 'data' using 'observable' function; components observing this data will react and re-render when the array is modified.

  //fetch the data from game-data.json using async-await
  fetchData = async () => {
    try {
      const response = await fetch('./src/game-data.json');
      const jsonData = await response.json();
      this.data.replace(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
}

const dataStore = new DataStore(); // Creating an instance of the 'DataStore' class
export default dataStore;
