const storage = window.localStorage;

export const getItem = (key, defaultvalue) => {
  try {
    const storedValue = storage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : defaultvalue;
  } catch (e) {
    return defaultvalue;
  }
};

export const setItem = (key, value) => {
  storage.setItem(key, JSON.stringify(value));
};
