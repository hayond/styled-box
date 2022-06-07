export default function prefixValue(plugins, property, value, style, metaData) {
  for (let i = 0, len = plugins.length; i < len; ++i) {
    const processedValue = plugins[i](property, value, style, metaData);

    // we can stop processing if a value is returned
    // as all plugin criteria are unique
    if (processedValue) {
      return processedValue;
    }
  }
}
