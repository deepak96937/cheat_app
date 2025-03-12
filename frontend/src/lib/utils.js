export function formatMessageTime(date) {
  const messageDate = new Date(date);
  const now = new Date();

  const isToday = messageDate.toDateString() === now.toDateString();

  const isYesterday =
    messageDate.toDateString() ===
    new Date(now.setDate(now.getDate() - 1)).toDateString();

  if (isToday) {
    return messageDate.toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  } else if (isYesterday) {
    return `Yesterday ${messageDate.toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    })}`;
  } else {
    return (
      messageDate.toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      }) +
      " " +
      messageDate.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      })
    );
  }
}
