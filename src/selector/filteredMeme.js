import { selector } from "recoil";

const filteredMeme = selector({
    key: 'FilteredMeme',
    get: ({get}) => {
      const filter = get(todoListFilterState);
      const list = get(todoListState);
  
      switch (filter) {
        case 'Show Completed':
          return list.filter((item) => item.isComplete);
        case 'Show Uncompleted':
          return list.filter((item) => !item.isComplete);
        default:
          return list;
      }
    },
  });