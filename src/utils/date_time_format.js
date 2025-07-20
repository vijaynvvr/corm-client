export const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    };
    return date.toLocaleDateString('en-US', options);
}

export const formatDateTime = (dateString) => {
    const date = new Date(dateString);
    const options = { 
        hour: 'numeric', 
        minute: 'numeric',
        hour12: true,
        month: 'short', 
        day: 'numeric', 
        year: 'numeric' 
    };
    return date.toLocaleDateString('en-US', options);
}

export const timeAgo = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const seconds = Math.floor((now - date) / 1000);

    let interval = (seconds / 31536000);
    if (interval > 1) {
        return `${Math.floor(interval)} year${Math.floor(interval) === 1 ? '' : 's'} ago`;
    }
    interval = (seconds / 2592000);
    if (interval > 1) {
        return `${Math.floor(interval)} month${Math.floor(interval) === 1 ? '' : 's'} ago`;
    }
    interval = (seconds / 86400);
    if (interval > 1) {
        return `${Math.floor(interval)} day${Math.floor(interval) === 1 ? '' : 's'} ago`;
    }
    interval = (seconds / 3600);
    if (interval > 1) {
        return `${Math.floor(interval)} hour${Math.floor(interval) === 1 ? '' : 's'} ago`;
    }
    interval = (seconds / 60);
    if (interval > 1) {
        return `${Math.floor(interval)} min${Math.floor(interval) === 1 ? '' : 's'} ago`;
    }
    return `${Math.floor(seconds)} sec${Math.floor(seconds) === 1 ? '' : 's'} ago`;
}

/**
 * Converts a Date or string to ISO format (YYYY-MM-DDTHH:mm:ss.sssZ)
 */
export function toISO(date: Date | string): string {
  return new Date(date).toISOString();
}


/**
 * Gets a human-readable datetime string (e.g., "July 20, 2025, 14:35")
 */
export function formatReadable(date: Date | string): string {
  const d = new Date(date);
  return d.toLocaleString(undefined, {
    dateStyle: 'medium',
    timeStyle: 'short',
  });
}
