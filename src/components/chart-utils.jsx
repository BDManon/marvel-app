export function prepareData(data = {}) {
    const transformedData = [];
  
    if (data.force !== undefined) {
      transformedData.push({ name: 'Force', value: data.force });
    }
    if (data.intelligence !== undefined) {
      transformedData.push({ name: 'Intelligence', value: data.intelligence });
    }
    if (data.energy !== undefined) {
      transformedData.push({ name: 'Energy', value: data.energy });
    }
    if (data.speed !== undefined) {
      transformedData.push({ name: 'Speed', value: data.speed });
    }
    if (data.durability !== undefined) {
      transformedData.push({ name: 'Durability', value: data.durability });
    }
    if (data.fighting !== undefined) {
      transformedData.push({ name: 'Fighting', value: data.fighting });
    }
  
    return transformedData;
  }