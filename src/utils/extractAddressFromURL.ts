function extractAddressFromURL(urlLink: string) {
  const urlObject = new URL(urlLink);
  const pathSegments = urlObject.pathname.split('/');
  const extractedValue = pathSegments[pathSegments.length - 1];
  return extractedValue;
}

export default extractAddressFromURL;
