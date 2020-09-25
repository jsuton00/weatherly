export const updatedObject = (oldObjects, updatedProperties) => {
  return {
    ...oldObjects,
    ...updatedProperties,
  };
};
