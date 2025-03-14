export function formatDateTime(dateTime, format = 'time') {
  const date = new Date(dateTime);

  if (format === 'date') {
    const day = String(date.getUTCDate()).padStart(2, '0'); 
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const year = date.getUTCFullYear();

    return `${day}/${month}/${year}`;
  } else if (format === 'time') {
    const options = {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    };

    return date.toLocaleTimeString('en-US', options);
  }

  return date.toLocaleString();
}
