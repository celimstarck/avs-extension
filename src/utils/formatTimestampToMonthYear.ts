function formatTimestampToMonthYear(timestamp: number): string {
  const date = new Date(timestamp * 1000); // Convert to milliseconds
  const day = String(date.getDate()).padStart(2, '0'); // Get day
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Get month (0-indexed)
  const year = date.getFullYear(); // Get year

  return `${day}/${month}/${year}`; // Format as DD/MM/YYYY
}

export default formatTimestampToMonthYear;
