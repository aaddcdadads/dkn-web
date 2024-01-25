import {Graph} from '@antv/x6';

export default (id, width, height) => {
  return new Graph( {
    container: document.getElementById(id),
    width: width,
    height: height,
    minimap: {
      enabled: true,
      container: minimapContainer
    }
  })
}
