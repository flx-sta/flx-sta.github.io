function useIntersectionObserver(
  callback: (entry: IntersectionObserverEntry) => void,
) {
  const inView = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry: IntersectionObserverEntry) => {
      callback(entry);
    });
  };

  return {
    IntersectionObserver: new IntersectionObserver(inView),
  };
}

export default useIntersectionObserver;
