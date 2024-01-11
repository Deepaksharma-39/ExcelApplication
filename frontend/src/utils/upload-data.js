export const compareDataArrays = (originalArray, uploadArray) => {

  console.log(originalArray)
  const resultArray = [];

  const newData = uploadArray.filter(item => !originalArray.some(existingItem => String(existingItem['MOBILE NO']) === String(item['MOBILE NO'])));
  
  originalArray.forEach(existingItem => {
    const matchingUploadItem = uploadArray.find(item => String(item['MOBILE NO']) === String(existingItem['MOBILE NO']));
  
    
    if (matchingUploadItem) {
      const changedValues = getChangedValues(matchingUploadItem);
    
      if (changedValues.length > 0) {
        // Build remarks array based on changed values
        const remarks = changedValues.map(field => {
          return `${field.key}:${field.newValue}`;
        }).join(',');
    
        // Concatenate the changed remarks to the existing REMARKS field
        const updatedRemarks = existingItem.REMARKS ? `${existingItem.REMARKS},${remarks}` : remarks;
    
        // Create a copy of the existing item with updated remarks
        const updatedItem = { ...existingItem, REMARKS: updatedRemarks };
    
        // Update existing data with new data
        Object.keys(matchingUploadItem).forEach(key => {
          if (key !== 'REMARKS') {
            updatedItem[key] = matchingUploadItem[key];
          }
        });
    
        // Push the updated item to resultArray
        resultArray.push(updatedItem);
        console.log("updatedItem", updatedItem);
      }
    }else {
      // If no matching upload item, push the existing item directly to resultArray
      resultArray.push(existingItem);
    }
  });
  
  // Push new data directly to resultArray
  resultArray.push(...newData);

  
  
  console.log("newData", newData);
  console.log("resultArray", resultArray);
  
  return resultArray;
}

// Helper function to identify manipulated values and return remarks
function getChangedValues(newItem) {
  const changedValues = [];

  for (const key in newItem) {
    if (newItem.hasOwnProperty(key)) {
      changedValues.push({
        key,
        newValue: newItem[key],
      });
    }
  }

  return changedValues;
}
