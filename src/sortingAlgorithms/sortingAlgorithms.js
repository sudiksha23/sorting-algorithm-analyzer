export function getMergeSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
  }
  
  function mergeSortHelper(mainArray,startIdx,endIdx,auxiliaryArray,animations,) 
  {
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
  }
  
  function doMerge(mainArray,startIdx,middleIdx,endIdx,auxiliaryArray,animations,) 
  {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([i, j]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([i, j]);
      if (auxiliaryArray[i] <= auxiliaryArray[j]) {
        // We overwrite the value at index k in the original array with the
        // value at index i in the auxiliary array.
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
      } else {
        // We overwrite the value at index k in the original array with the
        // value at index j in the auxiliary array.
        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
      }
    }
    while (i <= middleIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([i, i]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([i, i]);
      // We overwrite the value at index k in the original array with the
      // value at index i in the auxiliary array.
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([j, j]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([j, j]);
      // We overwrite the value at index k in the original array with the
      // value at index j in the auxiliary array.
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }





  export function getQuickSortAnimations(array) {
    console.clear();
    const animations = [];
    if (array.length <= 1) return array;
    for(let i=0;i<array.length;i++) {
      console.log(array[i]);
    }
    console.log("\n");
    quickSortHelper(array, 0, array.length - 1, animations);
    console.log("\n");
    
    for(let i=0;i<array.length;i++) {
      console.log(array[i]);
    }
    
    return animations;
  }
  
  function quickSortHelper(array,low,high,animations,) {
    if(low<high)
    {
      let pi=partition(array,low,high,animations);
      quickSortHelper(array,low,pi-1,animations);
      quickSortHelper(array,pi+1,high,animations);
    }
    
    
  }
  
  function partition(array,low,high,animations,) {
    let pivot = array[high];
    let i = low;
    let j=low;
    while(j<high) 
    {  
      if(array[j]<pivot)
      {
        
        animations.push([i,j]);
        animations.push([i,j]);
        console.log(array[i],array[j]);
        animations.push([i,array[j]]);
        animations.push([j,array[i]]);
        
       [array[i],array[j]]=[array[j],array[i]];
        console.log(array[i],array[j]);
        i++;
      }
      else
      {
        animations.push([i,j]);
        animations.push([i,j]);
        animations.push([i,array[i]]);
        animations.push([j,array[j]]);
        console.log(array[i],array[j]);
      }
     
      j++;
    }
    console.log("\n");
    console.log(array[i],array[high]);
    animations.push([i,high]);
    animations.push([i,high]);
    animations.push([i,array[high]]);
    animations.push([high,array[i]]);
    [array[i],array[high]]=[array[high],array[i]];
    
    return i;
  }



  export function getHeapSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    heapSortHelper(array, array.length, animations);
    return animations;
  }
  
  function heapSortHelper(arr,n,animations,) {
    for(let i=n/2-1;i>=0;i--)
    {
      heapify(arr,n,i,animations);
    }
    for(let i=n-1;i>=0;i--)
    {
      animations.push([0,i]);
      animations.push([0,i]);
      animations.push([0,arr[i]]);
      animations.push([i,arr[0]]);
      [arr[0],arr[i]]=[arr[i],arr[0]];
      heapify(arr,i,0,animations);
    }
  }
  
  function heapify(arr,n,i,animations,) {
  let largest=i;
  let left=i*2 + 1;
  let right=i*2+2;

  if(left<n && arr[left]>arr[largest])
  largest=left;
  
  if(right<n && arr[right]>arr[largest])
  largest=right;
  
  if(largest !==i)
  {
    animations.push([i,largest]);
    animations.push([i,largest]);
    animations.push([i,arr[largest]]);
    animations.push([largest,arr[i]]);
    [arr[i],arr[largest]]=[arr[largest],arr[i]];
    heapify(arr,n,largest,animations);
  }
}






  export function getBubbleSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    bubbleSortHelper(array, animations);
    return animations;
  }
  
  function bubbleSortHelper(array, animations,) 
  {
    for(let j=0;j<array.length;j++)
    {
      let f=0;
    for(let i=0; i<array.length-1 ;i++)
    {
      animations.push([i,i+1]);
      animations.push([i,i+1]);
      if(array[i]>array[i+1])
      {
        animations.push([i,array[i+1]]);
        animations.push([i+1,array[i]]);
        [array[i],array[i+1]]=[array[i+1],array[i]];
        f=1;
      }
      else
      {
        animations.push([i,array[i]]);
        animations.push([i+1,array[i+1]]);
      }
    }
    if(f===0) break;
    }
    
  }
  