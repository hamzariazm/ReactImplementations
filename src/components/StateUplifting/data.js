export function filterItems(items, query) {
    query = query.toLowerCase();
    return items.filter(item =>
      item.name.split(' ').some(word =>
        word.toLowerCase().startsWith(query)
      )
    );
  }
  
export const foods = [
    {
        id: 0,
        name: 'Sushi',
    }, 
    {
        id: 1,
        name: 'Dal',
    }, 
    {
        id: 2,
        name: 'Pierogi',
    }, 
    {
        id: 3,
        name: 'Shish kebab',
    }, 
    {
        id: 4,
        name: 'Dim sum',
    }
];
  