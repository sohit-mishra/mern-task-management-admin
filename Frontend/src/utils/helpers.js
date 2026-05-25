export const capitalize = (text = "") => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

export const truncateText = (text = "", limit = 50) => {
  if (text.length <= limit) return text;

  return `${text.slice(0, limit)}...`;
};

export const generateId = () => {
  return Math.random().toString(36).substring(2, 10);
};

export const debounce = (callback, delay = 500) => {
  let timeout;

  return (...args) => {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      callback(...args);
    }, delay);
  };
};

export const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const getInitials = (name = "") => {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();
};

export const formatCurrency = (amount = 0) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(amount);
};